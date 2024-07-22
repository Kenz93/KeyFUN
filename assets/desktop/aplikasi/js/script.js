document.querySelectorAll('.parent').forEach(parent => {
    let isDown = false;
    let startX;
    let scrollLeft;

    parent.addEventListener('mousedown', (e) => {
        isDown = true;
        parent.classList.add('active');
        startX = e.pageX - parent.offsetLeft;
        scrollLeft = parent.scrollLeft;
    });

    parent.addEventListener('mouseleave', () => {
        isDown = false;
        parent.classList.remove('active');
    });

    parent.addEventListener('mouseup', () => {
        isDown = false;
        parent.classList.remove('active');
    });

    parent.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - parent.offsetLeft;
        const walk = (x - startX); // Jumlah penggeseran
        parent.scrollLeft = scrollLeft - walk;
    });
});