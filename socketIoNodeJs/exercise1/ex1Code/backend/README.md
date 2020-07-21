Creates backend code to spawn a server at port 3010. This  backend masterNode makes client connections to localhost:3000 and localhost:3001. The code is wired to emit  of  'initalize', 'start' and 'stop'. It is wired to recieve a  json object from the agent server with route 'dataFromAgent'

To run
------
node server.js 

