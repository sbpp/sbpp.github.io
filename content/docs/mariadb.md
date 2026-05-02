+++
title = "MariaDB"
description = "Setting up a MariaDB server on Ubuntu LTS"
date = 2018-02-18T20:30:47-05:00
weight = 23
draft = false
bref = "This guide will walk you through on setting up a MariaDB server on Ubuntu LTS"
toc = true
+++

SourceBans++ requires MariaDB >= 10.0 (or MySQL >= 5.6). The instructions below target current Ubuntu LTS releases (22.04 / 24.04) and install the MariaDB 10.11 LTS series.

### Option A: Install from the Ubuntu repository

Recent Ubuntu LTS releases ship a recent enough MariaDB by default and this is the simplest path:

```
sudo apt update
sudo apt install mariadb-server
```

### Option B: Install from MariaDB's official repository

Use this if you want a newer release than your distro provides. The legacy `apt-key adv` approach is deprecated; use `signed-by` instead.

```
sudo apt install curl gnupg ca-certificates apt-transport-https
sudo curl -o /etc/apt/keyrings/mariadb-keyring.pgp 'https://mariadb.org/mariadb_release_signing_key.pgp'
echo "deb [signed-by=/etc/apt/keyrings/mariadb-keyring.pgp] https://deb.mariadb.org/10.11/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/mariadb.list
sudo apt update
sudo apt install mariadb-server
```

The official [MariaDB Repository Configuration Tool](https://mariadb.org/download/?t=repo-config) can generate the same snippet for any distro/version.

### Setup

Run `sudo mysql_secure_installation`

### Configuring

Skip this section if your web panel and game servers connect to the database from the same host (`localhost`).

1.  Navigate to your MariaDB config (Ex: <samp>/etc/mysql/mariadb.conf.d/50-server.cnf</samp>)

2.  Either comment out `bind-address` by prefixing it with a `#`, or set it to `0.0.0.0` (IPv4) or `::` (IPv4 + IPv6) to listen on all interfaces

3.  Restart MariaDB via `sudo systemctl restart mariadb`

### Granting Permission

Sign in to MariaDB shell via `sudo mariadb -u root -p` (or `sudo mysql -u root -p`) and enter your password

Run the following, adjusting it to suit your own needs

* <mark>Username</mark> - The user you wish to create

* <mark>Host</mark> - The host you wish to whitelist (e.g. `localhost`, an IP, or `%` for any host)

* <mark>Password</mark> - The password to use for the user creation

```
CREATE USER 'USERNAME'@'HOST' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON `DATABASENAME`.* TO 'USERNAME'@'HOST';
FLUSH PRIVILEGES;
```

The combined `GRANT ... IDENTIFIED BY ...` syntax is removed in MariaDB 10.4+ / MySQL 8+, so create the user first and grant privileges in a second statement. Granting on a specific database (rather than `*.*`) keeps the principle of least privilege.

### Done!

From here on, you are done with setting up a MariaDB server!
