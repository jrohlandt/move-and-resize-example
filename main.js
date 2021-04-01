const el = document.querySelector('.item');
let isResizing = false;

el.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    if (isResizing) return;
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
        
        // console.log(e.clie ntX, e.clientY,{prevX, prevY}, {newX, newY}, el.style.left, rect.left);
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUp(e) {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', mouseUp);
    }
}

const resizers = document.querySelectorAll('.resizer');
let currentResizer;

for(let resizer of resizers) {
    resizer.addEventListener('mousedown', mouseDown);

    function mouseDown(e) {
        isResizing = true;
        currentResizer = e.target;

        let prevX = e.clientX;
        let prevY = e.clientY;
    
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
    
    
        function mouseMove(e) {
            const rect = el.getBoundingClientRect(); 

            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

             if (currentResizer.classList.contains("ne")) {
                el.style.width = rect.width - newX + "px";
                el.style.height = rect.height + newY + "px";
                el.style.top = rect.top - newY + "px";
            }
            else if (currentResizer.classList.contains("nw")) {
                el.style.width = rect.width + newX + "px";
                el.style.height = rect.height + newY + "px";
                el.style.top = rect.top - newY + "px";
                el.style.left = rect.left - newX + "px";
            } 
            else if (currentResizer.classList.contains("se")) {
                el.style.width = rect.width - newX + "px";
                el.style.height = rect.height - newY + "px";
            } 
            else if (currentResizer.classList.contains("sw")) {
                el.style.width = rect.width + newX + "px";
                el.style.left = rect.left - newX + "px";
                el.style.height = rect.height - newY + "px";
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }
    
        function mouseUp(e) {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            isResizing = false;
        }
    }
}