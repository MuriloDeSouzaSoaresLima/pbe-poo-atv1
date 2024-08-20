import { Bicicleta } from "./Bicicleta";

//instanciar (criar objeto)
const bicicleta1: Bicicleta = new Bicicleta( 25 , 26 , 'verde');

bicicleta1.pedalar(`Murilo`);
bicicleta1.frear();

const velocidade = bicicleta1.getVelocidade();
console.log(velocidade)

const aro = bicicleta1.getAro();
console.log(aro);

const cor = bicicleta1.getCor();
console.log(cor);