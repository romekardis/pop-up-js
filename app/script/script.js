window.onload = function () {
    const buttons = document.querySelectorAll('button');
    const shadow = document.querySelector('.shadow');
    const links = document.querySelectorAll('.container-links a');


    shadow.onclick = e => {
        if (e.target.closest('.popupContainer')) return;
        shadow.classList.toggle('shadow-view');
    }

    buttons[1].onclick = e => {
        shadow.classList.toggle('shadow-view');
    }

    function wait (href) {
        buttons[0].onclick = e => {
            location.href = href;
        }       
    }

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = e => {
            e.preventDefault();
            shadow.classList.toggle('shadow-view');
            wait(e.target.getAttribute('href'));
        }
    }
};