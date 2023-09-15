// const func = (n: number): number => {
//   return 2 * n;
// };

// const output = func(5);
// console.log(output);

// const func = <T>(n: T): T => {
//   return n;
// };

// const ans1 = func(23)
// const ans2 = func("23")

// type User = {
//   name: string;
//   age: number;
// };

// let person1: User = {
//   name: "Sourabh",
//   age: 34,
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const ans = func<User>(person1);
// ----------------------------------------------

// const arr1: number[] = [];
// const arr: Array<number> = [];

// const func = <T, U>(n: T, o: U) => {
//   return { n, o };
// };

// const ans = func<number, string>(20, "hello");
// ----------------------------------------------
type User = {
  name: string;
  age: number;
};

type User2 = {
  name: string;
  age: number;
  email: string;
};

const Person1: User = {
  name: "sdnkklfd",
  age: 234,
};
const Person2: User2 = {
  name: "sdnkklfd",
  age: 234,
  email: "djkbdsjkfb",
};

const func = <T, U extends T>(n: T, o: U) => {
  return { n, o };
};
const ans = func<User, User2>(Person1, Person2);
