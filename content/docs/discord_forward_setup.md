+++
title = "Discord Forward Setup"
description = "Setting up Discord forward plugin"
date = 2018-04-02T17:48:49-04:00
weight = 23
draft = false
bref = "Setting up and configuring Discord forward plugin"
toc = true
+++

### Prerequisites

* [SteamWorks](http://users.alliedmods.net/~kyles/builds/SteamWorks/)
* [SMJansson](https://forums.alliedmods.net/showthread.php?t=184604)

### Installing

1.  Grab the latest `sbpp_discord.smx` from [here](https://github.com/sbpp/discord-forward/releases)

2.  Upload the plugin to `addons/sourcemod/plugins`

### Configuring

* Add the convar `sbpp_discord_banhook` and assign the value of the Discord webhook link for where you want ban messages to go

* Add the convar `sbpp_discord_reporthook` and assign the value of the Discord webhook link for where you want report messages to go (If missing, it will default to `sbpp_discord_banhook`'s convar value)

Make sure to put these convars in an executable configuration file (preferably `autoexec.cfg`).
