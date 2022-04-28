// basic types
//let id: number = 5;
let company: string = "Ben Catton"
let isPublished: boolean = true;
let x: any = 'Hello'
let age: number;

let ids: number[] = [1,2,3,4,5] // array of numbers
let arr: any[] = [1, true, 'hi'] // array of any types


//tuples
let person: [number, string, boolean] = [1, 'Ben', true];

//tupel array
let employee: [number, string][]

employee = [
  [1, "Brad"],
  [2, "Ben"],
  [3, "Jan"]
]

//unions - set a variable as one or another type

let id: number | string = 22;
id = 'twenty';
