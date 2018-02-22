+++
title = "Inquiries"
description = "Inquiries & Solutions"
date = 2018-02-18T14:08:08-05:00
weight = 21
draft = false
bref = "Common inquiries that we have compiled"
toc = true
+++

### <span class="label success outline">Web</span> Which ports does the SourceBans Web-Panel require to be open?

If your web panel shows `Error Connecting` for your game server when it is actually online,
ask your web host to open <mark>UDP incoming</mark> from your game server port (usually `27015`).

If either the **RCON console**, **Admin Rehashing** or **Kick-It** does not work on your web panel,
ask your web host to open <mark>TCP outgoing</mark> to your game server port (usually `27015`).

Use sb_debug_connection.php, a small testing script to get more detailed debugging information. Open the php file and add your gameserver's ip and port as described in the comments.

You should always check beforehand, if your gameserver banned your webserver's ip with `listip` in rcon. Remove it from the `banned_ip.cfg` and `removeip IP` via rcon.

### <span class="label success outline">Plugin</span> Ban player option is missing in SourceMod's admin menu!</h3>

Most likely SourceMod's basebans.smx was still loaded when you installed SourceBans' game plugin. The game plugin automatically disables basebans.smx, but your server needs to be restarted for the "Ban player" option to come available.

Some hosters might disallow plugins to move files. Make sure the basebans.smx is in the plugins/disabled folder.

### <span class="label success outline">Web</span> Player list displays "Max Players" instead of all the players

Add `host_players_show 2` to your `server.cfg` or any startup config file

### <span class="label success outline">Web/Plugin</span> I wish to translate Sourcebans++ for my community

#### Web Panel

1. Copy the theme you wish to translate into a new folder within themes
2. Modify all files ending in `.tpl` with the new translation, editing only the content, not the structure
3. Modify `theme.conf.php` while following theme license outline
4. Enable the theme in web panel setting when you are done

#### Plugin

1. Navigate to <mark>addons/sourcemod/translations</mark>
2. The files you need to modify are `sourcebans.phrases.txt`, `sourcecomms.phrases.txt`, and `sourcesleuth.phrases.txt`
3. Following [SourceMod's Translation Guide](https://wiki.alliedmods.net/Translations_(SourceMod_Scripting)), modify the files accordingly

### <span class="label success outline">Web</span> How do I remove the message "Your new SourceBans install SourceBans successfully installed!"

1. Navigate to <mark>Admin Panel</mark> -> <mark>Webpanel Settings</mark>
2. Edit the <mark>Intro Text</mark>
3. <mark>Save Changes</mark> and you are done

### <span class="label success outline">Web</span> Why is the Web-Panel showing "Error Connecting (IP:PORT)" for my server, when it's actually Online?

See [Which ports does the SourceBans Web-Panel require to be open?](#span-class-label-success-outline-web-span-which-ports-does-the-sourcebans-web-panel-require-to-be-open)

### <span class="label success outline">Web</span> My Banlist doesn't show up, but all other pages do. What can I do?

Your PHP configuration restricts SourceBans to a certain amount of memory.
When viewing the Banlist it tries to lookup the according country for the IP. This is done by loading a ~7MB database file into the memory.

There are several ways to solve this.

- Remove the `//` in front of this line in your `config.php`: `define('SB_MEM', '128M');`
- Ask your webhost to increase the PHP `memory_limit` setting.
- If it still doesn't show up, check the box for <mark>No Country Research</mark> in your webpanel settings page.

### <span class="label success outline">Web</span> Why is Sourcebans++ not sending email reports to me (the owner)?

This is because, by default, the owner account is not assigned to any permission group.

Navigate to <mark>Admin Settings</mark>, edit, and assign yourself to an admin group

### <span class="label success outline">Web</span> I accidently locked myself out by having Steam only login, how can I fix this?

Using a database query tool (Ex: PHPMyAdmin), goto `_settings` table and modify `config.enablesteamlogin` setting and set the value to `1`

### <span class="label success outline">Web</span> SourceBans++ freezes my browser!

Turn off Rocket Loader in CloudFlare

### <span class="label success outline">Web</span> Why is the webpanel showing me a blank white page?

This is because PHP has encountered a fatal error and cannot show any more of the page.

To show the error message that PHP has produced, you will need to navigate to your web server's log directory and look for PHP's error log (Apache Default: `/var/log/apache2/error.log`)

### <span class="label success outline">Plugin</span> Why does the game plugin error log tell me "Database failure: Could not find database conf "sourcebans"?

You forgot to add the "sourcebans" section to SourceMod's databases.cfg, as instructed in the [quickstart](/docs/quickstart).

### <span class="label success outline">Web/Plugin</span> I get the following error: Database failure: [1044/1045/1130/2002/2003]

If the error message reads "Can't connect to local MySQL server through socket", you need to find the "sourcebans" section in databases.cfg and change the value of "host" from "localhost" to the path of your mysql.sock file. If you don't know where mysql.sock is located, ask your gameserver host.


Otherwise, most likely your MySQL server does not allow incoming connections from your gameserver. To fix this, you can do either of the following:

- Go into your webserver's control panel and check if there's a section called MySQL Access Hosts, Remote MySQL or something named similar. There you can add the IP address mentioned in the error. This is usually the IP of your gameserver, but it can also be slightly different, so make sure you copy and paste it exactly from the error.
- The other option is to run the following query on your SourceBans database (for example using phpMyAdmin): `GRANT ALL ON database.* TO 'username'@'ip';`
You will have to replace "database" with your SourceBans database name, and "username" and "ip" with those mentioned in the error.

### <span class="label success outline">Plugin</span> I'm getting: Could not find driver "mysql"

- Please make sure `dbi.mysql.ext.so` (`dbi.mysql.ext.dll` on Windows) extension exists and check if it is loaded via <mark>sm exts list</mark>
- Make sure the extension is executable via `chmod u+x dbi.mysql.ext.so`
- Install `zlib` (**Requires SSH Access**)
  - 32-Bit Debian/Ubuntu: `apt-get install zlib1g`
  - 64-Bit Debian/Ubuntu: `apt-get install lib32z1`
  - 32/64-Bit Fedora: `yum install zlib.i686`
  - 32/64-Bit Mandriva: `urpmi zlib1`
  - 32-Bit SUSE: `zypper install libz1`
  - 64-Bit SUSE: `zypper install libz1-32bit`
- If all of the above does not work, use `ldd -d -r dbi.mysql.ext.so` to look for missing dependencies, and use Google to look them up
