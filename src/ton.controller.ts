import { Controller, Get } from '@nestjs/common';
import { TonService } from './ton.service';

@Controller('ton')
export class TonController {
  /*  constructor(private readonly tonService: TonService) {}

    @Get('deploy')
    async deployContract() {
        
        try {
            const wallet = // логика создания кошелька ;
            const result = await this.tonService.deployContract(wallet);
            return { status: 'Contract deployed', result };
        } catch (error) {
            return { status: 'Failed to deploy contract', error };
        }
    } */
}

