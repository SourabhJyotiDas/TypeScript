"use strict";
// const func = <CustomType>(n: CustomType): CustomType => {
//   return n;
// };
// type Person = {
//   name: string;
//   age: number;
// };
// const func = <T>(n: T): T => {
//   return n;
// };
// const person1: Person = {
//   name: "Sourabh",
//   age: 23,
// };
// const answer = func<Person>(person1);
// const answer2 = func<string>("person1");
// const answer3 = func<number>(34);
// console.log(answer);
// console.log(answer2);
// console.log(answer3);
// answer.age
// const func2 = <T, U >(n: T, o: U) => {
//   return { n, o };
// };
// const ans = func2(23, "Eren Eager");
// console.log(ans);
// type Person = {
//   name: string;
//   email: string;
// };
// type Person2 = {
//   name: string;
//   email: string;
//   password: number;
// };
// const user: Person = {
//   name: "SOurabh",
//   email: "sdsddsuibdis",
// };
// const user2: Person2 = {
//   name: "SOurabh",
//   email: "sdsddsuibdis",
//   password: 32432432867,
// };
// const func = <T, U extends T>(a: T, b: U) => {
//   return a;
// };
// const ans = func<Person, Person2>(user, user2);
// type Person = {
//   name: string;
//   age: number;
// };
// const users: Person[] = [
//   { name: "Sourabh", age: 12 },
//   { name: "Kalu", age: 24 },
//   { name: "Raju", age: 36 },
// ];
// const filterByPeople = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((ele => ele[property] === value));
// };
// const filterdPeopleBYName = filterByPeople(
//   users,
//   "age",
//   36
// );
// console.log(filterdPeopleBYName);
