import { Injectable } from '@nestjs/common';
import { createWallet, 
         getBouncableAddress,
         getPublicAddressByMnenomic, 
         getNonBouncableAddress,
         getPublicAddressByWallet } from 'tonutils-ts';
import { Address } from '@ton/core';

@Injectable()
export class AppService {
  async getAddress(): Promise<string> {
    const { generatedWallet } = await createWallet();

    const addressString = generatedWallet.address.toString( {testOnly: true});

    if (Address.isAddress(addressString)) {
      console.log('The address is valid:', addressString);
      return addressString;
    } else {
      console.log('The address is not valid:', addressString);
      throw new Error('Invalid wallet address.');
    }
  }
}
