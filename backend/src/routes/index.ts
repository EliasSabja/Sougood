import Router from 'express';
const routes = Router();
const userRoutes = require("./user");
routes.use("/user", userRoutes);

export default routes;

