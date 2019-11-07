var model_atividade = require('../models/atividades');

var controller = {};

module.exports = function() {
	var atividades = model_atividade();
	var atividade_id = 1;

	controller.novo = function(req, res) {
        var nome1 = req.body.nome;
        var descricao1 = req.body.descricao;

        var rua1 = req.body.rua;
        var cidade1 = req.body.cidade;
        var estado1 = req.body.estado;
        
        var data1 = req.body.data;
        var horario1 = req.body.horario;
        

        var atividade = { _id: atividade_id++, nome: nome1, 
            descricao:descricao1, rua:rua1, cidade:cidade1, estado:estado1, data:data1,
            horario:horario1  };

		console.log('adicionar: ' +atividade);
		atividades.push(atividade);
		res.json({ "status": "OK"}) ;
	};
    controller.getAtividade = function(req, res) {
        id = parseInt(req.params.id);
        var atividade;
		var atividaeEncontrado = false;
		for (var i=0; i<atividades.length; i++) {
			if (atividades[i]._id === id) {
                atividade = atividades[i];
                atividaeEncontrado = true;
				break;
			}
		}
		if(atividaeEncontrado){
			res.json(atividade) ;
		}else{
			res.json({"status":"Atividade nao encontrado"}) ;	
		}
    }
	controller.atualiza = function(req, res) {
		id = parseInt(req.params.id);
		
        var nome1 = req.body.nome;
        var descricao1 = req.body.descricao;

        var rua1 = req.body.rua;
        var cidade1 = req.body.cidade;
        var estado1 = req.body.estado;
        
        var data1 = req.body.data;
        var horario1 = req.body.horario;
        

        var editado = false;
		for (var i=0; i<atividades.length; i++) {
			if (atividades[i]._id === id) {
				atividades[i] = { _id: id, nome: nome1, 
                    descricao:descricao1, rua:rua1, cidade:cidade1, estado:estado1, data:data1,
                    horario:horario1  };
				editado = true;
				break;
			}
		}
		if(editado){
			res.json({"status":"ok"}) ;
		}else{
			res.json({"status":"Atividade nao encontrado"}) ;	
		}	
	};

	controller.deleta = function(req, res) {
		id = parseInt(req.params.id);
		var deleted = false;
		for (var i=0; i<atividades.length; i++) {
			console.log("produto_id: " + atividades[i]._id);
			if (atividades[i]._id === id) {
				atividades.splice(i, 1);
				deleted = true;
				break;
			}
		} 
		if (deleted)
			res.json(atividades);
		else {
			res.json({ "status": "Could not find element to delete with _id:" + id});
		}

	};

	controller.atividades = function(req,res) {
		res.json(atividades);
	};

	return controller;
};
