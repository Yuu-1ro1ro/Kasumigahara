(() => {
  const data = SITE_DATA;

  const $ = (selector) => document.querySelector(selector);
  const setLink = (selector, href) => {
    const element = $(selector);
    if (!element) return;
    element.href = href || "#";
    if (!href || href === "#") {
      element.addEventListener("click", (event) => event.preventDefault());
    }
  };

  const useImageOrFallback = (img, fallbackElement) => {
    if (!img) return;
    img.addEventListener("error", () => {
      img.hidden = true;
      if (fallbackElement) fallbackElement.hidden = false;
    });
  };

  if ($("#siteName")) $("#siteName").textContent = data.siteName;
  if ($("#siteNameEn")) $("#siteNameEn").textContent = data.siteNameEn;
  if ($("#heroTitle")) $("#heroTitle").innerHTML = data.hero.title;
  if ($("#heroDescription")) $("#heroDescription").innerHTML = data.hero.description;
  if ($("#currentYear")) $("#currentYear").textContent = new Date().getFullYear();

  setLink("#headerGameLink", data.links.game);
  setLink("#heroGameLink", data.links.game);
  setLink("#joinGameLink", data.links.game);
  setLink("#footerRoblox", data.links.robloxGroup);
  setLink("#footerDiscord", data.links.discord);
  setLink("#rulesLink", data.links.rules);
  const headerImage = $("#headerImage");
  if (headerImage && data.images.header) headerImage.style.backgroundImage = `url("${data.images.header}")`;

  const hero = $("#hero");
  if (hero && data.images.hero) hero.style.backgroundImage = `url("${data.images.hero}")`;

  const headerLogo = $("#headerLogo");
  const footerLogo = $("#footerLogo");
  if (headerLogo) {
    headerLogo.src = data.images.logo;
    useImageOrFallback(headerLogo, headerLogo.nextElementSibling);
  }
  if (footerLogo) {
    footerLogo.src = data.images.logo;
    useImageOrFallback(footerLogo, footerLogo.nextElementSibling);
  }

  if ($("#aboutCopy")) $("#aboutCopy").innerHTML = data.about.map((paragraph) => `<p>${paragraph}</p>`).join("");

  if ($("#unitList")) $("#unitList").innerHTML = data.units.map((unit, index) => `
    <article class="unit-card">
      <div class="unit-image" style="${unit.image ? `background-image:url('${unit.image}')` : ""}"></div>
      <div class="unit-body">
        <span class="unit-meta">${String(index + 1).padStart(2, "0")} / ${unit.english}</span>
        <h3>${unit.name}</h3>
        <p>${unit.description}</p>
      </div>
    </article>
  `).join("");

  if ($("#developmentList")) $("#developmentList").innerHTML = data.development.map((item) => {
    const progress = Math.min(100, Math.max(0, Number(item.progress) || 0));
    return `
      <article class="development-card">
        <div class="development-image" style="${item.image ? `background-image:url('${item.image}')` : ""}"></div>
        <div class="development-body">
          <div class="development-top">
            <h3>${item.title}</h3>
            <span class="development-percent">${progress}%</span>
          </div>
          <div class="progress" aria-label="${item.title} ${progress}%">
            <span style="width:${progress}%"></span>
          </div>
          <p>${item.description}</p>
        </div>
      </article>
    `;
  }).join("");

  const announcements = [...data.announcements].sort((a, b) => new Date(b.date) - new Date(a.date));
  if ($("#announcementList")) $("#announcementList").innerHTML = announcements.map((item) => `
    <article class="announcement-item">
      <time datetime="${item.date}">${item.date.replaceAll("-", ".")}</time>
      <span class="announcement-category">${item.category}</span>
      <h3>${item.title}</h3>
    </article>
  `).join("");

  if (announcements.length && $("#tickerDate") && $("#tickerText")) {
    $("#tickerDate").textContent = announcements[0].date.replaceAll("-", ".");
    $("#tickerText").textContent = announcements[0].title;
  }

  const topics = [...data.topics].sort((a, b) => new Date(b.date) - new Date(a.date));
  if ($("#topicList")) $("#topicList").innerHTML = topics.map((item) => `
    <article class="topic-card">
      <div class="topic-image" style="${item.image ? `background-image:url('${item.image}')` : ""}"></div>
      <div class="topic-body">
        <div class="topic-meta">
          <time datetime="${item.date}">${item.date.replaceAll("-", ".")}</time>
          <span>${item.category}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");

  const menuButton = $("#menuButton");
  const globalNav = $("#globalNav");
  menuButton.addEventListener("click", () => {
    const open = globalNav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  const header = $("#siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("compact", window.scrollY > 50);
  }, { passive: true });
})();
