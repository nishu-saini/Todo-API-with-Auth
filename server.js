import app from "./app.js";
import connectDB from "./data/database.js";

// connect database..
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
