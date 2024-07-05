<?php

/*

Plugin Name: Test Plugin

Version: 1.0

Author: f

*/



// Activation hook to create database table

function test_form_plugin_activate()
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'test_submissions';
    $charset_collate = $wpdb->get_charset_collate();
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name tinytext NOT NULL,
        email text NOT NULL,
        phone text NOT NULL,
        message text NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    $result = dbDelta($sql);



    // Check for errors during table creation

    if (is_wp_error($result)) {

        $error_message = $result->get_error_message();

        error_log("Error creating database table: $error_message");
    }
}

register_activation_hook(__FILE__, 'test_form_plugin_activate');



// Shortcode to display the form

function test_form_shortcode()
{

    include plugin_dir_path(__FILE__) . 'index.html';

    ob_start();

    return ob_get_clean();
}

add_shortcode('test_form', 'test_form_shortcode');



// Handle form submission

add_action('admin_post_nopriv_test_form_submit', 'handle_test_form_submission');

add_action('admin_post_test_form_submit', 'handle_test_form_submission');



function handle_test_form_submission()
{

    // Check if form submission action is set

    if (isset($_POST['action']) && $_POST['action'] == 'test_form_submit') {

        global $wpdb;

        $table_name = $wpdb->prefix . 'test_submissions';



        // Sanitize form data

        $data = [

            'name' => sanitize_text_field($_POST['name']),

            'email' => sanitize_email($_POST['email']),

            'phone' => sanitize_text_field($_POST['phone']),

            'message' => sanitize_textarea_field($_POST['message']),

        ];



        // Insert data into database

        $result = $wpdb->insert($table_name, $data);



        // Check for errors during database insertion
 
        if ($result === false) {

            $wpdb_error = $wpdb->last_error;

            error_log("Error inserting data into database: $wpdb_error");
        }



        // Redirect after form submission (optional)

        wp_redirect(home_url('/thankyou/')); // Replace with your thank you page URL

        exit;
    } else {

        // Add debug message if form submission action is not set

        error_log('Form submit action not detected.');
    }
}



// Admin menu to display form submissions

function test_form_admin_menu()
{

    add_menu_page('Test Submissions', 'Test Submissions', 'manage_options', 'test-form-submissions', 'test_form_submissions_page');
}

add_action('admin_menu', 'test_form_admin_menu');



function test_form_submissions_page()
{

    global $wpdb;

    $table_name = $wpdb->prefix . 'test_submissions';



    // Retrieve form submissions from database

    $results = $wpdb->get_results("SELECT * FROM $table_name");



    // Display submissions in admin page

    echo '

    <style>

        .tableContainer {

            font-size: 15px;

            margin-top: 20px;

            max-height: 85vh;

            overflow: auto;

        }

        

        table, td, th {

            border: 0.3px solid #f9f9f9;

            padding: 10px;

        }

        

        th {

            background: #ceecff;

            cursor: pointer; /* Add cursor pointer for sorting */

        }

        

        table {

            width: 95%;

            border-collapse: collapse;

        }

        

        tr:nth-child(even) {

            background: #b0f4a1;

        }

    </style>

    ';



    echo '<div>';

    echo '<h2 style="font-size: 40px;">Test Submissions</h2>';

    echo '<div class="tableContainer">';

    echo '<table class="table">';

    echo '<thead>

            <tr>

                <th data-sort="id">Id</th>

                <th data-sort="name">Name</th>

                <th data-sort="email">Email</th>

                <th data-sort="phone">Phone</th>

                <th data-sort="message">Message</th>

            </tr>

          </thead>';

    echo '<tbody>';

    foreach ($results as $row) {

        echo '<tr>';

        echo '<td>' . esc_html($row->id) . '</td>';

        echo '<td>' . esc_html($row->name) . '</td>';

        echo '<td>' . esc_html($row->email) . '</td>';

        echo '<td>' . esc_html($row->phone) . '</td>';

        echo '<td>' . esc_html($row->message) . '</td>';

        echo '</tr>';
    }

    echo '</tbody>';

    echo '</table>';



    // Add Export Button



    echo '</div>'; // Close tableContainer

    echo '</div>';



    // JavaScript for sorting

    echo '

    <script>

        document.addEventListener("DOMContentLoaded", function() {

            var table = document.querySelector(".table");

            var headers = table.querySelectorAll("th");



            headers.forEach(function(header) {

                header.addEventListener("click", function() {

                    var column = this.dataset.sort; // Get column name to sort by

                    var rows = Array.from(table.querySelectorAll("tbody tr"));



                    // Sort rows based on content of the selected column

                    rows.sort(function(rowA, rowB) {

                        var cellA = rowA.querySelector("td:nth-child(" + (headers.indexOf(header) + 1) + ")");

                        var cellB = rowB.querySelector("td:nth-child(" + (headers.indexOf(header) + 1) + ")");



                        var valueA = cellA.textContent.trim();

                        var valueB = cellB.textContent.trim();



                        // Adjust comparison based on data type (e.g., numeric vs string)

                        return isNaN(valueA) ? valueA.localeCompare(valueB) : parseFloat(valueA) - parseFloat(valueB);

                    });



                    // Re-append sorted rows to table body

                    rows.forEach(function(row) {

                        table.querySelector("tbody").appendChild(row);

                    });

                });

            });

        });

    </script>

    ';
}
