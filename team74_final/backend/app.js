const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public")); // Allows us to utilize the public folder as a directory onto the server for calls.
// Example usage: "http://localhost:4000/images/jake.jpg" - This will grab the image on the backend and allow it to be used on the frontend.

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Basic get request for server test (set to default directory until further developed)
app.get("/locations", async (req, res) => {
  try {
    const query = "SELECT * FROM places"; // Note: 'result' is a db table that for now is a basic implementation of our data from our midterm assignment.
    const [result] = await db.query(query); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
  } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

app.get("/locations/:id", async (req, res) => {
  try {
    // Read id from frontend
    const itemId = req.params.id;

    const query = "SELECT * FROM places where placeID=?"; // Note: 'result' is a db table that for now is a basic implementation of our data from our midterm assignment.
    const [result] = await db.query(query, itemId); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
  } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

// get request for all the comments
app.get("/comments", async (req, res) => {
  try {
    const query = "SELECT * FROM comments"; // Note: 'result' is a db table that for now is a basic implementation of our data from our midterm assignment.
    const [result] = await db.query(query); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
  } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

// get request for all the comments
app.get("/comments/:id", async (req, res) => {
  try {
    // Read id from frontend
    const itemId = req.params.id;

    const query = "SELECT * FROM comments where placeID=?"; // Note: 'result' is a db table that for now is a basic implementation of our data from our midterm assignment.
    const [result] = await db.query(query, itemId); // Execute the query and wait for the result
    console.log("Success in Reading MySQL");
    res.status(200).send(result); // Send the results as the response
  } catch (err) {
    // If an error occurs, catch it and send an appropriate error response
    console.error("Error in Reading MySQL :", err);
    res.status(500).send({ error: "An error occurred while fetching items." });
  }
});

// post for adding comments with ratings - will be based off of place for comment, comment's content, and rating.
app.post("/addComment", async (req, res) => {
  try {
    // Validate if body contains data
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "POST:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }

    // Check if the table exists
    const [tableExists] = await db.query("SHOW TABLES LIKE 'comments'");
    if (tableExists.length === 0) {
      const msg = "POST:Table does not exist";
      console.log(msg);
      return res.status(404).send({ error: msg });
    }

    // Check if the 'place' exists
    const itemId = req.body.placeID;
    const [productExists] = await db.query(
      "SELECT * FROM places WHERE id = ?",
      [itemId]
    );
    if (productExists.length == 0) {
      // Item does not exists
      const msg = "POST:Item doesn't exist";
      console.log(msg);
      return res.status(409).send({ error: msg });
    }

    // Proceed to add new item
    const { placeID, comment, rating } = req.body;
    const insertSql =
      "INSERT INTO comments (placeID, comment, rating) VALUES (?, ?, ?)";
    const insertResult = await db.query(insertSql, [placeID, comment, rating]);

    // success
    const msg = "POST:Success in Posting MySQL" + insertResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "POST: An ERROR occurred in Post" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});

// Route to update a comment - will only update comment's content and rating
app.put("/updateComment/:id", async (req, res) => {
  try {
    // Validate if body contains data
    if (!req.body || Object.keys(req.body).length === 0) {
      const msg = "UPDATE:Bad request: No data provided.";
      console.log(msg);
      return res.status(400).send({ error: msg });
    }

    // Read id from frontend
    const itemId = req.params.id;

    // Verify if item already exists
    console.log("UPDATE UPDATE UPDATE ", itemId);
    const [productExists] = await db.query(
      "SELECT * FROM comments WHERE commentID = ?",
      [itemId]
    );

    if (productExists.length <= 0) {
      // Item does NOT exist
      const msg = "Update:Item " + itemId + " does NOT exist";
      console.log(msg);
      return res.status(409).send({ error: msg });
    }

    // Proceed to update it
    const {comment, rating} = req.body;
    const updateResult = await db.query(
      "UPDATE comments SET comment= ?,  rating= ? WHERE commentID= ?",
      [comment,rating, itemId]
    );

    // success
    const msg = "Success in Update item :" + updateResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "UPDATE: An ERROR occurred in Update" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});

// Route to delete a post
app.delete("/deleteComment/:id", async (req, res) => {
  try {
    // Read id from frontend
    const itemId = req.params.id;

    // Verify if item already exists
    console.log("DELETE DELETE DELETE ", itemId);
    const [productExists] = await db.query(
      "SELECT * FROM comments WHERE commentID = ?",
      [itemId]
    );

    if (productExists.length <= 0) {
      // Item does NOT exist
      const msg = "DELETE:Item " + itemId + " does NOT exist";
      console.log(msg);
      return res.status(409).send({ error: msg });
    }

    // Proceed to delete it
    const id = req.params.id;
    const deleteResult = await db.query(
      "DELETE FROM comments WHERE commentID= ?",
      id
    );

    // success
    const msg = "Success in DELETE item :" + deleteResult;
    console.log(msg);
    return res.status(200).send({ success: msg });
  } catch (err) {
    // Handle any error
    const msg = "DELETE: An ERROR occurred in Delete" + err;
    console.error(msg);
    res.status(500).send({ error: msg });
  }
});