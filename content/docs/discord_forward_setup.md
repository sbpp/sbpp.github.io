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

After loading the plugin once, SourceMod auto-generates `cfg/sourcemod/sbpp_discord.cfg` containing every convar below. Edit that file (or copy the convars to `autoexec.cfg`) and set the webhook URLs you want to use. Leave any hook empty to disable that channel.

#### Webhook endpoints

* `sbpp_discord_banhook` — webhook for ban events

* `sbpp_discord_reporthook` — webhook for in-game reports

* `sbpp_discord_commshook` — webhook for communication blocks (mute/gag)

#### Appearance & links

* `sbpp_discord_username` — username shown on the webhook message (default: `Sourcebans++`)

* `sbpp_discord_pp_url` — URL to a profile picture used by the webhook

* `sbpp_website_url` — base URL of your SourceBans++ web panel; embeds will link admins/players back to it when set

* `sbpp_discord_roleid` — Discord role ID to mention when a report comes in. Leave empty to disable the mention

Please also keep in mind that this only pushes the notifications if action is taken in-game, it has no effect if you — for example — ban someone on the web panel.
