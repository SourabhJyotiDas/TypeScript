"use strict";
// partial type
// type User = {
//    name:string,
//    email:string
// }
// type CopybutOptional = Partial<User>;
// requiredType --> opposite of Parial type
// type User = {
//    name?:string ,
//    email?:string
// }
// type CopybutRequired = Required<User>;
// readonly type
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Readonly<User>;
// Record Type
// interface Userinfo {
//   age: number;
// }
// type Username = "Adam" | "Sukuna";
// const Users: Record<Username, Userinfo> = {
//   Adam: {
//     age: 24,
//   },
//   Sukuna: {
//     age: 34,
//   },
// };
// Pick Type 
// type OrderInfo {
//   readonly id:string,
//   user:string,
//   address:string
// }
// type ShippingInfo = Pick<OrderInfo,"user" | "id">
// Omit Type
// type OrderInfo  {
//    readonly id:string,
//    user:string,
//    address:string
//  }
//  type ShippingInfo = Omit<OrderInfo,"user" | "id">
