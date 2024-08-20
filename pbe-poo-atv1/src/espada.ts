export class Espada {

    //atributos
    private peso: number;
    private tamanho: number;
    private tipo: string

    //construtor
    public constructor(_peso: number, _tamanho: number, tipo: string) {
        this.peso = _peso;
        this.tamanho = _tamanho;
        this.tipo = tipo;
    }

    // metodos get e set
    public getPeso(): number {
        return this.peso;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo
    }

    //metodos diagrama
    public cortando():void {
        console.log(` A espada esta cortando`);
    }

    public Bloquear(): void {
        console.log(`A espada esta bloqueando`);
    }
}