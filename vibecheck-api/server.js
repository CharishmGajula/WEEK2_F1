import express from "express";
import requestLogger from "./LOG/logger.js"
import globalErrorHandler from "./GLOBAL_ERROR/error_checker.js";
const app=express();

app.use(express.json());
app.use(requestLogger);
const vibe=[
    {
        "id":1,
        "song":"EAVREE!"
    },
    {
        "id":2,
        "song":"Gajuvaka pilla"
    },
    {
        "id":3,
        "song":"Gaaju Bomma"
    }
]


app.get("/",(req,res)=>
{
    res.status(200).send("<h1>WELCOME TO THE WORLD OF TECHNOLOGY</h1>");
})

app.get("/api/v1/vibes",(req,res)=>{
    res.status(200).json(vibe);
});

app.get("/api/v1/vibes/:id",(req,res)=>{
    const match=vibe.find(v=>v.id==req.params.id);
    if (!match) {
    return res.status(404).json({
      success: false,
      message: "That vibe is off the grid, not found."
    });
  }
  res.send(match);

});

app.get(globalErrorHandler);

app.listen(3001,()=>
{
    console.log("Server blasting off on port 3001");
});

