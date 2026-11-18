import mongoose, { connect, disconnect, set } from "mongoose";

import env from "@constants/environment";

const { MONGODB_URI } = env.MONGODB;

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) return;

  set("transactionAsyncLocalStorage", true);

  try {
    await connect(MONGODB_URI, {
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });

    const db = mongoose.connection.db;

    if (!db) {
      throw new Error();
    }

    await db.admin().command({
      ping: 1,
    });
  } catch (error) {
    console.error("\n---------------------------------");
    console.error("MONGODB ATLAS | CONNECTION FAILED");
    console.error("---------------------------------\n");

    await disconnect();
    process.exit(0);
  }
};

export default connectMongo;
