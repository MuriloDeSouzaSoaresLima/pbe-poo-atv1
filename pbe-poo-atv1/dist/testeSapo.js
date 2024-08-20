"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sapo_1 = require("./Sapo");
//instanciar (criar objeto)
const Sapo1 = new Sapo_1.Sapo(20, 35, 'marrom');
Sapo1.pular();
Sapo1.comer();
const altura = Sapo1.getAltura();
console.log(altura);
const psi = Sapo1.getAro();
console.log(psi);
const cor = Sapo1.getCor();
console.log(cor);
//# sourceMappingURL=testeSapo.js.map