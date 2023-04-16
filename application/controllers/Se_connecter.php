<?php

defined('BASEPATH') or exit('No direct script access allowed');

class se_connecter extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('assets');
        $this->load->model('users_model', 'users');
        $this->load->library('session');
    }
    public function index()
    {
        $this->load->view('login_signin/login');
    }

    public function connexion()
    {
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $email = htmlspecialchars($_POST['email']);
            $password = htmlspecialchars($_POST['password']);
            $select= $this->users->recuperer_where(array('email'=>$email, 'password'=>md5($password)));
            $count= sizeof($select);
            print_r($count);

            if ($email=='admin@admin.xyz' && $password== 'PERF_ADMIN') {
                $date = new DateTime();
                setcookie("is_admin", 'YES', ($date->getTimestamp())+5*24*3600*1000);
                setcookie("email", $email, ($date->getTimestamp())+5*24*3600*1000);
                $this->session->set_userdata(array(
                    'email'       => $email,
                    'firstname'      =>  'admin',
                    'lastname'      => '',
                    'is_admin'      => 'YES',
                    'devise' => '€',
                    'status'        => true
                ));
                redirect('admin');
            } else {
                if ($count <=0) {
                    $error['error']="Mot de passe ou email incorrect";
                    $this->load->view('login_signin/login', $error);
                } else {
                    foreach ($select as $sl) {
                        $this->session->set_userdata(array(
                            'email'       => $email,
                            'firstname'      =>  $sl->firstname,
                            'lastname'      => $sl->lastname,
                            'user_id'      => $sl->id,
                            'is_admin'      => 'NO',
                            'devise' => $sl->devise,
                            'status'        => true
                        ));
                    }
                    $this->session->set_flashdata('message', "Bienvenue sur VV Finance...<br><br>Nous sommes contents de vous revoir...");

                    redirect('admin');
                }
            }
        }
    }

    public function logout()
    {
        $this->session->set_userdata(array(
            'email'       => '',
            'firstname'      =>  '',
            'lastname'      => '',
            'user_id'      => '',
            'is_admin'      => 'NO',
            'status'        => true
        ));
        redirect('admin');
    }
}