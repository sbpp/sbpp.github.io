+++
title = "Browser Freeze"
description = "Solutions & debugging to unresponsiveness"
date = 2018-02-22T11:34:15-05:00
weight = 24
draft = false
bref = "Solution and steps to debug unresponsive pages"
toc = true
+++

### Cloudflare

If your site uses Cloudflare as reverse-proxy, make sure that <samp>Rocket Loader</samp> is `off`

Rocket Loader bundles mootools incorrect and cause unnecessary loop calls

### Debugging

Most browsers bundles with a performance debugger, typically accessible via the hotkey `F12`

With the performance recorder open, start recording, navigate to the unresponsive page, end the recording after ~10 seconds and export it

Join our [Discord](https://discord.gg/4Bhj6NU) guild and post in #help-support with the exported performance file attached
