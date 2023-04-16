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
    <title> <?php echo $cat->nom; ?>
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
                <li class="breadcrumb-item active">
                    <?php echo $cat->nom; ?>
                </li>
            </ol>
            <div class="content-header">
                <div class="container-fluid">
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card card-light">
                                <div class="card-header">
                                    Modifier la catégorie
                                </div>

                                <form id="form-validation" method="POST"
                                    action="<?php echo link2('admin/addCategorie'); ?>" accept-charset="UTF-8">
                                    <input name="catId" type="hidden" value="<?php echo $cat->id; ?>">
                                    <input name="max" type="hidden"
                                        value="<?php echo($rest_of_ep_perc+ (float)($cat->catPerc)) ; ?>">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="catName">Nom de la catégorie</label>
                                            <input required="true" class="form-control" name="catName" type="text"
                                                value="<?php echo $cat->nom; ?>" id="catName">
                                        </div>
                                        <div class="form-group">
                                            <label for="number">Part de revenu</label>
                                            <input class="form-control"
                                                max="<?php echo($rest_of_ep_perc+ (float)($cat->catPerc)) ?>"
                                                placeholder="Optionnel" step=0.1 min="0" name="catPerc" type="number"
                                                value="<?php echo $cat->catPerc; ?>" id="catPerc">
                                            <small></small>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <div class="float-right">
                                            <input name="cover" id="cover" type="hidden">
                                            <input name="coverurl" id="coverurl" type="hidden">
                                            <input class="btn btn-primary btn-xs" type="submit" value="MODIFIER">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <!-- Pages Card -->
                        <div class="col-md-8">
                            <div class="card card-light">
                                <div class="card-header">
                                    <?php echo $cat->nom; ?>
                                    <div class="card-tools">
                                        <div class="dropdown d-inline">
                                            <a class="btn btn-danger btn-xs " type="button"
                                                href="<?php echo link2('admin/deleteElement?catId='.$cat->id)?>"
                                                onclick="if(!confirm('Êtes-vous sûr de vouloir supprimer lca catégorie <?php echo $cat->nom; ?> ?\n\nLa somme de ses éléments sera rajoutée à la caisse')){return false;}"
                                                aria-expanded="false">
                                                Supprimer la catégorie
                                            </a>
                                            <a class="btn btn-primary btn-xs " type="button" href="#addElement"
                                                data-toggle="modal" aria-expanded="false">
                                                Ajouter élément
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">

                                    <div class="clearfix"></div>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <?php $rest_of_percent=(float)$cat->catPerc-$rest_of_cat_perc;?>
                                            <thead>
                                                <tr>
                                                    <!-- <th><input type="checkbox" name="check-all" class="all" value="all">
                                                    </th> -->
                                                    <th>#</th>
                                                    <th>Nom </th>
                                                    <th>Part de rev.</th>
                                                    <th>Solde</th>
                                                    <th>Par jour</th>
                                                    <th>Survie</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php echo $all_elems; ?>
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

        <div class="modal fade" id="addElement" tabindex="-1" role="dialog" aria-labelledby="Droits" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Droits">Nouvel élément de
                            <?php echo $cat->nom; ?>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/addElement');?> ">
                        <input type="hidden" name="catId" value="<?php echo $cat->id ; ?>">
                        <input type="hidden" name="max" value="<?php echo $rest_of_percent ; ?>">
                        <div class="modal-body">
                            <p class="alert alert-success">Il vous reste
                                <?php echo $rest_of_percent;?> % de
                                part de
                                revenus pour cet élément
                            </p>

                            <div class="form-group">
                                <label class="form-group-label" for="elemName">
                                    Nom de l'élément
                                </label>
                                <input required="true" class="form-control" type="text" name="elemName" id="elemName"
                                    placeholder="Nom de la catégorie" checked="">
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="elemPerc">
                                    Part de revenus (%)
                                </label>
                                <input required="true" class="form-control" type="number" step="0.1" name="elemPerc"
                                    id="elemPerc" placeholder="0" value="0" max="<?php echo $rest_of_percent;?>">
                            </div>
                            <div class="form-group">
                                <label class="form-group-label" for="daily">
                                    En dépense périodique
                                </label>
                                <input required="true" class="form-control" type="number" name="daily" id="daily"
                                    placeholder="0" value="0">
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="daily">
                                    Période
                                </label>
                                <select required="true" class="form-control" name="period" id="period">
                                    <option value="jour">Par jour</option>
                                    <option value="semaine">Par semaine</option>
                                    <option value="mois">Par mois</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="description">
                                    Description
                                </label>
                                <textarea class="form-control" type="text" name="description" id="description"
                                    placeholder="Optionnelle" value=""></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs" type="submit">Ajouter</button>
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
                        <!-- <input type="hidden" name="catId" value="<?php echo $cat->id ; ?>">
                        -->
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
                                <input required="true" class="form-control" type="number" name="solde" id="solde"
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
                                onclick="if (!confirm('Voulez-vous vraiment retirer '+$('#solde').val()+' <?=$devise?> de  <?php echo $elem->nom; ?> ?')){return false;}"
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