const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public')); // Allows us to utilize the public folder as a directory onto the server for calls.
// Example usage: "http://localhost:4000/images/jake.jpg" - This will grab the image on the backend and allow it to be used on the frontend.

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Basic get request for server test (set to default directory until further developed)
app.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM result"; // Note: 'result' is a db table that for now is a basic implementation of our data from our midterm assignment.
    const [result] = await db.query(query); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
  } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});
