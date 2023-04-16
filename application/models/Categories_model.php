
<?php
defined('BASEPATH') or exit('No direct script access allowed');

class categories_model extends CI_Model
{
    protected $table = 'categories';
    public function insert($epId, $nom, $catPerc)
    {
        $this->db->set('nom', $nom);
        $this->db->set('catPerc', $catPerc); 
        $this->db->set('epId', $epId); 
        $this->db->insert($this->table);
    }

    public function setDefaultCat($epId, $nom, $catPerc){
        $this->insert($epId, $nom, $catPerc);
    }

    public function getUserCategories($epId, $first){
        if($first)
            return $this->retrieve_nbre_where(array('epId'=>$epId), 3, -1);
        else 
            return $this->retrieve_where(array('epId'=>$epId));
    }

    
     

    public function delete($where = array())
    {
        return $this->db->where($where)->delete($this->table);
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
                return $this->db->select('*')->from($this->table)->order_by('id')->where($where)->limit($nbre)->get()->result();
            else
                return $this->db->select('*')->from($this->table)->order_by('id')->where($where)->limit($nbre, $debut)->get()->result();
        }
    }
    
    public function retrieve_where($where = array())
    { 
        return $this->db->select('*')->from($this->table)->order_by('id')->where($where)->get()->result();
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
