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
  
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.post("/login",async (req,res)=>{
   const username= req.body.username;
   const password=req.body.password;
    try{
        const result= await db.query("SELECT * FROM users WHERE email=$1",[username]);
        if(result.rows.length>0){
            const userPassword = result.rows[0].password;
            if(bcrypt.compare(password,userPassword)){
                res.render("demos.ejs");
            }
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.post("/register",async (req,res)=>{
    const email=req.body.username;
    const password=req.body.password;
    const confirmPassword=req.body.conf;
    if(password===confirmPassword){
        try{
            const hashedPassword=await bcrypt.hash(password,10);
            await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,hashedPassword]);
            res.render("demos.ejs");
        } catch (err) {
            console.log(err);        
        }
    }
});

app.get("/teacherlogin",(req,res)=>{
    res.render("teacherlogin.ejs");
});

app.get("/teacherregister",(req,res)=>{
    res.render("teacherregister.ejs");
});

app.post("/teacherlogin",async (req,res)=>{
    const username= req.body.username;
   const password=req.body.password;
    try{
        const result= await db.query("SELECT * FROM teacher_user WHERE email=$1",[username]);
        if(result.rows.length>0){
            const userPassword = result.rows[0].password;
            if(bcrypt.compare(password,userPassword)){
                res.render("demos.ejs");
            }
        }
    } catch (err) {
        console.log(err);
    }
});

app.post("/teacherregister",async (req,res)=>{
    const Email=req.body.username;
    const Password=req.body.password;
    const ConfirmPassword=req.body.conf;
    if(Password===ConfirmPassword){
      try{
            const HashedPassword=await bcrypt.hash(Password,10);
            await db.query("INSERT INTO teacher_user (email,password) VALUES ($1,$2)",[Email,HashedPassword]);
            res.render("demos.ejs");
        } catch (err) {
            console.log(err);        
        }
}});

app.get ("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get ("/achivement",(req,res)=>{
    res.render("achivement.ejs");
});

app.get ("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.get ("/demos",(req,res)=>{
    res.render("demos.ejs");
});

app.get ("/skills",(req,res)=>{
    res.render("skills.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});