const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection ({
    host : vaatika-zone-vaatikazone.a.aivencloud.com,
    port : 10776,
    user : avnadmin,
    password : AVNS_vzD7mTZI0JYhFn9sz5h,
    database : defaultdb
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
  }
    console.log('Connected to the database as ID ' + connection.threadId);
});

// Define a GET route
app.get('/api/users', (req, res) => {
  
    // Fetch users from the database
  connection.query('SELECT * FROM admin_farmer_details', (error, results) => {
      if (error) {
          console.error('Error fetching users from the database: ' + error.stack);
          return res.status(500).json({ error: 'Failed to fetch users' });
    }

    // Send the fetched data as a response
     res.json(results);
  });
});


//Routers
const productsRouter = require('./routes/Products');
app.use("/products", productsRouter);


// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});