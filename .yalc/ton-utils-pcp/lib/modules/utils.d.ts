/**
 * Waits for a transaction to be confirmed.
 * @param seqno The sequence number of the transaction.
 * @param walletContract The wallet contract instance.
 */
export declare const waitForTransaction: (seqno: number, walletContract: any, interval?: number) => Promise<void>;
/**
 * Sleeps for the specified number of milliseconds.
 * @param ms The number of milliseconds to sleep.
 * @returns A Promise that resolves after the specified time.
 */
export declare const sleep: (ms: number) => Promise<unknown>;
