"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espada = void 0;
class Espada {
    //construtor
    constructor(_peso, _tamanho, tipo) {
        this.peso = _peso;
        this.tamanho = _tamanho;
        this.tipo = tipo;
    }
    // metodos get e set
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    //metodos diagrama
    cortando() {
        console.log(` A espada esta cortando`);
    }
    Bloquear() {
        console.log(`A espada esta bloqueando`);
    }
}
exports.Espada = Espada;
//# sourceMappingURL=espada.js.map