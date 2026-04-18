
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
const getFirstActiveHighEarner = (data) => {
  return data.find((u) => u.active && u.salary > 40000) || null;
};
console.log("user active & salary > 40k:", getFirstActiveHighEarner(users));
// 12. Check if any active user has a specific skill (e.g., "react")
// const hasActiveSkillUser = (data, skill) => {
//   const q = skill.trim().toLowerCase();
//   return data.some(u => u.active && u.skills.some(s => s.toLowerCase() === q));
// };
// console.log('has user a skill :', hasActiveSkillUser(users, 'js'));

const hasActiveUserSkill = (data, query) => {
  const q = query.trim().toLowerCase();

  return data.some(user =>
    user.active &&
    user.skills.some(s => s.toLowerCase() === q)
  );
};
console.log(hasActiveUserSkill(users, "js"))

// 13. Does every user have at least one skill?
const haveEveryUserSkill = (data) => {
  return data.every((u) => u.skills && u.skills.length > 0);
};
console.log("Users have least one skill : ", haveEveryUserSkill(users));

// 14. Find the first user aged between 25 and 30
const findUserByAgeRange = (data, min, max) => {
  return data.find(u => u.age >= min && u.age <= max);
};

// usage
console.log(findUserByAgeRange(users, 25, 30));
// 15. Is there any user with more than 2 skills?
const isUserAboveSkills = (data) => {
  return data.some(u => u.skills && u.skills.length > 2);
};
console.log('User above 2 skill: ', isUserAboveSkills(users));

// 16. Find the first inactive user from Mumbai
const getFirstInActiveUserByCity = (data, city) =>{
  const c = city.trim().toLowerCase();
  return data.find(u => u.city.toLowerCase() === c && !u.active);
} 

console.log('First inActive user by city :', getFirstInActiveUserByCity(users , 'mumbai'))

// 17. Is every user's salary greater than 20k?
const hasSalaryAbove = (data) =>{
  return data.every(u => u.salary > 20000)
}

console.log('Is every users salary above 20k: ', hasSalaryAbove(users));

// 18. Does any duplicate city exist in the data?
const hasDuplicateCity = (data) => {
  const seen = [];

  return data.some(user => {
    if (seen.includes(user.city)) {
      return true; // duplicate mil gaya
    } else {
      seen.push(user.city);
      return false;
    }
  });
};

console.log(hasDuplicateCity(users));


// 19. Find the first user whose name is longer than 4 characters
const nameLength = (data) => {
  return data.find(u => u.name.length > 4);
};
console.log('First user whos name length above 4 char: ', nameLength(users))
// 20. Is there any user with an empty skills list?
const noSkill = (data) => {
  return data.some(u => !u.skills || u.skills.length === 0);
};
console.log('Empty skill user:', noSkill(users))




// 🟠 LEVEL 3 (findIndex + Advanced) [21–30]
// Pehla inactive user ka index
const firstInActiveUserInd = (data) =>{
  const userIndex = data.findIndex(u => !u.active);
  return userIndex !== -1 ? userIndex : null;
};

console.log('first inActive user index: ',firstInActiveUserInd(users));
// Pehla user jiska salary > 60k uska index
const firstUserAbouveSalary = (data) =>{
  const index = data.findIndex(u => u.salary > 60000);
  return index !== -1 ? index :null
}

console.log(firstUserAbouveSalary(users));
// Mumbai ke first user ka index
const getUserByCity = (data, city) =>{
  const c = city.trim().toLowerCase()
  const index =  data.findIndex(u => u.city.toLowerCase() === c);
  return index !== -1 ? index :null
}
console.log(getUserByCity(users ,"mumbai"))
// "js" skill wale first user ka index
const hasUserSkill = (data, query) =>{
  const q = query.trim().toLowerCase();
  return data.findIndex(u =>
    u.skills.some(s => s.toLowerCase() === q)
  );
}

console.log(hasUserSkill(users,'js'))
// Koi user hai kya jiska naam duplicate ho
const hasDuplicateName = (data) =>{
  let seen = new Set();
  for(let user of data){
    const n = user.name.toLowerCase();
    if(seen.has(n)){
      return true
    }
    seen.add(n)
  }
  return false
}

console.log('duplicate user name :', hasDuplicateName(users))
// Pehla user jiska age even ho
const getFirstEvenAgeUser = (data) => {
  return data.find(u => typeof u.age === "number" && u.age % 2 === 0) || null;
};

console.log(getFirstEvenAgeUser(users));
// Sab users ke names unique hain kya
const getUniqueUsersName = (data) =>{
    const name = data.map(u => u.name.toLowerCase());
  return new Set(name).size === name.length;
}
console.log('unique users :', getUniqueUsersName(users))
// Koi user hai kya jiska salary aur age same hai (random logic 😏)
const hasSalaryAgeSame = (data) =>{
  return data.some(u => u.salary === u.age);
}
console.log('salary and age same :', hasSalaryAgeSame(users))

// Pehla user jiska skill "node" ho
const getUserBySkillIndex = (data, skill) => {
  const q = skill.toLowerCase();
  return data.findIndex(u =>
    u.skills.some(s => s.toLowerCase() === q)
  );
};
console.log('first node user : ', getUserBySkillIndex(users,"node"))
// Koi user hai kya jiska naam lowercase me ho
const hasLowerCaseName = (data) => {
    return data.some(u => u.name === u.name.toLowerCase());;
};

console.log(hasLowerCaseName(users));

*/

// 🔴 LEVEL 4 (INTERVIEW LOGIC) [31–40]
// Pehla user jiska salary sabse zyada hai (without sort 🔥)
const getFirstHighestEarner = (data) => {
  if (!data.length) return null;

  return data.reduce((highest, curr) =>
    curr.salary > highest.salary ? curr : highest
  );
};

console.log('first highest paid user: ',getFirstHighestEarner(users))

// Check karo koi user hai kya jiska salary average se zyada ho
// const hasUserAboveAverageSalary = (data) =>{
//   if (!data || data.length === 0) return false;
//   const avgSalary = data.reduce((sum, u) => sum+ u.salary, 0) / data.length || 0;
//   return data.some(u => u.salary > avgSalary)
// }

// best 
const hasUserAboveAverageSalary = (data) => {
  let total = 0;
  for (let u of data) total += u.salary;

  const avg = total / data.length;

  return data.some(u => u.salary > avg);
};


console.log(hasUserAboveAverageSalary(users));
// Pehla user jiska skills me "js" aur "react" dono ho
const hasUserBySkill = (data, f, s) => {
  const [first, second] = [f, s].map((str) => str.trim().toLowerCase());
  return data.find((u) => {
    const lowerSkills = u.skills.map((s) => s.toLowerCase());
    return lowerSkills.includes(first) && lowerSkills.includes(second);
  });
};
console.log("User has both skills:", hasUserBySkill(users, "js", "react"));

// Koi user hai kya jo active bhi hai aur 30+ bhi
const getActiveUserAboveAge = (data) => {
  return data.some((u) => u.active && u.age > 30);
};
console.log("any active user and age above 30 :", getActiveUserAboveAge(users));
// Sab users Delhi se hain kya
const allUserByCity = (data, query) => {
  const c = query.trim().toLowerCase();
  return data.every((u) => u.city.toLowerCase() === c);
};

console.log("all user from same city: ", allUserByCity(users, "delhi"));
// Pehla user jiska salary 30k–60k range me ho
const getUserBySalary = (data, min, max) => {
  return data.find((u) => u.salary >= min && u.salary <= max);
};

const result = getUserBySalary(users, 30000, 60000);

if (result) {
  console.log(`Found User: ${result.name} with salary ${result.salary}`);
} else {
  console.log("No user found in this range.");
}
// Koi user hai kya jiska naam vowel se start hota hai
const getNameStartVowels = (data) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return data.some(u =>
    typeof u.name === "string" &&
    vowels.includes(u.name?.[0]?.toLowerCase())
  );
};

console.log('has any user name start with vowels :', getNameStartVowels(users));
// Sab users ke paas unique skills hain kya
const areSkillsUnique = (data) => {
  let seen = new Set();
  for(let user of data){
   for(let skill of user.skills){
     const s = skill.toLowerCase();
     if(seen.has(s)){
       return false;
     }
     seen.add(s)
   }
  }
   return true;
};

const areSkillsUniquePerUser = (data) =>{
  return data.every (u =>{
    const skill = u.skills.map(s => s.toLowerCase());
    return new Set(skill).size === skill.length;
  })
}

console.log(areSkillsUnique(users));
console.log(areSkillsUniquePerUser(users));
// Pehla user jiska salary even number hai
const getFirstUserEvenSalary = (data) =>{
  return data.find(u => typeof u.salary === 'number'
                  && u.salary % 2 === 0
                  );
}
console.log('first user has salary even number: ', getFirstUserEvenSalary(users))
// Koi user hai kya jiska name palindrome ho
const hasPalindromeName = (data) =>{
  return data.some(user => {
   if (typeof user.name !== "string") return false;
    const name = user.name.toLowerCase();
    const reversed = name.split('').reverse().join('');
    return name === reversed;
  })
}

console.log('Has Palindrome Name User : ', hasPalindromeName(users))


