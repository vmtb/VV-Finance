<?php
defined('BASEPATH') or exit('No direct script access allowed');



if (!function_exists('creer_url')) {

    function creer_url($nom)
    {
        return base_url() . 'index.php/' . $nom;
    }

}
if (!function_exists('link2')) {

    function link2($nom) {
        return base_url() . ''.$nom;
    }

}
