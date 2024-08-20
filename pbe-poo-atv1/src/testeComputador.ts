import { Computador } from "./Computador";

//instanciar (criar objeto)
const Computador1: Computador = new Computador( 'ryzen' , 16 , 'windows');

Computador1.estudar('ciencias');
Computador1.pesquisar('autonomia');

const Processador = Computador1.getProcessador();
console.log(Processador)

const ram = Computador1.getRam();
console.log(ram);

const Sistema = Computador1.getSistema();
console.log(Sistema);