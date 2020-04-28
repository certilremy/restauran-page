/* eslint-disable import/no-cycle */
import loadHome from './home';
import LoadContact from './contact';

const loadMenu = () => {
  const container = document.getElementById('content');
  container.innerHTML = '';
  container.innerHTML = `<nav>
  <ul>
  <li id="home">HOME</li>
  <li id="menu">MENU</li>
  <li id="contact">CONTACT</li>
  </ul>
  </nav>
  
  <main>
  <h1>menu</h1>
  <img id="chef" alt="chef" />
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
    obcaecati odio quidem doloremque similique, est delectus recusandae,
    deserunt facere minima sequi temporibus quam cupiditate excepturi
    consequuntur ad doloribus commodi officiis?
  </p>
  </main>
  <footer>Design by Certil Remy</footer>
  </div>`;

  document.getElementById('menu').style.backgroundColor = '#242424';
  const contact = document.getElementById('contact');
  const home = document.getElementById('home');

  home.addEventListener('click', () => {
    loadHome();
  });

  contact.addEventListener('click', () => {
    LoadContact();
  });
};

export default loadMenu;
