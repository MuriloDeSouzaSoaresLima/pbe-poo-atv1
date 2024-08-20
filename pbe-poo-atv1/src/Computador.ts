export class Computador {

    //atributos
    private processador: string;
    private ram: number;
    private sistema:string

    //construtor
    public constructor(_processador: string, _ram: number, _sistema: string) {
        this.processador = _processador;
        this.ram = _ram;
        this.sistema = _sistema;
    }

    // metodos get e set
    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(_processador: string): void {
        this.processador = _processador
    }

    public getRam(): number {
        return this.ram;
    }

    public setRam(_ram: number): void {
        this.ram = _ram
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema = _sistema
    }

    //metodos diagrama
    public estudar(nome:string):void {
        console.log(`${nome} esta estudando`);
    }

    public pesquisar(nome:string): void {
        console.log(`${nome} esta jogando`);
    }
}