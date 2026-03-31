// Logic Building Project 1
const employees = [
  {
    id: 101,
    name: "Mehtab",
    role: "Full-Stack Dev",
    salary: 85000,
    skills: ["JS", "React", "Node"],
    active: true,
  },
  {
    id: 102,
    name: "Arjun",
    role: "Backend Dev",
    salary: 70000,
    skills: ["Node", "MongoDB"],
    active: true,
  },
  {
    id: 103,
    name: "Sara",
    role: "UI/UX Designer",
    salary: 55000,
    skills: ["Figma", "CSS", "Adobe XD"],
    active: false,
  },
  {
    id: 104,
    name: "Vikram",
    role: "DevOps Engineer",
    salary: 95000,
    skills: ["Docker", "AWS", "Kubernetes"],
    active: true,
  },
  {
    id: 105,
    name: "Neha",
    role: "Frontend Dev",
    salary: 62000,
    skills: ["HTML", "CSS", "React"],
    active: true,
  },
  {
    id: 106,
    name: "Rohan",
    role: "Data Scientist",
    salary: 110000,
    skills: ["Python", "SQL", "Pandas"],
    active: true,
  },
  {
    id: 107,
    name: "Ayesha",
    role: "QA Engineer",
    salary: 48000,
    skills: ["Selenium", "Jest", "Manual Testing"],
    active: false,
  },
  {
    id: 108,
    name: "Kabir",
    role: "Mobile App Dev",
    salary: 78000,
    skills: ["React Native", "Firebase", "JS"],
    active: true,
  },
  {
    id: 109,
    name: "Sanya",
    role: "Project Manager",
    salary: 90000,
    skills: ["Agile", "Jira", "Communication"],
    active: true,
  },
  {
    id: 110,
    name: "Ishaan",
    role: "Backend Dev",
    salary: 72000,
    skills: ["Java", "Spring Boot", "SQL"],
    active: true,
  },
  {
    id: 111,
    name: "Zoya",
    role: "Cloud Architect",
    salary: 125000,
    skills: ["Azure", "Terraform", "Security"],
    active: true,
  },
  {
    id: 112,
    name: "Rahul",
    role: "Frontend Dev",
    salary: 58000,
    skills: ["Vue", "Tailwind", "JS"],
    active: false,
  },
  {
    id: 113,
    name: "Anjali",
    role: "HR Manager",
    salary: 52000,
    skills: ["Recruitment", "Payroll", "Public Speaking"],
    active: true,
  },
  {
    id: 114,
    name: "Dev",
    role: "Cybersecurity Analyst",
    salary: 105000,
    skills: ["Ethical Hacking", "Linux", "Networking"],
    active: true,
  },
  {
    id: 115,
    name: "Pooja",
    role: "Marketing Specialist",
    salary: 45000,
    skills: ["SEO", "Content Writing", "Analytics"],
    active: true,
  },
];

const dataSet = [...employees];

// 🚀 Level 1: Ground Zero (Warm-up)
// Un sabhi employees ki list nikaalo jo "active" nahi hain.

const isNotActiveEmp = dataSet.filter((e) => !e.active);
console.log("inActive Employees:", isNotActiveEmp);

// Sabhi employees ke names ka ek simple array nikaalo (e.g., ["Mehtab", "Arjun", ...]).
const empNames = dataSet.map((n) => n.name);
console.log("Employees Name :", empNames);

// Check karo ki kya array mein koi aisa employee hai jiski salary 1.5 Lakh se zyada hai (Sirf True/False).

const isHighSalary = dataSet.some((emp) => emp.salary > 150000);
console.log(isHighSalary);

// Pehla wo employee dhundo jo "Backend Dev" hai.
const firstBackendDev = dataSet.find((emp) => emp.role === "Backend Dev");
console.log("First Backend Dev: ", firstBackendDev);

// Check karo ki kya saare employees ke paas kam se kam 1 skill hai.
const hasSkills = dataSet.every((emp) => emp.skills.length >= 1);
console.log("Has a skill: ", hasSkills);

// 📈 Level 2: Intermediate (Logic Building)
// Employees ko unki salary ke hisaab se "High to Low" order mein arrange karo.
const highSalary = dataSet.toSorted((a, b) => b.salary - a.salary);
console.log("High to Low Salary Sort: ", highSalary);

// Ek naya array banao jisme har employee ki salary 10% badh gayi ho.
const isHikeSalary = dataSet.map((emp) => {
  return {
    ...emp,
    salary: Number((emp.salary * 1.1).toFixed(2)),
  };
});
console.log("Salary hike 10% :", isHikeSalary);

// Pata karo ki "DevOps Engineer" kis index position par baitha hai.
const devOpsInd = dataSet.findIndex((emp) => emp.role === "DevOps Engineer");
console.log("DevOps engineer index:", devOpsInd);

// Ek list nikaalo un employees ki jinke paas "React" skill hai.
const hasReactSkill = dataSet.filter((emp) => emp.skills.includes("React"));

console.log("has React skills emp :", hasReactSkill);

// Sabhi employees ki total salary ka sum nikaalo.
const totalSalaryOfEmp = dataSet.reduce((total, sal) => total + sal.salary, 0);
console.log("total salary of all employees: ", totalSalaryOfEmp);




// Level 3: Pro (Data Sculpting)
// Ek aisa array nikaalo jisme sirf "Frontend Dev" aur "Backend Dev" roles waale log hon.
const targetRoles = ['frontend dev', 'backend dev'];
const uniqueSkillEmp = dataSet.filter(emp => targetRoles.includes(emp.role.toLowerCase()));
console.log('FrontEnd Dev and Backend Dev only :', uniqueSkillEmp)


// Sabhi unique skills ki ek single list banao (No duplicates allowed).
const allSkills = dataSet.flatMap(emp => emp.skills)
const uniqueSkills = [...new Set(allSkills)];
console.log("Unique Skills List:", uniqueSkills);

// Employees ko unke name ke alphabet (A-Z) ke hisaab se sort karo.
const alphaSort = dataSet.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("Name sort(A-Z) :", alphaSort)


// Ek aisa function banao jo id le aur agar wo ID exist karti hai toh uska pura data return kare.
const isExistEmpId = (id) =>{
    const isExist = dataSet.find(emp => emp.id === id);
  if(!isExist) console.log('❌ Invalid Id or not found!')
  else{
    console.log("employee data :", isExist);
  }
}

isExistEmpId(108)
isExistEmpId(151)

// Wo list nikaalo jisme employees ke paas 3 ya 3 se zyada skills hain.
const hasMin3Skills = dataSet.filter(emp => emp.skills.length >=3);
console.log("These employees have min 3 skills :", hasMin3Skills)





// 🧠 Level 4: Advanced (Structural Changes)

// Pata karo ki puri company mein average salary kitni hai.
const totalSum = dataSet.reduce((acc, curr) => acc + curr.salary, 0);
const averageSalary = (totalSum / dataSet.length).toFixed(2);

console.log('Average Salary:', Number(averageSalary));

// Sabhi skills ko ek hi string mein convert karo, separated by commas.
const skills = dataSet.flatMap(s => s.skills)
const joinSkills = [...new Set(skills)].join(",")
console.log("Single skill :", joinSkills)

// Ek object banao jisme roles "Keys" hon aur un roles mein kitne employees hain wo "Values" (e.g., { "Frontend Dev": 2, "HR Manager": 1 }).
const roleCount = dataSet.reduce((acc, curr)=> {
  const role = curr.role;

  if(acc[role]){
    acc[role]= acc[role]+1
  }else{
    acc[role] = 1;
  }
  return acc
},{});
console.log('role count:', roleCount);

// Salary ke basis par "Senior" (above 80k) aur "Junior" (below 80k) ka tag har object mein add karo.
const transObj = dataSet.map(emp => {
  let post ;
  if(emp.salary > 80000){
      post ='Senior'
  }else{
      post = 'Junior'
  }
    return{
      ...emp,
      post :post
    }
});

console.log('add post:', transObj)

// Ek employee ka name update karke "Mehtab Ansari" karo uski ID use karke.

const updateEmp = (id, newName)=>{
  const updatedData = dataSet.map((emp)=>{
      if(emp.id === id){
        return{
          ...emp,
          name:newName
        }
      }
    return emp 
  });
  // Check karne ke liye ki update hua ya nahi
  const exists = dataSet.some(emp => emp.id === id);
  if (!exists) {
    console.log("❌ ID not found!");
  } else {
    console.log("✅ Updated Data:", updatedData);
  }
  
};

updateEmp(102, 'Arjun Kumar')





// 🔥 Level 5: Expert (Complex Scenarios)
// Sabse zyada salary waale employee ka pura data nikaalo.
// method 1
const highestSalaryEmp = dataSet.reduce((acc, curr)=> {
    return curr.salary > acc.salary ? curr: acc;
});
console.log('Highest Paid Employee: ', highestSalaryEmp)

// method 2
// const maxSalary = Math.max(...dataSet.map(e => e.salary));
// const richest = dataSet.find(e => e.salary === maxSalary);

// 3. Salary ko High to Low sort karo
// const sortedBySalary = dataSet.toSorted((a, b) => b.salary - a.salary);
// const richestEmp = sortedBySalary[0];

// console.log('Highest Paid Employee (via Sort):', richestEmp);


// Ek aisi list banao jisme sirf un logo ke naam hon jo "Active" hain AUR "JS" jante hain.
// const isActiveHasJS = dataSet.filter(e => e.active && e.skills.includes('JS'));
// console.log('Result :', isActiveHasJS)
const targetSkill = 'js';

const isActiveHasJS = dataSet.filter(e => {
  // 1. Check if active
  const isActive = e.active;

  // 2. Check if any skill matches (Case-insensitive)
  const hasSkill = e.skills.some(skill => 
    skill.toLowerCase() === targetSkill.toLowerCase()
  );

  return isActive && hasSkill;
});

// Sirf NAAM chahiye to map laga do aage
const finalNames = isActiveHasJS.map(e => e.name);

console.log('Result (Names):', finalNames);

// Pata karo ki kya koi aisa role hai jo sirf 1 hi insaan ke paas hai?
const countRole = dataSet.reduce((acc, curr) =>{
    const role = curr.role;
  if(acc[role]){
      acc[role]  +=1
  }else{
    acc[role] = 1
  }return acc
},{});

const hasUniqueRole =  Object.values(countRole).some(count => count === 1);

console.log('Unique role: ', hasUniqueRole)

// Pooray data se wo index delete karo jiska employee inactive hai (Carefully).
const cleanedData = dataSet.filter(emp => emp.active); 

console.log("New Cleaned Array:", cleanedData);

// Ek naya object banao jisme employees unke id ke hisaab se mapped hon (Normalization).
const normalizedData = dataSet.reduce((acc, emp) => {
  acc[emp.id] = emp; 
  return acc;
}, {});

console.log("Normalized Data:", normalizedData);
//  seedha normalizedData[101] likh kar Mehtab ka data nikaal sakte hain!

// Sabhi employees ki skills ko count karo aur total number of skills (pure array mein kitni bar skills repeat hui) batao.
// Method 1: Using reduce (Professional way)
const totalSkillsCount = dataSet.reduce((acc, emp) => acc + emp.skills.length, 0);
// Method 2: Using flat (Simple way)
// const totalSkillsList = dataSet.flatMap(emp => emp.skills).length;
console.log("Total skills across all employees:", totalSkillsCount);

// Ek aisa search function banao jo "Query string" le aur name ya role mein wo string match kare.

const smartSearch = (query) =>{
    const q = query.toLowerCase();
  const result = dataSet.filter(emp => 
    emp.name.toLowerCase().includes(q) || 
    emp.role.toLowerCase().includes(q)
    );

  if (result.length > 0) {
    console.log(`✅ Found ${result.length} result(s) for "${query}":`, result);
  } else {
    console.log(`❌ No matches found for "${query}"`);
  }
}
smartSearch('mehtab');

smartSearch('graphic designer');

// Employees ko salary groups mein baanto: 0-50k, 51-80k, 81k+.
const salaryGroups = dataSet.reduce((acc, emp) => {
  if (emp.salary <= 50000) {
    acc.budget.push(emp);
  } else if (emp.salary <= 80000) {
    acc.mid.push(emp);
  } else {
    acc.premium.push(emp);
  }
  return acc;
}, { budget: [], mid: [], premium: [] }); // Initial object with empty arrays

console.log("Salary Groups:", salaryGroups);

// Reverse karo pure array ko bina original array ko modify kiye.
// Method 1: Modern
const reversedData = dataSet.toReversed(); 
// Method 2: Logic building (Using Unshift)
const manualReverse = dataSet.reduce((acc, emp) => {
  acc.unshift(emp);
  return acc;
}, []);

console.log("Reversed Data:", manualReverse);

// Ek aisi list nikaalo jisme employee ka naam aur unka "Primary Skill" (pehle number wali skill) ho.

const primarySkillList = dataSet.map(emp => ({
  name: emp.name,
  primarySkill: emp.skills[0] || "No Skill"
}));

console.log("Primary Skills:", primarySkillList);



// "Mega Tasks" ko solve karne ki koshish kijiye

// Task A (The Active Elite): * Sirf un employees ko nikaalo jo Active hain.
// Unki salary ko 15% badhao.
// Sirf un logo ko rakho jinki nayi salary 1 Lakh se upar hai.
// Result: Unke names ki ek string comma se separate karke dikhao.

const megaTastA = dataSet.filter(e  => e.active)
                  .map(emp => {
                      return{
                          ...emp,
                        salary: +(emp.salary * 1.15).toFixed(2)
                      }
                  })
                  .filter(emp => emp.salary >100000)
                  .map(e => e.name).join(",")
  
  ;
console.log('MegaTask Result: ',megaTastA);


// Task B (The Skill Specialist): * Pata karo ki kya poore data mein "Python" skill waale log hain? (True/False)
// Agar hain, toh unki Total Salary ka sum nikaalo.
const pythonDevs = dataSet.filter(e => e.skills.includes('Python'));
const hasPython = pythonDevs.length > 0;
const totalPythonSalary = pythonDevs.reduce((acc, curr) => acc + curr.salary, 0);

console.log('Has Python skill:', hasPython);
console.log('Total Python Salary:', totalPythonSalary);

// Task C (The UI/UX Update): * Saare "UI/UX Designer" ka role badal kar "Product Designer" kar do.
// Unki skills mein "User Research" add kar do.
// Lekin yaad rahe, dataSet change nahi hona chahiye (Naya array banaiye).

const updateRoles = dataSet.map(emp =>{
    if(emp.role === 'UI/UX Designer'){
        return{
            ...emp,
          role:"Product Designer",
          skills: [...emp.skills, "User Research"]
        }
    }
  return emp;
})

console.log('Updated roles (Safe):', updateRoles);
