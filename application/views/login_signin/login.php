<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Gestion de finance personnelle">
    <meta name="author" content="VV-FINANCE">
    <title>Connexion | VVF</title>
    <title>VV Finance</title>
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo link2('assets/img/logo.png'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/css/bootstrap.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css" href="<?php echo link2('assets/css/bootstrap.css'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'); ?>"
        as="style" />
    <link rel="stylesheet" type="text/css"
        href="<?php echo link2('assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/vendor/animate/animate.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css" href="<?php echo link2('assets/vendor/animate/animate.css'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/vendor/css-hamburgers/hamburgers.min.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css"
        href="<?php echo link2('assets/vendor/css-hamburgers/hamburgers.min.css'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/vendor/select2/select2.min.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css" href="<?php echo link2('assets/vendor/select2/select2.min.css'); ?>">
    <!--===============================================================================================-->
    <link rel="preload" href="<?php echo link2('assets/css/util.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css" href="<?php echo link2('assets/css/util.css'); ?>">
    <link rel="preload" href="<?php echo link2('assets/css/main.css'); ?>" as="style" />
    <link rel="stylesheet" type="text/css" href="<?php echo link2('assets/css/main.css'); ?>">
    <!--===============================================================================================-->

    <link rel="preload" href="<?php echo link2('assets/vendor/jquery/jquery-3.2.1.min.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/vendor/bootstrap/js/popper.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/vendor/bootstrap/js/bootstrap.min.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/vendor/tilt/tilt.jquery.min.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/vendor/select2/select2.min.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/js/main.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/js/webpack-f013f492f282ea6bb994.js'); ?>" as="script" />
    <link rel="preload" href="<?php echo link2('assets/js/webpack-f013f492f282ea6bb994.js'); ?>" as="script" />


</head>

<body>

    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="<?php echo link2('assets/img/logo.png'); ?>" alt="IMG">
                </div>

                <form method="POST" action="<?php echo link2('se_connecter/connexion'); ?>"
                    class="login100-form validate-form">
                    <span class="login100-form-title">
                        Connexion VV-FINANCE
                    </span>
                    <?php
                        if (isset($error)) {
                            echo '<strong><p style="margin-left: 3rem;" class="hint-text text-danger">'.$error.'</p></strong>';
                        }
        ?>
                    <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="Email">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" placeholder="Mot de passe">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Se connecter
                        </button>
                    </div>
                    <!-- 
					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div> -->

                    <div class="text-center p-t-136">
                        <a class="txt2" href="<?php echo link2('sinscrire'); ?>">
                            Créer un compte
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>




    <!--===============================================================================================-->
    <script src="<?php echo link2('assets/vendor/jquery/jquery-3.2.1.min.js'); ?>">
    </script>
    <!--===============================================================================================-->
    <script src="<?php echo link2('assets/vendor/bootstrap/js/popper.js'); ?>">
    </script>
    <script src="<?php echo link2('assets/vendor/bootstrap/js/bootstrap.min.js'); ?>">
    </script>
    <!--===============================================================================================-->
    <script src="<?php echo link2('assets/vendor/select2/select2.min.js'); ?>">
    </script>
    <!--===============================================================================================-->
    <script src="<?php echo link2('assets/vendor/tilt/tilt.jquery.min.js'); ?>">
    </script>
    <script>
    $('.js-tilt').tilt({
        scale: 1.1
    })
    </script>
    <!--===============================================================================================-->
    <script src="<?php echo link2('assets/js/main.js'); ?>">
    </script>

    <script>
    </script>

</body>

</html>