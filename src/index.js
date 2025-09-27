import express from "express";
import router from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/orders", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
