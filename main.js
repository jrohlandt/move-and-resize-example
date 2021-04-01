const el = document.querySelector('.item');

el.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();
        
        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";
        
        console.log(e.clientX, e.clientY,{prevX, prevY}, {newX, newY}, el.style.left, rect.left);
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUp(e) {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', mouseUp);
    }
}