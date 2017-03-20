<?php
/**
 * Not much yet.
 *
 * @package Teamhub
 */

/**
 * Load scripts.
 */
function webpack_load_scripts() {

	wp_register_script( 'webpack-script', 'http://localhost:3000/assets/main.js', '', '0.1', true );
	wp_localize_script( 'webpack-script', 'wpApiSettings', array(
		'root'      => esc_url_raw( rest_url() ),
		'nonce'     => wp_create_nonce( 'wp_rest' ),
		'logged_in' => is_user_logged_in(),
	) );

	wp_enqueue_script( 'webpack-script' );

	wp_enqueue_style( 'teamhub', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'webpack_load_scripts' );
