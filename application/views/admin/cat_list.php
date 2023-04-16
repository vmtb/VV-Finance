<!DOCTYPE html>
<!-- saved from url=(0046)https://www.mangakawaii.net/admin/manga/create -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">
    <title>Epargnes</title>

    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
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
                <li class="breadcrumb-item active">Catégories d'épargnes</li>
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
                                        <h1 class="card-title">EPARGNES</h1>
                                        <div class="card-tools">
                                            <button type="button" data-toggle="modal" class="btn btn-danger btn-xs"
                                                href="#modPourcent">Modifier le pourcentage</button>
                                            <a href="<?php echo link2('admin'); ?>"
                                                class="btn btn-default btn-xs">Retour</a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <dl class="row mx-5">

                                            <dt class="col-lg-4">Part de revenus:</dt>
                                            <dd class="col-lg-8">
                                                <?php echo $pp->epPerc ; ?>
                                                %
                                            </dd>
                                            <dt class="col-lg-4">Solde actuel :</dt>
                                            <dd class="col-lg-8">
                                                <span
                                                    class="badge badge-success"><?php echo $epSolde; ?>
                                                    <?=$devise?></span>
                                            </dd>
                                            <dt class="col-lg-4">Nombre de catégories :</dt>
                                            <dd class="col-lg-8">
                                                <?php echo sizeof($catList2); ?>
                                            </dd>
                                            <!-- <dt class="col-lg-4">Teams</dt>
                                            <dd class="col-lg-8">
                                                [Wishtrad]
                                            </dd> -->
                                            <dt class="col-lg-4">Description :</dt>
                                            <dd class="col-lg-8 text-justify">Les épargnes sont un ensemble d'éléments
                                                pour lequel vous économisez de l'argent. Chaque ensemble d'élements est
                                                regroupé dans une catégorie pour vous situer.<br>Par défaut, trois
                                                catégories vous sont attribuées:<br>- Dépenses quotidiennes<br>- Besoins
                                                famille<br>- Besoins personnels</dd>
                                        </dl>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card card-light">
                                    <div class="card-header">
                                        <h2 class="card-title">Catégories</h2>
                                        <div class="card-tools">

                                            <div class="dropdown d-inline-block">
                                                <!--<button class="btn btn-default btn-xs dropdown-toggle" type="button"
                                                    id="dropdownHide" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Cacher/Afficher
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    
                                                    <form method="POST"
                                                        action="https://www.mangakawaii.net/admin/showChapters/9267"
                                                        accept-charset="UTF-8" id="showChapters"><input name="_token"
                                                            type="hidden"
                                                            value="85dXjEQNzsIxYDDu9b05n8dKTjALKPYLw6yNH8qD">
                                                        <input type="hidden" name="chapters-ids" class="chapters-ids">
                                                        <a class="dropdown-item"
                                                            href="#"
                                                            onclick="$('#chapters-ids').val(); $('#showChapters').submit()">Afficher
                                                            chapitres</a>
                                                    </form>
                                                </div> -->
                                            </div>
                                            <a class="btn btn-primary btn-xs" type="button" data-toggle="modal"
                                                href="#addCat">Ajouter</a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th class="border-top-0">
                                                            <input type="checkbox" name="check-all" class="all"
                                                                value="all">
                                                        </th>

                                                        <th class="border-top-0">#</th>
                                                        <th class="border-top-0">Nom</th>
                                                        <th class="border-top-0">Part des revenus</th>
                                                        <th class="border-top-0">Solde actuel</th>
                                                        <th class="border-top-0">Nombre d'éléments</th>
                                                    </tr>
                                                </thead>
                                                <?php $rest_of_percent=(float)$pp->epPerc;?>
                                                <tbody>
                                                    <?php foreach ($catList2 as $key=> $cat) : ?>
                                                    <tr>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            <a
                                                                href="<?php echo link2('admin/elements?catId='.$cat->id); ?>">
                                                                <?php echo $key+1; ?></a>
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="<?php echo link2('admin/elements?catId='.$cat->id);  ?>">
                                                                <?php echo $cat->nom; ?></a>
                                                        </td>
                                                        <td>
                                                            <?php echo $cat->catPerc; ?>%
                                                        </td>

                                                        <?php
                                                            $data_cat=$this->bord->getSoldeAndPercCategories($cat->id);
                                                        echo("<td> <span class='badge badge-success'>".$data_cat['solde']." <?=$devise?><span></td>");
                                                        echo("<td>".$data_cat['elementsSize']."</td>");
                                                        $rest_of_percent-=(float)$cat->catPerc;
                                                        ?>
                                                    </tr>
                                                    <?php endforeach;?>
                                                    <?php
                                                        if (sizeof($catList)==0) {
                                                            echo "Aucun chapitre trouvé !";
                                                        }
        ?>
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

        <div class="modal fade" id="addCat" tabindex="-1" role="dialog" aria-labelledby="Droits" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Droits">Nouvelle catégorie
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST"
                        action="<?php echo link2('admin/addCategorie');?> ">
                        <input type="hidden" name="epId"
                            value="<?php echo $pp->epId ; ?>">
                        <input name="max" type="hidden"
                            value="<?php echo($rest_of_percent) ; ?>">
                        <div class="modal-body">
                            <p class="alert alert-danger">Il vous reste
                                <?php echo $rest_of_percent;?> % de
                                part de
                                revenus pour cette catégorie
                            </p>

                            <div class="form-group">
                                <label class="form-group-label" for="catName">
                                    Nom de la catégorie
                                </label>
                                <input required="true" class="form-control" type="text" name="catName" id="catName"
                                    placeholder="Nom de la catégorie" checked="">
                            </div>

                            <div class="form-group">
                                <label class="form-group-label" for="catPerc">
                                    Part de revenus (%)
                                </label>
                                <input required="true" class="form-control" type="number" step="0.1" name="catPerc"
                                    id="catPerc" placeholder="0" value="0"
                                    max="<?php echo $rest_of_percent;?>">
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

        <div class="modal fade" id="modPourcent" tabindex="-1" role="dialog" aria-labelledby="Droits"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Droits">Modification du pourcentage des épargnes
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST"
                        action="<?php echo link2('admin/updatePercent');?> ">
                        <input type="hidden" name="id"
                            value="<?php echo $pp->epId ; ?>">
                        <input type="hidden" name="col"
                            value="<?php echo $col ; ?>">
                        <input type="hidden" name="old"
                            value="<?php echo $pp->epPerc ; ?>">
                        <input type="hidden" name="max"
                            value="<?php echo (float)  $rest_of_perc  ; ?>">
                        <div class="modal-body">
                            <p class="alert alert-info">Cette opération va ajuster automatiquement le pourcentage des
                                catégories
                                et des éléments selon la nouvelle valeur <b>si le nouveau % est supérieur à la somme des
                                    %
                                    de
                                    l'ensemble des éléments.</b>

                                <br><br>Exemple: Si la nouvelle valeur du pourcentage des épargnes est divisée par 2
                                (<?php echo((float)$perc)/2 ; ?>) et
                                que
                                le pourcentage de la catégorie ''Dépenses quotidiennes'' était de 30%, elle sera aussi
                                divisée par 2 soit 15% et il en sera de même pour tous ses éléments
                            </p>

                            <p class="alert alert-danger">Valeur maximale possible:
                                <?php echo $rest_of_perc;?>%
                            </p>


                            <div class="form-group">
                                <label class="form-group-label" for="perc">
                                    Nouvelle part de revenus (%)
                                </label>
                                <input class="form-control" type="number" step="0.1" name="perc" id="perc"
                                    required="true"
                                    max="<?php echo (float)  $rest_of_perc; ?>"
                                    placeholder="0"
                                    value="<?php echo $perc ; ?>">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs"
                                onclick="if (!confirm('Êtes-vous sûr de vouloir changer le % de vos revenus accordé aux  épargnes ?')){return false;}"
                                type="submit">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div id="sidebar-overlay"></div>
    </div>

    <?php include('footer.php')?>
</body>

</html>