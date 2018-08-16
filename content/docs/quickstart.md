+++
title = "Quickstart"
description = "Setup in no time"
date = 2018-02-17T20:47:15-05:00
weight = 20
draft = false
bref = "This will be a quick walkthrough of setting up SourceBans++ for the first time"
toc = true
+++

### Prerequisites

Before we get started, let's make sure you meet these following requirements:

* Web

  * A working MySQL/[MariaDB](/docs/mariadb) database

  * PHP Version >= 5.6

        * GMP extension (for A2S queries)

* Game

  * Sourcemod >= 1.7

  * Metamod: Source

  If you're using Cloudflare, Rocket Loader must be disabled otherwise SourceBans++ will become unresponsive.

### Uploading

* Download the latest release from the <a href="https://github.com/sbpp/sourcebans-pp/releases" target="_blank_">release</a> page

* Upload everything that's within `web` folder to either the root of your web server or a folder that you wish to allocate

* Upload everything that's within `game` to the game mod directory (`tf`, `cs`, `dod`, etc)

### Write Permission

* `config.php` file is writable (Linux: `sudo chmod 644 config.php`)

* `/demos` folder is writable (Linux: `sudo chmod -R 644 demos`)

* `/themes_c` folder is writable (Linux: `sudo chmod -R 774 themes_c`)

* `/images/games` folder is writable (Linux: `sudo chmod -R 644 /images/games`)

* `/images/maps` folder is writable (Linux: `sudo chmod -R 644 /images/maps`)

### Web Installation

For demonstration purposes, I am going to be using <samp>example.com</samp> for the rest of the example, you will need to replace it with your own, and it may vary depending if you placed it
within a directory other than the root directory (Ex: `example.com/sb/`)

Navigate to your Sourcebans++ installer (`example.com/install`) to begin installation

1.  Read over the license agreement, check `I have read, and accept the license` and click `Ok` when you are done reading

2.  Fill out the information


    - <mark>Server Hostname</mark> - Database host, use `localhost` if it's on the same machine, otherwise use the IP or any resolvable records

    - <mark>Server Port</mark> - Database port, by default it runs on `3306`, you will need to change it if the port is difference

    - <mark>Username</mark> - Database username, the user to sign in with

    - <mark>Password</mark> - Database password, the password for the corresponding user

    - <mark>Database</mark> - Database to use, you should create a database if have not already

    - <mark>Table Prefix</mark> - The prefix you want the SourceBans++ tables to use, useful if there are name collisions, otherwise, leave it at default

    - <mark>Steam API Key</mark> - Your Steam API key, which can be obtained <a href="https://steamcommunity.com/dev/apikey" target="_blank_">here</a>

    - <mark>SourceBans URL</mark> - Your SourceBans site with <samp>protocol</samp> included! (Ex: `https://example.com`), the <samp>http://</samp> or <samp>https://</samp> is <em>required</em>

    - <mark>SourceBans EMail</mark> - The email address to send password reset and/or ban submissions from, leave empty if you don't have one to use and don't plan to use it

3.  System check, look over everything and make sure everything is green before continuing

4.  Table creation, click `Ok` when a success notification pops up

5.  Fill out the information for your personal account, and hit `Ok` when done (Note: <mark>Steam ID</mark> is your SteamID2 ID)

### Plugin Setup

Navigate to your `addons/sourcemod/configs/` directory and edit <mark>databases.cfg</mark> file

Append and edit the following

```
"sourcebans"
	{
		"driver"			"default"
		"host"				"EDITME_DATABASE_HOST_EDITME"
		"database"			"EDITME_DATABASE_EDITME"
		"user"				"EDITME_USERNAME_EDITME"
		"pass"				"EDITME_PASSWORD_EDITME"
		"port"			"3306" // EDIT IF NEEDED
	}
```

Save, reupload, and restart server

### Final Note

Please take a look at our other docs if you are having difficulty installing
