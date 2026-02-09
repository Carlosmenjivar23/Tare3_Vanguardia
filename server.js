const express = require("express");
require("dotenv").config();

const sequelize = require("./config/database");
const productoRoutes = require("./routes/producto.routes");

const app = express();
app.use(express.json());

app.use("/productos", productoRoutes);


sequelize.sync().then(() => {
  console.log("Base de datos conectada");

  app.listen(process.env.PORT, () => {
    console.log(`🔋 Servidor corriendo en http://localhost:${process.env.PORT}`);
  });
});
