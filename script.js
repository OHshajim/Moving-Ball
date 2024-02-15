const container = document.getElementById('Container');

const ball = document.getElementById('Ball');

let initialTop, initialLeft;

function handleMove(e) {
    const left = e.clientX - initialLeft;
    const top = e.clientY - initialTop;

    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`; 
}

ball.addEventListener("mousedown", function (e){
    if (!initialLeft && !initialTop) {
        initialTop = e.clientY;
        initialLeft = e.clientX;
    };
    container.addEventListener('mousemove',handleMove)
});

ball.addEventListener('mouseup',function(){
    container.removeEventListener('mousemove',handleMove);
});