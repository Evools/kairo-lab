/**
 * Portfolio Interactive Core
 * Viktor — Design Engineer & Frontend Architect
 */

document.addEventListener('DOMContentLoaded', () => {
  initGlitchCycler();
  initStickyNav();
  initProjectFilters();
  initClipboardCopy();
  initSmoothScroll();
});

/* -------------------------------------------------------------------------- */
/* 1. Kinetic Glitch Word Cycler                                              */
/* -------------------------------------------------------------------------- */
function initGlitchCycler() {
  const glitchEl = document.getElementById('glitch-word');
  if (!glitchEl) return;

  const words = [
    'UI/UX Дизайн',
    'Frontend Код',
    'Дизайн-системы',
    'Web-продукты'
  ];

  let currentIndex = 0;

  setInterval(() => {
    glitchEl.classList.add('out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % words.length;
      glitchEl.textContent = words[currentIndex];
      glitchEl.classList.remove('out');
      glitchEl.classList.add('in');

      setTimeout(() => {
        glitchEl.classList.remove('in');
      }, 450);
    }, 280);
  }, 3200);
}

/* -------------------------------------------------------------------------- */
/* 2. Sticky Navigation & Scrollspy                                           */
/* -------------------------------------------------------------------------- */
function initStickyNav() {
  const nav = document.querySelector('.sticky-nav');
  const navLinks = document.querySelectorAll('.sticky-nav__link');
  const sections = document.querySelectorAll('section[id]');

  if (!nav) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Track active section for highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------------------- */
/* 3. Project Filter Tabs                                                     */
/* -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.projects__filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 4. Interactive Copy-to-Clipboard & Toast Feedback                          */
/* -------------------------------------------------------------------------- */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Скопировано в буфер: ${textToCopy}`);
      } catch (err) {
        showToast('Не удалось скопировать', true);
      }
    });
  });
}

function showToast(message, isError = false) {
  // Remove any existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (isError) toast.style.borderColor = '#ef4444';

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${isError ? '#ef4444' : '#D2FF74'}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      ${isError 
        ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
        : '<polyline points="20 6 9 17 4 12"></polyline>'
      }
    </svg>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* -------------------------------------------------------------------------- */
/* 5. Smooth Anchor Scrolling                                                 */
/* -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
