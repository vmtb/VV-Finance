<!DOCTYPE html>
<!-- saved from url=(0046)https://www.mangakawaii.net/admin/manga/create -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">
    <title>Paramètres</title>

    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/all.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/OverlayScrollbars.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/dataTables.bootstrap4.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/responsive.bootstrap4.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/notyf.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/bootstrap-select.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/selectize.default.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/adminlte.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/mdb-file-upload.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/mdb.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo link2('assets/admin/custom-admin.css'); ?>">
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
                <li class="breadcrumb-item"><a href="<?php echo link2('admin') ?>">Tableau
                        de bord</a></li>
                <li class="breadcrumb-item active">Paramètres</li>
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
                                        <h1 class="card-title">Paramètres</h1>
                                        <!-- <div class="card-tools">
                                            <button type="button" data-toggle="modal" class="btn btn-danger btn-xs"
                                                href="#modPourcent">Modifier le pourcentage</button>
                                            <a href="<?php echo link2('admin'); ?>"
                                        class="btn btn-default btn-xs">Retour</a>
                                    </div> -->
                                    </div>

                                    <div class="card-body">
                                        <dl class="row mx-5">

                                            <dt class="col-lg-4">Changer ma devise</dt>
                                            <dd class="col-lg-8">
                                                <div class="form-group">

                                                    <form action="<?php echo link2('admin/setting_devise');?> "
                                                        method="post">

                                                        <div class="row">
                                                            <div class="col-8">

                                                                <select name="devise" id="" class="form-control">
                                                                    <option value="€">Euro</option>
                                                                    <option value="$">Dollar</option>
                                                                    <option value="FCFA">FCFA</option>
                                                                </select>
                                                            </div>

                                                            <button type="submit" class="btn btn-danger btn-xs"
                                                                href="#modPourcent">Changer</button>
                                                        </div>
                                                        <p>
                                                            (Devise actuelle
                                                            <?=$devise?>)
                                                        </p>
                                                    </form>
                                                </div>
                                            </dd>
                                        </dl>
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