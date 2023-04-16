<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
    <title>VV-FINANCE</title>

    <meta name="description" content="Gestion de finance personnelle - VV Finance">
    <meta name="author" content="VV-FINANCE">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo link2('assets/img/logo.png'); ?>">
    <link rel="preload" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" as="style" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="preload" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" as="style" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="preload" href="https://code.jquery.com/jquery-3.5.1.min.js" as="script" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" as="script" />
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <link rel="preload" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" as="script" />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <style>
    body {
        color: #fff;

        /*background: #9053c7;*/
        background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
        background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
        background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
        background: linear-gradient(-135deg, #c850c0, #4158d0);
        font-family: 'Roboto', sans-serif;

        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }

    .form-control {
        height: 40px;
        box-shadow: none;
        color: #969fa4;
    }

    .form-control:focus {
        border-color: #5cb85c;
    }

    .form-control,
    .btn {
        border-radius: 3px;
    }

    .signup-form {
        width: 450px;
        margin: 0 auto;
        padding: 30px 0;
        font-size: 15px;
    }

    .signup-form h2 {
        color: #636363;
        margin: 0 0 15px;
        position: relative;
        text-align: center;
    }

    .signup-form h2:before,
    .signup-form h2:after {
        content: "";
        height: 2px;
        width: 30%;
        background: #d4d4d4;
        position: absolute;
        top: 50%;
        z-index: 2;
    }

    .signup-form h2:before {
        left: 0;
    }

    .signup-form h2:after {
        right: 0;
    }

    .signup-form .hint-text {
        color: #999;
        margin-bottom: 30px;
        text-align: center;
    }

    .signup-form form {
        color: #999;
        border-radius: 3px;
        margin-bottom: 15px;
        background: #f2f3f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }

    .signup-form .form-group {
        margin-bottom: 20px;
    }

    .signup-form input[type="checkbox"] {
        margin-top: 3px;
    }

    .signup-form .btn {
        font-size: 16px;
        font-weight: bold;
        min-width: 140px;
        outline: none !important;
    }

    .signup-form .row div:first-child {
        padding-right: 10px;
    }

    .signup-form .row div:last-child {
        padding-left: 10px;
    }

    .signup-form a {
        color: #fff;
        text-decoration: underline;
    }

    .signup-form a:hover {
        text-decoration: none;
    }

    .signup-form form a {
        color: #5cb85c;
        text-decoration: none;
    }

    .signup-form form a:hover {
        text-decoration: underline;
    }
    </style>
</head>

<body>
    <div class="signup-form">
        <form action="<?php echo link2('sinscrire/inscription'); ?>" method="post">
            <h2>Inscription</h2>
            <p class="hint-text">Creer un compte 2V-FINANCE</p>
            <?php
                if (isset($error)) {
                    echo '<strong><p style="margin-left: 3rem;" class="hint-text text-danger">'.$error.'</p></strong>';
                }
        ?>
            <div class="form-group">
                <div class="row">
                    <div class="col"><input type="text" class="form-control" name="first_name" placeholder="Prénom"
                            required="required"></div>
                    <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Nom"
                            required="required"></div>
                </div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Mot de passe"
                    required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Confirmer mot de passe"
                    required="required">
            </div>
            <div class="form-group">
                <label class="form-check-label"><input name="pol" type="checkbox" required="required"> J'accepte <a
                        href="#">les
                        termes et conditions générales d'utilisation </a> &amp; <a href="#">la politique de
                        confidentialité</a></label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">S'inscrire</button>
            </div>
        </form>
        <div class="text-center">Vous avez déjà un compte? <a href="<?php echo link2('se_connecter'); ?>">Se
                connecter</a></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>

</html>