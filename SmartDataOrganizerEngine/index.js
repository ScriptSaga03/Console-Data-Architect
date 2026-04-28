
const users = [
  {
    id: 1,
    name: "Ali",
    age: 22,
    active: true,
    salary: 30000,
    city: "Delhi",
    skills: ["js", "react"],
  },
  {
    id: 2,
    name: "Sara",
    age: 28,
    active: false,
    salary: 50000,
    city: "Mumbai",
    skills: ["python", "ml"],
  },
  {
    id: 3,
    name: "John",
    age: 35,
    active: true,
    salary: 70000,
    city: "Delhi",
    skills: ["java", "spring"],
  },
  {
    id: 4,
    name: "Riya",
    age: 24,
    active: true,
    salary: 40000,
    city: "Pune",
    skills: ["js", "node"],
  },
  {
    id: 5,
    name: "Alex",
    age: 30,
    active: false,
    salary: 60000,
    city: "Mumbai",
    skills: ["go", "docker"],
  },

  {
    id: 6,
    name: "Neha",
    age: 27,
    active: true,
    salary: 45000,
    city: "Delhi",
    skills: ["html", "css"],
  },
  {
    id: 7,
    name: "Kabir",
    age: 32,
    active: false,
    salary: 52000,
    city: "Bangalore",
    skills: ["python", "django"],
  },
  {
    id: 8,
    name: "Simran",
    age: 26,
    active: true,
    salary: 38000,
    city: "Pune",
    skills: ["js", "angular"],
  },
  {
    id: 9,
    name: "Rahul",
    age: 29,
    active: true,
    salary: 55000,
    city: "Delhi",
    skills: ["node", "mongodb"],
  },
  {
    id: 10,
    name: "Priya",
    age: 31,
    active: false,
    salary: 62000,
    city: "Mumbai",
    skills: ["react", "redux"],
  },

  {
    id: 11,
    name: "Arjun",
    age: 34,
    active: true,
    salary: 75000,
    city: "Bangalore",
    skills: ["java", "spring"],
  },
  {
    id: 12,
    name: "Meera",
    age: 23,
    active: true,
    salary: 32000,
    city: "Pune",
    skills: ["js", "node"],
  },
  {
    id: 13,
    name: "Vikas",
    age: 36,
    active: false,
    salary: 68000,
    city: "Delhi",
    skills: ["go", "kubernetes"],
  },
  {
    id: 14,
    name: "Anjali",
    age: 25,
    active: true,
    salary: 41000,
    city: "Mumbai",
    skills: ["html", "css"],
  },
  {
    id: 15,
    name: "Rohit",
    age: 33,
    active: true,
    salary: 72000,
    city: "Bangalore",
    skills: ["python", "ml"],
  },

  {
    id: 16,
    name: "Sneha",
    age: 28,
    active: false,
    salary: 53000,
    city: "Pune",
    skills: ["react", "node"],
  },
  {
    id: 17,
    name: "Karan",
    age: 37,
    active: true,
    salary: 80000,
    city: "Delhi",
    skills: ["java", "microservices"],
  },
  {
    id: 18,
    name: "Pooja",
    age: 24,
    active: true,
    salary: 39000,
    city: "Mumbai",
    skills: ["js", "vue"],
  },
  {
    id: 19,
    name: "Nikhil",
    age: 30,
    active: false,
    salary: 61000,
    city: "Bangalore",
    skills: ["go", "docker"],
  },
  {
    id: 20,
    name: "Isha",
    age: 26,
    active: true,
    salary: 42000,
    city: "Delhi",
    skills: ["html", "css"],
  },
];





// 🟢 LEVEL 1 (Basic Sorting) [1–10]
// salary ascending
const userOrderBySalary = (data)=>{
  return data.toSorted((a, b) => a.salary - b.salary);
}
console.log('Asc order by Salary:', userOrderBySalary(users));
// Salary descending
const descOrderBySalary = (data) => {
  return data.toSorted((a,b) => b.salary - a.salary)
}
console.log('Desc order by Salary:', descOrderBySalary(users));
// Age ascending sort
const getUserOrderByAge = (data) => {
  return data.toSorted((a, b) => a.age - b.age)
}
console.log('user order by age :', getUserOrderByAge(users))
// Name alphabetically sort 
const userNameAscSort = data => {
  return data.toSorted((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
}
console.log('Name alphabetically sort : ', userNameAscSort(users))
// Name reverse 
const userSortDescOrder = data => {
  return data.toSorted((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
}
console.log('desc order name :', userSortDescOrder(users))
// Cities alphabetically
const getCitiesAlphaSort = data => {
   return data.toSorted((a, b) => a.city.localeCompare(b.city,  undefined, { sensitivity: "base"} ));
}
console.log('cities sort by asc:' , getCitiesAlphaSort(users))
// Users id sort 
const userSortById = data =>{
  return data.toSorted((a,b) => a.id - b.id)
}
console.log('user sort by id: ', userSortById(users))
// Shortest name first
const shortestNameUser = data =>{
  return data.toSorted((a, b) =>{
     const lenDiff = a.name.length - b.name.length;
    if(lenDiff !== 0) return lenDiff;
    return a.name.localeCompare(b.name);
  });
}

console.log('shortest name :', shortestNameUser(users))
// Longest name first
const longestNameLenFirst = data =>{
  return [...data].sort((a,b) => {
    const lenDiff = b.name.length - a.name.length;
    if(lenDiff !== 0) return lenDiff;
    return b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
  })
};

console.log('longest name order :',longestNameLenFirst(users) )
// Salary even first
const sortEvenThenSalary = (data) => {
  return data.toSorted((a, b) => {
    const diff = (a.salary % 2) - (b.salary % 2);
    if (diff !== 0) return diff;

    return a.salary - b.salary;
  });
};
console.log('salary even order : ', sortEvenThenSalary(users))
