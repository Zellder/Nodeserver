const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();

var port = process.env.PORT || 3000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
 
//Nova conexão com tratamento de erro
mongoose.connect("mongodb+srv://EdmilsonCarlos:Ed88662843@edmilsoncarlos.s5dxu.mongodb.net/Player?retryWrites=true&w=majority").then(() => {
    console.log('Conectado no BD...');
}).catch((e) => {
    console.log('Erro ao Conectar no BD...: ', e.message)
});
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}))


//--------------LOGIN-------------//
app.get('/login/:user/:password',function (req,res){

    
    var msg_res = {};
    msg_res.status = 200;
    msg_res.message = "";

    var login_temp = {};
    login_temp.user = req.params.user;
    login_temp.password = req.params.password;



    res.status(msg.res.status).json(msg_res);

});

//--------------REGISTER------------//
app.post('/register',function (req,res){

    
    var msg_res = {};
    msg_res.status_code = 200;
    msg_res.msg_text= "";

    var login_temp = {};
    login_temp.user = req.body.user;
    login_temp.password = req.body.password;



    res.status(msg.res.status_code).json(msg_res);

});

/*const schema = new Schema({

      name:{
          type: String,
          required: [true, "Nome é obrigatório!"],
          trim: true,
          unique:true
      },
      senha:{

        type: String,
        required: [true,"Senha é obrigatório"]
      },
      level:{
          type: Number,
          required: [true, "Level é obrigatório"]
      }

})

const Player = mongoose.model("Player", schema);

app.get("/player/:name", function(req, res, next){

    Player.find({name: req.params.name}).then(data =>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    })
});

app.post("/player", function(req, res, next){

    var playerTamp = new Player(req.body);

    playerTamp.save().then(data => {
        res.status(200).send({
            message: "Done"
        });
    }).catch(e =>{
        res.status(400).send({
            message : "erro",
            erro: e + " "
        });
    });
});

app.put("/player/:name", function(req, res, next){
    var query = (req.params.name);

    Player.findByIdAndUpdate(query, req.body,(erro, data)=>{
        if(erro){
            res.status(500).send(erro);
        }else{
            res.status(201).send("done");
        }
    })
})*/

app.listen(port, function(){
    console.log("Server listening on port " + port + "...");
});