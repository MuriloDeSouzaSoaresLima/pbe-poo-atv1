"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sapo = void 0;
class Sapo {
    //construtor
    constructor(_altura, _psi, _cor) {
        this.altura = _altura;
        this.psi = _psi;
        this.cor = _cor;
    }
    // metodos get e set
    getAltura() {
        return this.altura;
    }
    setaltura(_altura) {
        this.altura = _altura;
    }
    getAro() {
        return this.psi;
    }
    setAro(_psi) {
        this.psi = _psi;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    //metodos diagrama
    pular() {
        console.log(`O sapo está pulando`);
    }
    comer() {
        console.log(`O sapo esta comendo`);
    }
}
exports.Sapo = Sapo;
//# sourceMappingURL=Sapo.js.map