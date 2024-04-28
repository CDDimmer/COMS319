var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");
const { Console } = require("console");

// MongoDB
const url = "mongodb://localhost:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
        console.log("App listening at http://%s:%s", host, port);
});

// GET - all products
app.get("/listProducts", async (req, res) => {
        await client.connect();
        console.log("Node connected successfully to GET MongoDB");
        const query = {};
        const results = await db
                .collection("fakestore_catalog")
                .find(query)
                .limit(100)
                .toArray();
        console.log(results);
        res.status(200);
        res.send(results);
});

// GET - grabs a unique product by id
app.get("/listProducts/:id", async (req, res) => {
        const productid = Number(req.params.id);
        console.log("Product to find :", productid);
        await client.connect();
        console.log("Node connected successfully to GET-id MongoDB");
        const query = { id: productid };
        const results = await db.collection("fakestore_catalog").findOne(query);
        console.log("Results :", results);
        if (!results) res.send("Not Found").status(404);
        else res.send(results).status(200);
});

// POST - adds a new product to the database
app.post("/addProduct", async (req, res) => {
        try {
                await client.connect();
                const keys = Object.keys(req.body);
                const values = Object.values(req.body);

                const rating = {
                        rate: parseFloat(values[6]),
                        count: parseInt(values[7]),
                };

                const newDocument = {
                        id: parseInt(values[0]),
                        title: values[1],
                        price: parseFloat(values[2]),
                        description: values[3],
                        category: values[4],
                        image: values[5],
                        rating: rating,
                };

                console.log(newDocument);

                const results = await db
                        .collection("fakestore_catalog")
                        .insertOne(newDocument);
                res.status(200).send(results);
        } catch (error) {
                console.error("An error occurred:", error);
                res.status(500).send({
                        error: "An internal server error occurred",
                });
        }
});

//PUT - updates a product's title based upon its id
app.put("/updateProduct/:id/title", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        title: req.body.title,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

//PUT - updates a product's price based upon its id
app.put("/updateProduct/:id/price", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        price: req.body.price,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

//PUT - updates a product's description based upon its id
app.put("/updateProduct/:id/description", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        description: req.body.description,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

//PUT - updates a product's category based upon its id
app.put("/updateProduct/:id/category", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        category: req.body.category,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

//PUT - updates a product's image based upon its id
app.put("/updateProduct/:id/image", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        image: req.body.image,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

//PUT - updates a product's rating based upon its id
app.put("/updateProduct/:id/rating", async (req, res) => {
        const id = Number(req.params.id);
        const query = { id: id };
        await client.connect();
        console.log("Product to Update :", id);
        // Data for updating the document, typically comes from the request body
        console.log(req.body);
        const updateData = {
                $set: {
                        rating: req.body.rating,
                },
        };

        // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
        const options = {};
        const results = await db
                .collection("fakestore_catalog")
                .updateOne(query, updateData, options);

        if (results.matchedCount === 0) {
                return res.status(404).send({ message: "Product not found" });
        }

        res.status(200);
        res.send(results);
});

// DELETE - removes a unique product by id
app.delete("/deleteProduct/:id", async (req, res) => {
        try {
                const id = Number(req.params.id);
                await client.connect();
                console.log("Product to delete :", id);
                const query = { id: id };

                // delete
                const results = await db
                        .collection("fakestore_catalog")
                        .deleteOne(query);
                res.status(200);
                res.send(results);
        } catch (error) {
                console.error("Error deleting product:", error);
                res.status(500).send({ message: "Internal Server Error" });
        }
});
