<?php
defined('BASEPATH') or exit('No direct script access allowed');

class bordereau_model extends CI_Model
{
    protected $table = 'bordereau';
    public function insert($date, $user_id, $elemId, $type, $desc, $montant, $solde)
    {
        $this->db->set('user_id', $user_id);
        $this->db->set('date', $date);
        $this->db->set('elemId', $elemId); 
        $this->db->set('type', $type);
        $this->db->set('desc', $desc);
        $this->db->set('montant', $montant); 
        $this->db->set('solde', $solde); 
        $this->db->insert($this->table);
    }

    public function getSolde($elemId){
        $solde=0;
        $last_bord= $this->retrieve_nbre_where(array('elemId'=>$elemId), 1, -1);
        foreach($last_bord as $bord){
            $solde= $bord->solde;
        }
        return (float) $solde;
    }

    public function getSoldeEpargne($epId){
        $solde=0; 
		$this->load->model('categories_model', 'cat');        
		$this->load->model('elements_model', 'elem');        
        $catList= $this->cat->getUserCategories($epId, false);
        $user_data=($this->session->all_userdata()); 
		$user_id= $user_data['user_id']; 
        foreach ($catList as $cat) {
            /**Get Elements of categories */
            $elemList= $this->elem->retrieve_where(array('catId'=>$cat->id));
            foreach($elemList as $elem){
                /**Get last line of one element */
                $last_bord= $this->retrieve_nbre_where(array('elemId'=>$elem->id, 'user_id'=>$user_id), 1, -1);
                foreach($last_bord as $bord){
                    $solde+=$bord->solde;
                }
            }
        }
        return $solde;          
    }

    public function getSoldeAndPercCategories($catId){
        $data=array();
        $elemList= $this->elem->retrieve_where(array('catId'=>$catId));
        $solde=0;
        $data['elementsSize']= sizeof($elemList);
        $perc=0.0;
        $user_data=($this->session->all_userdata()); 
		$user_id= $user_data['user_id']; 
        foreach($elemList as $elem){
            /**Get last line of one element */
            $last_bord= $this->retrieve_nbre_where(array('elemId'=>$elem->id, 'user_id'=>$user_id), 1, -1);
            foreach($last_bord as $bord){
                $solde+=$bord->solde; 
            }
        }
        $data['solde']= $solde;
        return $data;
    }

    public function getElementSolde($elemId){
        $solde=0;
        $user_data=($this->session->all_userdata()); 
		$user_id= $user_data['user_id']; 
        
        $last_bord= $this->retrieve_nbre_where(array('elemId'=>$elemId, 'user_id'=>$user_id), 1, -1);
        foreach($last_bord as $bord){
            $solde+=$bord->solde;
        }
        return $solde;
    }
 

    public function insertLine($type, $user_id, $elemId,   $desc, $montant){
        $last_amount= $this->getSolde($elemId);
        $new_amount=$last_amount+(float)$montant;
        if($type=='Sortie')
            $new_amount=$last_amount-(float)$montant;
        
        $date = new DateTime();
		$timestamp= $date->getTimestamp();
        $date = date( "d M Y", (int)($timestamp));

        $this->insert($date, $user_id, $elemId, $type, $desc, $montant, $new_amount);
    }





















    /**SQL */

    public function update($entities=array(), $id) {
        $this->db->where('id', $id);
        $this->db->set($entities);
        return $this->db->update($this->table);
    }

    public function count_all()
    {
        return (int) $this->db->count_all($this->table);
    }

    public function retrieve($nbre)
    {
        if (!is_integer($nbre))
            return false;
        else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->limit($nbre)->get()->result();
        }
    }

    public function retrieve2($nbre, $debut)
    {
        if (!is_integer($nbre) )
            return false;
        else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->limit($nbre, $debut)->get()->result();
        }
    }
    
    public function retrieve_nbre_where($where=array(), $nbre, $debut)
    {
        if (!is_integer($nbre) )
            return false;
        else {
            if($debut<0)
                return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->where($where)->limit($nbre)->get()->result();
            else
                return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->where($where)->limit($nbre, $debut)->get()->result();
        }
    }
    
    public function retrieve_where($where = array())
    { 
        return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->where($where)->get()->result();
    }

    public function retrieve_all()
    { 
        return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->get()->result();
    }

    public function search($tag){
        return $this->db->select('*')
                        ->from($this->table)
                        ->order_by('id', 'desc')
                        ->like('name', $tag)
                        ->get()
                        ->result(); 
    }
}
