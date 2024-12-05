const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const dbName = "WEEK-4";

async function main() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
