import mongoose from "mongoose";

export default function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Todos",
    })
    .then((c) => console.log(`Database Conneted ${c.connection.host}`))
    .catch((err) => console.log(err));
}
