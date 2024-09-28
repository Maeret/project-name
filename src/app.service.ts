import { Injectable } from '@nestjs/common';
import { getPublicAddressByWallet, createWallet } from 'tonutils-ts';

@Injectable()
export class AppService {
  async getAddress(): Promise<string> {
    
    const { generatedWallet } = await createWallet();

    const address = getPublicAddressByWallet(generatedWallet);
    return address.toString();
  }
}
