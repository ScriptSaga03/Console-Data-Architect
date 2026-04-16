
// 🚀 MODULE 3: Searching & Condition Logic
// Smart User Search Engine
const users = [
  {
    id: 1,
    name: "Aman",
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
    name: "aman",
    age: 26,
    active: true,
    salary: 45000,
    city: "Delhi",
    skills: ["js"],
  }, 
  {
    id: 7,
    name: "Neha",
    age: 27,
    active: false,
    salary: 30000,
    city: "Pune",
    skills: [],
  }, 
  {
    id: 8,
    name: "Raj",
    age: 32,
    active: true,
    salary: 80000,
    city: "Mumbai",
    skills: ["js", "react", "node"],
  },
  {
    id: 9,
    name: "Priya",
    age: 29,
    active: true,
    salary: 50000,
    city: "Delhi",
    skills: ["python"],
  }, 
  {
    id: 10,
    name: "Anu",
    age: 21,
    active: false,
    salary: 20000,
    city: "Kolkata",
    skills: ["html", "css"],
  },

 
  {
    id: 11,
    name: "Bob",
    age: 25,
    active: true,
    salary: 30000,
    city: "Delhi",
    skills: ["js"],
  }, 
  {
    id: 12,
    name: "Eve",
    age: 28,
    active: true,
    salary: 90000,
    city: "Mumbai",
    skills: ["ml", "python"],
  },
];



// 🟢 LEVEL 1 (Basic Search) [1–10]

// 1. Find the first active user
const getFirstActiveUser = (data) =>{
  return data.find(u => u.active)
};
const firstActiveUser = getFirstActiveUser(users);
console.log('first active user :', firstActiveUser);
// 2. Find the first user with salary > 50k
const getFirstUserByHigherSalary = (data) =>{
  return data.find(u => u.salary > 50000);
}
console.log('first user whos salary > 50k :', getFirstUserByHigherSalary(users))
// 3. Find the first user from a specific city (e.g., Mumbai)
const getFirstUserByCity = (data,city) =>{
  const c = city.trim().toLowerCase();
  return data.find(u => u.city.toLowerCase() === c );
}
console.log('first user by city :', getFirstUserByCity(users, 'mumbai'));
// 4. Find the first inactive user
const getFirstInActiveUser = (data) =>{
  return data.find(u => !u.active);
};

console.log('first inactive user :', getFirstInActiveUser(users))
// 5. Check if any user has a specific skill (e.g., "python")
const hasUserWithSkill =(data, query) =>{
  const q = query.trim().toLowerCase();
  return data.some(user => 
    user.skills.some(skill => skill.toLowerCase() === q)
  );
}

console.log('User has Python skill:', hasUserWithSkill(users, 'python'));
console.log('User has Python skill:', hasUserWithSkill(users, 'excel'));
console.log('User has Python skill:', hasUserWithSkill(users, 'js'));
// 6. Check if any user is from a specific city (e.g., Delhi)
const hasUserByCity = (data, query) =>{
  const q = query.trim().toLowerCase();
  return data.some(user => user.city.toLowerCase() === q)
}
console.log('user from city :', hasUserByCity(users, 'delhi'));
console.log('user from city :', hasUserByCity(users, 'canada'))
// 7. Are all users active?
const areAllUsersActive = (data) =>{
  return data.every(user => user.active);
};
console.log('Is users active :', areAllUsersActive(users));
// 8. Is there any user older than 30?
const isAnyoneAbove30 = (data) =>{
  return data.some(user => user.age > 30)
}
console.log('user age > 30 :', isAnyoneAbove30(users));

// 9. Find the first user by their name (e.g., "Aman")
const getFirstUserByName = (data, query)  =>{
  const n = query.trim().toLowerCase();
  return data.find(user => user.name.toLowerCase() === n)
}
console.log('first user by name :', getFirstUserByName(users,'Aman'))
// 10. Check if any user has a salary less than 20k
const hasUserByLesSalary = (data) =>{
  return data.some(s => s.salary < 20000)
}

console.log('user less than 20k:', hasUserByLesSalary(users))



// 🟡 LEVEL 2 (Intermediate Conditions) [11–20]
// 11. Find the first user who is active AND earns more than 40k
const getFirstActiveHighEarner = (data) =>{
  return  data.find(u => u.active && u.salary > 40000) || null; 
}
console.log('user active & salary > 40k:',getFirstActiveHighEarner(users))
// 12. Check if any active user has a specific skill (e.g., "react")
const hasActiveSkillUser = (data, skill) => {
  const q = skill.trim().toLowerCase();
  return data.some(u => u.active && u.skills.some(s => s.toLowerCase() === q));
};

// 13. Does every user have at least one skill?
// 14. Find the first user aged between 25 and 30
// 15. Is there any user with more than 2 skills?


// 16. Find the first inactive user from Mumbai


// 17. Is every user's salary greater than 20k?

// 18. Does any duplicate city exist in the data?


// 19. Find the first user whose name is longer than 4 characters

// 20. Is there any user with an empty skills list?
