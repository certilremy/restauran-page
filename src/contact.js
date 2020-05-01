/* eslint-disable import/no-cycle */
import loadMenu from './menu';
import loadHome from './home';

const LoadContact = () => {
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
    <h1>Contact</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
      obcaecati odio quidem doloremque similique, est delectus recusandae,
      deserunt facere minima sequi temporibus quam cupiditate excepturi
      consequuntur ad doloribus commodi officiis?
    </p>
    </main>
    <footer>Design by Certil Remy</footer>
    </div>`;

  document.getElementById('contact').style.backgroundColor = '#242424';
  const menu = document.getElementById('menu');
  const home = document.getElementById('home');

  home.addEventListener('click', () => {
    loadHome();
    home.style.backgroundColor = 'none';
  });

  menu.addEventListener('click', () => {
    loadMenu();
    menu.style.backgroundColor = 'none';
  });
};

export default LoadContact;
