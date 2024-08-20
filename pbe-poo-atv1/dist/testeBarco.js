"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Barco_1 = require("./Barco");
//instanciar (criar objeto)
const Barco1 = new Barco_1.Barco(100, 260, 'Chumco');
Barco1.trasportar();
Barco1.boiar();
const tamanho = Barco1.getTamanho();
console.log(tamanho);
const peso = Barco1.getPeso();
console.log(peso);
const material = Barco1.getMaterial();
console.log(material);
//# sourceMappingURL=testeBarco.js.map