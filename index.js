import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
});
db.connect();

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
  
app.get("/login.ejs",(req,res)=>{
    res.render("login.ejs");
});

app.post("/login",async (req,res)=>{

});

app.get("/register.ejs",(req,res)=>{
    res.render("register.ejs");
});

app.post("/register.ejs",async (req,res)=>{
    const email=req.body.username;
    const password=req.body.password;
    let hashedPassword=await bcrypt.hash(password,10);
    try {
        await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,hashedPassword]);
    } catch (err) {
        console.log(err);        
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});