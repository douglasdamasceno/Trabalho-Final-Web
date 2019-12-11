// rotas
var controllerAtividade = require('../controllers/atividade_controller')();
var controllerUsuario = require('../controllers/usuario_controller')();

module.exports = function(app) {
	app.get('/atividades', controllerAtividade.atividades);
	app.get('/atividades/:id', controllerAtividade.getAtividade);
	app.post('/atividades', controllerAtividade.novo);
	app.put('/atividades/:id', controllerAtividade.atualiza);
	app.delete('/atividades/:id', controllerAtividade.deleta);

	
	app.post('/usuarios', controllerUsuario.novo);
	app.get('/usuarios', controllerUsuario.usuarios);
	app.get('/usuarios/:id', controllerUsuario.getUsuario);
	app.put('/usuarios/:id', controllerUsuario.atualiza);
	app.delete('/usuarios/:id', controllerUsuario.deleta);

}