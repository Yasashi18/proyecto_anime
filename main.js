
// ====================== FUNCIONES GENERALES ======================

// Animación de números
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current).toLocaleString();
    }, 20);
  });
}

// Intersection Observer para estadísticas
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumbers();
      observer.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  observer.observe(statsSection);
}

// ====================== NOTICIAS ======================
(function handleNewsSection() {
  const filterBtns = document.querySelectorAll('.filter-btn.news');
  const newsItems = document.querySelectorAll('.news-item');
  const sortSelect = document.getElementById('sortSelectNews');

  if (filterBtns.length && newsItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        newsItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      const grid = document.getElementById('newsGrid');
      const items = Array.from(newsItems);

      items.sort((a, b) => {
        switch(sortBy) {
          case 'popular':
            return parseInt(b.getAttribute('data-views')) - parseInt(a.getAttribute('data-views'));
          case 'recent':
            return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
          case 'alphabetical':
            return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
          default:
            return 0;
        }
      });

      items.forEach(item => grid.appendChild(item));
    });
  }

  // Bookmarks
  document.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        btn.style.color = '#ffc107';
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        btn.style.color = '';
      }
    });
  });

  // Hover para tarjetas de noticias
  document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Newsletter
  const newsletterBtn = document.querySelector('.newsletter-form .btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
      const emailInput = document.querySelector('.newsletter-form input');
      const email = emailInput.value;
      if (email) {
        alert('¡Gracias por suscribirte! Pronto recibirás las mejores noticias del anime.');
        emailInput.value = '';
      }
    });
  }
})();

// ====================== PELÍCULAS ======================
(function handleMoviesSection() {
  const filterBtns = document.querySelectorAll('.filter-btn.movies');
  const movieItems = document.querySelectorAll('.movie-item');
  const sortSelect = document.getElementById('sortSelectMovies');

  if (filterBtns.length && movieItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        movieItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      const grid = document.getElementById('moviesGrid');
      const items = Array.from(movieItems);

      items.sort((a, b) => {
        switch(sortBy) {
          case 'rating':
            return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
          case 'year':
            return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
          case 'alphabetical':
            return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
          default:
            return 0;
        }
      });

      items.forEach(item => grid.appendChild(item));
    });
  }

  // Favoritos
  document.querySelectorAll('.btn-favorite').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        btn.style.color = '#ff6b6b';
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        btn.style.color = '';
      }
    });
  });

  // Hover para tarjetas de películas
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
})();

// ====================== ANIME ======================
(function handleAnimeSection() {
  const filterBtns = document.querySelectorAll('.filter-btn.animes');
  const animeItems = document.querySelectorAll('.anime-item');
  const sortSelect = document.getElementById('sortSelectAnimes');

  if (filterBtns.length && animeItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        animeItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      const grid = document.getElementById('animeGrid');
      const items = Array.from(animeItems);

      items.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
          case 'recent':
            return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
          case 'alphabetical':
            return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
          default:
            return 0;
        }
      });

      items.forEach(item => grid.appendChild(item));
    });
  }

  // Favoritos
  document.querySelectorAll('.btn-favorite').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        btn.style.color = '#ff6b6b';
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        btn.style.color = '';
      }
    });
  });

  // Hover tarjetas anime horizontales
  document.querySelectorAll('.anime-card-horizontal').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Play overlay efecto
  document.querySelectorAll('.featured-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
      const overlay = image.querySelector('.play-overlay');
      overlay.style.opacity = '1';
    });

    image.addEventListener('mouseleave', () => {
      const overlay = image.querySelector('.play-overlay');
      overlay.style.opacity = '0';
    });
  });
})();
