document.addEventListener('DOMContentLoaded', () => {

    // Baza pytań (bez zmian)
    const bazaPytan = {
        geografia: ["Wymień stolice państw w Afryce.", "Wymień państwa europejskie, które nie mają dostępu do morza.", "Podaj nazwy wszystkich województw w Polsce.", "Wymień najdłuższe rzeki na świecie.", "Wymień kraje, przez które przepływa Dunaj."],
        pilka_nozna: ["Wymień wszystkich zwycięzców Ligi Mistrzów od 2000 roku.", "Wymień angielskich piłkarzy, którzy grają obecnie w hiszpańskiej La Liga.", "Podaj nazwy wszystkich klubów, w których grał Zlatan Ibrahimović.", "Wymień reprezentacje, które zdobyły Mistrzostwo Świata w piłce nożnej.", "Wymień polskich piłkarzy, którzy strzelili co najmniej 10 goli w reprezentacji."],
        biologia: ["Wymień kości ludzkiej czaszki.", "Wymień gatunki drzew liściastych występujących w Polsce.", "Podaj nazwy organelli komórki eukariotycznej.", "Wymień etapy cyklu rozwojowego motyla.", "Wymień gatunki zwierząt objęte ścisłą ochroną w Polsce."],
        dla_kobiet: ["Wymień znane polskie pisarki.", "Wymień popularne marki kosmetyków do makijażu dostępne w drogeriach.", "Wymień główne bohaterki z powieści Jane Austen.", "Podaj nazwy kultowych modeli torebek od znanych projektantów.", "Wymień aktorki, które zdobyły Oscara za najlepszą rolę pierwszoplanową w XXI wieku."],
        polityka: ["Wymień wszystkich prezydentów Polski po 1989 roku.", "Wymień stałych członków Rady Bezpieczeństwa ONZ.", "Podaj nazwy wszystkich partii politycznych, które obecnie zasiadają w polskim Sejmie.", "Wymień kraje należące do Grupy G7.", "Wymień nazwiska wszystkich premierów Wielkiej Brytanii w XXI wieku."]
    };

    // NOWE ELEMENTY: Selektory i zmienne do obsługi graczy
    const playerCountInput = document.getElementById('player-count');
    const setupPlayersBtn = document.getElementById('setup-players-btn');
    const playerNamesContainer = document.getElementById('player-names-container');
    const scoreboardContainer = document.getElementById('scoreboard-container');
    const scoreboardSection = document.getElementById('scoreboard-section');
    const quizSection = document.getElementById('quiz-section');
    const playerSetupSection = document.getElementById('player-setup');

    let players = [];
    const playerColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c', '#34495e', '#d35400', '#c0392b'];

    // --- LOGIKA GRY ---

    // Krok 1: Tworzenie pól do wpisania imion graczy
    setupPlayersBtn.addEventListener('click', () => {
        playerNamesContainer.innerHTML = '';
        const count = parseInt(playerCountInput.value);

        if (count > 0 && count <= 10) {
            for (let i = 1; i <= count; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = `Imię gracza ${i}`;
                input.className = 'player-name-input';
                playerNamesContainer.appendChild(input);
            }
            const startGameBtn = document.createElement('button');
            startGameBtn.id = 'start-game-btn';
            startGameBtn.textContent = 'Rozpocznij grę';
            playerNamesContainer.appendChild(startGameBtn);

            startGameBtn.addEventListener('click', createScoreboard);
        }
    });

    // Krok 2: Tworzenie tablicy wyników i rozpoczęcie gry
    function createScoreboard() {
        const nameInputs = document.querySelectorAll('.player-name-input');
        players = []; // Resetowanie graczy
        
        nameInputs.forEach((input, index) => {
            players.push({
                id: index,
                name: input.value || `Gracz ${index + 1}`,
                score: 0,
                color: playerColors[index % playerColors.length]
            });
        });

        playerSetupSection.classList.add('hidden');
        scoreboardSection.classList.remove('hidden');
        quizSection.classList.remove('hidden');

        renderScoreboard();
    }
    
    // Krok 3: Renderowanie (rysowanie) tablicy wyników
    function renderScoreboard() {
        scoreboardContainer.innerHTML = '';
        players.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.style.backgroundColor = player.color;

            card.innerHTML = `
                <span class="player-name">${player.name}</span>
                <div class="score-controls">
                    <button class="score-btn minus" data-id="${player.id}">-</button>
                    <span class="score" id="score-${player.id}">${player.score}</span>
                    <button class="score-btn plus" data-id="${player.id}">+</button>
                </div>
            `;
            scoreboardContainer.appendChild(card);
        });
    }

    // Krok 4: Obsługa przycisków + i - do zmiany punktacji
    scoreboardContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('score-btn')) {
            const playerId = parseInt(target.dataset.id);
            const player = players.find(p => p.id === playerId);

            if (target.classList.contains('plus')) {
                player.score++;
            } else if (target.classList.contains('minus')) {
                player.score--;
            }
            
            document.getElementById(`score-${playerId}`).textContent = player.score;
        }
    });

    // --- LOGIKA QUIZU (lekko zmieniona) ---
    const przyciskiKategorii = document.querySelectorAll('.category-btn');
    const polePytania = document.getElementById('question-text');

    przyciskiKategorii.forEach(button => {
        button.addEventListener('click', () => {
            const kategoria = button.dataset.category;
            let pulaPytan;

            if (kategoria === 'wszystko') {
                pulaPytan = Object.values(bazaPytan).flat();
            } else {
                pulaPytan = bazaPytan[kategoria];
            }

            const losowyIndex = Math.floor(Math.random() * pulaPytan.length);
            const wylosowanePytanie = pulaPytan[losowyIndex];
            polePytania.textContent = wylosowanePytanie;
        });
    });
});
