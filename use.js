<!DOCTYPE HTML>
<html>
<head>
<script type="text/javascript">
function WebSocketTest()
{
    // Let us open a web socket
     var ws = new WebSocket("http://172.17.230.173:50007");
     ws.onopen = function()
     {
        // Web Socket is connected, send data using send()
        ws.send("Message to send");
        alert("Message is sent...");
     };
     ws.onmessage = function (evt)
     {
        var received_msg = evt.data;
        alert("Message is received...");
     };
     ws.onclose = function()
     {
        // websocket is closed.
        alert("Connection is closed...");
     };
  }
</script>
</head>
<body>
<div id="sse">
   <a href="javascript:WebSocketTest()">Run WebSocket</a>
</div>
</body>
</html>
