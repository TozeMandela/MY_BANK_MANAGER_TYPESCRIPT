import { IPropsConta, ImovimentAccount, InumberAccount } from './interfaces/IConta';
import { IPerson } from './interfaces/IPessoa';


export class Conta implements IPropsConta{
	private readonly titular: IPerson;
	private amountExist: number;
	private readonly history: ImovimentAccount;
	private readonly number_accont: InumberAccount[];


	constructor(cliente: IPerson, newClient: true, accountType: string = 'CONTA POPANÇA'){
		this.titular = cliente;
		this.amountExist = 0;
		this.number_accont = this.criateAccount(accountType, newClient);
	}

	private createIban(numberAccount: string): string{
		return `0017.0000${numberAccount.split(/(\w\w\w\w)/).join('.').replace(/\.\./gi, '.')}1013.3`;
	}

	private createInumberAccount(): string{
		const aux = Math.floor(Math.random()*1000000);
		let str = String(aux);

		if(str.length > 9) return this.createInumberAccount();

		while(str.length < 8 && str.length < 9){
			const increment = Math.floor(Math.random()*10);
			str = `${str}${increment}`;
		}
		return `${str}`;
	}

	private criateAccount(accountType: string, isPrimaryAccount: boolean): InumberAccount {
	    return {
	        account: this.createInumberAccount(),
	        date_created: new Date(Date.now()).toLocaleDateString('pt-Pt'),
	        iban: this.createIban(this.createInumberAccount()),
	        Id: this.titular.bi_number,
	        isPrimary: isPrimaryAccount,
	        TypeOf: accountType,
	    };
	}

	leitura () {
		console.log('--------------------------------------------------------------\n\n',this.titular, '\nConta: \n\n', this.number_accont, '\nsaldo: ',this.amountExist, 'KZ');
	}

	emitStratus(): void {

	}

	consultaSaldo(){
		return this.amountExist;
	}

	sacar(amount: number): number | string {
		const aux = this.amountExist;
		this.amountExist =  this.amountExist > amount ? this.amountExist - amount : this.amountExist;
		if(aux === this.amountExist) return 'saldo inferior';

		return this.amountExist;
	}

	transferir(amount: number, numberOtherAccount: IPropsConta): boolean {
		if(this.consultaSaldo()<amount) return false;

		const rest = this.sacar(amount);
        
		if(typeof(rest) !== 'number') return false;
		numberOtherAccount.depositar(amount);

		return true;
	}

	depositar(amount: number): number {
		return this.amountExist += amount;
	}

	get tutular () {
		return {
			titular: this.titular.name
		};
	}

}