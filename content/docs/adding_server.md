+++
title = "Adding Server"
description = "Adding a server"
date = 2018-02-18T15:27:00-05:00
weight = 23
draft = false
bref = "How to start importing your servers into SourceBans++"
toc = true
+++

### Adding server to web panel

1. Navigate to <mark>Admin Panel</mark> -> <mark>Server Settings</mark> -> <mark>Add new server</mark>
2. Fill out the information about the server with correct <mark>RCON Password</mark> and click <mark>Add Server</mark> when done
3. On refresh, record down the `ID` column for the corresponding server

### Configuring SourceBans++'s ServerID

1. Navigate to <mark>addons/sourcemod/configs/sourcebans</mark>
2. Edit <mark>sourcebans.cfg</mark> and modify `ServerID` to the `ID` value you recorded down
3. Save, reupload file, and reload map/restart server
