<?php

defined('BASEPATH') or exit('No direct script access allowed');

class users_model extends CI_Model
{
    protected $table = 'users';

    public function inserer($firstname, $lastname, $email, $password, $timestamp)
    {
        $this->db->set('firstname', $firstname);
        $this->db->set('lastname', $lastname);
        $this->db->set('email', $email);
        $this->db->set('password', $password);
        $this->db->set('timestamp', $timestamp);
        $this->db->insert($this->table);
    }

    public function setDevise($devise, $id)
    {
        $this->db->where('id', $id);
        $this->db->set('devise', $devise);
        return $this->db->update($this->table);
    }

    public function count_all()
    {
        return (int) $this->db->count_all($this->table);
    }

    public function recuperer($nbre, $debut)
    {
        if (!is_integer($nbre) or $nbre < 0 or !is_integer($debut) or $debut < 0) {
            return false;
        } else {
            return $this->db->select('*')->from($this->table)->order_by('id')->limit($nbre, $debut)->get()->result();
        }
    }

    public function retrieve($nbre)
    {
        if (!is_integer($nbre)) {
            return false;
        } else {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->limit($nbre)->get()->result();
        }
    }

    public function recuperer_where($where = array())
    {
        {
            return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->where($where)->get()->result();
        }
    }
    public function retrieve_all()
    {
        return $this->db->select('*')->from($this->table)->order_by('id', 'desc')->get()->result();
    }

    public function delete($where = array())
    {
        return $this->db->where($where)->delete($this->table);
    }
}