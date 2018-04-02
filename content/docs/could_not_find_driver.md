+++
title = "Could not find driver \"MySQL\""
description = "Debugging missing driver"
date = 2018-02-23T21:56:16-05:00
weight = 24
draft = false
bref = "Could not find driver \"MySQL\""
toc = true
+++

### Web

* Ensure you have installed the mysql extension of your PHP version (Ex: <samp>php7.2-mysql</samp>)
* Ensure `pdo_mysql` module is loaded, check `phpinfo()` for this

### Plugin

* Please make sure `dbi.mysql.ext.so` (`dbi.mysql.ext.dll` on Windows) extension exists and check if it is loaded via <mark>sm exts list</mark>

* Make sure the extension is executable via `chmod u+x dbi.mysql.ext.so`

* Install `zlib` (**Requires SSH Access**)

  * 32-Bit Debian/Ubuntu: `apt-get install zlib1g`

  * 64-Bit Debian/Ubuntu: `apt-get install lib32z1`

  * 32/64-Bit Fedora: `yum install zlib.i686`

  * 32/64-Bit Mandriva: `urpmi zlib1`

  * 32-Bit SUSE: `zypper install libz1`

  * 64-Bit SUSE: `zypper install libz1-32bit`

* If all of the above does not work, use `ldd -d -r dbi.mysql.ext.so` to look for missing dependencies, and use Google to look them up
