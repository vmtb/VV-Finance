<script src="<?php echo link2('assets/admin/jquery.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/bootstrap.bundle.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/jquery.overlayScrollbars.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/jquery.dataTables.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/dataTables.bootstrap4.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/dataTables.responsive.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/dataTables.buttons.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/buttons.bootstrap4.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/buttons.server-side.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/notyf.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/lazysizes.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/bootstrap-select.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/selectize.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/adminlte.min.js'); ?>">
</script>
<script src="<?php echo link2('assets/admin/mdb-file-upload.min.js'); ?>">
</script>





<script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


<?php
        if ($this->session->flashdata('message')&& $this->session->flashdata('message') !='') {
            echo '<script>';
            echo 'swal.fire({
                icon: "success" , 
                  title: "<p style=\'font-weight:300; font-size: 18px; color: #000;\'><strong> '.$this->session->flashdata('message').'  </strong><p>",   
                  color: "#ffc107",
                  background: "#fff", 
          });';
            echo '</script>';
        }

        $this->session->set_flashdata('message', '');?>