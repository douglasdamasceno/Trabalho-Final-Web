// modelo
const mongoose = require('mongoose')

module.exports = function() {
	console.log('definição de modelo Usuario.')
	var schema = mongoose.Schema({
	    nome: { 
	      type: String, 
	      required: true
		},
		senha:{
			type:String,
			required:true
		} ,
	    email: {
	      type: String, 
	      required: true, 
	      index: {
	        unique: true
	      }
		}
		
	}); 
	return mongoose.model('Usuario', schema);
};
