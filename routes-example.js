const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our home page');
});

app.get('/products', (req, res) => {
  const products = [
    { id: 1, label: 'product 1' },
    { id: 2, label: 'product 2' },
    { id: 3, label: 'product 3' }
  ];
  res.json(products);
});

// ✅ Get a single product by ID
app.get('/products/:id', (req, res) => {
  const products = [
    { id: 1, label: 'product 1' },
    { id: 2, label: 'product 2' },
    { id: 3, label: 'product 3' }
  ];

  const productId = parseInt(req.params.id);
  const singleProduct = products.find(product => product.id === productId);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send('Product not found! Please try a different ID.');
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is now running at http://localhost:${port}`);
});
