document.addEventListener('DOMContentLoaded', () => {

    const bazaPytan = {
        geografia: [
            "Wymień stolice państw w Europie.",
            "Wymień państwa, które mają dostęp do Morza Śródziemnego.",
            "Podaj nazwy państw leżących w Ameryce Południowej.",
            "Wymień znane pasma górskie na świecie.",
            "Wymień największe miasta w Polsce pod względem liczby ludności.",
            "Wymień stany wchodzące w skład Stanów Zjednoczonych Ameryki.",
            "Podaj nazwy państw, przez które przepływa rzeka Ren.",
            "Wymień wyspy należące do Hiszpanii.",
            "Wymień kraje, które nie mają dostępu do morza (tzw. kraje śródlądowe).",
            "Podaj nazwy pustyń na świecie.",
            "Wymień kraje graniczące z Polską.",
            "Podaj nazwy co najmniej 15 parków narodowych w Polsce.",
            "Wymień morza i oceany świata.",
            "Podaj nazwy państw leżących na kontynencie azjatyckim.",
            "Wymień znane wulkany, czynne lub wygasłe."
        ],
        pilka_nozna: [
            "Wymień kluby, które kiedykolwiek zdobyły Puchar Europy / Ligę Mistrzów.",
            "Podaj nazwiska piłkarzy, którzy zdobyli nagrodę Złotej Piłki (Ballon d'Or).",
            "Wymień kluby, które obecnie grają w polskiej Ekstraklasie.",
            "Wymień kraje należące do federacji piłkarskiej UEFA.",
            "Wymień reprezentacje, które brały udział w Mistrzostwach Świata w 2022 roku.",
            "Wymień piłkarzy, którzy strzelili co najmniej 100 goli w angielskiej Premier League.",
            "Podaj nazwiska piłkarzy z kadry reprezentacji Polski na Mistrzostwach Świata w 1974 roku.",
            "Wymień piłkarzy, którzy w swojej karierze grali zarówno dla Realu Madryt, jak i FC Barcelony.",
            "Wymień kluby, w których w swojej seniorskiej karierze grał Zlatan Ibrahimović.",
            "Wymień drużyny, które zdobyły mistrzostwo Włoch (Scudetto) w XXI wieku.",
            "Wymień polskich piłkarzy, którzy zagrali w fazie grupowej Ligi Mistrzów (grając w zagranicznym klubie).",
            "Podaj nazwy stadionów piłkarskich w Anglii o pojemności powyżej 40 000.",
            "Wymień kraje, które kiedykolwiek gościły finały Mistrzostw Świata w piłce nożnej.",
            "Wymień zwycięzców Mistrzostw Europy (EURO).",
            "Podaj nazwiska trenerów, którzy wygrywali Ligę Mistrzów.",
            "Wymień kluby piłkarskie z Londynu.",
            "Wymień słynne derby piłkarskie z całego świata.",
            "Podaj nazwiska piłkarzy, którzy nosili numer 10 w słynnych klubach lub reprezentacjach.",
            "Wymień reprezentacje, które wygrały Copa América.",
            "Wymień terminy związane z taktyką piłkarską (np. pressing, tiki-taka)."
        ],
        biologia: [
            "Wymień nazwy kości wchodzących w skład ludzkiego szkieletu.",
            "Wymień gatunki ssaków żyjących w Polsce.",
            "Podaj nazwy organelli komórki eukariotycznej.",
            "Wymień znane rasy psów.",
            "Wymień gatunki drzew występujących w polskich lasach.",
            "Wymień znane gatunki dinozaurów.",
            "Podaj nazwy ptaków, które można spotkać w Polsce.",
            "Wymień witaminy i podaj ich główne źródła w pożywieniu.",
            "Wymień główne mięśnie w ciele człowieka.",
            "Podaj nazwy owadów.",
            "Wymień etapy mitozy lub mejozy.",
            "Wymień części budowy kwiatu.",
            "Podaj nazwy ryb słodkowodnych występujących w Polsce.",
            "Wymień znane gady.",
            "Wymień składniki ludzkiej krwi."
        ],
        dla_kobiet: [
            "Wymień znane na całym świecie marki modowe.",
            "Wymień popularne marki kosmetyków do makijażu.",
            "Wymień tytułowe postacie kobiece z popularnych baśni Disneya.",
            "Wymień znane aktorki, które otrzymały Oscara.",
            "Wymień rodzaje biżuterii.",
            "Podaj tytuły znanych komedii romantycznych.",
            "Wymień znane piosenkarki popowe z XXI wieku.",
            "Wymień postacie z serialu 'Seks w wielkim mieście'.",
            "Podaj nazwy luksusowych marek torebek.",
            "Wymień składniki, które można znaleźć w produktach do pielęgnacji cery.",
            "Wymień rodzaje butów damskich.",
            "Podaj nazwy popularnych marek perfum.",
            "Wymień znane supermodelki.",
            "Wymień rodzaje herbat i ich właściwości.",
            "Podaj nazwy popularnych kobiecych magazynów."
        ],
        polityka: [
            "Wymień obecnych członków Unii Europejskiej.",
            "Wymień stany wchodzące w skład Stanów Zjednoczonych Ameryki.",
            "Podaj nazwiska osób, które pełniły funkcję premiera Polski po 1989 roku.",
            "Wymień państwa należące do NATO.",
            "Wymień ministerstwa funkcjonujące w polskim rządzie.",
            "Podaj nazwy państw, w których panuje monarchia.",
            "Wymień kraje należące do grupy G20.",
            "Wymień byłych prezydentów Stanów Zjednoczonych.",
            "Podaj nazwy organizacji międzynarodowych.",
            "Wymień historyczne i współczesne ideologie polityczne.",
            "Wymień partie polityczne, które kiedykolwiek miały reprezentację w polskim Sejmie po 1989 r.",
            "Podaj nazwy stolic państw azjatyckich.",
            "Wymień rodzaje systemów politycznych.",
            "Wymień znane postacie historyczne, które były przywódcami państw.",
            "Podaj nazwy agencji specjalistycznych ONZ (np. WHO, UNESCO)."
        ],
        filmy_i_seriale: [
            "Wymień znane polskie komedie (filmy lub seriale).",
            "Podaj tytuły seriali dostępnych na platformie Netflix.",
            "Wymień aktorów, którzy grali w filmach Patryka Vegi.",
            "Wymień znane filmy lub seriale, w których głównym motywem jest napad na bank.",
            "Podaj nazwiska aktorów z obsady serialu 'Świat według Kiepskich'.",
            "Wymień filmy reżyserowane przez Stevena Spielberga.",
            "Podaj nazwiska aktorów lub postaci z serii filmów o Harrym Potterze.",
            "Wymień filmy animowane wyprodukowane przez studio Pixar.",
            "Wymień znanych kompozytorów muzyki filmowej.",
            "Podaj tytuły filmów z uniwersum DC Comics.",
            "Wymień polskie seriale kryminalne.",
            "Wymień postacie z serialu 'The Office' (wersja amerykańska).",
            "Podaj tytuły znanych musicali filmowych.",
            "Wymień filmy, w których pojawia się postać Batmana.",
            "Wymień nagradzane na festiwalach filmy polskie po 2000 roku."
        ],
        nauki_scisle: [
            "Wymień pierwiastki chemiczne z tablicy Mendelejewa.",
            "Wymień znane gwiazdozbiory.",
            "Podaj nazwy jednostek miar układu SI (podstawowe i pochodne).",
            "Wymień znanych naukowców i wynalazców z historii świata.",
            "Wymień części lub organy ludzkiego układu pokarmowego.",
            "Wymień znane twierdzenia matematyczne.",
            "Podaj nazwy języków programowania.",
            "Wymień elementy budowy komputera.",
            "Wymień figury geometryczne (płaskie i przestrzenne).",
            "Podaj nazwy słynnych wynalazków, które zmieniły świat.",
            "Wymień rodzaje chmur.",
            "Podaj nazwy księżyców w Układzie Słonecznym.",
            "Wymień rodzaje skał.",
            "Wymień znane mosty, wieże lub budynki (cuda inżynierii).",
            "Wymień typy i przykłady kwasów lub zasad."
        ],
        sport: [
            "Wymień dyscypliny sportowe, które są częścią letnich igrzysk olimpijskich.",
            "Wymień zespoły, które obecnie grają w lidze koszykówki NBA.",
            "Wymień nazwiska znanych tenisistów i tenisistek.",
            "Podaj nazwy klubów, które kiedykolwiek grały w angielskiej Premier League.",
            "Wymień sporty, w których używa się piłki lub kuli.",
            "Wymień sporty walki.",
            "Podaj nazwy dyscyplin sportów zimowych.",
            "Wymień znanych lekkoatletów i lekkoatletki z Polski.",
            "Podaj nazwy marek produkujących sprzęt sportowy.",
            "Wymień serie wyścigów samochodowych lub motocyklowych.",
            "Podaj nazwy znanych aren sportowych na świecie (stadiony, hale, tory).",
            "Wymień gry karciane.",
            "Wymień popularne gry planszowe.",
            "Wymień znanych siatkarzy i siatkarki.",
            "Podaj nazwy sportów wodnych."
        ],
        zycie_codzienne: [
            "Wymień rodzaje kaw, które można zamówić w kawiarni.",
            "Podaj nazwy popularnych sieci supermarketów w Polsce.",
            "Wymień rzeczy, które zwykle znajdują się w damskiej torebce.",
            "Wymień popularne aplikacje na smartfony.",
            "Wymień meble, które można znaleźć w typowym mieszkaniu.",
            "Podaj nazwy popularnych marek samochodów.",
            "Wymień rodzaje pieczywa.",
            "Podaj nazwy platform społecznościowych.",
            "Wymień przedmioty, które można znaleźć w szkolnym piórniku.",
            "Wymień popularne sieci fast-food.",
            "Podaj nazwy banków działających w Polsce.",
            "Wymień czynności, które wykonujesz rano po przebudzeniu.",
            "Wymień marki telefonów komórkowych.",
            "Podaj nazwy popularnych sklepów odzieżowych.",
            "Wymień języki urzędowe w krajach Unii Europejskiej."
        ],
        muzyka: [
            "Wymień polskich raperów lub składy hip-hopowe.",
            "Wymień polskie zespoły rockowe.",
            "Podaj tytuły piosenek lub albumów Taco Hemingwaya.",
            "Wymień artystów, którzy wystąpili na festiwalu Męskie Granie.",
            "Wymień popularne gatunki i podgatunki muzyczne.",
            "Podaj nazwiska znanych kompozytorów muzyki klasycznej.",
            "Wymień zwycięzców Konkursu Piosenki Eurowizji.",
            "Podaj tytuły piosenek z repertuaru zespołu The Beatles.",
            "Wymień artystów, którzy zdobyli nagrodę Grammy w kategorii Album Roku.",
            "Wymień znane wokalistki popowe.",
            "Podaj nazwy popularnych serwisów do streamingu muzyki.",
            "Wymień członków tzw. 'Klubu 27'.",
            "Wymień polskie wokalistki popowe lub rockowe.",
            "Podaj tytuły piosenek z repertuaru zespołu Kult.",
            "Wymień instrumenty, na których gra się w zespole rockowym."
        ],
        jedzenie: [
            "Wymień rodzaje owoców.",
            "Podaj nazwy co najmniej piętnastu rodzajów warzyw.",
            "Wymień potrawy z różnych kuchni świata (np. sushi, pizza, pad thai).",
            "Wymień rodzaje serów.",
            "Wymień przyprawy używane w kuchni.",
            "Wymień rodzaje dań z makaronu.",
            "Podaj nazwy popularnych zup.",
            "Wymień składniki, z których można zrobić sałatkę.",
            "Podaj nazwy różnych rodzajów pizzy.",
            "Wymień popularne desery i słodycze.",
            "Podaj nazwy potraw śniadaniowych.",
            "Wymień rodzaje ziół.",
            "Wymień przybory i naczynia kuchenne.",
            "Podaj nazwy napojów bezalkoholowych.",
            "Wymień metody obróbki termicznej żywności (np. smażenie, gotowanie)."
        ],
        zabawne: [
            "Wymień sposoby na uniknięcie odpowiedzi na niewygodne pytanie.",
            "Podaj synonimy słowa 'fajny'.",
            "Wymień rzeczy, które zawsze znikają w domu w tajemniczych okolicznościach.",
            "Wymień typowe teksty, które mówią rodzice.",
            "Wymień supermoce, które byłyby kompletnie bezużyteczne.",
            "Podaj wymówki, dlaczego nie odrobiłeś zadania domowego.",
            "Wymień najgorsze możliwe tematy na pierwszą randkę.",
            "Wymień rzeczy, których nie powinno się mówić na rozmowie o pracę.",
            "Co zwierzęta powiedziałby, gdyby umiały mówić?",
            "Wymień okropne porady życiowe.",
            "Wymień najgorsze możliwe toppingi na pizzę.",
            "Wymień irytujące zachowania ludzi w kinie lub teatrze.",
            "Podaj alternatywne, śmieszne nazwy dla codziennych przedmiotów.",
            "Wymień piosenki, które idealnie pasują na pogrzeb Twoich wrogów.",
            "Wymień rzeczy, na które zawsze jest za wcześnie lub za późno."
        ],
        plus_18: [
            "Wymień powody, dla których ludzie zdradzają swoich partnerów.",
            "Podaj slangowe określenia na męskie lub żeńskie organy płciowe.",
            "Wymień znane fetysze seksualne.",
            "Podaj nazwy popularnych kategorii filmów na stronach dla dorosłych.",
            "Wymień rzeczy, które są legalne, ale przez wielu uważane za niemoralne.",
            "Wymień znanych seryjnych morderców, prawdziwych lub fikcyjnych.",
            "Podaj 'czerwone flagi' (sygnały ostrzegawcze) w nowej relacji.",
            "Wymień sposoby na pozbycie się zwłok, które widziałeś w filmach lub serialach.",
            "Wymień rzeczy, które zrobiłbyś, gdyby na jeden dzień zniknęły wszelkie konsekwencje prawne i społeczne.",
            "Podaj nazwy substancji psychoaktywnych, legalnych lub nielegalnych.",
            "Wymień najgorsze teksty na podryw, jakie słyszałeś.",
            "Wymień argumenty używane przez zwolenników lub przeciwników aborcji.",
            "Wymień najdziwniejsze miejsca, w których ludzie uprawiają seks.",
            "Wymień teorie spiskowe, w które wierzą ludzie.",
            "Podaj przykłady 'brudnych', niespełnionych fantazji seksualnych."
        ]
    };

    const playerCountInput = document.getElementById('player-count');
    const setupPlayersBtn = document.getElementById('setup-players-btn');
    const playerNamesContainer = document.getElementById('player-names-container');
    const scoreboardContainer = document.getElementById('scoreboard-container');
    const scoreboardSection = document.getElementById('scoreboard-section');
    const quizSection = document.getElementById('quiz-section');
    const playerSetupSection = document.getElementById('player-setup');

    let players = [];
    const playerColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c', '#34495e', '#d35400', '#c0392b'];

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

    function createScoreboard() {
        const nameInputs = document.querySelectorAll('.player-name-input');
        players = [];

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
