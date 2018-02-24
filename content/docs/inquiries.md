+++
title = "Inquiries"
description = "Inquiries & Solutions"
date = 2018-02-18T14:08:08-05:00
weight = 21
draft = false
bref = "Common inquiries that we have compiled"
toc = true
+++

### <span class="label success outline">Plugin</span> Ban player option is missing in SourceMod's admin menu!</h3>

Most likely SourceMod's basebans.smx was still loaded when you installed SourceBans' game plugin. The game plugin automatically disables basebans.smx, but your server needs to be restarted for the "Ban player" option to come available.

Some hosters might disallow plugins to move files. Make sure the basebans.smx is in the plugins/disabled folder.

### <span class="label success outline">Web</span> Player list displays "Max Players" instead of all the players

Add `host_players_show 2` to your `server.cfg` or any startup config file

### <span class="label success outline">Web</span> Why is Sourcebans++ not sending email reports to me (the owner)?

This is because, by default, the owner account is not assigned to any permission group.

Navigate to <mark>Admin Settings</mark>, edit, and assign yourself to an admin group

### <span class="label success outline">Web</span> I accidently locked myself out by having Steam only login, how can I fix this?

Using a database query tool (Ex: PHPMyAdmin), goto `_settings` table and modify `config.enablesteamlogin` setting and set the value to `1`

### <span class="label success outline">Web</span> Why is the webpanel showing me a blank white page?

This is because PHP has encountered a fatal error and cannot show any more of the page.

To show the error message that PHP has produced, you will need to navigate to your web server's log directory and look for PHP's error log (Apache Default: `/var/log/apache2/error.log`)

### <span class="label success outline">Plugin</span> Why does the game plugin error log tell me "Database failure: Could not find database conf "sourcebans"?

You forgot to add the "sourcebans" section to SourceMod's databases.cfg, as instructed in the [quickstart](/docs/quickstart).
