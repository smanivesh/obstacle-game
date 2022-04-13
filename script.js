score = 0;
cross = true;

audio= new Audio('music.mp3');
audiogo= new Audio('gameover1.mp3');
setTimeout(()=>{
    audio.play();
},500);

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        richa = document.querySelector('.richa');
        richa.classList.add('animateRicha')
        setTimeout(() => {
            richa.classList.remove('animateRicha')
        }, 700);
    }
    if (e.keyCode == 39) {
        richa = document.querySelector('.richa');
        richaX = parseInt(window.getComputedStyle(richa, null).getPropertyValue('left'));
        richa.style.left = richaX + 150 + "px";
    }
    if (e.keyCode == 37) {
        richa = document.querySelector('.richa');
        richaX = parseInt(window.getComputedStyle(richa, null).getPropertyValue('left'));
        richa.style.left = (richaX - 112) + "px";
    }
}
setInterval(() => {
    richa = document.querySelector('.richa');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    rx = parseInt(window.getComputedStyle(richa, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(richa, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(rx - ox);
    offsetY = Math.abs(ry - oy);
    if (offsetX < 85 && offsetY < 60) { //gameover ki condition
        gameOver.innerHTML ="Chlo, Pdhne baith jao:( GAME OVER!"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.stop();
            audio.pause();
        },1000);
    }
    else if (offsetX < 73 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.3;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}