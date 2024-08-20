import { Espada } from "./espada";

//instanciar (criar objeto)
const Espada1: Espada = new Espada( 10 , 120 , 'katana');

Espada1.cortando();
Espada1.Bloquear();

const tamanho = Espada1.getTamanho();
console.log(tamanho)

const peso = Espada1.getPeso();
console.log(peso);

const tipo = Espada1.getTipo();
console.log(tipo);