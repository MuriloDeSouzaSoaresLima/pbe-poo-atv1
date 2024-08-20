export class Bicicleta {

    //atributos
    private velocidade: number;
    private aro: number;
    private cor:string

    //construtor
    public constructor(_velocidade: number, _aro: number, _cor: string) {
        this.velocidade = _velocidade;
        this.aro = _aro;
        this.cor = _cor;
    }

    // metodos get e set
    public getVelocidade(): number {
        return this.velocidade;
    }

    public setVelocidade(_velocidade: number): void {
        this.velocidade = _velocidade
    }

    public getAro(): number {
        return this.aro;
    }

    public setAro(_aro: number): void {
        this.aro = _aro
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor
    }

    //metodos diagrama
    public pedalar(nome: string):void {
        console.log(`${nome} está pedalando a bicicleta`);
    }

    public frear(): void {
        console.log(`A bicicleta está freando.`);
    }
}