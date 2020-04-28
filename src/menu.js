/* eslint-disable import/no-cycle */
import loadHome from './home';
import LoadContact from './contact';
import foodIgm1 from './menu1.jpg';
import foodImg2 from './menu2.jpg';
import foodImg3 from './menu3.jpg';

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
  <div class="food-list">
    <div class="single-food">
      <img id="food1" alt="">
      <h2>Food name</h2>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div class="single-food">
     <img id="food2" alt="">
     <h2>Food name</h2>

     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
   </div>

   <div class="single-food">
     <img id="food3" alt="">
     <h2>Food name</h2>

     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
   </div>
  </div>

  </main>
  <footer>Design by Certil Remy</footer>
  </div>`;

  document.getElementById('menu').style.backgroundColor = '#242424';
  const contact = document.getElementById('contact');
  const home = document.getElementById('home');
  const food1 = document.getElementById('food1');
  const food2 = document.getElementById('food2');
  const food3 = document.getElementById('food3');

  food1.src = foodIgm1;
  food2.src = foodImg2;
  food3.src = foodImg3;
  home.addEventListener('click', () => {
    loadHome();
  });

  contact.addEventListener('click', () => {
    LoadContact();
  });
};

export default loadMenu;
