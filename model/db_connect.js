import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://backend:Rk@61296@cluster0.8iyvg.mongodb.net/betest?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
.then(function(){
    console.log("Database connected")
})  
.catch((err) => {
    console.log(err.message)
  
})
