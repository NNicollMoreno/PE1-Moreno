const express = require("express");
const ProductManager = require("../managers/ProductManager");

const router = express.Router();
const productManager = new ProductManager("./src/data/products.json");

router.get("/", (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const products = productManager.getAllProducts(limit);
  res.json(products);
});

router.get("/:pid", (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = productManager.getProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

router.post("/", (req, res) => {
  const newProduct = productManager.addProduct(req.body);
  res.status(201).json(newProduct);
});

router.put("/:pid", (req, res) => {
  const productId = parseInt(req.params.pid);
  const updatedProduct = productManager.updateProduct(productId, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

router.delete("/:pid", (req, res) => {
  const productId = parseInt(req.params.pid);
  const deletedProduct = productManager.deleteProduct(productId);
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

module.exports = router;
