// eslint-disable-next-line no-unused-vars
import css from './style.css';
import cheImage from './chef.jpg';
// import loadMenu from './tabController';

// loadMenu();

const container = document.getElementById('content');
container.innerHTML = '';
container.innerHTML = `<nav>
<ul>
  <li>HOME</li>
  <li>MENU</li>
  <li>CONTACT</li>
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

const homeBarner = document.getElementById('chef');
homeBarner.src = cheImage;
