<!DOCTYPE html>
<!-- saved from url=(0039) -->
<html lang="fr" style="height: auto;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="Hk3F7s4MgDdWWVVvLmwLbYbgjR83jYCw6M2CgfWT">

    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
    <title>VV FINANCE </title>
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

    <!-- <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet'> -->
    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <style>
    body {
        font-family: 'Poppins';
    }
    </style>
</head>

<body class="sidebar-mini" style="height: auto;">
    <div class="wrapper">
        <?php include('header_side_bar.php')?>


        <!-- Page Action -->
        <div class="content-wrapper " style="min-height: 549px;">
            <!-- Current page haut -->
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo link2('admin'); ?>">Tableau
                        de bord</a></li>
            </ol>

            <div class="content-header">
                <div class="container-fluid">
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">

                    <div class="row">
                        <style>
                        .info-box:hover {
                            cursor: pointer;
                        }

                        .info-box-content>a {
                            color: black;
                        }
                        </style>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-pink elevation-1"><i
                                        class="fas fa-balance-scale"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/caisse')?>">
                                        <span class="info-box-text">Caisse</span>
                                    </a>
                                    <span class="info-box-number"><?php echo $pp->caisse ?><small>
                                            <?=$devise?></small></span>
                                    <span class="info-box-number"><?php echo $pp->caisse ?><small>
                                            <?=$devise?></small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-purple elevation-1"><i
                                        class="fas fa-chart-line"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/invest')?>">
                                        <span class="info-box-text">Investissements</span></a>
                                    <span class="info-box-number"><?php echo $pp->investPerc ?><small>
                                            % des revenus</small></span>
                                    <span class="info-box-number"><?php echo $investSolde ?><small>
                                            <?=$devise?></small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-green elevation-1"><i
                                        class="fas fa-chart-pie"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/epargnes')?>">
                                        <span class="info-box-text">Epargnes</span></a>
                                    <span class="info-box-number"><?php echo $pp->epPerc ?><small>
                                            %
                                            des revenus</small></span>
                                    <span class="info-box-number"><?php echo $epSolde ?><small>
                                            <?=$devise?></small></span>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix hidden-md-up"></div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-red elevation-1"><i
                                        class="fas fa-book"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/depenses_imprevues')?>">
                                        <span class="info-box-text">Dépenses quotidiennes</span></a>
                                    <span class="info-box-number"><?php echo $pp->depPerc ?><small>
                                            %
                                            des revenus</small></span>
                                    <span class="info-box-number"><?php echo $depSolde ?><small>
                                            <?=$devise?></small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-indigo elevation-1"><i
                                        class="fas fa-sliders-h"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/bordereau_general')?>">
                                        <span class="info-box-text">Bordereau</span></a>
                                    <span class="info-box-number"><?php echo $restant; ?><small>
                                            <?=$devise?>
                                            restant </small></span>
                                    <span class="info-box-number"><small>Vos transactions</small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-green elevation-1"><i
                                        class="fas fa-customer"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo $mail?>">
                                        <span class="info-box-text">Service client</span></a>
                                    <span class="info-box-number"><small>Disponible sur</small></span>
                                    <span class="info-box-number"><small>contact@vvfinance.com</small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3"><span class="info-box-icon bg-warning elevation-1"><i
                                        class="fas fa-help"></i></span>
                                <div class="info-box-content">
                                    <span class="info-box-text">Aide</span>
                                    <span class="info-box-number"><small>Suivre nos vidéos</small></span>
                                    <span class="info-box-number"><small>sur youtube</small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="info-box mb-3">
                                <span class="info-box-icon bg-purple elevation-1"><i class="fas fa-cog"></i></span>
                                <div class="info-box-content">
                                    <a href="<?php echo link2('admin/settings')?>">
                                        <span class="info-box-text">Paramètres</span></a>
                                    <span class="info-box-number"><small>Informations générales</small></span>
                                    <span class="info-box-number"><small>& Abonnement d'utilisation</small></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>
                <div class="row justify-container-center" style="overflow: scroll; margin:0px;">
                    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                    <div class="container card d-flex justify-content-center">
                        <div class="row justify-content-center">
                            <div class="">
                                <div id="donutchart0" style="width: 900px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <script type='text/javascript'>
                    $(document).ready(function() {

                        google.charts.load("current", {
                            packages: ["corechart"]
                        });
                        google.charts.setOnLoadCallback(drawChart);

                        function drawChart() {
                            var data = google.visualization.arrayToDataTable([
                                ['Date', 'Solde'],
                                <?php $elemList=$this->bp->retrieve_where(array( 'user_id'=>$pp->user_id));?>
                                <?php foreach ($elemList as $key=>$elem):?>
                                <?php $elem_ =  $elemList[count($elemList)-$key-1]; ?>[
                                    '<?php echo $elem_->date; ?>',
                                    <?php echo $elem_->solde; ?>,
                                ],
                                <?php endforeach; ?>
                            ]);

                            var options = {
                                title: 'Mouvement de votre caisse',
                                //curveType: 'function',
                                legend: {
                                    position: 'bottom'
                                }
                            };

                            var chart = new google.visualization.LineChart(document.getElementById(
                                'donutchart0'));
                            chart.draw(data, options);
                        }

                    });
                    </script>
                </div>

                <div class="row justify-container-center" style="overflow: scroll;  margin:0px; ">
                    <div class="container card d-flex justify-content-center">
                        <div class="row justify-content-center">
                            <div class="">
                                <div id="donutchart" style="width: 900px; height: 500px; "></div>
                            </div>
                        </div>
                    </div>
                    <script type='text/javascript'>
                    $(document).ready(function() {

                        google.charts.load("current", {
                            packages: ["corechart"]
                        });
                        google.charts.setOnLoadCallback(drawChart);

                        function drawChart() {
                            var data = google.visualization.arrayToDataTable([
                                ['Task', 'Price'],
                                ['Investissement',
                                    parseFloat(
                                        <?php echo $pp->investPerc;
        $catsPerc=0; ?>
                                    )
                                ],
                                ['Dépenses imprévus',
                                    parseFloat(<?php echo $pp->depPerc; ?>)
                                ],
                                <?php foreach ($this->cat->getUserCategories($pp->epId, false) as $cat): ?>[
                                    '<?php echo $cat->nom;
                                        $catsPerc+=(float)$cat->catPerc; ?>',
                                    parseFloat(<?php echo $cat->catPerc; ?>)
                                ],
                                <?php endforeach; ?>['Non utilisé', 100 -
                                    parseFloat(<?php echo $pp->investPerc; ?>) -
                                    parseFloat(<?php echo $pp->depPerc; ?>) -
                                    parseFloat(<?php echo $catsPerc; ?>)
                                ]
                            ]);

                            var options = {
                                title: 'Répartition de vos revenus',
                                pieHole: 0.4,
                            };

                            var chart = new google.visualization.PieChart(document.getElementById(
                                'donutchart'));
                            chart.draw(data, options);
                        }

                    });
                    </script>
                </div>
            </div>
        </div>
        <div id="sidebar-overlay"></div>
    </div>

    <?php include('footer.php')?>


</body>

</html>