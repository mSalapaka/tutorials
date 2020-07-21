Creates AgentsEnd code to spawn a server. A backend masterNode can become a client to this server. The code is wired for routes of  'initalize', 'start' and 'stop'. It emits a json object to the client upon connection. 

To run
------
node server.js portName 

Example:
node server.js 3001