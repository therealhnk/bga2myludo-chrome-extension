import { Storage } from "@plasmohq/storage";
import type { Configuration } from "~core/models/configuration";

export default class configurationService {
    static async get(): Promise<Configuration> {
        const storage = new Storage();

        const configurationSerialized = await storage.get('configuration')
        const configuration = JSON.parse(configurationSerialized) as Configuration;

        configuration.place = configuration.place && configuration.place.length > 0 ? configuration.place : 'Board Game Arena';
        configuration.users = configuration.users ? configuration.users.sort((a, b) => (a.bgaUser < b.bgaUser ? -1 : 1)) : [];

        return configuration;
    }

    static async set(configuration: Configuration) {
        const storage = new Storage();

        storage.set("configuration", JSON.stringify(configuration));
    }
}