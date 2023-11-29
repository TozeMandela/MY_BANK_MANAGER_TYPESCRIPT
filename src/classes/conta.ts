import { IPropsConta, ImovimentAccount, InumberAccount } from './interfaces/IConta';
import { IPerson } from './interfaces/IPessoa';


export class Conta implements IPropsConta{
	private readonly titular: IPerson;
	private readonly amountExist: number;
	private readonly history: ImovimentAccount;
	private readonly number_accont: InumberAccount[];
	private readonly passwConfirm: string;
	private readonly password: string;



	constructor(cliente: IPerson){
		this.titular = cliente;
	}

	leitura () {
        
		console.log(this.titular);
	}

	emitStratus(): void {

	}

	sacar(amount: number): number {

	}

	transferir(amount: number, numberOtherAccount: string): true {

	}

	depositar(amount: number): number {

	}

	get tutular () {
		return {
			titular: this.titular.name
		};
	}

}