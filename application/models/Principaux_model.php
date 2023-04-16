<?php
defined('BASEPATH') or exit('No direct script access allowed');
//Avance de 50K à Gaspard pour le projet Warrani Food
//
class principaux_model extends CI_Model
{
    protected $table = 'principaux';
    public function insert($user_id, $depId, $depPerc, $investId, $investPerc, $epId, $epPerc, $caisse)
    {
        $this->db->set('user_id', $user_id);
        $this->db->set('depId', $depId);
        $this->db->set('depPerc', $depPerc);
        $this->db->set('investId', $investId);
        $this->db->set('epId', $epId);
        $this->db->set('epPerc', $epPerc);
        $this->db->set('caisse', $caisse);
        $this->db->set('investPerc', $investPerc);
        $this->db->insert($this->table);
    }
    public function update($entities=array(), $id)
    {
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
        if (!is_integer($nbre)) {
            return false;
        } else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->limit($nbre)->get()->result();
        }
    }

    public function retrieve2($nbre, $debut)
    {
        if (!is_integer($nbre)) {
            return false;
        } else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->limit($nbre, $debut)->get()->result();
        }
    }
    
    public function retrieve_nbre_where($where=array(), $nbre, $debut)
    {
        if (!is_integer($nbre)) {
            return false;
        } else {
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

    public function search($tag)
    {
        return $this->db->select('*')
                        ->from($this->table)
                        ->order_by('id', 'desc')
                        ->like('name', $tag)
                        ->get()
                        ->result();
    }
}