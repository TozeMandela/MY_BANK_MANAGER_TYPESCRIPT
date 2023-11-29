import {IPerson} from './IPessoa';

export interface IPropsConta {
    titular: IPerson;
    number_accont: InumberAccount[];
    amountExist: number;
    password: string;
    passwConfirm: string;
    history: ImovimentAccount;

    sacar(amount: number): number
    transferir(amount: number, numberOtherAccount: string): true
    depositar(amount: number): number
    emitStratus(): void
}

export interface InumberAccount {
    TypeOf: string;
    Id: string;
    account: string;
    iban: string
    date_created: string;
    isPrimary: true;
}

export interface ImovimentAccount {
    id: number;
    movimentRealized: boolean;
    TypeMovment: 'deposito' | 'levantamento'| 'transferencia'|'actualização da conta'|'abertura de conta conjunta'|'abertura de subconta' | 'abertura de conta em moeda estrangeira'|'pedido de encerramento de conta' | 'pedido de cartão multicaixa';
    reason: string;
    hour: string;
    date: string;
}