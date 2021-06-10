window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
skills = setTimeout(() => {
    window.scrollTo({
        top: 879,
        left: 0,
        behavior: 'smooth'
    });
    document.body.style.overflow = "auto";
}, 21700);
document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll('p').forEach((i) => i.classList.add('skip'));
    document.querySelectorAll('h1')[1].classList.add('skip');
    clearTimeout(skills);
    document.querySelector('body').style.overflow = 'auto';
})