
export class ErrorMessage extends Error{
	private readonly message: string = '';

	constructor(message: string){
		super();

		this.message = message;
	}
}