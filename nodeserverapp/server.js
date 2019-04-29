var express = require('express');
var app = express();
var mongodb = require('mongodb');
var cors = require('cors');
var bp = require('body-parser');
var router = express.Router(); //Server side router
var path = require('path');

app.use(cors())
app.use(bp.json())

app.use("/static/js",express.static(path.join(__dirname,'static','js')))
app.use("/static/css",express.static(path.join(__dirname,'static','css')))

let url = "mongodb://127.0.0.1:27017";
let MongoClient = mongodb.MongoClient;
router.route('/products').get((req,res)=>{
    //code to get data from mongodb
    //connect to mongodb server
    //use MongoClient --> mongodb
    //get the records
    //pass the data in json

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }
        else{
            let collection = db.db("SapientDB").collection("productlist");
            collection.find({}).toArray((err,result)=>{
                if(result.length){
                    res.json(result); //sending the json response
                }
            })
        }
    })
})

router.route('/addproduct').post((req,res)=>{
    console.log(req.body)
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }
        else{
            let collection = db.db("SapientDB").collection("productlist");
            collection.insertOne(req.body).then((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})

router.route('/validatelogin').post((req,res)=>{
    if(req.body.username === "samravan@publicissapient.com" && req.body.password === "123456"){
        res.send("success");
    }
    else{
        res.send("failure");
    }
})


router.route('/deleteproduct').post((req,res)=>{
    console.log(req.body)
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }
        else{
            let collection = db.db("SapientDB").collection("productlist");
            collection.deleteOne({"id":req.body.theId}).then((err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})

router.route('/incrementlikes').post((req,res)=>{
    console.log(req.body)
    MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
        if(err){
            console.log(err);
        }
        else{
            let collection = db.db("SapientDB").collection("productlist");
            collection.findOneAndUpdate({"id":req.body.id},{$inc:{"likes":1}}).then((err,result)=>{
                if(!err){
                    res.send(result)
                }
            })
        }
    })
})

app.use('/',router);
app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:__dirname})
})
app.use((req,res)=>{
    res.sendFile("index.html",{root:__dirname})
    // if(res.statusCode == 404);
    // res.send("Error !")
});
app.listen(5000,()=>{
    console.log("Server running at port 5000!");
})