+++
title = "Debugging Connection"
description = "Server List & RCON Debugging"
date = 2018-02-21T20:04:40-05:00
weight = 23
draft = false
bref = "Addresses connection issue on server lists & RCON"
toc = true
+++

### Check list

- Your host is not blocking any traffic on your game server port (UDP Incoming & TCP Outgoing)
- Your game server is online to people outside of your network w/o any error on binding
- You can connect to server in-game
- You can use RCON through in-game console, if not view [TCP Error](#tcp-error) below

### Using the debug tool

In SourceBans++'s root directory, there's a connection debug tool named `sb_debug_connection.php`

Edit this section of that file with the corresponding server info

```
/**
 * Config part
 * Change to IP and port of the gameserver you want to test
 */
$serverip   = "";
$serverport = 27015;
$serverrcon = ""; // You only need to specify this, if you want to test the rcon tcp connection either! Leave blank if it's only the serverinfo erroring.
```

Once complete, navigate to the file in your browser, and if done properly it will attempt to connect to the specified server.

### UDP Error

- Make sure your host is not blocking <samp>UDP Incoming</samp>
- If hosting locally, make sure you are port forwarding correctly
- Make sure your game server did not ban your web server's IP using `listip`, if banned: remove it from `banned_ip.cfg` and using `removeip IP` via RCON

### TCP Error

- Make sure your host is not blocking <samp>TCP Outgoing</samp>
- If your server is not explicitly IP binded, do so using `-ip` launch parameter
- If you are unable to use RCON through in-game console, append `-usercon` to launch parameter
