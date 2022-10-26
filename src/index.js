import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/router.js"

dotenv.config();

try {
    mongoose.connect(process.env.MONGO_DB);
    console.log(`Database successfully connected`);
} catch (error) {
    console.log(`Database connection was unsuccessful`);
}

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
