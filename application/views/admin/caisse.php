<!DOCTYPE html>
<!-- saved from url=(0046)https://www.mangakawaii.net/admin/manga/create -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">
    <title>Ma caisse</title>

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
        <!-- NavBar  -->
        <?php include('header_side_bar.php')?>

        <div class="content-wrapper " style="min-height: 549px;">

            <!-- Current Page -->
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo link2('admin') ?>">Tableau
                        de bord</a></li>
                <li class="breadcrumb-item active">Caisse</li>
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
                                        <h1 class="card-title">MA CAISSE</h1>
                                        <div class="card-tools">

                                            <a href="#recharger" type="button" data-toggle="modal"
                                                class="btn btn-success btn-xs">Recharger</a>
                                            <a class="btn btn-primary btn-xs " type="button" href="#repartition"
                                                data-toggle="modal" aria-expanded="false">
                                                Nouvelle répartition
                                            </a>
                                        </div>
                                    </div>

                                    <style>
                                    .card-body>h1 {
                                        text-align: center;
                                        font-family: 'Jokerman';
                                        font-weight: bold;
                                        color: var(--success);
                                    }

                                    @media (min-width: 310px) {
                                        .card-body>h1 {
                                            font-size: 7rem;
                                            color: var(--black);
                                        }
                                    }

                                    @media (max-width: 310px) {
                                        .card-body>h1 {
                                            font-size: 2.5rem;
                                            color: var(--black);
                                        }
                                    }
                                    </style>
                                    <div class="card-body">
                                        <h1> <?php echo $pp->caisse;?>
                                            <?=$devise?>
                                        </h1>
                                    </div>

                                </div>
                            </div>

                            <!-- Pages Card -->
                            <div class="col-md-12">
                                <div class="card card-light">
                                    <div class="card-header">
                                        Revenu
                                        <div class="card-tools">
                                            <div class="dropdown d-inline">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-body">

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


        <div class="modal fade" id="recharger" tabindex="-1" role="dialog" aria-labelledby="Recharge de fonds"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="Recharge">Recharge de caisse
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/recharge');?> ">
                        <!-- <input type="hidden" name="id" value="<?php echo $pp->user_id ; ?>">
                        -->
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
                                    placeholder="<?=$devise?>" value="0">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs"
                                onclick="if (!confirm('Voulez-vous vraiment recharger votre caisse de '+$('#solde').val()+' <?=$devise?> ?')){return false;}"
                                type="submit">Recharger</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="modal fade" id="repartition" tabindex="-1" role="dialog" aria-labelledby="Répartition de revenus"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="repart">Répartition de revenus
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form method="POST" action="<?php echo link2('admin/repartition');?> ">
                        <!-- <input type="hidden" name="id" value="<?php echo $pp->user_id ; ?>">
                        -->
                        <div class="modal-body">
                            <p class="alert alert-success">Vous avez actuellement
                                <?php echo $pp->caisse;?>
                                <?=$devise?> dans
                                votre
                                caisse..!
                            </p>

                            <div class="form-group">
                                <label class="form-group-label" for="soldeRep">
                                    Veuillez entrer le montant de revenu à répartir:
                                </label>
                                <input required="true" class="form-control" type="number" name="soldeRep" id="soldeRep"
                                    value="0" min="1" placeholder="<?=$devise?>" max="<?php echo $pp->caisse ?>">

                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="form-group-label" for="soldeInv">
                                            Investissement :
                                            <?php echo $pp->investPerc;?>%
                                        </label>
                                        <input required="true" disabled="true" class="form-control" type="number"
                                            name="soldeInv" id="soldeInv" placeholder="<?=$devise?>" value="0">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="form-group-label" for="soldeCat">
                                            Epargnes (catégories) :
                                            <?php echo $this->elem->getPercElements($pp->user_id);?>%
                                        </label>
                                        <input required="true" disabled="true" class="form-control" type="number"
                                            name="soldeCat" id="soldeCat" placeholder="<?=$devise?>" value="0">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="form-group-label" for="soldeDep">
                                            Dépenses imprévues :
                                            <?php echo $pp->depPerc;?>%
                                        </label>
                                        <input required="true" disabled="true" class="form-control" type="number"
                                            name="soldeDep" id="soldeDep" placeholder="<?=$devise?>" value="0">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light btn-xs" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary btn-xs"
                                onclick="if (!confirm('Voulez-vous vraiment effectuer la répartition de '+$('#soldeRep').val()+' <?=$devise?>  de votre compte?')){return false;}"
                                type="submit">Répartir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <script src="<?php echo link2('assets/admin/jquery.min.js'); ?>">
    </script>
    <script src="<?php echo link2('assets/admin/bootstrap.bundle.min.js'); ?>">
    </script>

    <script>
    $(document).on('shown.bs.modal', '#repartition', function() {
        last_solde = 0;
        max = parseFloat('<?php echo $pp->caisse;?>');
        $('#soldeRep').keyup(function() {
            perc_invest = parseFloat(
                '<?php echo $pp->investPerc;?>') / 100;
            perc_all_elem = parseFloat(
                '<?php echo $this->elem->getPercElements($pp->user_id);?>'
            ) / 100;
            perc_dep = parseFloat(
                '<?php echo $pp->depPerc;?>') / 100;
            solde = parseFloat($('#soldeRep').val());
            if (solde > max) {
                $('#soldeRep').val(last_solde);
            } else {
                $('#soldeDep').val(solde * perc_dep);
                $('#soldeInv').val(solde * perc_invest);
                $('#soldeCat').val(solde * perc_all_elem);
                last_solde = solde;
            }

        });
    });
    </script>

    <?php include('footer.php')?>
</body>

</html>