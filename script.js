class Human {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    aboutHuman(){
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

class Auto {
    constructor(brand, model, year, carNum){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.carNum = carNum;
        this.owner = 'nobody';
    }
    setOwner(obj){
        if(typeof obj == 'object' && obj.age >= 18){
            this.owner = obj;
        }
    }
    aboutAuto(){
        let owner = (this.owner == 'nobody') ? 'nobody' : this.owner.aboutHuman();
        return `This car : ${this.brand} ${this.model} ${this.year} ${this.carNum}
        and owner is ${owner}`;
    }
}

let olga = new Human('Olga',26);
console.log(olga.aboutHuman());
let ignat = new Human('Ignat',17);
console.log(ignat.aboutHuman());
let john = new Human('John',33);
console.log(john.aboutHuman());

let tesla = new Auto('Tesla','model 3','2020','KK0989AE');
let audi = new Auto('Audi','Q7','2020','BE9999AO');

console.log(tesla.aboutAuto());
console.log(audi.aboutAuto());

console.log(tesla.setOwner(olga));
console.log(audi.setOwner(ignat));

console.log(tesla.aboutAuto());
console.log(audi.aboutAuto());

console.log(audi.setOwner(john));
console.log(audi.aboutAuto());

