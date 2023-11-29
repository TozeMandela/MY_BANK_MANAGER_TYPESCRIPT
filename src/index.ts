import { Conta } from './classes/bank';

const conta = new Conta(
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

conta.leitura();
