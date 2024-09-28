import { WalletContractV4 } from "@ton/ton";
import { Address } from "@ton/core";
/**
 * Returns the public address associated with a given wallet.
 *
 * @param {WalletContractV4} [wallet] The wallet instance.
 * @returns The public address as a string.
 */
export declare const getPublicAddressByWallet: (wallet: WalletContractV4) => Address;
/**
 * Returns the bounceable address for the given address.
 *
 * e.g. EQCgBnDa0omfX3xW-UoxUZNn0fdCm7YWnaj1dVjZz_EDpxZL
 *
 * @param {Address|string} [address] - The address to convert.
 * @returns The bounceable address as a string.
 */
export declare const getBouncableAddress: (address: Address | string) => string;
/**
 * Returns the non-bounceable address for the given address.
 *
 * e.g. UQCgBnDa0omfX3xW-UoxUZNn0fdCm7YWnaj1dVjZz_EDp0uO
 *
 * @param {Address|string} [address] - The address to convert.
 * @returns The non-bounceable address as a string.
 */
export declare const getNonBouncableAddress: (address: Address | string) => string;
/**
 * Retrieves the public address associated with a given mnemonic.
 *
 * @param mnemonic The mnemonic string.
 * @returns A promise that resolves to the public address.
 */
export declare const getPublicAddressByMnenomic: (mnemonic: string | Array<string>) => Promise<Address>;
