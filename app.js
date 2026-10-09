'use strict';
// Progressive enhancement: navigation and direct links remain usable without JS.
document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = String(new Date().getFullYear());
const form = document.querySelector('#brief-form');
const status = document.querySelector('#form-status');
const preparedLink = document.querySelector('#prepared-link');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Trim required fields before native validation to reject whitespace-only input.
  ['name', 'brief'].forEach((name) => {
    const input = form.elements.namedItem(name);
    input.value = input.value.trim();
    const tooShort = name === 'brief' && input.value.length < 15;
    input.setCustomValidity(tooShort ? 'Tuliskan kebutuhan Anda minimal 15 karakter.' : '');
  });
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const get = (name) => String(data.get(name) || '').trim();
  const message = [
    'Halo Pak Hidayat Sarjum, saya ingin berdiskusi mengenai konsultasi teknik.',
    '',
    `Nama: ${get('name')}`,
    `Perusahaan / instansi: ${get('organization') || '-'}`,
    `Topik: ${get('service')}`,
    `Lokasi proyek: ${get('location') || '-'}`,
    '',
    'Ringkasan kebutuhan:',
    get('brief'),
    '',
    'Pesan disiapkan melalui sarjum.site.'
  ].join('\n');
  preparedLink.href = `https://wa.me/6285394523127?text=${encodeURIComponent(message)}`;
  preparedLink.hidden = false;
  status.textContent = 'Pesan siap ditinjau. Belum ada pesan terkirim. Klik tautan di bawah untuk membuka WhatsApp, lalu kirim jika sudah sesuai.';
  preparedLink.focus();
});
form.addEventListener('input', (event) => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
  // A changed brief must be regenerated; do not expose an outdated message.
  preparedLink.hidden = true;
  preparedLink.removeAttribute('href');
  status.textContent = '';
});
