document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.style.display === 'flex';
      menu.style.display = open ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = form.getAttribute('data-endpoint') || '#';
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      var data = new FormData(form);
      fetch(endpoint, { method: 'POST', body: data })
        .then(function () { alert('Thanks! We will reach out shortly.'); form.reset(); })
        .catch(function () { alert('Submission failed. Please email hello@yourdomain.com.'); })
        .finally(function () { if (submitBtn) submitBtn.disabled = false; });
    });
  }
});

