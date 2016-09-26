module.exports = {
	database: "ntasks_test",
	username: "postgres",
	password: "rea123",
	params: {
		host: "localhost",
		port: 5433,
		dialect: "postgres",
		logging: false,
		define: {
			underscored: true
		}
	},
	jwtSecret: "NTALK_TEST",
	jwtSession: {session: false}
};
