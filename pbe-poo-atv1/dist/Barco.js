"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barco = void 0;
class Barco {
    //construtor
    constructor(_tamanho, _peso, _material) {
        this.tamanho = _tamanho;
        this.peso = _peso;
        this.material = _material;
    }
    // metodos get e set
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    //metodos diagrama
    trasportar() {
        console.log(`O barco esta trasportando`);
    }
    boiar() {
        console.log(`O barco esta boiando`);
    }
}
exports.Barco = Barco;
//# sourceMappingURL=Barco.js.map