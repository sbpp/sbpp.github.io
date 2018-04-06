+++
title = "Updating"
description = "Updating SourceBans++"
date = 2018-02-18T15:49:01-05:00
weight = 22
draft = false
bref = "Simple guide on updating SourceBans++"
toc = true
+++

### Downloading

Download the latest zip-archive from the <a href="https://github.com/sbpp/sourcebans-pp/releases" target="_blank_">release</a> page

### Web Panel

1. Backup your database in case of corruption

2. Switch back to the default theme if haven't already

3. Upload and overwrite all contents in <mark>web</mark> to your SourceBans++ installation

4. Delete <mark>install</mark> directory

5. Navigate to your SourceBans++ website and append <mark>updater</mark> after it (Ex: <samp>example.com/updater</samp>, <samp>example.com/sb/updater</samp>)

6. After it displays <mark>Installation up-to-date.</mark>, delete <mark>updater</mark> directory and you are done

### Plugin

1. Upload and overwrite all contents in <mark>game</mark> to your root game directory (Ex: <samp>tf</samp>, <samp>cs</samp>, etc)

2. Reconfigure the config files in <mark>addons/sourcemod/configs/sourcebans/</mark>

3. Ensure everything is running smooth, and you are done

### Plugin (Upgrading from version <= 1.5.4.7)

1. Upload and overwrite all contents in <mark>game</mark> to your root game directory (Ex: <samp>tf</samp>, <samp>cs</samp>, etc)

2. Reconfigure the config files in <mark>addons/sourcemod/configs/sourcebans/</mark>

3. Delete <mark>sourcebans.smx</mark>, <mark>sourcecomms.smx</mark>, <mark>sbchecker.smx</mark>, <mark>sb_admcfg.smx</mark>, <mark>SourceSleuth.smx</mark>

4. Ensure everything is running smooth, and you are done
