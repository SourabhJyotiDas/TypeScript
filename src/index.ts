// let mynumber: number = 2343;

// let myStr:string = "This is a string"

// let newNumber = <number> 2345 ;

// let surname: string | number =  "my String" ;

// console.log(surname);

// ////////////////////////////////////////////////////////////////////

// Type Alise

// type StrORNumber = string | number;

// const myFunc = (a: number, b: number): number => {
//   return a + b;
// };

// let output: StrORNumber = myFunc(23, 34);
// console.log(output);

// type addTwoNumFunc = (a: number, b: number) => number;

// let myFuncforAddingTwoNum: addTwoNumFunc = (a, b) => {
//   return a + b;
// };

// console.log(myFuncforAddingTwoNum(5, 5));

// ///////////////////////////////////////////////////////////////////

// const numArr: number[] = [23, 34, 45, 56, 67, 78, 78];
// console.log(numArr);

// const strArr: string[] = ["hello", "world", "Welcome"];
// console.log(strArr);

// const newArr: Array<string | number> = ["ok", 23, "Working Fine"];
// console.log(newArr);

// let output =  newArr.map((i) =>  i.toString());
// console.log(output);

// ///////////////////////////////////////////////////////////////////

// type personDetails = {
//   heigth: number;
//   weight: number;
//   gender?: boolean;
// }

// const person1: personDetails = {
//   heigth: 23,
//   weight: 45,
//   gender: true,
// };
// const person2: personDetails = {
//   heigth: 23,
//   weight: 45,
// };

// console.log(person1);
// console.log(person2);

// ///////////////////////////////////////////////////////////////////

// interface personDetails {
//   heigth: number;
//   weight: number;
//   gender?: boolean;
// }
// interface personDetailsUpdated extends personDetails {
//   education: string;
//   func?: () => void;
// }

// let person1: personDetailsUpdated = {
//   heigth: 23,
//   weight: 34,
//   gender: true,
//   education: "Completed Everything",
// };

// console.log(person1);

// ///////////////////////////////////////////////////////////////////

// type Product = {
//   name: string;
//   stock: number;
//   price: number;
//   readonly id: number;
// };

// const product1: Product = {
//   name: "iphone 7",
//   stock: 23,
//   price: 343434,
//   id: Math.random() * 10,
// };

// const getData = (data: Product) => {
//   console.log(data);
// };

// getData(product1);

// ///////////////////////////////////////////////////////////////////

// const errorHandler = ():never => {
//   throw new Error();
// };

//////////////////////////////////////////////////////////////////////////////////

//  Classes

// class Player {
//   private height: number;
//   public weight: number;
//   protected power: number;
//   readonly id: string;

//   constructor(height: number, weight: number, power: number) {
//     this.height = height;
//     this.weight = weight;
//     this.power = power;
//     this.id = String(Math.random() * 1000);
//   }
// }

// class SuperPlayer extends Player {
//   special: boolean;

//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }

//   getmyPower = () => this.power;
// }

// const player1 = new SuperPlayer(23, 45, 98, false);
// console.log(player1.id);

//////////////////////////////////////////////////////////////////////////////////

// Type Assertion

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement> document.getElementById("btn") ;
// const btn = document.getElementById("btn")!;
// btn.onclick

// const img = document.getElementById("myImg") as HTMLImageElement;
// const img = <HTMLImageElement> document.querySelector("#myImg");
// img.src = "http://sampleImageUrl.png";

// const form = document.getElementById("myForm") as HTMLFormElement;
// const myInput = document.querySelector(".name") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const value = Number(myInput.value) + 20;
//   console.log(value);
//   console.log(typeof value);
//   const heading = document.querySelector(".myH1") as HTMLHeadingElement;
//   heading.innerHTML += String(value);

// const heading = document.createElement("h1");
// heading.textContent = String(value);
// document.querySelector("body")?.append(heading)
// };

// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   offer: boolean;
// }

// let product1: Product = {
//   name: "Iphone 7",
//   description: "I mean its all rigth",
//   offer: true,
//   price: 99000,
//   stock: 24,
// };

// const getData = (key: keyof Product) => {
//   return product1[key];
// };
// console.log(getData("name"));

// console.log(product1);
