import { IPerson } from '../interfaces/IPessoa';


export abstract class Person implements IPerson {
	protected readonly name: string;
	protected readonly last_name: string;
	protected readonly birth_date: string;
	protected readonly bi_number: string;
	protected readonly nacionality: string;
	protected  current_house: string;
	protected  bi_valid_date: string;
	protected  bi_date_expiration: string;
	protected email: string;
	protected phoneNumber: Record<string, string>[];

	constructor(_name: string, _last_name: string, _birth_date: string, _bi_number: string, _nacionality: string, _current_house: string, _bi_valid_date: string, _bi_date_expiration: string, _email: string, _phoneNumber: Record<string, string>[]) {
		this.name = _name;
		this.last_name = _last_name;
		this.birth_date = _birth_date;
		this.bi_number = _bi_number;
		this.nacionality = _nacionality;
		this.current_house = _current_house;
		this.bi_valid_date = _bi_valid_date;
		this.bi_date_expiration = _bi_date_expiration;
		this.email = _email;
		this.phoneNumber = _phoneNumber;
	}

	updated_bi_number(date_valid: string, date_expir: string): void {
		this.bi_valid_date = date_valid,
		this.bi_date_expiration = date_expir;
	}

	updated_house(newHouse: string): void {
		this.current_house = newHouse;
	}

}