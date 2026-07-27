document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize High Table System Cookies (12 Cookies)
  initContinentalCookies();

  // 2. Active Navigation Highlight
  const currentLocation = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentLocation) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 3. Contact Form Submission Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Marker Request dispatched to the Continental Concierge.");
      contactForm.reset();
    });
  }

  // 4. Render Cookie Vault Inspector if on Contact page
  renderCookieInspector();
});

/**
 * Sets 12 thematic cookies for the John Wick High Table Network
 */
function initContinentalCookies() {
  const cookiesToSet = [
    { name: "user_alias", value: "Baba_Yaga", days: 30 },
    { name: "clearance_level", value: "High_Table_VIP", days: 30 },
    { name: "account_status", value: "EXCOMMUNICADO", days: 7 },
    { name: "gold_coin_balance", value: "450", days: 60 },
    { name: "active_bounty_usd", value: "40000000", days: 14 },
    { name: "primary_safehouse", value: "NYC_Continental_Room_818", days: 90 },
    { name: "preferred_armorer", value: "Sommelier_Rome", days: 30 },
    { name: "blood_marker_bound", value: "Santino_D_Antonio", days: 365 },
    { name: "tactical_suit_lining", value: "Kevlar_Flexible_Armor", days: 180 },
    { name: "dog_status", value: "Safe_With_King", days: 365 },
    { name: "favorite_weapon", value: "HK_P30L_9mm", days: 180 },
    { name: "session_token", value: "jwt_cont_99812_table_auth", days: 1 }
  ];

  cookiesToSet.forEach(cookie => {
    setCookie(cookie.name, cookie.value, cookie.days);
  });
}

/**
 * Helper function to set a browser cookie
 */
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

/**
 * Renders stored cookies inside the Cookie Vault section on contact.html
 */
function renderCookieInspector() {
  const cookieListElem = document.getElementById("cookieList");
  if (!cookieListElem) return;

  const rawCookies = document.cookie.split(";");
  cookieListElem.innerHTML = "";

  if (!document.cookie || rawCookies.length === 0) {
    cookieListElem.innerHTML = "<p style='color: var(--text-muted);'>No active credentials stored in cookies.</p>";
    return;
  }

  rawCookies.forEach(item => {
    const [key, value] = item.trim().split("=");
    if (key) {
      const cookieCard = document.createElement("div");
      cookieCard.className = "cookie-item";
      cookieCard.innerHTML = `
        <span class="cookie-key">${key}</span>
        <span class="cookie-val">${decodeURIComponent(value || '')}</span>
      `;
      cookieListElem.appendChild(cookieCard);
    }
  });
}