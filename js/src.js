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
    document.querySelectorAll('p').forEach((i) => i.classList.add('remove'));
    document.querySelectorAll('h1')[1].classList.add('remove');
    clearTimeout(skills);
    document.querySelector('body').style.overflow = 'auto';
    // document.querySelector('button').classList.add('invis');
    document.querySelector('button').classList.add('success');
    setTimeout(() => {
        document.querySelector('button').classList.add('invis');
        document.querySelector('button').style.cursor = "inherit";
    }, 3000)
})
setTimeout(() =>
    document.querySelector('button').classList.add('invis'), 45000)