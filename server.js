const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare()
    .then(() => {
      const server = express ();

      server.get('/gallery', (req, res) => {
        return handle(req, res, 'gallery.js');
      })
      
      server.get('*', (req, res) => {
        return handle(req, res);
      })
      
      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Ready on http://localhost:${port}`);
      })
  })