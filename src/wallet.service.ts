import { Injectable } from '@nestjs/common';
import {
    createWallet,
    getBouncableAddress,
    getPublicAddressByMnenomic,
    getNonBouncableAddress,
    getPublicAddressByWallet
  } from 'tonutils-ts';
import { Address } from '@ton/core';

@Injectable()
export class WalletService {
    async getAddress(): Promise<any> {
        const { mnemonic, keyPair, generatedWallet } = await createWallet();
        const addressString = generatedWallet.address.toString(
                                                    { urlSafe:true,
                                                      testOnly:true });
        const publicKeyString = keyPair.publicKey.toString('base64url');
    
        if (Address.isAddress(generatedWallet.address)) {
          console.log(mnemonic);
          console.log(publicKeyString)
          console.log('Address is valid:', addressString);
          return addressString;
    
        } else {
          console.log('Address is not valid:', addressString);
          console.log(mnemonic);
          console.log(publicKeyString);
          throw new Error('Invalid wallet address.');
        }
      }
 }
