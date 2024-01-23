const swaggerUi = require("swagger-ui-express");
const ecommerceRoutes = require("./routes/ecommerceRoutes")
const express = require('express');
const app = express();
const port = 3002;

swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/", express.static("public"));

app.use('/api', ecommerceRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
