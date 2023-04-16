
<?php
defined('BASEPATH') or exit('No direct script access allowed');

class elements_model extends CI_Model
{
    protected $table = 'elements';
    public function insert($user_id, $catId, $elemPerc, $nom, $daily,$description, $period)
    {
        $this->db->set('nom', $nom);
        $this->db->set('elemPerc', $elemPerc); 
        $this->db->set('catId', $catId); 
        $this->db->set('user_id', $user_id); 
        $this->db->set('daily', $daily); 
        $this->db->set('description', $description); 
        $this->db->set('period', $period); 
        $this->db->insert($this->table);
    }


    
    public function getPercElements($user_id){        
        $elemList= $this->retrieve_where(array('user_id'=>$user_id));
        $perc_elem=0.0;
        foreach ($elemList as $key => $elem) {
            $perc_elem += (float) $elem->elemPerc;
        }
        return $perc_elem;
    }

    public function getElem($elemId){
        $elemList= $this->retrieve_where(array('id'=>$elemId));
        $e=array();
        foreach($elemList as $elem){
            $e=$elem;
        }
        return $e;
    }

    public function getElemPerc($elemId){        
        $elemList= $this->retrieve_where(array('id'=>$elemId));
        $perc_elem=0.0;
        foreach ($elemList as $key => $elem) {
            $perc_elem == (float) $elem->elemPerc;
        }
        return (float)$perc_elem;
    }

    public function getElemName($elemId){        
        $elemList= $this->retrieve_where(array('id'=>$elemId));
        $name_elem='';

        foreach ($elemList as $key => $elem) {
            $name_elem =  $elem->nom;
        }

        return $name_elem;
    }

    public function setLineElement($type, $user_id,    $desc, $revenu){        
        $elemList= $this->retrieve_where(array('user_id'=>$user_id));
         
        foreach ($elemList as $key => $elem) {
            $perc_elem = ((float) $elem->elemPerc)/100;
            $montant = $revenu* $perc_elem;
            $this->bord->insertLine($type, $user_id, $elem->id,  $desc, $montant);
        }
        
    }

    

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
    
    public function delete($where = array())
    {
        return $this->db->where($where)->delete($this->table);
    }
}
