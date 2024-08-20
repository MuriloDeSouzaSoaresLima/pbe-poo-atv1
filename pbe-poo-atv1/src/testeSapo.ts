import { Sapo } from "./Sapo";

//instanciar (criar objeto)
const Sapo1: Sapo = new Sapo( 20 , 35 , 'marrom');

Sapo1.pular();
Sapo1.comer();

const altura = Sapo1.getAltura();
console.log(altura)

const psi = Sapo1.getAro();
console.log(psi);

const cor = Sapo1.getCor();
console.log(cor);