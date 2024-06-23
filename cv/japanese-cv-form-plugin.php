<?php
/*
Plugin Name: CV Form Plugin
Description: A plugin to save CV form submissions to the admin dashboard.
Version: 1.0
Author: Nirajan
*/

function cv_form_shortcode() {
  ob_start();
  include 'cv-form.html'; // Make sure your form is saved as cv-form.html in the plugin directory
  return ob_get_clean();
}
add_shortcode('cv_form', 'cv_form_shortcode');
