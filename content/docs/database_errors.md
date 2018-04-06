+++
title = "Database Errors"
description = "Common MySQL Errors"
date = 2018-02-24T11:52:38-05:00
weight = 23
draft = false
bref = "Common MySQL Errors"
toc = true
+++

### Access Denied

* If not self-hosted, please make sure your host allows remote connections

This problem is often related to user accounts that the server permits

View [MariaDB #Granting]({{< ref "mariadb.md#granting-permission" >}}) for more info

### Can't connect to MySQL server

Normally means that there is no MySQL server running on the system or that you are using an incorrect Unix socket file name or TCP/IP port number when trying to connect to the server. You should also check that the TCP/IP port you are using has not been blocked by a firewall or port blocking service.

A MySQL client on Unix can connect to the mysqld server in two different ways: By using a Unix socket file to connect through a file in the file system (default /tmp/mysql.sock), or by using TCP/IP, which connects through a port number

### Lost connection to MySQL server

Most commonly due to `bind-address` not commented out, view [MariaDB #Configuring]({{< ref "mariadb.md#configuring" >}}) for more info

It may also indicate network connectivity trouble and you should check the condition of your network if this error occurs frequently. If the error message includes “during query,” this is probably the case you are experiencing.

More rarely, it can happen when the client is attempting the initial connection to the server. In this case, if your connect_timeout value is set to only a few seconds, you may be able to resolve the problem by increasing it to ten seconds, perhaps more if you have a very long distance or slow connection.

### MySQL server has gone away

The most common reason for the MySQL server has gone away error is that the server timed out and closed the connection. In this case, you normally get one of the following error codes (which one you get is operating system-dependent).

| Error Code           | Description                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CR_SERVER_GONE_ERROR | The client couldn't send a question to the server.                                                                          |
| CR_SERVER_LOST       | The client didn't get an error when writing to the server, but it didn't get a full answer (or any answer) to the question. |

Other common reasons:

* If you send a query to the server that is incorrect or too large. If mysqld receives a packet that is too large or out of order, it assumes that something has gone wrong with the client and closes the connection. If you need big queries (for example, if you are working with big BLOB columns), you can increase the query limit by setting the server's max_allowed_packet variable, which has a default value of 4MB. You may also need to increase the maximum packet size on the client end.

### Too many connections

This means that all available connections are in use by other clients.

This problem occurs commonly on shared hosting, where you are granted the most minimal resources

The number of connections permitted is controlled by the max_connections system variable.

### Table doesn't exist

As the error may hint, the table does not exist, which might suggest your installation is corrupted
