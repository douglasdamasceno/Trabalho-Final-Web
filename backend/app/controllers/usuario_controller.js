var model_usuarios = require('../models/usuario');
var Usuario = require('../models/usuario');
var controller = {}

module.exports = function(){
    var usuarios = model_usuarios();
    var usuario_id = 1;

    controller.novo = function(req,res){
        var nome1 = req.body.nome;
        var email1 = req.body.email;
        var senha1 = req.body.senha;
        
        var usuario = new Usuario({nome:nome1,email:email1,senha:senha1});//{_id:usuario_id++,nome:nome1,email:email1,senha:senha1}
        //usuarios.push(usuario);
        console.log('adicionar: ' + usuario);
	
        usuario.save(function(err) {
            if (err) {
                console.log(err);
                //res.redirect('/contatos/novo');
            } else {
                //res.redirect('/');
                res.json({"status":"Ok"});    
            }
        });
        
    }

    controller.usuarios = function(req,res){
        res.json(usuarios);
    }
    controller.atualiza = function(req,res){
        var id = parseInt(req.params.id);
        
        var nome1 = req.body.nome;    
        var email1 = req.body.email;
        var senha1 = req.body.senha;
        var editado = false;

        for (var i=0; i<usuarios.length; i++) {
            if(usuarios[i]._id===id){
                usuarios[i] = {_id:id,nome:nome1,email:email1,senha:senha1};
                editado = true;        
            }
        }
        if(editado){
            res.json({"status":"ok"});
        }else{
            res.send("usuario nao encontrado");    
        }
    }
    controller.getUsuario = function(req,res){
        var id = parseInt( req.params.id);
        var usuario;
        for(var i= 0;i<usuarios.length;i++){
            if(usuarios[i]._id===id){
                usuario = usuarios[i];
                break;
            }
        }
        if(usuario!=null){
            res.json({usuario});
        }else{
            res.send("Usuario não encontrado");
        }
    }
    controller.deleta = function(req,res){
        var id = parseInt(req.params.id);
        var deletado = false;
        for(var i =0;i<usuarios.length;i++){
            if(usuarios[i]._id===id){
                usuarios.splice(i,1);
                deletado = true;
                break;
            }
        }
        if(deletado){
            res.json({"status":"ok"});
        }else{
            res.json({"status":"Usuario não encontrado"});
        }
    }

    return controller;
};