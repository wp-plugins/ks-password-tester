<?php 
/* 
Plugin Name: KS Password Tester
Plugin URI: http://karunshakya.com.np
Description: A simple plugin to tests if your password is strong or not.
Version: 1.0 
Author: Karun Shakya
Author URI: http://karunshakya.com.np

Copyright 2014  Karun Shakya  (email : karunshakya@live.com)
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License 
along with this program; if not, write to the Free Software 
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/


	add_action('admin_menu', 'KS_create_option');
	add_action('init','ks_init_js');
	add_action('init','ks_init_css');

function ks_init_js() {
    wp_enqueue_script('jquery');
    wp_enqueue_script( 'ks-init-js', plugins_url( '/js/init_js.js', __FILE__ ));
}
function ks_init_css() {
	wp_enqueue_style( 'core', plugins_url('/css/style.css', __FILE__), false ); 
}
function KS_create_option() {
	add_options_page('KS Password Tester', 'Password Tester', 'manage_options', 'ks_password_tester', 'ks_test_password');
}
function ks_test_password(){
?>
<div class="ks-pwd-test">
	<div class="ks-left-block">
		<div class="ks-icon"><br/></div>
		<h1>Password Tester</h1>
		<p>Check you password's strength</p>
		<form action="#_" method="post">
			<input type="text" name="pass" id="pass" value="Please Enter Password" onClick="if(value=='Please Enter Password'){value=''}" onBlur="if(value==''){value='Please Enter Password'}"/>
			<span id="strength"></span><br/>
			<a href="#_" id="ks_generate" class="ks-button">Generate</a>
			<h2 id="strongpass"></h2>
		</form>
	</div>
	<div class="ks-right-block">
		<h2>Uses of this plugin</h2>
		<ul class="ks-list">
			<li>Generate Random 15digit Alpha-Numeric Passwords.</li>
			<li>Generated Passwords may always not be strong.</li>
			<li>Input your desired password in the textbox and check if your password is strong enough or not.</li>
		</ul>
	</div>
	<div class="clear"></div>
</div>
<?php
}
?>