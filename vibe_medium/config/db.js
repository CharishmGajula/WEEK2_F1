import mongoose from "mongoose";


function connect()
{
    try{
        const con=mongoose.connect(process.env.db_url);
        console.log(`connected`);
    }
    catch{
        console.log("Sorry issue");
        
    }
}
export default connect;