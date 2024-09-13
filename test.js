const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://yashtyagis2016:gH6Sa0ecioZ9Owh7@cluster0.lsfl3tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection (optional)
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.error);
