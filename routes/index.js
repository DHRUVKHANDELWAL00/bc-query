const express=require('express')
const router=express.Router();
const {getAllItems,getData,postData}=require('../controllers/index')
router.route('/test').get(getAllItems);
module.exports=router;