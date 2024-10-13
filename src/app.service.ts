import { Injectable } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Injectable()
export class AppService {
  constructor(private readonly walletService: WalletService) {}

  async generateWallet(): Promise<any> {
    const address = await this.walletService.getAddress();
    // TODO 
  }
}