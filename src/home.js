/* eslint-disable import/no-cycle */

import cheImage from './chef.jpg';
import loadMenu from './menu';
import LoadContact from './contact';

const loadHome = () => {
  const container = document.getElementById('content');
  container.innerHTML = '';
  container.innerHTML = `<nav id='tab'>
  <ul>
  <li id="home">HOME</li>
  <li id="menu">MENU</li>
  <li id="contact">CONTACT</li>
</ul>
</nav>

<main>
<h1>Welcome to restaurant Certil</h1>
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
  document.getElementById('home').style.backgroundColor = '#242424';
  const homeBarner = document.getElementById('chef');
  homeBarner.src = cheImage;
  const contact = document.getElementById('contact');
  const menu = document.getElementById('menu');

  menu.addEventListener('click', () => {
    loadMenu();
  });

  contact.addEventListener('click', () => {
    LoadContact();
  });
};

export default loadHome;
