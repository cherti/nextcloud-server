<?php
/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

script('settings', [
	'settings',
	'templates',
	'vue-settings-personal-security',
]);

if ($_['passwordChangeSupported']) {
	script('settings', 'security_password');
}

?>
<?php if ($_['passwordChangeSupported']) { ?>
<div id="security-password" class="section">
	<h2 class="inlineblock"><?php p($l->t('Password'));?></h2>
	<span id="password-error-msg" class="msg success hidden">Saved</span>
	<div class="personal-settings-setting-box personal-settings-password-box">
		<form id="passwordform" method="POST">
			<div class="input-control">
				<label for="pass1"><?php p($l->t('Current password')); ?>: </label>
				<input type="password" id="pass1" name="oldpassword"
					   placeholder="<?php p($l->t('Your current password'));?>"
					   autocomplete="current-password" autocapitalize="none" autocorrect="off" />
			</div>

			<div class="personal-show-container">
				<label for="pass2" ><?php p($l->t('New password'));?>: </label>
				<input type="password" id="pass2" name="newpassword"
					   maxlength="469"
					   placeholder="<?php p($l->t('Your new password')); ?>"
					   data-typetoggle="#personal-show"
					   autocomplete="new-password" autocapitalize="none" autocorrect="off" />
				<input type="checkbox" id="personal-show" class="hidden-visually" name="show" />
				<label for="personal-show" class="personal-show-label"></label>
			</div>

			<div>
				<input id="passwordbutton" class="primary" type="submit" value="<?php p($l->t('Change password')); ?>" />
			</div>
		</form>
	</div>
	<span class="msg"></span>
</div>
<?php } ?>
