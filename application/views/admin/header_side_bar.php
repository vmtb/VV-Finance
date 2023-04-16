   <!-- NavBar  -->
   <nav class="main-header navbar navbar-expand navbar-white navbar-light">
       <!-- Drawer gauche -->
       <ul class="navbar-nav">
           <li class="nav-item">
               <a class="nav-link" data-widget="pushmenu" href="#">
                   <i class="fas fa-bars"></i>
                   <span class="sr-only">Basculer la navigation</span>
               </a>
           </li>
       </ul>

       <!-- L'admin and home -->
       <ul class="navbar-nav ml-auto">
           <!-- Home -->
           <li class="nav-item">
               <a class="nav-link " href="<?php echo link2(''); ?>">
                   <i class="fas fa-home "></i>
               </a>
           </li>
           <li class="nav-item dropdown user-menu">
               <a href="<?php echo link2('#'); ?>" class="nav-link dropdown-toggle" data-toggle="dropdown">
                   <img src="<?php echo link2('assets/admin/placeholder.webp'); ?>"
                       class="user-image img-circle elevation-2" alt="invité">
                   <span class="d-none d-md-inline">
                       <?php echo $firstname; ?>
                   </span>
               </a>

               <!-- Actions on clicking Invité icon -->
               <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                   <li class="user-header bg-secondary">
                       <img src="<?php echo link2('assets/admin/placeholder.webp'); ?>" class="img-circle elevation-2"
                           alt="invité">
                       <p class="">
                           <?php echo $firstname; ?>
                       </p>
                   </li>

                   <li class="user-footer text-align-center">
                       <!-- <a href="" class="btn btn-default btn-flat">
                                <i class="fa fa-fw fa-user"></i>
                                Profile
                            </a> -->
                       <a class="btn btn-danger btn-flat text-align-center " href="#"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                           <i class="fa fa-fw fa-power-off"></i>
                           Déconnexion
                       </a>
                       <form id="logout-form" action="<?php echo link2('se_connecter/logout'); ?>" method="GET"
                           style="display: none;">
                           <input type="hidden" name="_token" value="xxxxxxxxxxxx">
                       </form>
                   </li>
               </ul>
           </li>
       </ul>
   </nav>
   <!-- Colonne de gauche -->
   <aside class="main-sidebar sidebar-dark-black elevation-1">
       <a href="<?php echo link2('admin'); ?>" class="brand-link ">
           <img src="<?php echo link2('assets/img/logo.png'); ?>" alt="AdminLTE"
               class="brand-image img-square elevation-1">
           <span class="brand-text font-weight-light ">
               MES FINANCES
           </span>
       </a>
       <div class="sidebar">
           <nav class="mt-2">
               <ul class="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu">
                   <li class="nav-item">
                       <a class="nav-link  " href="<?php echo link2(''); ?>">
                           <i class="fas fa-tachometer-alt fa-fw "></i>
                           <p>
                               TABLEAU DE BORD
                           </p>
                       </a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link  " href="<?php echo link2('admin/invest'); ?>">
                           <i class="fas fa-user fa-fw "></i>
                           <p>
                               INVESTISSEMENTS
                           </p>
                       </a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link  " href="<?php echo link2('admin/depenses_imprevues'); ?>">
                           <i class="fas fa-user fa-fw "></i>
                           <p>
                               DEPENSES
                           </p>
                       </a>
                   </li>
                   <li class="nav-item has-treeview menu-close">
                       <a class="nav-link " href="<?php echo link2('admin'); ?>">
                           <i class="fas fa-user fa-fw "></i>
                           <p>
                               EPARGNES
                               <i class="fas fa-angle-left right"></i>
                           </p>
                       </a>
                       <ul class="nav nav-treeview">
                           <?php foreach ($catList as $cats): ?>
                           <li class="nav-item">
                               <a class="nav-link  " href="<?php echo link2('admin/elements?catId='.$cats->id); ?>">
                                   <i class="fas fa-list-ul fa-fw "></i>
                                   <p>
                                       <?php echo $cats->nom; ?>
                                   </p>
                               </a>
                           </li>
                           <?php endforeach; ?>
                       </ul>
                   </li>

               </ul>
           </nav>
       </div>
   </aside>