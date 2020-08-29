import User from '../model/user.js'

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

const controllers = {
    
    signUpPost : (req, res) => {
        const saltRounds = 10
        bcrypt.hash(req.body.password, saltRounds, function(err, hashedPassword){
        req.body.password = hashedPassword
        User.create(req.body)
            .then((user, err) => {
                if (err) {
                    res.json({
                        status : 400,
                        message : "Mongodb Cannot create new user",
                        error : err
                    })
                }
                res.json({
                    status : 200,
                    message : "Registration Successful",
                    user : user
                })
            }
            )
   
        })
        
    
    },

    
    logInPost : (req, res, next) => {
        
        User.findOne({userName : req.body.userName}, (err, user) => {
            console.log(user)
            
           bcrypt.compare (req.body.password, user.password, (err, result) => {
               if(err) {
                   res.send("password don't match")
               }
               else if (result == true){
                
                  var token = jwt.sign({userName :  req.body.userName}, 'secret', (err, token) => {
                      req.body.token = token
                      next()
  
                  })

               }

           }) 

            

         
       })
      }
}


    export default controllers

