import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store/Store';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
        <Navbar />
          <Switch>
            <div style={{minHeight: "80vh"}}>
              <Route exact path="/">
                <Login />
              </Route>
              
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/home">
                <Home />
              </Route>

              <Route path="/cadastrousuario">
                <CadastroUsuario />
              </Route>

              <Route path="/temas">
                <ListaTema />
              </Route>

              <Route path="/posts">
                <ListaPostagem />
              </Route>

              <Route exact path='/formularioPostagem'>
              <CadastroPost />
              </Route>

              <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
              </Route>
          
              <Route exact path='/formularioTema'>
              <CadastroTema />
              </Route>

              <Route exact path='/formularioTema/:id'>
              <CadastroTema />
              </Route>

              <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
              </Route>

              <Route path='/deletarTema/:id'>
              <DeletarTema />
              </Route>



        </div>
        </Switch>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
