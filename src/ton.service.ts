import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LiteClient, LiteRoundRobinEngine, LiteSingleEngine } from 'ton-lite-client';

@Injectable()
export class TonService {
    private liteClient: LiteClient;

    constructor() {
        console.log('TonService instance created');
        this.connectToNetwork();
    }

    async connectToNetwork() {
        const configUrl = 'https://ton-blockchain.github.io/testnet-global.config.json';

        try {
            const { data } = await axios.get(configUrl);

            const liteServers = data.liteservers;
            const engines = liteServers.map((server) => {
                const ip = this.intToIP(server.ip);
                return new LiteSingleEngine({
                    host: `tcp://${ip}:${server.port}`,
                    publicKey: Buffer.from(server.id.key, 'base64'),
                });
            });

            const engine = new LiteRoundRobinEngine(engines);
            this.liteClient = new LiteClient({ engine, batchSize: 1 });
            console.log('Connected to TON network via Lite Client');
        } catch (error) {
            console.error('Failed to connect to TON network:', error);
        }
    }

    private intToIP(int: number): string {
        return [
            (int >> 24) & 255,
            (int >> 16) & 255,
            (int >> 8) & 255,
            int & 255,
        ].join('.');
    }
}
