import express from "express";
import getPage from "../controller/homeController";
import bodyParser from "body-parser";

let router = express.Router();

const initWebRouter = (app) => {
	// router.get("/", (req, res) => {
	// 	res.render("./home.ejs");
	// });
	// router.get("/shop.ejs", (req, res) => {
	// 	res.render("./shop.ejs");
	// });

	router.get("/", getPage.getHomePage);
	router.get("/detail/:userId", getPage.getDetailPage);
	router.post("/createNew-User", getPage.createNewUser);

	return app.use("/", router);
};

export default initWebRouter;
