
import mongoose from 'mongoose';

export function connect(){
mongoose.connect(process.env.MONGO_USER!,{
    tls:true
})
.then(()=>{
    console.log("Your DataBase has been connnected");
}).catch((err)=>{
    console.log('Somthing wrong',err)
})
}