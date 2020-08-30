import express from 'express'
import userControllers from '../Controllers/usercntrl.js'
import postControllers from '../Controllers/postcntrl.js'
import cookieParser from 'cookie-parser'
import cookieHandler from './cookies.js'
import Cors from 'cors';

const Router = express()

Router.use(cookieParser())

Router.use(Cors());
 
//User SignUp
Router.post('/userSignUpPost', userControllers.signUpPost)


//User Login
Router.post('/userLoginPost', userControllers.logInPost, cookieHandler.sendCookie)

//To add a post
Router.post('/addPost', cookieHandler.cookieRecieved, postControllers.addPosts)


// To view all posts
Router.get('/viewPosts', postControllers.viewPosts)

//To like a post 
Router.post('/likePost/:id', postControllers.likePost)

//To comment on a post 
Router.post('/commentOnPost/:id', postControllers.commentOnPost)


export default Router