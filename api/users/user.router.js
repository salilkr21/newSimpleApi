const {createUser,getUserById,getUser,updateUser,deleteUser,login}=require('./user.controller');
const router=require('express').Router();
const {checktoken}=require("../../auth/token_validation");

router.post('/',createUser);
router.get('/',checktoken,getUser);
router.get('/:id',checktoken,getUserById);
router.patch('/',checktoken,updateUser);
router.delete('/',checktoken,deleteUser);
router.post('/login',login);

module.exports=router;
