+++
title = "Translating"
description = "Translating Web Panel & Plugin"
date = 2018-02-23T11:58:42-05:00
weight = 24
draft = false
bref = "Fundamental of translating web panel & plugin"
toc = true
+++

### Web Panel

1. Navigate to the root directory of your SourceBans++ installation
2. Navigate to the `themes` folder
3. Make a copy of the `default` theme, rename it to a name of your choosing
4. Navigate to the newly made theme folder
5. Modify `theme.conf.php` to reflect the configuration and save

        <?php
        // Set the name of this theme here
        define('theme_name', "SourceBans++ Default Theme");

        // Set the author of this theme here
        define('theme_author', "IceMan, SourceBans++ Dev Team");

        // Set the version of the theme here
        define('theme_version', "1.5.5-dev");

        // Set the link of the theme here
        define('theme_link', "https://sbpp.sarabveer.me/");

        // Set the screenshot filename for your theme (must be inside your theme folder)
        // Must be:  250px wide  X 170px High
        define('theme_screenshot', "screenshot.jpg");
        ?>
6. Modify <mark>each</mark> file ending `.tpl` file
7. Modify the content of the file, leaving HTML tags intact
