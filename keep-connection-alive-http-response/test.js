const express = require('express');
const app = express();

// Route to establish the SSE connection
app.get('/sse', (req, res) => {
  // Set appropriate headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Function to send data to the client
  const sendSSEData = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Send initial data to the client
  sendSSEData({ message: 'Initial data' });

  // Simulate sending data to the client every 2 seconds
  const intervalId = setInterval(() => {
    sendSSEData({ message: 'Another data update' });
  }, 2000);

  // Clean up the interval and close the connection when the client disconnects
  res.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


https://camunda.com/blog/2023/02/orchestration-vs-choreography/


https://www.gaurgaurav.com/patterns/orchestration-pattern/

keep http keep connection alive