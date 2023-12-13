//singleton
const users = [] 
module.exports = {
	getUsers: ()  => {return users}, 
	addUser: (user) => {users.push(user)},
	getUser: (userId) => {return users.find((user) => user.id == userId)}
}

