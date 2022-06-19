import express from "express";
import configViewEngine from "./configs/viewEngine";
import "dotenv/config";
import initWebRouter from "./route/web";

const app = express();
const port = process.env.PORT;

//config
configViewEngine(app);
//init web route
initWebRouter(app);

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
