// UTILITY CLASSES TYPES
// pertial type

// type User = {
//   name: string;
//   email: string;
// };

// type CopyUserButNotManditoryValue = Partial<User>;
// --------------------------------------------------------------
// Required Type : Opposite of Partial

// type Person = {
//   name?: string;
//   email?: string;
// };

// type OppositeOfPartial = Required<Person>;

// const Person2: Required<Person> = {
//   name: "Sourabh  Jyoti Das",
//   email: "dassourabh126@gmail.com",
// };
// --------------------------------------------------------------
//  Readonly Type

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Readonly<User>;
// --------------------------------------------------------------

// Record Type
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Record<"name" | "email", string>;
// --------------------------------------------------------------

// Pick Type
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   country: string;
//   status: string;
// }

// type ShippingInfo = Pick<OrderInfo, "city" | "status"| "country" >;
// --------------------------------------------------------------

// Omit Type
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   country: string;
//   status: string;
// }

// type Random = Omit<OrderInfo, "city" | "country" | "status">;
// --------------------------------------------------------------

// Exclude type
// type Myunion = string | number | boolean;
// type Random = Exclude<Myunion, number>;
// --------------------------------------------------------------

// Extract Type
// type Myunion = string | number | boolean;
// type Random = Extract<Myunion, number>;
// --------------------------------------------------------------

// NonNullable type
// type Myunion = string | number | boolean | null| undefined;
// type Random = NonNullable<Myunion>;
// --------------------------------------------------------------

// Parameters Type
// const myFunc =(a:number,b:string){
//     console.log(a+b);
// }
// type Random = Parameters<typeof myFunc>

// --------------------------------------------------------------

// Constructer Parameter Type
// class SampleClass {
//     constructor(s:string,t:string){
//         }
// }
// type Random = ConstructorParameters<typeof SampleClass>

// --------------------------------------------------------------

// Return Type
// const myFunc =(a:number,b:number):number{
//     // console.log(a+b);
//     return a+b
// }
// type Random = ReturnType<typeof myFunc>
// --------------------------------------------------------------

// Intance Type

// class SampleClass {
//   constructor( public s: string,public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>;

// const user: Random = {
//   s: "34234",
//   t: "afdwefrew",
// };

// console.log(user);
// --------------------------------------------------------------
