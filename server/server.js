import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/connection.js";
// import ImportData from "./DataImport.js";
import productRoute from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
// app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });


const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`server run in port ${PORT}`));