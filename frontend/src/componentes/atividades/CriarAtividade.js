import React, { Component } from 'react';
import axios from 'axios';

export default class CriarAtividade extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      descricao: ''
    }
  }
  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    })  
  }

  onSubmit(e) {
        e.preventDefault();
        const atividade = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        
    };

        axios.post('http://localhost:3333/atividades', atividade)
            .then(res => console.log(res.data));
    
        this.setState({
            nome: '',
            descricao: '',
        });
    }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Nova Atividade</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      />
                </div>
                
                <div className="form-group">
                    <label>Descricao: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.descricao}
                      onChange={this.onChangeDescricao}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Cadastar Atividade" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}