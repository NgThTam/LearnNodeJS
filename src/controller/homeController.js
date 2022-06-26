import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
	connection.query("SELECT * FROM `user` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.render("./home.ejs", { dataUser: data });
	});
};
let getDetailPage = (req, res) => {
	let userID = req.params.userId;
	connection.query(
		"SELECT * FROM `user` WHERE `Id` = ?",
		[userID],
		(err, results, fields) => {
			let data = results.map((dt) => dt);

			return res.render("./detail.ejs", { UserDetail: data[0] });
		}
	);
};

module.exports = {
	getHomePage,
	getDetailPage,
};
