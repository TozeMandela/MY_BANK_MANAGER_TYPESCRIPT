
export interface IPerson {
    name: string;
	last_name: string;
	birth_date: string;
	bi_number: string;
	nacionality: string;
	current_house: string;
	bi_valid_date: string;
	bi_date_expiration: string;
	email: string;
	phoneNumber: Record<string, string>[]
    updated_bi_number:(date_valid: string, date_expir: string)=> void;
    updated_house:(newHouse: string) => void;
}
