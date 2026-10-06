import mongoose from 'mongoose';
const connectDb= async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL as string,{
        dbName:"MeshEats",
     });
     console.log("Database Connected");
    }
    catch(error){
        console.log(error);
    }
}
export default connectDb;