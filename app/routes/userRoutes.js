var express = require('express');
var router = express.Router();
const user=require('../controller/userController')

router.post('/users',user.addUser);
router.get('/users',user.getUser);

router.get('/users/:usersId',user.getUserById);
router.put('/users/:usersId',user.userUpdateById);
router.delete('/users/:usersId',user.deleteUser);


module.exports = router;
