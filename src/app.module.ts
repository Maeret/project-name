import { WalletModule } from './wallet.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TonModule } from './ton.module';


@Module({
  imports: [
    WalletModule, TonModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
