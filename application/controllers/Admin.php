<?php

defined('BASEPATH') or exit('No direct script access allowed');

class admin extends CI_Controller
{
    public $error=array();

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('assets');
        $this->load->model('users_model', 'users');
        $this->load->model('principaux_model', 'princip');
        $this->load->model('categories_model', 'cat');
        $this->load->model('elements_model', 'elem');
        $this->load->model('bordereau_model', 'bord');
        $this->load->model('bordereaup_model', 'bp');
        $this->load->library('session');
        $this->is_admin();
    }

    private function getUserPP($user_id)
    {
        $principaux= $this->princip->retrieve_where(array('user_id'=>$user_id));
        $pp=array();
        foreach ($principaux as $p) {
            $pp=$p;
        }
        return $pp;
    }

    private function getUserInfo()
    {
        $user_data=($this->session->all_userdata());
        $data= $user_data;
        $data['firstname']= $user_data['firstname'];
        $data['mail']="mailto:contact@bookshots-ai.com";
        $data['user_id'] = $user_data['user_id'];

        $user_id = $data['user_id'];
        $pp=$this->getUserPP($user_id);

        $data['pp']=$pp;
        $data['catList']= $this->cat->getUserCategories($pp->epId, true);

        return $data;
    }

    private function is_admin()
    {
        $data=$this->session->all_userdata();
        //print_r($data);
        //return;
        if (isset($data['firstname'])) {
            if ($data['firstname'] == '') {
                redirect('se_connecter');
            }
        } else {
            redirect('se_connecter');
        }
    }

    public function correct()
    {
    }


    public function index()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $data['epSolde'] = $this->bord->getSoldeEpargne($pp->epId);
        $data['investSolde'] = $this->bord->getSolde($pp->investId);
        $data['depSolde'] = $this->bord->getSolde($pp->depId);
        $data['restant']= $this->bp->getSolde($data['user_id']);


        $this->load->view('admin/dashboard', $data);
    }

    public function epargnes()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $data['epSolde'] = $this->bord->getSoldeEpargne($pp->epId);
        $data['catList2']= $this->cat->getUserCategories($pp->epId, false);
        $data['col']="ep";
        $data['rest_of_perc']=100-(float)$pp->investPerc- (float)$pp->depPerc;
        $data['perc']= (float)$pp->epPerc;

        $this->load->view('admin/cat_list', $data);
    }

    public function invest()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id=$data['user_id'];
        $data['solde'] = $this->bord->getSolde($pp->investId);
        $data['nom']="Investissement";
        $data['col']="invest";
        $data['rest_of_perc']=100-(float)$pp->epPerc- (float)$pp->depPerc;
        $data['bord_parsed']=$this->getBordereauParselable($pp->investId, $user_id)['rs'];
        $data['perc']=$pp->investPerc;
        $data['id']=$pp->investId;
        $data['redir']= 'invest';
        $this->load->view('admin/invest', $data);
    }

    public function depenses_imprevues()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id=$data['user_id'];
        $data['solde'] = $this->bord->getSolde($pp->depId);
        $data['nom']="Dépenses quotidiennes";
        $data['col']="dep";
        $data['rest_of_perc']=100-(float)$pp->epPerc- (float)$pp->investPerc;
        $data['bord_parsed']=$this->getBordereauParselable($pp->depId, $user_id)['rs'];
        $data['perc']=$pp->depPerc;
        $data['id']=$pp->depId;
        $data['redir']= 'depenses_imprevues';
        $this->load->view('admin/invest', $data);
    }

    public function settings()
    {
        $data= $this->getUserInfo();

        $this->load->view('admin/settings', $data);
    }

    /***** */

    public function setting_devise()
    {
        $data= $this->getUserInfo();
        if (isset($_POST['devise'])) {
            $this->users->setDevise($_POST['devise'], $data['user_id']);
            $this->session->set_userdata('devise', $_POST['devise']);
            redirect('admin/settings');
        } else {
            show_404();
        }
    }

    public function addCategorie()
    {
        if (isset($_POST['catId'])) {
            $nom= $_POST['catName'];
            $id= $_POST['catId'];
            $catPerc= $_POST['catPerc'];
            $max= $_POST['max'];

            $entities=array();
            if ($nom!='') {
                $entities['nom']=$nom;
            }
            if ($catPerc!='') {
                $entities['catPerc']=$catPerc;
            }

            if ($max>=$catPerc) {
                $this->cat->update($entities, $id);
                redirect('admin/elements?catId='.$id);
            }
        }

        if (isset($_POST['catName'])) {
            $nom= $_POST['catName'];
            $catPerc= $_POST['catPerc'];
            $epId= $_POST['epId'];
            $max= $_POST['max'];

            if ($max>=$catPerc) {
                $this->cat->insert($epId, $nom, $catPerc);
                redirect('admin/epargnes');
            }
        } else {
            show_404();
        }
    }

    public function addElement()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        if (isset($_POST['elemId'])) {
            $elemId= $_POST['elemId'];
            $nom= $_POST['elemName'];
            $elemPerc= $_POST['elemPerc'];
            $catId= $_POST['catId'];
            $daily=$_POST['daily'];
            $description=$_POST['description'];
            $period=$_POST['period'];
            $max= $_POST['max'];

            $entities=array();
            if ($nom!='') {
                $entities['nom']=$nom;
            }
            if ($elemPerc!='') {
                $entities['elemPerc']=$elemPerc;
            }
            if ($daily!='') {
                $entities['daily']=$daily;
            }
            if ($description!='') {
                $entities['description']=$description;
            }
            if ($period!='') {
                $entities['period']=$period;
            }

            if ($max>=$elemPerc) {
                $this->elem->update($entities, $elemId);
                redirect('admin/bordereau?catId='.$catId.'&elem_id='.$elemId);
            }
        } elseif (isset($_POST['elemName'])) {
            $nom= $_POST['elemName'];
            $elemPerc= $_POST['elemPerc'];
            $catId= $_POST['catId'];
            $daily=$_POST['daily'];
            $description=$_POST['description'];
            $max= $_POST['max'];
            $period=$_POST['period'];
            if ($max>=$elemPerc) {
                $this->elem->insert($data['user_id'], $catId, $elemPerc, $nom, $daily, $description, $period);
                redirect('admin/elements?catId='.$catId);
            }
        }
    }

    public function elements()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id= $data['user_id'];

        if (isset($_GET['catId'])) {
            $catId= $_GET['catId'];
            $cat= $this->cat->retrieve_where(array('id'=>$catId, 'epId'=>$pp->epId));
            foreach ($cat as $c) {
                $data['cat']=$c;
            }

            /**Rest of percent */
            $rest_of_ep_perc=$pp->epPerc;
            $cat= $this->cat->getUserCategories($pp->epId, false);
            foreach ($cat as $c) {
                $rest_of_ep_perc-=$c->catPerc;
            }

            $data['rest_of_ep_perc']=$rest_of_ep_perc;
            $elemData=$this->getElements($catId, $user_id);
            ;
            $data['rest_of_cat_perc']= $elemData['elemsPerc'];
            $data['all_elems']= $elemData['rs'];
            $this->load->view('admin/elements_list', $data);
        } else {
            show_404();
        }
    }

    public function getElements($catId, $user_id)
    {
        $elemList=$this->elem->retrieve_where(array('user_id'=> $user_id, 'catId'=>$catId));
        $data= array();
        $rs='';
        $perc=0;
        foreach ($elemList as $key => $elem) {
            $rs .= $this->parseListElem($elem, $key+1);
            $perc+= (float)$elem->elemPerc;
        }
        $data['rs']=$rs;
        $data['elemsPerc']= $perc;
        return $data;
    }

    private function getElementData($data, $elem)
    {
        $data['elemSolde']=(float) $this->bord->getElementSolde($elem->id);

        return $data;
    }

    public function deleteElement()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id= $data['user_id'];
        $catId= $_GET['catId'];
        if (isset($_GET['elemId'])) {
            $elemId= $_GET['elemId'];
            $elemList= $this->elem->retrieve_where(array('id'=>$elemId, 'user_id'=>$user_id));
            foreach ($elemList as $elem) {
                $montant=(float)$this->bord->getSolde($elem->id);
                if ($montant!=0) {
                    $this->rechargerCaisse($user_id, $montant, 'Recharge de la caisse provenant de la suppression de '.$elem->nom, $pp);
                }
            }
            $this->elem->delete(array('id'=>$elemId, 'user_id'=>$user_id));
            redirect('admin/elements?catId='.$catId);
        } elseif (isset($_POST['elemId'])) {
            $elemId= $_POST['elemId'];
            $this->elem->delete(array('id'=>$elemId, 'user_id'=>$user_id));
            redirect('admin/elements?catId='.$catId);
        } else {
            $elemList= $this->elem->retrieve_where(array('user_id'=>$user_id));
            foreach ($elemList as $elem) {
                $montant=(float)$this->bord->getSolde($elem->id);
                if ($montant!=0) {
                    $data= $this->getUserInfo();
                    $pp= $data['pp'];
                    $this->rechargerCaisse($user_id, $montant, 'Recharge de la caisse provenant de la suppression de '.$elem->nom, $pp);
                }
                $this->elem->delete(array('id'=>$elemId, 'user_id'=>$user_id));
            }
            $this->cat->delete(array('id'=>$catId, 'epId'=>$pp->epId));
            redirect('admin/epargnes');
        }
    }

    public function bordereau()
    {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id= $data['user_id'];
        if (isset($_GET['catId']) && isset($_GET['elem_id'])) {
            $catId= $_GET['catId'];
            $elemId=$_GET['elem_id'];
            $cat= $this->cat->retrieve_where(array('id'=>$catId, 'epId'=>$pp->epId));
            foreach ($cat as $c) {
                $data['cat']=$c;
            }
            if (sizeof($cat)<=0) {
                show_404();
            }

            /**Rest of percent */
            $rest_of_ep_perc=$pp->epPerc;
            $cat= $this->cat->getUserCategories($pp->epId, false);
            foreach ($cat as $c) {
                $rest_of_ep_perc-=$c->catPerc;
            }


            $elemList=$this->elem->retrieve_where(array('id'=> $elemId, 'catId'=>$catId));
            foreach ($elemList as $elem) {
                $data=$this->getElementData($data, $elem);
                $data['elem']=$elem;
            }

            $elemData=$this->getElements($catId, $user_id);

            $data['rest_of_cat_perc']= $elemData['elemsPerc'];
            $data['rest_of_ep_perc']=$rest_of_ep_perc;
            $data['bord_parsed']=$this->getBordereauParselable($elemId, $user_id)['rs'];
            //print_r($data);
            //return;
            $this->load->view('admin/bordereau_elements', $data);
        }
    }

    private function getBordereauParselable($elemId, $user_id)
    {
        $elemList=$this->bord->retrieve_where(array('elemId'=> $elemId, 'user_id'=>$user_id));
        $data= array();
        $rs='';
        foreach ($elemList as $key => $bord) {
            $rs .= $this->parseBordElem($bord, $key+1);
        }
        $data['rs']=$rs;
        return $data;
    }

    private function getBordereauPrincipalParselable($user_id)
    {
        $elemList=$this->bp->retrieve_where(array( 'user_id'=>$user_id));
        $data= array();
        $rs='';
        foreach ($elemList as $key => $bord) {
            $rs .= $this->parseBordPrincipElem($bord, $key+1);
        }
        $data['rs']=$rs;
        return $data;
    }

    private function parseBordElem($bord, $pos)
    {
        $type='odd';
        if ((int)$pos%2==0) {
            $type='even';
        }

        $rs='';
        $rs.='<tr role="row"  class="'.$type.'">';
        //$rs.='	<td><input type="checkbox" value="'.$elem->id.'"></td>';
        $rs.='	<td>';
        $rs.='		<span class="index">'.$pos.'</span>';
        $rs.='	</td>';
        $rs.='	<td>'.$bord->type.'</td> ';
        $rs.='	<td>'.$bord->date.'</td> ';
        $rs.='	<td>'.$bord->desc.'</td> ';
        $rs.='	<td><span class="badge badge-success">'.(float)$bord->montant.' <?=$devise?> </span>.</td> ';
$rs.=' <td><span class="badge badge-primary">'.(float)$bord->solde.' <?=$devise?> </span>.</td> ';
$rs.='</tr>';

return $rs;
}

private function parseBordPrincipElem($bord, $pos)
{
$type='odd';
if ((int)$pos%2==0) {
$type='even';
}

$rs='';
$rs.='<tr role="row" class="'.$type.'">';
    //$rs.=' <td><input type="checkbox" value="'.$elem->id.'"></td>';
    $rs.=' <td>';
        $rs.=' <span class="index">'.$pos.'</span>';
        $rs.=' </td>';
    $rs.=' <td>'.$bord->type.'</td> ';
    $rs.=' <td>'.$bord->date.'</td> ';
    $rs.=' <td>'.$this->getOnForBord($bord->on).'</td> ';
    $rs.=' <td>'.$bord->desc.'</td> ';
    $rs.=' <td><span class="badge badge-success">'.(float)$bord->montant.' <?=$devise?> </span>.</td> ';
    $rs.=' <td><span class="badge badge-primary">'.(float)$bord->solde.' <?=$devise?> </span>.</td> ';
    $rs.='</tr>';

return $rs;
}

private function getOnForBord($id)
{
if ($this->startsWith($id, 'iv')) {
return 'Investissement';
} elseif ($this->startsWith($id, 'dep')) {
return 'Dépenses imprévues';
} elseif ($id=='Caisse') {
return $id;
} else {
return $this->elem->getElemName($id);
}
}

private function startsWith($haystack, $needle)
{
$length = strlen($needle);
return substr($haystack, 0, $length) === $needle;
}

public function endsWith($haystack, $needle)
{
$length = strlen($needle);
if (!$length) {
return true;
}
return substr($haystack, -$length) === $needle;
}
private function parseListElem($elem, $pos)
{
$solde=(float) $this->bord->getElementSolde($elem->id);
$daily= $elem->daily==0 ? 1 : $elem->daily;

$type='odd';
if ((int)$pos%2==0) {
$type='even';
}

$rs='';
$rs.='<tr role="row" class="'.$type.'">';
    //$rs.=' <td><input type="checkbox" value="'.$elem->id.'"></td>';
    $rs.=' <td>';
        $rs.=' <span class="index">'.$pos.'</span>';
        $rs.=' </td>';
    $rs.=' <td><a href="'.link2('admin/bordereau?catId='.$elem->catId.'&elem_id='.$elem->id).'">'.$elem->nom.'</a></td>
    ';
    $rs.=' <td>'.(float)$elem->elemPerc.'%</td> ';
    $rs.=' <td><span class="badge badge-success">'.(int)$solde.' <?=$devise?> </span>.</td> ';
    $rs.=' <td>'.(int)$elem->daily.' <?=$devise?> </td> ';
    $rs.=' <td>'.(int)($solde/$daily).' '.$elem->period.'</td> ';
    $rs.=' <td>';
        $rs.=' <button class="btn btn-danger btn-xs"';
    $rs.=' onclick="showModl('.$elem->id.');"';
    $rs.='>Retrait</button>';
        $rs.=' </td>';
    $rs.='</tr>';

return $rs;
}

public function caisse()
{
$data= $this->getUserInfo();
$pp= $data['pp'];
$user_id= $data['user_id'];

$data['bord_parsed']=$this->getBordereauPrincipalParselable($user_id)['rs'];
$this->load->view('admin/caisse', $data);
}

public function recharge()
{
$data= $this->getUserInfo();
$pp= $data['pp'];
$user_id= $data['user_id'];

if (isset($_POST['id'])) {
$elemId = $_POST['id'];
$montant= (float) $_POST['solde'];
if ($pp->caisse<$montant) { $this->rechargerCaisse(
    $user_id,
    $_POST['solde'],
    'Recharge de la caisse pour un élément',
    $pp
    );
    $data= $this->getUserInfo();
    $pp= $data['pp'];
    }
    if ($pp->caisse>=$montant) {
    $desc= $_POST['desc'];
    $elemPerc= $_POST['elemPerc'];
    $type="Entrée";
    $this->bord->insertLine($type, $user_id, $elemId, $desc, (float) $montant);

    $new_solde= ((float) ((float)$pp->caisse - $montant)).'';
    $entities['caisse']= $new_solde;
    $this->princip->update($entities, $pp->id);

    if (isset($_POST['catId'])) {
    redirect('admin/bordereau?catId='.$_POST['catId'].'&elem_id='.$elemId);
    } else {
    redirect('admin/'.$_POST['redir']);
    }
    }
    } else {
    $recharge= $_POST['solde'];
    $this->rechargerCaisse($user_id, $recharge, 'Recharge de la caisse', $pp);
    $this->session->set_flashdata('message', "VV Finance...<br><br>Votre caisse a été rechargée avec succès! ");
    redirect('admin/caisse');
    }
    }

    private function rechargerCaisse($user_id, $recharge, $desc, $pp)
    {
    $current_solde= $pp->caisse;
    $new_solde= ((float) ((int)$recharge + (float) $current_solde)).'';

    $entities= array();
    $entities['caisse']= $new_solde;
    $this->princip->update($entities, $pp->id);
    $this->bp->insertLine('Entrée', $user_id, 'Caisse', $desc, $recharge);
    }

    public function retrait()
    {
    $data= $this->getUserInfo();
    $pp= $data['pp'];
    $user_id= $data['user_id'];
    if (isset($_POST['id'])) {
    $elemId = $_POST['id'];
    $montant= (float) $_POST['solde'];
    if ($montant<=$this->bord->getSolde($elemId)) {
        $desc= $_POST['desc'];
        //$elemPerc= $_POST['elemPerc'];
        $type="Sortie";
        $this->bord->insertLine($type, $user_id, $elemId, $desc, (float) $montant);


        $this->bp->insertLine('Sortie', $user_id, $elemId, $desc, $montant);
        $this->session->set_flashdata('message', "VV Finance...<br><br>Retrait effectué avec succès!");
        if (isset($_POST['catId'])) {
        redirect('admin/bordereau?catId='.$_POST['catId'].'&elem_id='.$elemId);
        } else {
        redirect('admin/'.$_POST['redir']);
        }
        }
        }
        }

        public function repartition()
        {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id= $data['user_id'];

        if (isset($_POST['soldeRep'])) {
        $soldeRep=(float) $_POST['soldeRep'];
        $percent_invest=((float) $pp->investPerc)/100;
        $percent_dep=((float) $pp->depPerc)/100;
        $type="Entrée";
        $desc="Recharge provenant des revenus (".$soldeRep.")";

        $this->elem->setLineElement($type, $user_id, $desc, $soldeRep);

        $montantInvest= (float)($soldeRep*$percent_invest);
        $montantDep= (float)($soldeRep*$percent_dep);
        $montantCat= (float)($soldeRep*$this->elem->getPercElements($user_id)/100);

        $this->bord->insertLine($type, $user_id, $pp->investId, $desc, $montantInvest);
        $this->bord->insertLine($type, $user_id, $pp->depId, $desc, $montantDep);
        $this->bord->insertLine(
        $type,
        $user_id,
        'Rep'.$user_id,
        'Répartition de:<br>- INVESTISSEMENT
        ('.$montantInvest.')<br>- ELEMENTS D\'EPARGNES ('.$montantCat.')<br>- DEPENSES IMPREVUES ('.$montantDep.')',
        $soldeRep
        );


        $new_solde= ((float) ((float)$pp->caisse - ($montantInvest+$montantDep+$montantCat))).'';
        $entities['caisse']= $new_solde;
        $this->princip->update($entities, $pp->id);
        $this->session->set_flashdata('message', "VV Finance...<br><br>Répartition effectuée avec succès!");
        //".($montantCat)."***".$new_solde);
        redirect('admin/caisse');
        }
        }

        public function updatePercent()
        {
        $data= $this->getUserInfo();
        $pp= $data['pp'];
        $user_id= $data['user_id'];
        if (isset($_POST['perc'])) {
        $id = $_POST['id'];
        $perc= $_POST['perc'].'';
        $max = $_POST['max'];
        if ($max>=(float)$perc) {
        if ($this->startsWith($id, 'ep')) {
        $entities=array();
        if ($perc!='') {
        $entities[$_POST['col'].'Perc']=$perc;
        $this->princip->update($entities, $user_id);
        $old_perc=(float) $_POST['old'];
        $perc= (float)$perc;

        $rapport=(float) $perc/$old_perc;

        $lastAllPerc = 0;
        $catList= $this->cat->retrieve_where(array('epId'=>$id));
        foreach ($catList as $cat) {
        $lastAllPerc+=$cat->catPerc;
        }
        if ($perc < $lastAllPerc) { $elemList=$this->elem->retrieve_where(array('user_id'=>$user_id));
            foreach ($elemList as $elem) {
            $ent=array();
            $ent['elemPerc']= ($rapport*$elem->elemPerc);
            $this->elem->update($ent, $elem->id);
            }

            //$catList= $this->cat->retrieve_where(array('epId'=>$id));
            foreach ($catList as $cat) {
            $ent=array();
            $ent['catPerc']= (($rapport)*$cat->catPerc);
            $this->cat->update($ent, $cat->id);
            }
            }
            //print_r($rapport);
            //print_r('<br>');
            //print_r($catList);
            }
            $this->session->set_flashdata('message', "VV Finance...<br><br>Pourcentage modifié avec succès!");

            redirect('admin/epargnes');
            } else {
            $entities=array();
            if ($perc!='') {
            $entities[$_POST['col'].'Perc']=$perc;
            $this->princip->update($entities, $user_id);
            }
            redirect('admin');
            }
            }
            }
            }

            public function bordereau_general()
            {
            $data= $this->getUserInfo();
            $pp= $data['pp'];
            $user_id= $data['user_id'];
            $data['bord_parsed']=$this->getBordereauPrincipalParselable($user_id)['rs'];
            $this->load->view('admin/bordereau', $data);
            }









            /**************** */




            public function uploadSerieCover()
            {
            $series_id=$_POST['series_id'];
            if (isset($_POST['old_link'])) {
            $link= ($_POST['old_link']);
            $path= substr($link, strpos($link, '/media'));
            if (file_exists('.'.$path) and $path !='') {
            unlink('.'. $path);
            //$data= array();
            //$data['success']=1;
            //$data['message']= $path;
            //echo json_encode($data);
            //return;
            }
            }
            $uniq=$series_id;

            /**Upload image */
            $config['upload_path'] = './media/covers';
            $config['allowed_types'] = 'png';
            $config['max_size'] = 2000;
            $config['max_width'] = 2000;
            $config['max_height'] = 2000;
            $config['file_name'] = $series_id;

            if (!is_dir('./media/covers')) {
            mkdir('./media/covers', 0777, true);
            }

            $this->load->library('upload', $config);

            if (!$this->upload->do_upload('files')) {
            $error =$this->upload->display_errors();

            $data= array();
            $data['success']=0;
            $data['message']= $error;
            echo json_encode($data);
            } else {
            $data = $this->upload->data();
            $covers= base_url().'media/covers/'.$data['file_name'];

            $path= substr($covers, strpos($covers, '/media'));

            if (file_exists('.'.$path) and $path !='') {
            rename('.'.$path, './media/covers/'. $series_id.'.png');
            }
            //rename('./media/pages/magique-mode/magique-mode2.png', './media/pages/'.$series_id.'/'.$series_id.'.png');
            $covers= base_url().'media/covers/'. $series_id.'.png';
            $data= array();
            $data['success']=1;
            $data['message']= $covers;
            echo json_encode($data);
            }
            }

            public function uploadZip()
            {
            if (isset($_POST['chapter_id'])) {
            $number= $_POST['chapter_id']; /**Chatper id */
            $number_chap= $_POST['number']; /**Numéro chapitre */
            $volume=0;
            $series_id= $_POST['series_id'];

            $pages_info= $this->pages->retrieve_where(array('series_id'=>$series_id,'number'=>$number));
            $count_result= sizeof($pages_info)+1;
            // Set preference
            $config['upload_path'] = './media/zip/';
            $config['allowed_types'] = 'zip';
            $config['max_size'] = '200000'; // max_size in kb (100 MB)
            $config['file_name'] = $_FILES['files']['name'];

            // Load upload library
            $this->load->library('upload', $config);
            $this->load->library('session');

            //Path folder
            if (!is_dir('./media/pages/'.$series_id.'/chapitre-'.$number_chap)) {
            mkdir('./media/pages/'.$series_id.'/chapitre-'.$number_chap, 0777, true);
            }

            // File upload
            if ($this->upload->do_upload('files')) {
            // Get data about the file
            $uploadData = $this->upload->data();
            $filename = $uploadData['file_name'];

            ## Extract the zip file ---- start
            $zip = new ZipArchive();
            $res = $zip->open("media/zip/".$filename);
            if ($res === true) {
            for ($i = 0; $i < $zip->numFiles; $i++) {
                $oldfilename = $zip->getNameIndex($i);
                //$newname=$series_id.''.$number.''.$volume.''.($count_result+$i).'.png';
                //$zip->renameName($oldfilename,$newname);
                $covers= base_url().'media/pages/'.$series_id.'/chapitre-'.$number_chap.'/'. $oldfilename;
                /**Insert into database */
                $this->pages->insert($covers, $number, $volume, $series_id, $this->getFileName($oldfilename));
                }
                $zip->close();

                $zip1 = new ZipArchive();
                $res1 = $zip1->open("media/zip/".$filename);
                // Unzip path
                $extractpath = 'media/pages/'.$series_id.'/chapitre-'.$number_chap;
                // Extract file
                $zip1->extractTo($extractpath);
                $zip1->close();

                $data= $this->getPages($series_id, $number);
                $data['success']=1;
                echo json_encode($data);
                } else {
                $data['success']=0;
                $data['message']=$this->upload->display_errors();
                echo json_encode($data);
                $this->session->set_flashdata('msg', 'Failed to extract.');
                }
                } else {
                print_r($this->upload->display_errors());
                }
                } else {
                show_404();
                }
                }

                private function getFileName($oldfilename)
                {
                $newfilename=0;
                if (strrpos($oldfilename, '.')!==false) {
                $name= substr($oldfilename, 0, strpos($oldfilename, '.'));
                if (gettype($name)=='integer') {
                $newfilename= (int) $name;
                } else {
                $newfilename=(int)$name;
                if ($newfilename==0 && ($name !='0' || $name !='00' || $name !='000')) {
                $newfilename =9999;
                }
                }
                } else {
                if (gettype($oldfilename)=='integer') {
                $newfilename= (int) $oldfilename;
                } else {
                $newfilename=9999;
                }
                }
                return $newfilename;
                }
                }