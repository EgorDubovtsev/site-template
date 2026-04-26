// Reusable HTML fragments injected into each page (kept inline to avoid fetch CORS on file://)

const HEADER_HTML = `
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <span class="logo-mark">А</span>
      <span class="logo-text">
        <span class="logo-name">АскаДент</span>
        <span class="logo-sub">Стоматология · Ижевск</span>
      </span>
    </a>
    <nav class="nav" data-nav>
      <a href="index.html">Главная</a>
      <a href="services.html">Услуги</a>
      <a href="specialists.html">Специалисты</a>
      <a href="reviews.html">Отзывы</a>
    </nav>
    <div class="header-cta">
      <a class="header-phone" href="tel:+79962189252">
        <svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>
        +7 (996) 218-92-52
      </a>
      <a href="#booking" class="btn btn-primary">Записаться</a>
    </div>
    <button class="menu-btn" data-menu-btn aria-label="Меню" aria-expanded="false">
      <svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
    </button>
  </div>
  <div class="mobile-menu" data-mobile-menu data-nav>
    <a href="index.html">Главная</a>
    <a href="services.html">Услуги</a>
    <a href="specialists.html">Специалисты</a>
    <a href="reviews.html">Отзывы</a>
    <a class="btn btn-primary" href="tel:+79962189252">Позвонить +7 (996) 218-92-52</a>
  </div>
</header>`;

const BOOKING_HTML = `
<section class="booking" id="booking">
  <div class="container">
    <div class="booking-card">
      <div>
        <span class="badge" style="background:rgba(255,255,255,.15);color:#fff;border:none;backdrop-filter:blur(8px);">Бесплатная консультация</span>
        <h2>Запишитесь на приём<br>уже сегодня</h2>
        <p>Перезвоним в течение 10 минут, подберём удобное время и врача. Никаких навязчивых продаж — только забота.</p>
      </div>
      <form class="booking-form" data-booking-form>
        <input required type="text" placeholder="Ваше имя">
        <input required type="tel" placeholder="+7 (___) ___-__-__">
        <select>
          <option>Консультация</option>
          <option>Лечение кариеса</option>
          <option>Гигиена и отбеливание</option>
          <option>Протезирование</option>
          <option>Имплантация</option>
        </select>
        <button type="submit">Записаться на приём</button>
        <p class="consent">Отправляя форму, вы соглашаетесь с обработкой персональных данных</p>
      </form>
    </div>
  </div>
</section>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-about">
      <div class="logo">
        <span class="logo-mark">А</span>
        <span class="logo-name" style="font-size:20px;">АскаДент</span>
      </div>
      <p>Современная стоматология в Ижевске. Демократичные цены, бережный подход и безупречное качество — для вас и вашей семьи.</p>
    </div>
    <div>
      <h4>Навигация</h4>
      <ul>
        <li><a href="index.html">Главная</a></li>
        <li><a href="services.html">Услуги и цены</a></li>
        <li><a href="specialists.html">Специалисты</a></li>
        <li><a href="reviews.html">Отзывы</a></li>
      </ul>
    </div>
    <div>
      <h4>Контакты</h4>
      <ul>
        <li><svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg><a href="tel:+79962189252">+7 (996) 218-92-52</a></li>
        <li><svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>ул. 40 лет Победы, д. 89, Ижевск</li>
        <li><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Пн–Сб 9:00–20:00</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">© <span id="year"></span> АскаДент. Все права защищены. Лицензия Министерства здравоохранения РФ.</div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const h = document.querySelector("[data-include='header']");
  const b = document.querySelector("[data-include='booking']");
  const f = document.querySelector("[data-include='footer']");
  if (h) h.outerHTML = HEADER_HTML;
  if (b) b.outerHTML = BOOKING_HTML;
  if (f) f.outerHTML = FOOTER_HTML;
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
