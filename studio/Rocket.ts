import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload[] = []; 
    astronauts: Payload[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for(let i: number = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo(cargo: Cargo): boolean {
        let canAdd = this.canAdd(cargo);
        if(canAdd) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        let canAdd = this.canAdd(astronaut);
        if(canAdd) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}