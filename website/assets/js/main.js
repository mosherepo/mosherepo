(function () {
	const navToggle = document.querySelector('.nav-toggle');
	const siteNav = document.getElementById('site-nav');
	if (navToggle && siteNav) {
		navToggle.addEventListener('click', function () {
			const isOpen = siteNav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', String(isOpen));
		});
	}

	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	// Basic client-side validation for contact form if present
	const contactForm = document.querySelector('form[data-form="contact"]');
	if (contactForm) {
		contactForm.addEventListener('submit', function (e) {
			const requiredFields = contactForm.querySelectorAll('[data-required]');
			let firstInvalid = null;
			requiredFields.forEach(function (field) {
				if (!field.value || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
					field.setAttribute('aria-invalid', 'true');
					if (!firstInvalid) firstInvalid = field;
				} else {
					field.removeAttribute('aria-invalid');
				}
			});
			if (firstInvalid) {
				e.preventDefault();
				firstInvalid.focus();
			}
		});
	}
})();

