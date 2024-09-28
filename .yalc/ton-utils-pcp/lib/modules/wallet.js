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
exports.createWallet = void 0;
const fs_1 = __importDefault(require("fs"));
const arg_1 = __importDefault(require("arg"));
const crypto_1 = require("@ton/crypto");
const ton_1 = require("@ton/ton");
const public_address_utils_1 = require("./public.address.utils");
require('dotenv').config();
const createWallet = () => __awaiter(void 0, void 0, void 0, function* () {
    const mnemonic = yield (0, crypto_1.mnemonicNew)();
    const keyPair = yield (0, crypto_1.mnemonicToWalletKey)(mnemonic);
    const generatedWallet = ton_1.WalletContractV4.create({ publicKey: keyPair.publicKey, workchain: 0 });
    return {
        mnemonic,
        keyPair,
        generatedWallet
    };
});
exports.createWallet = createWallet;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = (0, arg_1.default)({
        '--save': Boolean, // save the generated mnemonic to a file
        '--log': Boolean, // log the generated mnemonic
        // Aliases
        '-s': '--save',
        '-l': '--log'
    });
    const save = args['--save'] || false;
    const log = args['--log'] || true;
    const { mnemonic, generatedWallet } = yield (0, exports.createWallet)();
    if (save) {
        fs_1.default.appendFileSync("mnemonics.txt", ("Public Address: " + (0, public_address_utils_1.getPublicAddressByWallet)(generatedWallet) + "\n" +
            "Mnemonic: " + mnemonic.join(" ") + "\n" +
            "\n"));
    }
    if (log) {
        console.log("Generated public address (bouncable): ", (0, public_address_utils_1.getBouncableAddress)(generatedWallet.address));
        console.log("Generated public address (non-bouncable): ", (0, public_address_utils_1.getNonBouncableAddress)(generatedWallet.address));
        console.log("Generated mnemonic: ", mnemonic);
    }
});
if (require.main === module) {
    main();
}
