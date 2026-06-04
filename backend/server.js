require("dotenv").config();
const express = require('express');
const conn = require("./connection");
const app = express();
const cors = require('cors');
const crypt = require('bcrypt');
const jwk = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
//Create Account..........................................................................................
app.post("/create", async(req,res)=>{
    const {username,password}=req.body;
    const h_password = await crypt.hash(password,10);
    const insert ="insert into users(username,password) values(?,?)";
    conn.query(insert,[username,h_password],(err,result)=>{
        if (err) {
           return res.json({error:err});
        }
        return res.json("account Created");
    })

})
//Login...........................................................................................
app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    const select ="select * from users where username = ?";
    conn.query(select,[username],async(err,result)=>{
        if (err) {
            return res.json({error:err})
        }
        if (result.length <1) {
            return res.json(
                {
                code:50,
                message:"user Not Found"
            }
            );
        }
        const user = result[0];
        const ismatch = await crypt.compare(password,user.password);
        if (!ismatch) {
           return res.json(
            {
                code:100,
                message:"incorrect Password"
            }
            );
        }
         return res.json(
            {
                code:200,
                message:"login Success"
            }
         );
    })
})
//add Product........................................
app.post("/add-product",(req,res)=>{
    const {pname,in_price,out_price,stock,piece,exp_date,supplier,price}=req.body;
    
    const insert ="insert into product(p_name,in_price,out_price,p_stock,supplier,unit_in_price,expriy_date,piece,profit,unit_out_price) values(?,?,?,?,?,?,?,?,?,?)";
    conn.query(insert,[pname,in_price,out_price,stock*piece,supplier,price,exp_date,piece,out_price-in_price,piece*out_price],(err,result)=>{
        if (err) {
           return res.json({error:err});
        }
        return res.json("Product Added");
    })

})
//select * products.........................................................

app.get("/get-products",(req,res)=>{
    const select="SELECT * FROM product";
    conn.query(select,(err,result)=>{
         if (err) {
           return res.json({error:err});
        }
        return res.json(result);
    })
})
//delete product....................................................................
app.delete("/delete-product/:id",(req,res)=>{
    const product=req.params.id;
    const Delete ="delete from product where p_id=?";
    conn.query(Delete,[product],(err,result)=>{
         if (err) {
           return res.json({error:err});
        }
        return res.json("product Deleted");
    })
})
//get sigle product for to be updated..........................................................
app.get("/update/:id",(req,res)=>{
    const id=req.params.id
    const select="SELECT * FROM product where p_id=?";
    conn.query(select,[id],(err,result)=>{
         if (err) {
           return res.json({error:err});
        }
        return res.json(result[0]);
    })
})
//main Update fuction.................................................................
app.put("/edit/:id",(req,res)=>{
    const id = req.params.id;
    const {p_name,in_price,out_price,p_stock}=req.body;
    const update="UPDATE product set p_name=?,in_price=?,out_price=?,p_stock=? where p_id=?";
    conn.query(update,[p_name,in_price,out_price,p_stock,id],(err,result)=>{
        if (err) {
            return res.json({error:err})
        }
        return res.json("product Updated");
    })
})
//add supplier..............................................................
app.post("/add-supplier",(req,res)=>{
    const {name,phone,location}=req.body;
    const insert = "insert into supplier(sup_name,phone,location) values(?,?,?)";
    conn.query(insert,[name,phone,location],(err,result)=>{
        if (err) {
         return res.json({error:err})   
        }
        return res.json("supplier Added");
    })
})

// select Supplier.............................................................
app.get("/get-supplier",(req,res)=>{
    const select =" SELECT * FROM supplier";
    conn.query(select,(err,result)=>{
        if (err) {
            return res.json({error:err})
        }
        return res.json(result);
    })
})


//Server Startting Point.................................................................
app.listen(process.env.PORT,()=>{
    console.log("Running.....");
    console.log("Host:", process.env.DB_HOST);
})
