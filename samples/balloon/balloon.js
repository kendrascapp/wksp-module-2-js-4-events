

// we need to start with an event listener that listens for 'keydown' event 
    // only interested in 2 specific keys: arrow up and arrow down 
    // if 'arrow up' 
        // balloon bigger 
        // if balloon is bigger than X size, then: 
            // first thing I want to do is remove the event listener 
            // remove the balloon / add in explosion 
            // explosion grows incrementally 
                // if explosion size is Y (when explosion size reaches desired size),
                    // stop growing 
                    // fade out (opacity to 0)
    // if 'arrow down'
        // balloon smaller *once the balloon reached a certain size, it pops
        // if balloon is Z bigger than Z 
            // balloon smaller 

steps: 
// target the element right away 
const balloon = document.getElementById('balloon');
const MIN_SIZE = 6;
const INCREMENT = 2;
const MAX_EXPLOSION_SIZE = 1000;

function handleKeydown(event) {
    if (event.key === 'ArrowUp') {
        console.log('UP');
    if (balloonSize > MAX_SIZE) {
        document.removeEventListener('keydown', handleKeydown);
        balloon.innerText = '💥';
        const explosion = setInterval(function() {
            balloonSize += 10;
            balloon.style.fontSize = `${balloonSize}px`;
            if (balloonSize > MAX_EXPLOSION_SIZE) {
                clearInterval(explosion);
                balloon.style.opacity = 0;
            }
        }, 10);
    }
    } else if (event.key === 'ArrowDown'){
        if (balloonSize > MIN_SIZE) {
            balloonSize -= INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
        }
}
document.addEventListener('keydown', handleKeydown);
