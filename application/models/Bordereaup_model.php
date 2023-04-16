<?php
defined('BASEPATH') or exit('No direct script access allowed');

class bordereaup_model extends CI_Model
{
    protected $table = 'bordereaup';
    public function insert($date, $user_id, $on, $type, $desc, $montant, $solde)
    {
        $this->db->set('user_id', $user_id);
        $this->db->set('date', $date);
        $this->db->set('on', $on);
        $this->db->set('type', $type);
        $this->db->set('desc', $desc);
        $this->db->set('montant', $montant);
        $this->db->set('solde', $solde);
        $this->db->insert($this->table);
    }
    
    public function init($user_id)
    {
        $date = new DateTime();
        $timestamp= $date->getTimestamp();
        $date = date("d M Y", (int)($timestamp));
        $this->insert($date, $user_id, 'Caisse', 'Entree', 'Recharge de votre caisse', '0', '0');
    }
    
    public function getSolde($user_id)
    {
        $solde=0;
        $last_bord= $this->retrieve_nbre_where2(array("user_id"=>$user_id), 1);
        foreach ($last_bord as $bord) {
            $solde= $bord->solde;
        }
        return (float) $solde;
    }

    public function insertLine($type, $user_id, $elemId, $desc, $montant)
    {
        $last_amount= $this->getSolde($user_id);
        $new_amount=$last_amount+(float)$montant;
        if ($type=='Sortie') {
            $new_amount=$last_amount-(float)$montant;
        }
        
        $date = new DateTime();
        $timestamp= $date->getTimestamp();
        $date = date("d M Y", (int)($timestamp));

        $this->insert($date, $user_id, $elemId, $type, $desc, $montant, $new_amount);
    }




    /** */


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
    
    public function retrieve_nbre_where2($where=array(), $nbre)
    {
        if (!is_integer($nbre)) {
            return false;
        } else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->where($where)->limit($nbre)->get()->result();
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