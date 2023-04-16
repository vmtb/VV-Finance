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
    <title> <?php echo $elem->nom; ?>
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
                <li class="breadcrumb-item"><a href="<?php echo link2('admin/epargnes') ?>">Catégories
                        d'épargnes</a></li>
                <li class="breadcrumb-item "><a
                        href="<?php echo link2('admin/elements?catId='.$cat->id) ?>"><?php echo $cat->nom; ?></a>
                </li>
                <li class="breadcrumb-item active">
                    <?php echo $elem->nom; ?>
                </li>
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
                                        <h1 class="card-title">BORDEREAU DE
                                            <?php echo strtoupper($elem->nom); ?>
                                        </h1>
                                        <div class="card-tools">

                                            <a href="<?php echo link2('admin/epargnes?catId='.$cat->id) ?>"
                                                class="btn btn-default btn-xs">Retour</a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <dl class="row mx-5">
                                            <dt class="col-lg-4">Part de revenus:</dt>
                                            <dd class="col-lg-8">
                                                <?php echo $elem->elemPerc ; ?>
                                                %
                                            </dd>
                                            <dt class="col-lg-4">Solde actuel :</dt>
                                            <dd class="col-lg-8">
                                                <span class="badge badge-success"><?php echo $elemSolde; ?>
                                                    <?=$devise?></span>
                                            </dd>
                                            <dt class="col-lg-4">Montant périodique :</dt>
                                            <dd class="col-lg-8">
                                                <span
                                                    class="badge badge-success"><?php echo $elem->daily.'F / '.$elem->period; ?>
                                                </span>
                                            </dd>
                                            <dt class="col-lg-4">Nom de la catégorie :</dt>
                                            </dd>
                                            <dd class="col-lg-8">
                                                <?php echo $cat->nom; ?>
                                                <!-- <dt class="col-lg-4">Teams</dt>
                                            <dd class="col-lg-8">
                                                [Wishtrad]
                                            </dd> -->
                                            <dt class="col-lg-4">Description :</dt>
                                            <dd class="col-lg-8 text-justify">
                                                <?php echo $elem->description ; ?>
                                            </dd>

                                        </dl>
                                    </div>

                                </div>
                            </div>

                            <!-- Pages Card -->
                            <div class="col-md-12">
                                <div class="card card-light">
                                    <div class="card-header">
                                        <?php echo  'Compte de '. $elem->nom ?>
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
                                                <a class="btn btn-primary btn-xs " type="button" href="#addElement"
                                                    data-toggle="modal" aria-expanded="false">
                                                    Modifier
                                                </a>
                                                <a class="btn btn-danger btn-xs " type="button"
                                                    href="<?php echo link2('admin/deleteElement?catId='.$cat->id.'&elemId='.$elem->id)?>"
                                                    onclick="if(!confirm('Êtes-vous sûr de vouloir supprimer l\'élément <?php echo $elem->nom; ?> ?')){return false;}"
                                                    aria-expanded="false">
                                                    Supprimer
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-body">

                                        <div class="clearfix"></div>
                                        <div class="table-responsive">
                                            <table class="table table-stripped">
                                                <?php $rest_of_percent=(float)$cat->catPerc-$rest_of_cat_perc;?>
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

        <div class="modal fade" id="addElement" tabindex="-1" role="dialog" aria-labelledby="Droits" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Droits">Mise à jour de
                            <?php echo $elem->nom; ?>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/addElement');?> ">
                        <input type="hidden" name="elemId" value="<?php echo $elem->id ; ?>">
                        <input type="hidden" name="catId" value="<?php echo $cat->id ; ?>">
                        <input type="hidden" name="max"
                            value="<?php echo (float) $elem->elemPerc+ $rest_of_percent ; ?>">
                        <div class="modal-body">
                            <p class="alert alert-info">Il vous reste
                                <?php echo $rest_of_percent;?> % de
                                part de
                                revenus pour cet élément
                            </p>

                            <div class="form-group">
                                <label class="form-group-label" for="elemName">
                                    Nom de l'élément
                                </label>
                                <input class="form-control" required="true" type="text" name="elemName" id="elemName"
                                    placeholder="Nom de la catégorie" value="<?php echo $elem->nom ; ?>">
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="elemPerc">
                                    Part de revenus (%)
                                </label>
                                <input class="form-control" type="number" step="0.1" name="elemPerc" id="elemPerc"
                                    required="true" placeholder="0" value="<?php echo $elem->elemPerc ; ?>"
                                    max="<?php echo (float) $elem->elemPerc+ $rest_of_percent;?>">
                            </div>
                            <div class="form-group">
                                <label class="form-group-label" for="daily">
                                    En dépense périodique
                                    (<?=$devise?>)
                                </label>
                                <input required="true" class="form-control" type="number" name="daily" id="daily"
                                    placeholder="0" value="<?php echo $elem->daily ; ?>">
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="daily">
                                    Période
                                </label>
                                <select required="true" class="form-control" name="period" id="period">
                                    <?php
                                        $selected1='';
    $selected2='';
    $selected3='';
    if ($elem->period=='jour') {
        $selected1='selected="true"';
    } elseif ($elem->period=='mois') {
        $selected2='selected="true"';
    } else {
        $selected3='selected="true"';
    }
    ?>
                                    <option <?php echo $selected1; ?> value="jour">Par jour</option>
                                    <option <?php echo $selected3; ?> value="mois">Par semaine</option>
                                    <option <?php echo $selected2; ?> value="mois">Par mois</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="description">
                                    Description
                                </label>
                                <textarea class="form-control" type="text" name="description" id="description"
                                    placeholder="Optionnelle"
                                    value="<?php echo $elem->nom ; ?>"><?php echo $elem->description ; ?></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs" type="submit">Modifier</button>
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
                        <h5 class="modal-title" id="Recharge">Recharge de
                            <?php echo $elem->nom; ?>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/recharge');?> ">
                        <input type="hidden" name="id" value="<?php echo $elem->id ; ?>">
                        <input type="hidden" name="elemPerc" value="<?php echo $elem->elemPerc ; ?>">
                        <input type="hidden" name="catId" value="<?php echo $cat->id ; ?>">
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
                                    placeholder="<?=$devise?>" max="<?php //echo $pp->caisse;?>" value="">
                            </div>
                            <div class="form-group">
                                <label class="form-group-label" for="desc">
                                    Pourquoi vous rechargez directement la caisse de
                                    <?php echo $elem->nom ; ?> ?<br>
                                </label>
                                <textarea required="true" class="form-control" name="desc"
                                    id="desc">Recharge provenant de la caisse</textarea>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs"
                                onclick="if (!confirm('Voulez-vous vraiment recharger <?php echo $elem->nom; ?> de '+$('#solde').val()+' <?=$devise?> ?')){return false;}"
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
                            <?php echo $elem->nom; ?>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/retrait');?> ">
                        <input type="hidden" name="id" value="<?php echo $elem->id ;
    $soldeElem=$this->bord->getSolde($elem->id);?>">
                        <input type="hidden" name="elemPerc" value="<?php echo $elem->elemPerc ; ?>">
                        <input type="hidden" name="catId" value="<?php echo $cat->id ; ?>">
                        <div class="modal-body">
                            <p class="alert alert-danger">Vous avez actuellement
                                <?php echo $soldeElem ;?>
                                <?=$devise?> dans
                                la
                                caisse
                                de <?php echo $elem->nom; ?>..!
                            </p>

                            <div class="form-group">
                                <label class="form-group-label" for="solde">
                                    Veuillez entrer le montant à retirer:
                                </label>
                                <input required="true" class="form-control" type="number" name="solde" id="soldeR"
                                    placeholder="<?=$devise?>" max="<?php echo $soldeElem ;?>" value="">
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
                                onclick="if (!confirm('Voulez-vous vraiment retirer '+$('#soldeR').val()+' <?=$devise?> de  <?php echo $elem->nom; ?> ?')){return false;}"
                                type="submit">Retirer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <?php include('footer.php')?>
</body>

</html>