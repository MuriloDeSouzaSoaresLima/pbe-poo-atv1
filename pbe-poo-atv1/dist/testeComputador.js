"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Computador_1 = require("./Computador");
//instanciar (criar objeto)
const Computador1 = new Computador_1.Computador('ryzen', 16, 'windows');
Computador1.estudar('claudio');
Computador1.pesquisar('claudio');
const Processador = Computador1.getProcessador();
console.log(Processador);
const ram = Computador1.getRam();
console.log(ram);
const Sistema = Computador1.getSistema();
console.log(Sistema);
//# sourceMappingURL=testeComputador.js.map