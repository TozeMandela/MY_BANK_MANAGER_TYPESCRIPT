import { Person } from './abstract/Pessoa';


export class Cliente extends Person {

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

	leitura(): void {
		console.log({
			name: this.name,
			last_name: this.last_name.toUpperCase(),
			birth_date: this.birth_date,
			bi_number: this.bi_number.toUpperCase(),
			nacionality: this.nacionality.toUpperCase(),
			current_house: this.current_house.toUpperCase(),
			bi_valid_date: this.bi_valid_date,
			bi_date_expiration: this.bi_date_expiration,
			email: this.email,
			phoneNumber: this.phoneNumber
		});
	}

}

