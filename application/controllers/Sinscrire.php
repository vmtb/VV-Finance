<?php

defined('BASEPATH') or exit('No direct script access allowed');

class sinscrire extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('assets');
        $this->load->model('users_model', 'user');
        $this->load->model('principaux_model', 'princip');
        $this->load->model('categories_model', 'cat');
        $this->load->model('elements_model', 'elem');
        $this->load->model('bordereau_model', 'bord');
        $this->load->model('bordereaup_model', 'bp');
    }
    public function index()
    {
        $this->load->view('login_signin/signup');
    }

    public function inscription()
    {
        if (isset($_POST['first_name']) and isset($_POST['last_name']) and isset($_POST['email']) and isset($_POST['password']) and isset($_POST['confirm_password'])) {
            $fname = htmlspecialchars($_POST['first_name']);
            $lname = htmlspecialchars($_POST['last_name']);
            $email = htmlspecialchars($_POST['email']);
            $password = htmlspecialchars($_POST['password']);
            $confirm_password = htmlspecialchars($_POST['confirm_password']);
            if (isset($_POST['pol'])!='on') {
                $error['error']="Vous devez accepter les termes...";
                $this->load->view('login_signin/signup', $error);
                return;
            }

            if ($password !== $confirm_password) {
                $error['error']="Les mots de passe ne correspondent pas !";
                $this->load->view('login_signin/signup', $error);
            } else {
                $date = new DateTime();
                $timestamp= $date->getTimestamp();
                $this->user->inserer($fname, $lname, $email, md5($password), $timestamp);
                $select= $this->user ->recuperer_where(array('email'=>$email, 'password'=>md5($password)));


                foreach ($select as $sl) {
                    $this->initializePrinicip($sl->id);
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
                $this->session->set_flashdata('message', "Bienvenue sur VV Finance...<br><br>Pour démarrer, veuillez commencer par définir le pourcentage de vos revenus pour chaque sources [INVESTISSEMENT - EPARGNES - DEPENSES] et ensuite rechargez votre caisse. ");
                redirect('admin');
            }
        }
    }

    private function initializePrinicip($user_id)
    {
        $epId='ep'.$user_id;
        $epPerc='60';
        $depId='dep'.$user_id;
        $depPerc='20';
        $investId='iv'.$user_id;
        $investPerc='20';
        $caisse ='0';

        $this->princip->insert($user_id, $depId, $depPerc, $investId, $investPerc, $epId, $epPerc, $caisse);
        $this->cat->setDefaultCat($epId, 'Factures mens.', '20');
        $this->cat->setDefaultCat($epId, 'Economies*', '20');
        $this->cat->setDefaultCat($epId, 'Projets futurs*', '15');
        $this->cat->setDefaultCat($epId, 'Loisirs', '5');
        $this->bp->init($user_id);
    }
}