/**
 * Created by gerry on 2016/12/30.
 */
module.exports = {
	port: 3000,
	session: {
		secret: 'hobbiton',
		key: 'hobbiton',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/myblog'
};