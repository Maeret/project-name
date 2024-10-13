import { WalletModule } from './wallet.module';
import { WalletService } from './wallet.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TonModule } from './ton.module';
import { TonService } from './ton.service';

@Module({
  imports: [
  WalletModule, TonModule ],
  controllers: [AppController],
  providers: [
    WalletService, TonService, AppService],
})
export class AppModule { }
