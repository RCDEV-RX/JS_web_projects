process.stdout.write("Hello World!".concat("\n How you're doing? \n\n"));

class Class1{
    constructor(name, number){
        this.name = name;
        this.number = number;
        this.f1 = function(){
            console.log("this is a post-ES6 class");
        }
    }
};

const obj1 = new Class1('Myself', Math.pow(Math.PI,Math.LN2).toFixed(2));

process.stdout.write(JSON.stringify(obj1).concat("\n\n I like coding :) \n\n"));
obj1.f1();

const fx = 257;

function Class2(name, number){
    this.name = name;
    this.number = number;
    this.composition = new Object(new Class1("Myselfi again :)", Math.floor(Math.random()*1000)));
    this.f1 = function(){
        return `${fx} and this script is meant to run on a NODE-NGINX Enviroment`;
    }
}

const obj2 = new Class2(JSON.stringify(process.stdout.argv), Math.floor(Math.random()*2000));
console.log(obj2);
obj2.composition.f1();
console.log(obj2.f1());