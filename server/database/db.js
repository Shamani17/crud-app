import mongoose from "mongoose";


const Connection=async(username,password)=>
{
    const URL=`mongodb+srv://shamani17:helloworld@crud-app.ddguba7.mongodb.net/?retryWrites=true&w=majority`;
    try
    {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch(error)
    {
        console.log('Error while with the datbase',error);
    }
}

export default Connection;