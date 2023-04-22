import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <header className="header">
        <a href='#' className='logo'>SergioCaridad.</a>
        <nav className='navbar'>
          <a href='#' className='active'>Inicio</a>
          <a href='#'>Sobre mi</a>
          <a href='#'>Skills</a>
          <a href='#'>Portfolio</a>
          <a href='#'>Contacto</a>
        </nav>
      </header>

      <section className='home'>
        <div className='home-content'>
          <h3>Hola, soy yo</h3>
          <h1>Sergio Caridad</h1>
          <h3>Y soy <span> desarrollador web</span></h3>
          <p>
          Hola! Mi nombre es Sergio y soy desarrollador web.
          Mi formación y mi experiencia me han permitido desarrollar 
          competencias en los distintos apartados del desarrollo web.
          </p>
          <div className='social-media'>
            <a href='https://twitter.com/SergioCaridad' target="_blank"><i class='bx bxl-twitter'></i></a>
            <a href='https://www.instagram.com/sergiocaridad' target="_blank"><i class='bx bxl-instagram' ></i></a>
            <a href='https://www.linkedin.com/in/sergiocaridad/' target="_blank"><i class='bx bxl-linkedin'></i></a>
          </div>
          <a href='https://www.linkedin.com/in/sergiocaridad/' className='btn'>Descargar CV</a>
        </div>
        <div className='home-img'>
          <img src='https://i.imgur.com/Yf9Kd0W.png'></img>
        </div>
      </section>
    </div>
  );
}

export default App;
