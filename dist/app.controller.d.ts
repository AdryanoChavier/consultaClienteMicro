import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Cliente } from './interfaces/consultaCliente.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    logger: Logger;
    consulta(cliente: Cliente): Promise<void>;
}
