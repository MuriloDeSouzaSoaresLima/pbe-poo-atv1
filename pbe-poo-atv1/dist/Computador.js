"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
class Computador {
    //construtor
    constructor(_processador, _ram, _sistema) {
        this.processador = _processador;
        this.ram = _ram;
        this.sistema = _sistema;
    }
    // metodos get e set
    getProcessador() {
        return this.processador;
    }
    setProcessador(_processador) {
        this.processador = _processador;
    }
    getRam() {
        return this.ram;
    }
    setRam(_ram) {
        this.ram = _ram;
    }
    getSistema() {
        return this.sistema;
    }
    setSistema(_sistema) {
        this.sistema = _sistema;
    }
    //metodos diagrama
    estudar(nome) {
        console.log(`${nome} esta estudando`);
    }
    pesquisar(nome) {
        console.log(`${nome} esta jogando`);
    }
}
exports.Computador = Computador;
//# sourceMappingURL=Computador.js.map