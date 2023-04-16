<!DOCTYPE html>
<!-- saved from url=(0046)https://www.mangakawaii.net/admin/manga/create -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">

    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
    <title>Bordereau </title>
    <link rel="icon" type="image/png" sizes="32x32"
        href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16"
        href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/all.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/OverlayScrollbars.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/dataTables.bootstrap4.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/responsive.bootstrap4.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/notyf.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/bootstrap-select.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/selectize.default.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/adminlte.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/mdb-file-upload.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/mdb.min.css'); ?>">
    <link rel="stylesheet"
        href="<?php echo link2('assets/admin/custom-admin.css'); ?>">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <style>
        body {
            font-family: 'Poppins';
        }
    </style>
</head>

<body class="sidebar-mini" style="height: auto;">
    <div class="wrapper">
        <?php include('header_side_bar.php')?>
        <div class="content-wrapper " style="min-height: 549px;">

            <!-- Current Page -->
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a
                        href="<?php echo link2('admin') ?>">Tableau
                        de bord</a></li>
                <li class="breadcrumb-item active">Bordereau </li>
            </ol>

            <div class="content-header">
                <div class="container-fluid">
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-12">
                                <div class="card card-light">
                                    <div class="card-header">
                                        Bordereau principal</li>
                                        <!-- <div class="card-tools">
                                            <div class="dropdown d-inline">
                                                <a class="btn btn-primary btn-xs " type="button"
                                                    href="#recharger" data-toggle="modal" 
                                                    aria-expanded="false">
                                                    Recharger
                                                </a>  
                                                <a class="btn btn-danger btn-xs " type="button"
                                                    href="#retrait" data-toggle="modal" 
                                                    aria-expanded="false">
                                                    Faire un retrait
                                                </a>    
                                            </div> 
                                        </div> -->
                                    </div>

                                    <div class="card-body">

                                        <div class="clearfix"></div>
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <!-- <th><input type="checkbox" name="check-all" class="all" value="all">
                                                        </th> -->
                                                        <th>#</th>
                                                        <th>Type </th>
                                                        <th>Date </th>
                                                        <th>Compte de</th>
                                                        <th>Description</th>
                                                        <th>Montant</th>
                                                        <th>Solde</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php echo $bord_parsed; ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="sidebar-overlay"></div>
    </div>

    <?php include('footer.php')?>

</body>

</html>