const router=require('express').Router();
let User=require('../modals/users');


router.route('/').get(async(req,res)=>{
 
    const userFound=await User.find()
    if (userFound) {
      res.status(200).json(userFound)
    }
    else {
      res.status(400)
      throw new Error("users not found")
    }
  
});

router.route('/add').post((req,res)=>{
   const username=req.body.username;
   const newUser=new User({username});   
   newUser.save()
   .then(()=>res.json('User Added'))
   .catch(err=>res.status(400).json('Error: '+ err));
});
  
module.exports = router;
