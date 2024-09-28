"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicAddressByMnenomic = exports.getNonBouncableAddress = exports.getBouncableAddress = exports.getPublicAddressByWallet = void 0;
const arg_1 = __importDefault(require("arg"));
const crypto_1 = require("@ton/crypto");
const ton_1 = require("@ton/ton");
const core_1 = require("@ton/core");
require('dotenv').config();
/**
 * Returns the public address associated with a given wallet.
 *
 * @param {WalletContractV4} [wallet] The wallet instance.
 * @returns The public address as a string.
 */
const getPublicAddressByWallet = (wallet) => {
    return wallet.address;
};
exports.getPublicAddressByWallet = getPublicAddressByWallet;
/**
 * Returns the bounceable address for the given address.
 *
 * e.g. EQCgBnDa0omfX3xW-UoxUZNn0fdCm7YWnaj1dVjZz_EDpxZL
 *
 * @param {Address|string} [address] - The address to convert.
 * @returns The bounceable address as a string.
 */
const getBouncableAddress = (address) => {
    if (typeof address === "string") {
        address = core_1.Address.parse(address);
    }
    return address.toString({ bounceable: true });
};
exports.getBouncableAddress = getBouncableAddress;
/**
 * Returns the non-bounceable address for the given address.
 *
 * e.g. UQCgBnDa0omfX3xW-UoxUZNn0fdCm7YWnaj1dVjZz_EDp0uO
 *
 * @param {Address|string} [address] - The address to convert.
 * @returns The non-bounceable address as a string.
 */
const getNonBouncableAddress = (address) => {
    if (typeof address === "string") {
        address = core_1.Address.parse(address);
    }
    return address.toString({ bounceable: false });
};
exports.getNonBouncableAddress = getNonBouncableAddress;
/**
 * Retrieves the public address associated with a given mnemonic.
 *
 * @param mnemonic The mnemonic string.
 * @returns A promise that resolves to the public address.
 */
const getPublicAddressByMnenomic = (mnemonic) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mnemonic) {
        console.log("Mnemonic is required");
        process.exit(1);
    }
    if (Array.isArray(mnemonic)) {
        mnemonic = mnemonic.join(" ");
    }
    const keyPair = yield (0, crypto_1.mnemonicToWalletKey)(mnemonic.split(" "));
    const wallet = ton_1.WalletContractV4.create({ publicKey: keyPair.publicKey, workchain: 0 });
    return (0, exports.getPublicAddressByWallet)(wallet);
});
exports.getPublicAddressByMnenomic = getPublicAddressByMnenomic;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = (0, arg_1.default)({
        '-m': String, // mnemonic to get public key from
    });
    const mnemonic = args['-m'];
    if (!mnemonic) {
        console.log("Mnemonic is required");
        process.exit(1);
    }
    const publicKey = yield (0, exports.getPublicAddressByMnenomic)(mnemonic);
    console.log("Bounceable: ", (0, exports.getBouncableAddress)(publicKey));
    console.log("Non-Bounceable: ", (0, exports.getNonBouncableAddress)(publicKey));
    return publicKey;
});
if (require.main === module) {
    main();
}
