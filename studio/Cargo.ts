import { Payload } from './Payload.js';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(mass: number, material: string) {
        this.massKg = mass;
        this.material = material;
    }
}