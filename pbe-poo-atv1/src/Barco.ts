export class Barco {

    //atributos
    private tamanho: number;
    private peso: number;
    private material:string

    //construtor
    public constructor(_tamanho: number, _peso: number, _material: string) {
        this.tamanho = _tamanho;
        this.peso = _peso;
        this.material = _material;
    }

    // metodos get e set
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material
    }

    //metodos diagrama
    public trasportar():void {
        console.log(`O barco esta trasportando`);
    }

    public boiar(): void {
        console.log(`O barco esta boiando`);
    }
}