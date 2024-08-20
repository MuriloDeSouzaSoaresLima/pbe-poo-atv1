"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const espada_1 = require("./espada");
//instanciar (criar objeto)
const Espada1 = new espada_1.Espada(10, 120, 'katana');
Espada1.cortando();
Espada1.Bloquear();
const tamanho = Espada1.getTamanho();
console.log(tamanho);
const peso = Espada1.getPeso();
console.log(peso);
const tipo = Espada1.getTipo();
console.log(tipo);
//# sourceMappingURL=testeEspada.js.map