const { Router } = require('express');
const { createUser, readUser, updateUser, deleteUser} = require('./../controllers/usersController');
const router = Router();

router.post("/", createUser)                                            //C reate
router.get("/", readUser)                                             //R ead
router.put("/:userId", updateUser)                                      //U pdate
router.delete("/:userId", deleteUser)                                   //D elete

module.exports = router