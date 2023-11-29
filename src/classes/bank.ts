import { Person } from './abstract/Pessoa';


export class Conta extends Person {
	private titular: Person;
    private number_accont: string[];


    
	constructor(_name: string,
		_last_name: string,
		_birth_date: string,
		_bi_number: string,
		_nacionality: string,
		_current_house: string,
		_bi_valid_date: string,
		_bi_date_expiration: string,
		_email: string,
		_phoneNumber: Record<string, string>[]) {
		super(
			_name.toUpperCase(),
			_last_name.toUpperCase(),
			new Date(_birth_date).toLocaleDateString('pt-Pt'),
			_bi_number.toUpperCase(),
			_nacionality.toUpperCase(),
			_current_house.toUpperCase(),
			new Date(_bi_valid_date).toLocaleDateString('pt-Pt'),
			new Date(_bi_date_expiration).toLocaleDateString('pt-Pt'),
			_email, _phoneNumber
		);
	}

	leitura() {
		console.log(this.name, this.last_name.toUpperCase(), this.birth_date, this.bi_number.toUpperCase(), this.nacionality.toUpperCase(), this.current_house.toUpperCase(), this.bi_valid_date, this.bi_date_expiration, this.email, this.phoneNumber);
	}
}

