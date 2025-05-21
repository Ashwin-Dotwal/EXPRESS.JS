import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"; // Add this if you still want to use body-parser

dotenv.config();
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // In case you're handling JSON payloads

const PORT = process.env.PORT || 3000;

app.post("/api/v1/user/register", (req, res) => {
  const obj = req.body;
  console.log(obj);

  res.status(200).json({
    success: true,
    message: "Account created successfully." // Fixed typo
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
