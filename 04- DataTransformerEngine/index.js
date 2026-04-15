
// Project No -> 1 : Data Transformer Engine
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
  { id: 5, name: "Alex", age: 30, active: false, salary: 60000, city: "Mumbai", skills: ["go", "docker"] },

  { id: 6, name: "Neha", age: 27, active: true, salary: 45000, city: "Delhi", skills: ["html", "css"] },
  { id: 7, name: "Kabir", age: 32, active: false, salary: 52000, city: "Bangalore", skills: ["python", "django"] },
  { id: 8, name: "Simran", age: 26, active: true, salary: 38000, city: "Pune", skills: ["js", "angular"] },
  { id: 9, name: "Rahul", age: 29, active: true, salary: 55000, city: "Delhi", skills: ["node", "mongodb"] },
  { id: 10, name: "Priya", age: 31, active: false, salary: 62000, city: "Mumbai", skills: ["react", "redux"] },

  { id: 11, name: "Arjun", age: 34, active: true, salary: 75000, city: "Bangalore", skills: ["java", "spring"] },
  { id: 12, name: "Meera", age: 23, active: true, salary: 32000, city: "Pune", skills: ["js", "node"] },
  { id: 13, name: "Vikas", age: 36, active: false, salary: 68000, city: "Delhi", skills: ["go", "kubernetes"] },
  { id: 14, name: "Anjali", age: 25, active: true, salary: 41000, city: "Mumbai", skills: ["html", "css"] },
  { id: 15, name: "Rohit", age: 33, active: true, salary: 72000, city: "Bangalore", skills: ["python", "ml"] },

  { id: 16, name: "Sneha", age: 28, active: false, salary: 53000, city: "Pune", skills: ["react", "node"] },
  { id: 17, name: "Karan", age: 37, active: true, salary: 80000, city: "Delhi", skills: ["java", "microservices"] },
  { id: 18, name: "Pooja", age: 24, active: true, salary: 39000, city: "Mumbai", skills: ["js", "vue"] },
  { id: 19, name: "Nikhil", age: 30, active: false, salary: 61000, city: "Bangalore", skills: ["go", "docker"] },
  { id: 20, name: "Isha", age: 26, active: true, salary: 42000, city: "Delhi", skills: ["html", "css"] }
];

const userData = [...users];
// 🟢 LEVEL 1 (Basic Transformation) [1–10]

// Sirf names ka array nikalo
const userName = ()=>{
    const names = userData.map(u => u.name);
  if(names.length > 0){
    console.log(" Users Name :", names);
  }else{
    console.log("No data found!")
  }
}

userName();


// Active users filter karo
const isActiveUser = (data) => {
  const result = data.filter(u => u.active);

  if (result.length > 0) {
    console.log('Active users :', result);
  } else {
    console.error("❌ No Data found!");
  }
};

isActiveUser(userData);



// Sab users ki salary +10% increase karo
const increaseSalary  = (data)=>{
  return data.map((user) => ({
    ...user,
    salary: Math.round(user.salary * 1.10)
  }))
}

const updatedUsers = increaseSalary(userData);
console.log("Updated Users Salary :", updatedUsers);


// Cities ka unique list banao
const getUniqueCities = () =>{
    const cities = userData.map(u => u.city);
  return [...new Set(cities)]
}

const cities  = getUniqueCities();
console.log("Unique Cities List :", cities);


// Har user ka name uppercase karo
const upperCaseNames = (data) => {
  return data.map(user => ({
    ...user,
    name: user.name.toUpperCase()
  }));
};

console.log("Updated Name :", upperCaseNames(userData));


// Sirf age ka array banao
const hasAged = userData.map(u => u.age);
console.log("Aged Array : ", hasAged);



// Active users ke names nikalo
const isActiveUsersName = (data) => {
  const result = data.filter(u => u.active);

  if (result.length > 0) {
    console.log('Active users :', result.map(u => u.name));
  } else {
    console.error("❌ No Data found!");
  }
};
isActiveUsersName(userData);



// Sab skills ko ek single array me flatten karo
const flattenSkill = userData.flatMap(u => u.skills);
console.log("FlattenSkills :", flattenSkill);



// Har user ka "name - city" format banao
const updatedList = userData.map(u => `${u.name} - ${u.city}`);
console.log("Updated users Format :", updatedList);



// Check karo koi user inactive hai ya nahi
const isInactiveUsers = (data) => {
  const inactive = data.filter(u => !u.active);

  if (inactive.length > 0) {
    console.log("Inactive Users:", inactive.map(u => u.name));
  } else {
    console.log("✅ All users are active");
  }
};

isInactiveUsers(userData);



// 🟡 LEVEL 2 (Intermediate) [11–20]

// Total salary calculate karo
const totalSalary = userData.reduce((acc, curr) => acc + curr.salary, 0);
console.log("Total Salary:", totalSalary);


// Average age nikaalo
// const sumAge = userData.reduce((acc, curr) => acc + curr.age, 0);
// const avgAge = userData.length > 0 ? sumAge / userData.length : 0
// console.log("Average Age:", avgAge);

const getAvgAge = (data) =>  data.reduce((acc, u) => acc + u.age, 0) / data.length || 0;
const avgUsersAge = getAvgAge(userData);
console.log("Average Age:", avgUsersAge);

// Highest salary wala user

const highestSalaryUser = () => {
  const result = userData.reduce((acc, curr) => {
    return curr.salary > acc.salary ? curr : acc;
  });

  if (result) {
    console.log('Highest Paying User:', result);
  } else {
    console.log('Sorry!');
  }
};

highestSalaryUser();


// const highestSalary = userData.toSorted((a, b) => b.salary - a.salary);
// const highestPayingUser = highestSalary.length > 0 ? highestSalary[0] : 0;
// console.log("Highest Salary :", highestPayingUser);

const highestPaidUser = (data) => data.reduce((max, u ) => u.salary > max.salary ? 
  u : max);
console.log('Highest Paid User : ', highestPaidUser(userData));

// Lowest salary wala user
// const lowestSalaryuser = () =>{
//   const lowest  = userData.reduce((acc, curr) => {
//       return curr.salary < acc.salary ? curr : acc
//   });
//   if(lowest){
//     console.log('Lowest Paying User: ', lowest);
//   }else{
//     console.log('sorry, Data not found!')
//   }
// };

// lowestSalaryuser()

// const lowestSalarySort = userData.toSorted((a, b) => a.salary - b.salary);
// const lowest = lowestSalarySort.length ? lowestSalarySort[0] : 0;
// console.log("Lowest paying users :", lowest);

const lowestPaidUser = userData.reduce((min, u ) => u.salary < min.salary ? u : min);
console.log('Lowest Paid User :', lowestPaidUser);

// Delhi ke users ka total salary
// const delhiUserstotalSalary = (query) => {
//   const q = query.trim().toLowerCase();
//   const result = userData
//     .filter((u) => u.city.toLowerCase() === q)
//     .reduce((acc, curr) => acc + curr.salary, 0);
//   if (result) {
//     console.log("total salary of Delhi's user: ", result);
//   } else {
//     console.log("Nope");
//   }
// };

// delhiUserstotalSalary("delhi");
const getTotalSalaryByCity = (data, city) =>
  data
    .filter(u => u.city.toLowerCase() === city.toLowerCase())
    .reduce((acc, u) => acc + u.salary, 0);


const result  = getTotalSalaryByCity(userData, 'mumbai')
console.log('total Salary Avg by city :', result)

// Har city me kitne users hain (grouping count)
// const userPerCity = ()=>{
//     return userData.reduce((acc, curr)=>{
//       const city = curr.city;
//       if(acc[city]){
//         acc[city] = acc[city ]+1 
//       }else{
//         acc[city] = 1
//       }
//       return acc;
//     },{})
// };

// console.log('user per city ', userPerCity())
const userPerCity = (data) =>
  data.reduce((acc, u) => {
    acc[u.city] = (acc[u.city] || 0) + 1;
    return acc;
  },{});

console.log('user per city :', userPerCity(userData))
// Har user ke skills count add karo

const addSkillsCount = (data) => {
  return data.map(user => ({
    ...user,
    skillsCount: user.skills.length
  }));
};

console.log("Users with Skills Count:", addSkillsCount(userData));


// Users ko age ke basis pe sort karo
const sortedAge = userData.toSorted((a, b) => b.age - a.age);
console.log('Sorted Age: ', sortedAge);
// Salary descending order me sort karo
const higestToLowestSalary = userData.toSorted((a, b) => b.salary - a.salary);
console.log('Highest to Lowest Salary :', higestToLowestSalary);


// Active users ka average salary;
const avgActiveSalary = (data) => {
  const active = data.filter(u => u.active);
  return active.length ? active.reduce((a, u) => a + u.salary, 0) / active.length : 0;
};
const activeUserSalary = avgActiveSalary(userData);
console.log('Active users salary:', activeUserSalary.toFixed(2));






// LEVEL 3 (Object + Reduce Mastery) [21–30]
// Users ko city ke basis pe group karo

const groupByCity = (data) => {
  return data.reduce((acc, user) =>{
    const city = user.city;
    if(acc[city]){
      acc[city].push(user.name)
    }else{
      acc[city] = [user.name]
    }

    return acc;
  }, {})
};
const group = groupByCity(userData);
console.log('users group by city :', group)

// Har city ka total salary nikaalo
const salaryByCity = (data) => {
 return data.reduce((acc, user)=>{
   const city = user.city; 
   if (acc[city]) {
     acc[city] = acc[city] + user.salary;
   } else { 
     acc[city] = user.salary; 
   } return acc;
 },{})
};

const salaryCity  =  salaryByCity(userData);
console.log('Cities total : ', salaryCity)

// Skills frequency count (kitni baar kaunsa skill)
const skillCount = (data) =>{
  return data
        .flatMap(s => s.skills)
        .reduce((acc, skill) => {
          if(acc[skill]){
            acc[skill] = acc[skill] + 1;
            } else {
              acc[skill] = 1;
          };
          return acc;
        }, {});
};
const count = skillCount(userData);
console.log('Skill count :', count)

// Ek object banao: {name: salary}
const nameSalaryMap = (data) => {
  return data.reduce((acc, user) => {
    acc[user.name] = user.salary; // yahan if-else ki zarurat nahi
    return acc;
  }, {});
};

console.log('users salary :' , nameSalaryMap(userData));

// Ek object banao: {city: [users]}
const cityUsersMap = (data) => {
  return data.reduce((acc, user) => {
    (acc[user.city] ||= []).push(user);
    return acc;
  }, {});
};

console.log(cityUsersMap(userData));

// Sab inactive users remove karke new array banao
const removeInActiveUsers =  () =>{
    const updatedUsers = userData.filter(u => u.active);
   return updatedUsers.length ? updatedUsers : [];
};

const activeUsers = removeInActiveUsers();
console.log('Active Users :', activeUsers);


// Har user me "isRich": true/false add karo (salary > 50k)
const addIsRich = (data) =>{
    return data.map(user => ({
      ...user, 
      isRich : user.salary > 50000
    }))
};

console.log(addIsRich(userData));

// Sab users ke skills ka unique set banao
const uniqueSkills = (data) =>{
  return data
        .flatMap(s => s.skills)
        .reduce((acc, skill) =>{
          if(!acc.includes(skill)){
            acc.push(skill)
          }
          return acc
        },[])
};

const uniqueList = uniqueSkills(userData);
console.log('unique skills :', uniqueList)
// Ek object banao jisme key = age, value = users
const groupByAge = (data) => {
  return data.reduce((acc, user) => {
    const age = user.age;

    if (acc[age]) {
      acc[age].push(user);
    } else {
      acc[age] = [user];
    }

    return acc;
  }, {});
};

console.log(groupByAge(userData));
// Duplicate cities hatao
const getUniqueCity = (data) =>{
  return data.reduce((acc, curr) =>{
      const city = curr.city;
    if(!acc.includes(city)){
      acc.push(city)
    };
    return acc;
  },[])
};

const uniqueCity = getUniqueCity(userData);
console.log('unique cities :', uniqueCity)


// 🔴 LEVEL 4 (Chaining + Complex Logic) [31–40]
// Active users → salary > 40k → names list
const getHighPaidActiveUsers = (data) =>
  data
    .filter((u) => u.active && u.salary > 40000)
    .map((u) => ({
      name: u.name,
      salary: u.salary,
    }));
const getHighPaidUsers = getHighPaidActiveUsers(userData);
console.log("Active users paid > 40k :", getHighPaidUsers);


// Mumbai ke inactive users ke names uppercase
const getInactiveUserNamesByCity = (data, city) => {
  const query = city.toLowerCase();
  return data
    .filter((u) => u.city.toLowerCase() === query && !u.active)
    .map((u) => u.name.toUpperCase());
};
const inactiveUsersNameByCity = getInactiveUserNamesByCity(userData, "mumbai");
console.log("City users name :", inactiveUsersNameByCity);


// Sab users ki total salary (sirf active)
// const getActiveUsersTotalSalary = (data) => {
//   return data
//     .filter((u) => u.active)
//     .reduce((total, user) => total + user.salary, 0);
// };

const getActiveUsersTotalSalary = (data) =>
  data.reduce((total, u) => {
    return u.active ? total + u.salary : total;
  }, 0);

const activeUsersTotalSalary = getActiveUsersTotalSalary(userData);
console.log("active users salary sum :", activeUsersTotalSalary);

// Skills me "js" wale users filter karo
const getUsersBySkills = (data, query) => {
  const skill = query.trim().toLowerCase();
  return data.filter((u) => u.skills.includes(skill));
};
console.log("Has JS skills :", getUsersBySkills(userData, "js"));


// "js" skill wale users ka average salary
const getAvgSalaryBySkill = (data, query) => {
  const skill = query.trim().toLowerCase();
  const { total, count } = data.reduce(
    (acc, u) => {
      if (u.skills.includes(skill)) {
        acc.total += u.salary;
        acc.count++;
      }
      return acc;
    },
    { total: 0, count: 0 },
  );
  return total / count || 0;
};
console.log("avg salary by skill :", getAvgSalaryBySkill(userData, "js"));

// Top 2 highest salary users
const getHighestPaidUser = (data) =>{
  const result = data.toSorted((a, b) => b.salary - a.salary);
  const topPaid = result.slice(0,2);
  return topPaid
}
console.log('Top 2 highest paid users: ', getHighestPaidUser(userData));

// Lowest 2 salary users
const getLowestPaidUser = (data) =>{
  const result = data.toSorted((a, b) => a.salary - b.salary);
  const topPaid = result.slice(0,2);
  return topPaid
}

console.log('Top 2 lowest paid users: ', getLowestPaidUser(userData));

// Har city ka highest salary user
const highestPaidUserByCity = (data, city) => {
  const filtered = data.filter(
    u => u.city.toLowerCase() === city.toLowerCase()
  );

  if (!filtered.length) return null;

  return filtered.reduce((max, u) =>
    u.salary > max.salary ? u : max
  );
};

const highestPaidByCity  = highestPaidUserByCity(userData, 'mumbai');
console.log('highes paid user in city :', highestPaidByCity);


// Har user ka new object (name, salary, skillCount)
const getUserModified = (data)=>{
  return data.map(u =>({
    name:u.name,
    salary:u.salary,
    skillCount: u.skills.length
  }))
}

console.log('modified users :', getUserModified(userData));

// Active users ko salary ke basis pe sort karo
const sortActiveUsers = (data)=>{
  return data.filter(u => u.active)
  .toSorted((a, b) => a.salary - b.salary)
}

const sortedUsesr = sortActiveUsers(userData);
console.log('sort active users basis on their salary :', sortedUsesr);

