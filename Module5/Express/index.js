const swaggerUi = require("swagger-ui-express");
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

const express = require("express");
const app = express();
const port = 3000;

swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Users Exercise
app.use(express.json());
app.use("/users", userRoutes);
app.use("/", express.static("public"));

//Calculator Exercise
app.use("/calculator", calculatorRoutes);

//Lecture practice
app.use("/myTest", testRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Exercise 1 : Create a basic back-end application with multiple web servers running on different ports

//const app2 = express()
//const port2 = 80

// app2.get('/', (req, res) => {
//  res.send('Im your second server')
// })

// app2.get('/Two', (req, res) => {
//  res.send('Im your second server with /two')
// })

// app2.listen(port2, () => {
//  console.log(`Example app listening at http://localhost:${port2}`)
// })
