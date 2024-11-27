import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';

import { EventPattern, Payload } from '@nestjs/microservices';
import { Cliente } from './interfaces/consultaCliente.interface';
@Controller()
export class AppController {
constructor(private readonly appService: AppService) {}
logger = new Logger (AppController.name)

@EventPattern('consulta')
async consulta(@Payload() cliente: Cliente){
 const clienteBanco = await this.appService.findById(cliente.id)
 console.log(clienteBanco)
this.logger.log(`cliente:`+ JSON.stringify(clienteBanco))
}
}