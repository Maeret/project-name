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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.waitForTransaction = void 0;
/**
 * Waits for a transaction to be confirmed.
 * @param seqno The sequence number of the transaction.
 * @param walletContract The wallet contract instance.
 */
const waitForTransaction = (seqno, walletContract, interval = 1000) => __awaiter(void 0, void 0, void 0, function* () {
    let currentSeqno = seqno;
    while (currentSeqno == seqno) {
        yield (0, exports.sleep)(interval);
        currentSeqno = yield walletContract.getSeqno();
    }
});
exports.waitForTransaction = waitForTransaction;
/**
 * Sleeps for the specified number of milliseconds.
 * @param ms The number of milliseconds to sleep.
 * @returns A Promise that resolves after the specified time.
 */
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.sleep = sleep;
