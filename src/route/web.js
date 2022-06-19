import express from "express";
import getPage from "../controller/homeController";

let router = express.Router();

const initWebRouter = (app) => {
	// router.get("/", (req, res) => {
	// 	res.render("./home.ejs");
	// });
	// router.get("/shop.ejs", (req, res) => {
	// 	res.render("./shop.ejs");
	// });

	router.get("/", getPage.getHomePage);
	router.get("/shop.ejs", getPage.getShopPage);

	return app.use("/", router);
};

export default initWebRouter;
