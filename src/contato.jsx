import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'

function Contato() {


  return (
    <>
<Header></Header>
<Navbar></Navbar>
<div class="container">
    <h2>Formulário de Contato</h2>
    <form action="#" method="post">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required/>
      </div>
      <div class="form-group">
        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome" required/>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento" required/>
      </div>
      <div class="form-group">
        <label for="mensagem">Mensagem de Contato:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
      </div>
      <div class="form-group">
        <input type="submit" value="Enviar"/>
      </div>
    </form>
  </div>
<Footer></Footer>
    </>
  )
}

export default Contato
