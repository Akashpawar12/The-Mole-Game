const scoreElement = document.getElementById('score');
let score = 0;

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function randomHole() {
    const holes = document.querySelectorAll('.mole-hole');
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

function showMole() {
    const hole = randomHole();
    const mole = document.createElement('div');
    mole.className = 'mole';
    mole.addEventListener('click', () => {
        updateScore();
        mole.remove();
    });
    hole.appendChild(mole);
    setTimeout(() => {
        if (hole.contains(mole)) {
            mole.remove();
        }
    }, 1000);
}

function startGame() {
    setInterval(showMole, 1000);
}

startGame();
