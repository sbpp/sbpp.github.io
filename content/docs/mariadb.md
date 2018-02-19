+++
title = "MariaDB"
description = "Setting up a MariaDB server on Ubuntu 16.04 LTS"
date = 2018-02-18T20:30:47-05:00
weight = 23
draft = false
bref = "This guide will walk you through on setting up a MariaDB server on Ubuntu"
toc = true
+++

### Adding Repo

```
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://nyc2.mirrors.digitalocean.com/mariadb/repo/10.2/ubuntu xenial main'
sudo apt-get update
```
### Installing

```
sudo apt-get install mariadb-server
```
### Setup

Run `mysql_secure_installation`

### Configuring

1. Navigate to your MariaDB config (Ex: <samp>/etc/mysql/mariadb.conf.d/50-server.cnf</samp>)
2. Comment out `bind-address` by prefixing it with a `#`, so it looks like `#bind-address = 127.0.0.1`
3. Restart MySQL via `sudo service mysql restart`

### Granting Permission

Sign in to MySQL shell via `mysql -u root -p` and enter your password

Run the following, adjusting it to suit your own needs

- <mark>Username</mark> - The user you wish to create
- <mark>Host</mark> - The host you wish to whitelist
- <mark>Password</mark> - The password to use for the user creation

```
GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'HOST' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### Done!

From here on, you are done with setting up a MariaDB server!
