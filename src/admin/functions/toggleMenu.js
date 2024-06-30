export default function toggleMenu(e) {
    e.target.closest('.conf-step__header').classList.toggle('conf-step__header_closed');
}