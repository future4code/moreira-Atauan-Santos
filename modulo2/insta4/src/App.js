import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const FormInput = styled.input`
  margin-top: 5px;
  padding-left: 5px;
  height: 25px;
`;
const FormButton = styled.button`
  height: 25px;
  margin-top: 5px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Atauan",
        fotoUsuario: "https://cdn.discordapp.com/attachments/920166940574613514/930589387136311376/AirBrush_20201201210051.jpg",
        fotoPost: "https://cdn.discordapp.com/attachments/912387631457902612/930932584878325780/eally_fficient_t_ausing_rauma.png",
      },
      {
        nome: " C&A",
        fotoUsuario:
          "https://cdn.discordapp.com/attachments/903634234030317579/930925000368726066/25674.png",
        fotoPost:
          "https://cdn.discordapp.com/attachments/903634234030317579/930924561908772875/baixados_1.jfif",
      },
      {
        nome: "Jack Peralta",
        fotoUsuario:
          "https://cdn.discordapp.com/attachments/903634234030317579/930925266660888586/250.png",
        fotoPost:
          "https://cdn.discordapp.com/attachments/903634234030317579/930925330225569842/images.png",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = (event) => {
    event.preventDefault();
    const novoPost = {
      nome: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div className={"app-container"}>
        <FormPost>
          <FormInput
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Digite Seu Nome"}
          />
          <FormInput
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Cole a URL da sua foto aqui."}
          />
          <FormInput
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Cole a URL do seu Post"}
          />
          <FormButton onClick={this.adicionaPost}>Adicionar</FormButton>
        </FormPost>

        {listaDePosts}
      </div>
    );
  }
}

export default App;
