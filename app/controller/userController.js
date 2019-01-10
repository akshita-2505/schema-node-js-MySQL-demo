const User=require('../schema/userSchema');

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((data) =>{
        res.send(data);
     }).catch((err)=>{
        res.send(err)
    })
};



exports.getUser = (req,res) => {
 //   debugger;
    User.findAll({})
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send(err)
        })
}


exports.getUserById = (req,res) => {
    //debugger;
    User.findById(req.params.usersId)
        .then((data) => {
            res.send(data)
        }).catch((err) => {
        res.send(err)
    })
}

exports.userUpdateById=(req,res)=>{
    User.update(req.body,{where:{id:req.params.usersId}})
        .then((data) =>{
            if(data){
                res.send(data)
            }else{
                res.send(err)
            }
        }).catch((err)=>{
        res.send(err)
    });
};


exports.deleteUser=(req,res)=>{
    User.destroy({where:{id:req.params.usersId}})
        .then((data) =>{
            if(data){
                res.send("data deleted")
            }else{
                res.send(err)
            }
        }).catch((err)=>{
        res.send(err)
    });
};


