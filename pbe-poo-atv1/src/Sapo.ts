export class Sapo {

    //atributos
    private altura: number;
    private psi: number;
    private cor:string

    //construtor
    public constructor(_altura: number, _psi: number, _cor: string) {
        this.altura = _altura;
        this.psi = _psi;
        this.cor = _cor;
    }

    // metodos get e set
    public getAltura(): number {
        return this.altura;
    }

    public setaltura(_altura: number): void {
        this.altura = _altura
    }

    public getAro(): number {
        return this.psi;
    }

    public setAro(_psi: number): void {
        this.psi = _psi
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor
    }

    //metodos diagrama
    public pular():void {
        console.log(`O sapo está pulando`);
    }

    public comer(): void {
        console.log(`O sapo esta comendo`);
    }
}