import express from "express";
import requestLogger from "./LOG/logger.js"
const app=express();

app.use(express.json());

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
];

app.get("/",(req,res)=>
{
    res.status(200).send("Welcome to the page");
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

app.listen(5070,()=>
{
    console.log("🚀 Server blasting off on port 5070");
})