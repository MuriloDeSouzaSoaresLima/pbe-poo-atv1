"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
class Bicicleta {
    //construtor
    constructor(_velocidade, _aro, _cor) {
        this.velocidade = _velocidade;
        this.aro = _aro;
        this.cor = _cor;
    }
    // metodos get e set
    getVelocidade() {
        return this.velocidade;
    }
    setVelocidade(_velocidade) {
        this.velocidade = _velocidade;
    }
    getAro() {
        return this.aro;
    }
    setAro(_aro) {
        this.aro = _aro;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    //metodos diagrama
    pedalar(nome) {
        console.log(`${nome} está pedalando a bicicleta`);
    }
    frear() {
        console.log(`A bicicleta está freando.`);
    }
}
exports.Bicicleta = Bicicleta;
//# sourceMappingURL=Bicicleta.js.map