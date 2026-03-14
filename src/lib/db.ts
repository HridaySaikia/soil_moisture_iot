import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const globalForMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient>;

if (!globalForMongo._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  globalForMongo._mongoClientPromise = client.connect();
}

clientPromise = globalForMongo._mongoClientPromise;

export default clientPromise;