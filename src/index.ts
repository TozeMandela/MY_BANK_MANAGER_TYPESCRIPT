import { Cliente } from './classes/Cliente';
import { Conta } from './classes/conta';

const cliente = new Cliente(
	'Tozé',
	'Mandela',
	'1999-08-01',
	'0033445566LN045',
	'Angolana',
	'gamek',
	'2000-05-10',
	'2000-05-10',
	'mandelajunior10@gmail.com',
	[{'+244':'937537126'},{'+244':'937537126'}]
);

const cliente1 = new Cliente(
	'Tozé',
	'Mandela',
	'1999-08-01',
	'0033445566LN045',
	'Angolana',
	'gamek',
	'2000-05-10',
	'2000-05-10',
	'mandelajunior10@gmail.com',
	[{'+244':'937537126'},{'+244':'937537126'}]
);

const conta = new Conta(cliente);
const conta1 = new Conta(cliente1);

conta.leitura();

console.log(conta.tutular);

