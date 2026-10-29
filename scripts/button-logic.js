const toggleBtn = document.getElementById('toggle-text');
const section = document.querySelector('.project-info');

toggleBtn.addEventListener('click', () => {
    const hidden = section.classList.toggle('text-hidden');
    toggleBtn.textContent = hidden ? 'Show Project Information' : 'Hide text';
    toggleBtn.setAttribute('aria-pressed', String(!hidden));
});