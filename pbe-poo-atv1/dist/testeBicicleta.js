"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bicicleta_1 = require("./Bicicleta");
//instanciar (criar objeto)
const bicicleta1 = new Bicicleta_1.Bicicleta(25, 26, 'verde');
bicicleta1.pedalar('Claudio');
bicicleta1.frear();
const velocidade = bicicleta1.getVelocidade();
console.log(velocidade);
const aro = bicicleta1.getAro();
console.log(aro);
const cor = bicicleta1.getCor();
console.log(cor);
//# sourceMappingURL=testeBicicleta.js.map