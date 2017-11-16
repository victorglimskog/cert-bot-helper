const express = require('express');
const app = express();

// Cert bot expects /var/www/html to be served statically.
// So that it can find challenge files in /var/www/html/.well-known
// during certification renewals
// Make sure that tthe folder /var/www/html/ exists
app.use(express.static('/var/www/html'));

app.listen(5000, () => {
    console.log('Webserver listening on port 5000');
});
