import type { Table } from "~core/models/table";

export default class boardGameArenaHelper {
    static async getMyLudoLink(myludoGameId: string, table: Table) {
        if (!table) return null;

        let href = '';

        if (!myludoGameId) {
            href = `https://www.myludo.fr/#!/search/${table.tableId}`;
        }
        else {
            const json = JSON.stringify(table);
            const data = btoa(json);

            href = `https://www.myludo.fr/#!/game/${myludoGameId}?bga2myludo=1&bga2myludo_data=${data}`
        }

        const link = document.createElement("a");
        link.href = href;
        link.textContent = "Enregistrer la partie sur Myludo";
        link.target = "_blank"
        link.classList.add("action-button");
        link.classList.add("bgabutton");
        link.classList.add("bgabutton_darkgray");
        link.id = "myludo_browserextension";
        link.style.cssText = "display: inline;"

        return link;
    }
}