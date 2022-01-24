import React from 'react'
import styled from 'styled-components'
import './styles.css'


const TarefaContainer = styled.div`
  display: grid;
  width: 60vw;
  height: 60vh;
  grid-auto-flow: column;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  margin-right: 20px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  word-wrap: break-word;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    id: 0,
    regex: '',
    ordenacao: 'Cronológica',
  }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    const tarefasString = localStorage.getItem('tarefas');
    if (tarefasString) {
      const tarefasObj = JSON.parse(tarefasString);
      this.setState({ tarefas: tarefasObj });
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  onChangeRegex = (event) => {
    this.setState({ regex: event.target.value })
  }

  onKeyPressInput = (event) => {
    if (event.key === "Enter" || (event.which === 13)) {
      this.criaTarefa();
    }
  }

  validarTexto = (texto) => {
    return texto.replace(/ /g, "").length
  }

  criaTarefa = () => {
    if (this.state.id) {
      this.editarTarefa()
    } else {
      if (this.validarTexto(this.state.inputValue)) {
        const novaTarefa1 = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false,
        }
        const novaTarefa2 = [...this.state.tarefas, novaTarefa1]
        this.setState({
          tarefas: novaTarefa2,
          inputValue: '',
          regex: '',
          id: 0,
        })
      } else {
        alert('Digite uma novaTarefa3')
      }
    }
    this.inputTarefa.focus();
  }

  riscarTarefa = (id) => {
    const novaTarefa2 = this.state.tarefas.map((novaTarefa3) => {
      if (novaTarefa3.id === id) { novaTarefa3.completa = !novaTarefa3.completa }
      return novaTarefa3
    })
    this.setState({
      tarefas: novaTarefa2,
      inputValue: '',
      id: 0,
    })
  }

  // Desafio 1
  deletarTarefa = () => {
    const novaTarefa2 = this.state.tarefas.filter(novaTarefa3 => novaTarefa3.id !== this.state.id)
    this.setState({
      tarefas: novaTarefa2,
      inputValue: '',
      id: 0,
    })
  }

  // Desafio 3
  selectTarefa = (id) => {
    const novaTarefa3 = this.state.tarefas.find(novaTarefa3 => novaTarefa3.id === id)
    this.setState({
      id: novaTarefa3.id,
      inputValue: novaTarefa3.texto,
    })
    this.inputTarefa.focus();
  } 

  editarTarefa = () => {
    if (this.validarTexto(this.state.inputValue)) {

      const novaTarefa2 = this.state.tarefas.map((novaTarefa3) => {
        if (novaTarefa3.id === this.state.id) { novaTarefa3.texto = this.state.inputValue }
        return novaTarefa3
      })

      this.setState({
        tarefas: novaTarefa2,
        inputValue: '',
        id: 0,
      })
    } else {
      this.deletarTarefa()
    }
    this.inputTarefa.focus();
  }

  // Desafio 4
  apagarTodas = () => {
    this.setState({
      tarefas: [],
      inputValue: '',
      id: 0,
      index: 0,
      completa: false,
      regex: '',
      ordenacao: 'Cronológica'
    })
  }

  // Desafio 5 e 6
  ordenarPesquisarLista = (lista) => {
    switch (this.state.ordenacao) {
      case 'Crescente':
        lista.sort((a, b) => { return a.texto.toLowerCase() >= b.texto.toLowerCase() ? 1 : -1 })
        break
      case 'Decrescente':
        lista.sort((a, b) => { return a.texto.toLowerCase() > b.texto.toLowerCase() ? -1 : 1 })
        break
      default:
        break
    }
    if (this.state.regex) {
      const reg = new RegExp(this.state.regex, 'i');
      return lista.filter(novaTarefa3 => reg.test(novaTarefa3.texto))
    }
    return lista
  }

  limparPesquisa = () => {
    this.setState({ regex: '' })
  }

  // Desafio 6
  ordenarCrescente = () => {
    this.setState({ ordenacao: 'Crescente' })
  }

  ordenarDecrescente = () => {
    this.setState({ ordenacao: 'Decrescente' })
  }

  ordenarCronologica = () => {
    this.setState({ ordenacao: 'Cronológica' })
  }


  render() {
    const listaPendente = this.state.tarefas.filter(novaTarefa3 => !novaTarefa3.completa)
    const listaCompleta = this.state.tarefas.filter(novaTarefa3 => novaTarefa3.completa)

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            ref={(element) => { this.inputTarefa = element; }}
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            onKeyPress={this.onKeyPressInput}
          />
          <button onClick={this.criaTarefa}>{!this.state.id ? 'Adicionar' : 'Editar'}</button>
          {Boolean(this.state.id) && <button onClick={this.deletarTarefa}>Deletar</button>}
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Pesquisar:</label>
          <input value={this.state.regex} onChange={this.onChangeRegex} />
          <button onClick={this.limparPesquisa}>Limpar</button>
        </InputsContainer>
        <TarefaContainer>
          <div></div>
          <TarefaList>
            <h2>Pendentes</h2>
            {this.ordenarPesquisarLista(listaPendente).map(novaTarefa3 => {
              return (
                <Tarefa
                  key={novaTarefa3.id}
                  completa={novaTarefa3.completa}
                  onClick={() => { this.selectTarefa(novaTarefa3.id) }}
                  onDoubleClick={() => { this.riscarTarefa(novaTarefa3.id) }}
                >
                  {novaTarefa3.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
          <TarefaList>
            <h2>Completas</h2>
            {this.ordenarPesquisarLista(listaCompleta).map(novaTarefa3 => {
              return (
                <Tarefa
                  key={novaTarefa3.id}
                  completa={novaTarefa3.completa}
                  onClick={() => { this.selectTarefa(novaTarefa3.id) }}
                  onDoubleClick={() => { this.riscarTarefa(novaTarefa3.id) }}
                >
                  {novaTarefa3.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
        </TarefaContainer>
        <p>Ordenação atual: {this.state.ordenacao}</p>
        <InputsContainer>
          <button onClick={this.ordenarCrescente}>Crescente</button>
          <button onClick={this.ordenarDecrescente}>Decrescente</button>
          <button onClick={this.ordenarCronologica}>Cronológica</button>
        </InputsContainer>
        <br />
        <p>Apagar todas as tarefas:</p>
        <InputsContainer>
          <button onClick={this.apagarTodas}>Apagar</button>
        </InputsContainer>
      </div>
    )
  }
}
//Teste
export default App
