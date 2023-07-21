const faq = document.querySelector('.faq');
const question = document.querySelector('.question');

question.addEventListener('click', () => {
    faq.classList.toggle('active');
});