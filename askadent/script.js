// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", menu.classList.contains("open"));
    });
  }

  // Mark active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav] a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Booking form
  const form = document.querySelector("[data-booking-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const card = form.closest(".booking-card");
      if (!card) return;
      form.outerHTML = `
        <div class="success">
          <div class="success-icon">✓</div>
          <p style="margin-top:12px;font-size:18px;font-weight:600;">Заявка принята!</p>
          <p style="font-size:14px;color:rgba(255,255,255,.85);">Мы свяжемся с вами в ближайшее время.</p>
        </div>`;
    });
  }
});
