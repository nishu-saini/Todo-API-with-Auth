import mongoose from "mongoose";

export default function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Todos",
    })
    .then(() => console.log(`Database Conneted`))
    .catch((err) => console.log(err));
}
