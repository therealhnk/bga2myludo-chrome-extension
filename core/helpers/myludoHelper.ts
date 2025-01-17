import type { Table } from "~core/models/table";

export default class myludoHelper {
    static convertToDate(text) {
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

    static hasBeenAlreadyPlayed(currentPlay: Table, plays: Table[]) {
        let players = currentPlay.players;

        // en cas de coop, les scores des joueurs doivent etre null
        if (currentPlay.isCooperative) {
            players = [];
            // on clone les joueurs pour que les modifications restent locales
            currentPlay.players.forEach(val => players.push(Object.assign({}, val)));
            players.forEach(o => o.score = null);
        }

        const currentPlayersFootPrint = JSON.stringify(
            players
                .map(o => { return { name: o.name.replace(/[A-Z][0-9][\s-]/g, ''), score: o.score }; })
                .sort(function (a, b) {// on effectue d'abord un tri par score descendant puis un tri alpha des pseudos
                    if (Number(a.score) < Number(b.score)) return 1;
                    if (Number(a.score) > Number(b.score)) return -1;
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0
                })
        ).toLowerCase();

        return plays.some(o =>
            myludoHelper.trunkDateToDay(o.end).getTime() === myludoHelper.trunkDateToDay(currentPlay.end).getTime() &&
            JSON.stringify(o.players).toLowerCase() === currentPlayersFootPrint
        );
    }

    static trunkDateToDay(value: Date) {
        return new Date(new Date(value).toDateString());
    }
}