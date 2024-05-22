import './style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CardProducts } from './components/CardProducts';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
    const headerHTML = Header();
    const heroHTML = Hero();
    const cardProductsHTML = await CardProducts();

  appElement.innerHTML = `
    ${headerHTML}
    ${heroHTML}
    <main class="main">
      <section class="product-container">
      ${cardProductsHTML}
      </section>
    </main>
  `;
} else {
  console.error('El elemento con el id #app no existe.');
}

