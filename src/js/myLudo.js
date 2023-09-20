try {
    const intervalID = setInterval(patch, 125);

    async function patch() {
        if (!window.location.href.startsWith("https://www.myludo.fr/#!/game/")) {
            clearInterval(intervalID);
            return;
        }

        const addPlayButton = document.getElementsByClassName('btn-play-open');

        if (window.location.href.includes("bga2myludo") && addPlayButton.length > 0) {
            clearInterval(intervalID);

            const data = getDataFromBGA();

            await loadPlays((plays => {
                const hasBeenPlayed = hasBeenAlreadyPlayed(data, plays);

                addPlayButton.item(0).click();

                const intervalPopupID = setInterval(() => {
                    const addPlayerButton = document.getElementsByClassName('btn-add-player');

                    if (addPlayerButton.length > 0) {
                        clearInterval(intervalPopupID);

                        if (hasBeenPlayed) addWarning();

                        document.getElementById('online').click();

                        if (data.isCooperative) document.getElementById('coop').click();
                        if (data.isSolo) document.getElementById('solo').click();
                        if (data.isAbandoned) document.getElementById('incomplete').click();

                        if (data.isSolo) {
                            document.querySelector(`label[for="name-0"]`).click();
                            document.getElementById(`name-0`).value = data.players[0].name;

                            document.querySelector(`label[for="score-0"]`).click();
                            document.getElementById(`score-0`).value = data.players[0].score;
                        }
                        else {
                            data.players.forEach((elt, index) => {
                                addPlayerButton.item(0).click();

                                document.querySelector(`label[for="name-${index}"]`).click();

                                const currentPlayer = document.getElementById(`name-${index}`);
                                currentPlayer.value = elt.name;

                                if (elt.rank === "1") {
                                    currentPlayer.closest('.card-content').getElementsByClassName('btn-winner-player')[0].click();
                                }

                                document.querySelector(`label[for="score-${index}"]`).click();
                                document.getElementById(`score-${index}`).value = elt.score;
                            });
                        }

                        document.getElementById(`date`).value = new Date(data.end).toISOString().split('T')[0];

                        document.querySelector(`label[for="location"]`).click();
                        document.getElementById(`location`).value = "Board Game Arena";

                        document.querySelector(`label[for="message"]`).click();
                        document.getElementById(`message`).value = `Table : https://www.boardgamearena.com/table?table=${data.table.id}\r\n\r\nCréé à l'aide de BGA2Myludo`;

                        const modalContent = document.querySelector("#form-play .modal-content");
                        modalContent.scrollTop = modalContent.scrollHeight;
                    }
                }, 500);


            }));
        }
    }

    function getDataFromBGA() {
        const urlParams = new URL(`https://fake.com?${window.location.href.split("?")[1]}`).searchParams;
        const json = atob(urlParams.get("bga2myludo_data"));

        window.location.href = window.location.href.replace(/[?&][^=]+=[^&]+/g, "");

        return JSON.parse(json);
    }

    async function loadPlays(callback) {
        const plays = [];

        const playsTab = document.querySelector('a[href="#plays"]');

        if (playsTab) {
            playsTab.click();

            const intervalLoadPlaysID = setInterval(() => {
                const loadingPlays = document.querySelector('#plays .progress');

                if (!loadingPlays) {
                    clearInterval(intervalLoadPlaysID);

                    const playsContent = document.querySelectorAll('#plays .game-play');

                    playsContent.forEach((currentPlay) => {
                        const play = {
                            end: convertToDate(currentPlay.querySelector('h4').textContent),
                            players: []
                        }

                        currentPlay.querySelectorAll('.play-player').forEach((elt) => {
                            const counter = elt.querySelector('.counter');
                            play.players.push({
                                name: elt.getAttribute('title'),
                                score: counter ? counter.textContent : null
                            })
                        });

                        plays.push(play);
                    });

                    callback(plays);
                }
            }, 250);
        }
        else {
            callback(plays);
        }
    }

    function convertToDate(text) {
        const monthText = ["janv", "févr", "mars", "avr", "mai", "juin", "juill", "août", "sept", "oct", "nov", "déc"];
        let result = new Date(1900, 0, 1);

        text.replace(/(\d+) ([\p{L}\s]+) (\d+)/u, (match, day, month, year) => {
            const monthIndex = monthText.indexOf(month);

            if (monthIndex >= 0) {
                result = new Date(
                    year,
                    monthIndex,
                    day
                );
            }
        });

        return result;
    }

    function trunkDateToDay(dateString) {
        return new Date(new Date(dateString).toDateString());
    }

    function hasBeenAlreadyPlayed(currentPlay, plays) {
        const currentPlayersFootPrint = JSON.stringify(currentPlay.players.map(o => { return { name: o.name, score: o.score }; }));

        return plays.some(o =>
            trunkDateToDay(o.end).getTime() === trunkDateToDay(currentPlay.end).getTime() &&
            JSON.stringify(o.players) === currentPlayersFootPrint
        );
    }

    function addWarning() {
        const divider = document.createElement("div");
        divider.classList.add("divider");

        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("extra-margin-top");

        const warning = document.createElement("div");
        warning.classList.add("col");
        warning.classList.add("s12");

        const label = document.createElement("div");
        label.textContent = "BGA2Myludo";
        label.style = "padding-left:12px; font-size: .8rem; color: #9e9e9e;";

        const warningIcon = document.createElement("i");
        warningIcon.classList.add("material-icons");
        warningIcon.classList.add("orange-text");
        warningIcon.classList.add("middle");
        warningIcon.classList.add("left");
        warningIcon.textContent = "warning";

        warning.appendChild(warningIcon);
        warning.append("Une partie similaire a déjà été saisie (date/joueurs/scores identiques)");

        row.appendChild(label);
        row.appendChild(warning);

        const modalContent = document.querySelector("#form-play .modal-content");
        modalContent.appendChild(divider);
        modalContent.appendChild(row);
        modalContent.scrollTop = modalContent.scrollHeight;
    }
} catch (Exception) { };
