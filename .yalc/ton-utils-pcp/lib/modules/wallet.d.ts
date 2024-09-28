import { WalletContractV4 } from "@ton/ton";
export declare const createWallet: () => Promise<{
    mnemonic: string[];
    keyPair: import("@ton/crypto").KeyPair;
    generatedWallet: WalletContractV4;
}>;
