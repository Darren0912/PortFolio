// Scroll animation
document.querySelectorAll('.fade-in').forEach(el => {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }).observe(el);
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); 
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  // Modal
  function openModal(title, desc, link) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-link').href = link;
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // Animate circle bars when in view
    document.querySelectorAll('.circle').forEach(circle => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percent = parseInt(circle.dataset.percent);
          const progress = circle.querySelector('.progress');
          const offset = 282.6 - (282.6 * percent / 100);
          progress.style.strokeDashoffset = offset;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(circle);
  });
  