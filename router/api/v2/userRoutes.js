const express = require("express");
const router = express.Router();
const userCollection =  require("./../../../collection/users"); //const que define los users

//users index
router.get("/", (req, res) => {
	userCollection.addUser(new Date())
  res.json({ users: userCollection.getUsers() });
});
// users show
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = userCollection.getUser(userId);
  res.json({user});
});

router.post("/", (req, res) => {
	const body = req.body;
	userCollection.addUser(body)
	const user = userCollection.getUser(body.name)
	res.status(201).json({user})})

	router.put("/:userId", (req, res)=>{
console.log(req.params.userId);
res.json({method: 'put'})
	/* 	 buscar por el userId el array de getUsers el user, actualizar los atributos antiguos por los nuevos, 
		y después actualizar el obj especifico en el array y regresar el user modificado */
	
	})
	router.delete("/:userId", (req, res)=>{
		/*Buscar por el suerId el array de getUsers el user,  */
		console.log(req.params.userId);
res.json({method: 'delete'})
	})
module.exports = router;
