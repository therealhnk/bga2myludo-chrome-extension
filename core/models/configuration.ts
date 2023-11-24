import type { MappedUser } from "./mappedUser";

export class Configuration {
    customizeCurrentPlayer?: boolean;
    customCurrentPlayerName: string;
    fillPlace?: boolean;
    place: string;
    autoSubmit: boolean;
    darkMode: boolean;
    excludeFromStatistics: boolean;
    addTableLink?: boolean;
    users: MappedUser[];
    autoUpdateUsers: boolean;
}