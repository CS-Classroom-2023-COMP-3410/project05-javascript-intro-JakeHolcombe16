const gameContainer = document.getElementById('game-container');
        const moveCountElem = document.getElementById('move-count');
        const timeElem = document.getElementById('time');
        const restartBtn = document.getElementById('restart-btn');

        let cards = [];
        let flippedCards = [];
        let moves = 0;
        let matchedPairs = 0;
        let timer = null;
        let secondsElapsed = 0;

        const cardSymbols = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍍', '🥝', '🍒'];

        function initGame() {
            gameContainer.innerHTML = '';
            moves = 0;
            matchedPairs = 0;
            secondsElapsed = 0;
            flippedCards = [];
            moveCountElem.textContent = moves;
            timeElem.textContent = '0:00';

            clearInterval(timer);
            timer = setInterval(updateTime, 1000);

            cards = shuffle([...cardSymbols, ...cardSymbols]);
            cards.forEach(symbol => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front"></div>
                        <div class="card-back">${symbol}</div>
                    </div>
                `;
                card.addEventListener('click', () => flipCard(card, symbol));
                gameContainer.appendChild(card);
            });
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function flipCard(card, symbol) {
            if (flippedCards.length >= 2 || card.classList.contains('flipped')) return;

            card.classList.add('flipped');
            flippedCards.push({ card, symbol });

            if (flippedCards.length === 2) {
                moves++;
                moveCountElem.textContent = moves;

                if (flippedCards[0].symbol === flippedCards[1].symbol) {
                    matchedPairs++;
                    flippedCards = [];

                    if (matchedPairs === cardSymbols.length) {
                        clearInterval(timer);
                        alert(`You win! Moves: ${moves}, Time: ${timeElem.textContent}`);
                    }
                } else {
                    setTimeout(() => {
                        flippedCards.forEach(({ card }) => card.classList.remove('flipped'));
                        flippedCards = [];
                    }, 1000);
                }
            }
        }

        function updateTime() {
            secondsElapsed++;
            const minutes = Math.floor(secondsElapsed / 60);
            const seconds = secondsElapsed % 60;
            timeElem.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        restartBtn.addEventListener('click', initGame);

        initGame();