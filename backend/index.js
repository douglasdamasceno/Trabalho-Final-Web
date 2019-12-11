// carregamento de módulos
var config = require('./config/express');

var app = config();

require('./config/database')('mongodb://localhost/trabalhoFinal');
// inicialização do servidor
app.listen(app.get('port'), function() {
	console.log('Servidor funcionando na porta ' + app.get('port'));
});
