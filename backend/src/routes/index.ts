import Router from 'express';

const routes = Router();

const userRoutes = require("./user");
const loginRoutes = require("./login");

routes.use("/user", userRoutes);
routes.use("/login", loginRoutes);

export default routes;

