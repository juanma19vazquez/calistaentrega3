const express = require("express");
const { client } = require("pg");
const { Productos } = require("./Productos");

const router = express.Router();
router.get("/", async (req, res) => {
    
    const config = {
        user: "postgres",
        host: "localhost",
        password: "",
        database: "listadeproductos",
     }

    const client = new Client(config);
    await client.connect();

    const responseBD = await client.query("Select * from productos");

    console.log(responseBD);

    return res.json({
        success: true,
        productList:Productos
})
})