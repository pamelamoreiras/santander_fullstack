function soma( a: number, b: number){
    return a + b;
}

interface IAnimal{
    nome : string;
    tipo: 'terrestre' | ' aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'terrestre',
    domestico: false
}

const felino: IFelino ={
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: true
}