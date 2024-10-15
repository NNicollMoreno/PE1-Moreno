const express = require("express");
const productsRouter = require("./routes/productsRouter");
const cartsRouter = require("./routes/cartsRouter");

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
