<!DOCTYPE html>
<!-- saved from url=(0046)https://www.mangakawaii.net/admin/manga/create -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">
    <title><?php echo $nom; ?>
    </title>
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
                <li class="breadcrumb-item active">
                    <?php echo $nom; ?>
                </li>
                <!-- <li class="breadcrumb-item active"><?php echo $series_info->title; ?>
                </li> -->
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
                                        <h1 class="card-title">
                                            <?php echo strtoupper($nom); ?>
                                            </li>
                                        </h1>
                                        <div class="card-tools">
                                            <a href="" class="btn btn-primary btn-xs"> Part de revenus:
                                                <?php echo $perc ; ?>%
                                            </a>
                                            <button type="button" href="#modPourcent" data-toggle="modal"
                                                class="btn btn-danger btn-xs">Modifier le pourcentage</button>
                                            <a href="<?php echo link2('admin'); ?>"
                                                class="btn btn-default btn-xs">Retour</a>
                                        </div>
                                    </div>
                                    <?php
                                        $desc='Il arrive parfois qu\'on ait des dépenses qui entrent en ligne de compte de nos dépenses quotidiennes ou de nos propres besoins personnels mais qui paraissent importantes.<br>Il serait donc plus raisonnable de réserver une part de vos revenus à ces dépenses qutodiennes..<br><strong></strong> ';
    $icon= 'dep.jpg';
    $color= '--danger';
    if ($redir=='invest') {
        $desc= 'Il s\'agit de fonds que vous affectez à des ressources pour être <strong>FORCEMENT</strong> investir.<br>Ceci vous permettra de générer des dividendes et vous habituer aux investissements. <br>Petit à petit, vous allez croître et faire grandir votre patrimoine. <br><strong><i class="fas fa-lightbulb"></i> TIPS:</strong> Investissez intelligemment et dépensez intelligemment';
        $icon= 'invest.png';
        $color= '--success';
    }
    ?>
                                    <style>
                                    @media (max-width: 800px) {

                                        #desc,
                                        #log {
                                            display: none;
                                        }
                                    }
                                    </style>
                                    <div class="card-body">
                                        <dl class="row ">
                                            <div id="log" class="col-6">

                                                <img src="<?php  echo link2('assets/img/'.$icon); ?>" alt="">

                                            </div>
                                            <div id="desc" style="margin-right:0px; font-size:20px;" class="col-6">

                                                <dt class="">Description :</dt>
                                                <dd class="text-justify">
                                                    <?php echo $desc; ?>
                                                </dd>
                                            </div>
                                            <!-- <dt class="col-lg-4">Teams</dt>
                                            <dd class="col-lg-8">
                                                [Wishtrad]
                                            </dd> -->
                                        </dl>

                                        <div class="justify-content-center" style="margin-left:0px;">
                                            <style>
                                            .card-body>h1 {
                                                text-align: center;
                                                font-family: 'Jokerman';
                                                font-weight: bold;
                                            }

                                            @media (min-width: 400px) {
                                                .card-body>h1 {
                                                    font-size: 7rem;
                                                    color: var(<?php echo $color; ?>);
                                                }
                                            }

                                            @media (max-width: 800px) {
                                                .card-body>h1 {
                                                    font-size: 3rem;
                                                    color: var(<?php echo $color; ?>);
                                                }
                                            }
                                            </style>
                                            <div class="card-body">
                                                <h1> <?php echo $solde;?>
                                                    <?=$devise?>
                                                </h1>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card card-light">
                                    <div class="card-header">
                                        Bordereau:
                                        <?php echo strtolower($nom); ?>
                                        </li>
                                        <div class="card-tools">
                                            <div class="dropdown d-inline">
                                                <a class="btn btn-primary btn-xs " type="button" href="#recharger"
                                                    data-toggle="modal" aria-expanded="false">
                                                    Recharger
                                                </a>
                                                <a class="btn btn-danger btn-xs " type="button" href="#retrait"
                                                    data-toggle="modal" aria-expanded="false">
                                                    Faire un retrait
                                                </a>
                                            </div>
                                        </div>
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

    <div class="modal fade" id="modPourcent" tabindex="-1" role="dialog" aria-labelledby="Droits" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="Droits">Modification du pourcentage de
                        <?php echo $nom; ?>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form method="POST" action="<?php echo link2('admin/updatePercent');?> ">
                    <input type="hidden" name="id" value="<?php echo $id ; ?>">
                    <input type="hidden" name="col" value="<?php echo $col ; ?>">
                    <input type="hidden" name="max" value="<?php echo (float)  $rest_of_perc  ; ?>">
                    <div class="modal-body">
                        <p class="alert alert-info">Il vous reste
                            <?php echo $rest_of_perc;?> % de part de
                            revenus
                            pour cet élément
                        </p>

                        <div class="form-group">
                            <label class="form-group-label" for="perc">
                                Nouvelle part de revenus (%)
                            </label>
                            <input class="form-control" type="number" step="0.1" name="perc" id="perc" required="true"
                                max="<?php echo (float)  $rest_of_perc; ?>" placeholder="0"
                                value="<?php echo $perc ; ?>">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                        <button class="btn btn-primary btn-xs"
                            onclick="if (!confirm('Êtes-vous sûr de vouloir changer le % de vos revenus accordé aux  <?php echo $nom; ?> ?')){return false;}"
                            type="submit">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="recharger" tabindex="-1" role="dialog" aria-labelledby="Recharge de fonds"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="Recharge">Recharge de la caisse:
                        <?php echo $nom; ?>
                        </li>;
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form method="POST" action="<?php echo link2('admin/recharge');?> ">
                    <input type="hidden" name="id" value="<?php echo $id ; ?>">
                    <input type="hidden" name="redir" value="<?php echo $redir;?>">
                    <div class="modal-body">
                        <p class="alert alert-success">Vous avez actuellement
                            <?php echo $pp->caisse;?>
                            <?=$devise?> dans
                            votre
                            caisse..!
                        </p>

                        <div class="form-group">
                            <label class="form-group-label" for="solde">
                                Veuillez entrer le montant à ajouter:
                            </label>
                            <input required="true" class="form-control" type="number" name="solde" id="solde"
                                placeholder="<?=$devise?>" max="<?php echo $pp->caisse; ?>" value="">
                        </div>
                        <div class="form-group">
                            <label class="form-group-label" for="desc">
                                Pourquoi vous rechargez directement la caisse de
                                <?php echo $nom ; ?> ?<br>
                            </label>
                            <textarea required="true" class="form-control" name="desc"
                                id="desc">Pour ordre: ancien bénéfice d'un service</textarea>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                        <button class="btn btn-primary btn-xs"
                            onclick="if (!confirm('Voulez-vous vraiment recharger \'\'<?php echo $nom; ?>\'\' de '+$('#solde').val()+' <?=$devise?> ?')){return false;}"
                            type="submit">Recharger</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="retrait" tabindex="-1" role="dialog" aria-labelledby="Recharge de fonds"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="Recharge">Retrait de
                        <?php echo $nom; ?>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form method="POST" action="<?php echo link2('admin/retrait');?> ">
                    <input type="hidden" name="id" value="<?php echo $id ;
    $soldeElem=$this->bord->getSolde($id);?>">
                    <input type="hidden" name="redir" value="<?php echo $redir;?>">
                    <div class="modal-body">
                        <p class="alert alert-danger">Vous avez actuellement
                            <?php echo $soldeElem ;?>
                            <?=$devise?> dans
                            la
                            caisse
                            de
                            <?php echo $nom; ?>..!
                        </p>

                        <div class="form-group">
                            <label class="form-group-label" for="solde">
                                Veuillez entrer le montant à retirer:
                            </label>
                            <input required="true" class="form-control" type="number" name="solde" id="soldeR"
                                placeholder="<?=$devise?>" max="<?php echo $soldeElem ;?>" value="0">
                        </div>
                        <div class="form-group">
                            <label class="form-group-label" for="desc">
                                Motif du retrait: <br>
                            </label>
                            <textarea required="true" class="form-control" name="desc" id="desc"></textarea>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                        <button class="btn btn-danger btn-xs"
                            onclick="if (!confirm('Voulez-vous vraiment retirer '+$('#soldeR').val()+' <?=$devise?> de  <?php echo $nom; ?> ?')){return false;}"
                            type="submit">Retirer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>




    <?php include('footer.php')?>
</body>

</html>