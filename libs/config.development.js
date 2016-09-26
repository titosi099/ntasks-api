module.exports = {
	database: "ntasks",
	username: "postgres",
	password: "rea123",
	params: {
		host: "localhost",
		port: 5433,
		dialect: "postgres",
		define: {
			underscored: true
		}
	},
	jwtSecret: "Nta$k-AP1",
	jwtSession: {session: false}
};