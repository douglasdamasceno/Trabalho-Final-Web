// rotas
var controller = require('../controllers/atividade_controller')();

module.exports = function(app) {
	app.get('/atividades', controller.atividades);
	
	app.get('/atividades/:id', controller.getAtividade);
	
	app.post('/atividades', controller.novo);

	app.put('/atividades/:id', controller.atualiza);

	app.delete('/atividades/:id', controller.deleta);
}