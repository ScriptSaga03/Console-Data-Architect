const ledger = [
  {
    id: "tx-001",
    amount: 1200,
    type: "expense",
    category: "food",
    tags: ["groceries", "diet"],
    date: "2026-05-10",
    paymentMethod: "UPI"
  },
  {
    id: "tx-002",
    amount: 50000,
    type: "income",
    category: "salary",
    tags: ["primary", "monthly"],
    date: "2026-05-01",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "tx-003",
    amount: 3000,
    type: "expense",
    category: "travel",
    tags: ["fuel", "work"],
    date: "2026-05-12",
    paymentMethod: "Card"
  },
  {
    id: "tx-004",
    amount: 1500,
    type: "expense",
    category: "food",
    tags: ["swiggy", "entertainment"],
    date: "2026-05-12",
    paymentMethod: "UPI"
  },
  {
    id: "tx-005",
    amount: 8000,
    type: "income",
    category: "freelance",
    tags: ["side-hustle", "web-dev"],
    date: "2026-05-15",
    paymentMethod: "UPI"
  },
  {
    id: "tx-006",
    amount: 15000,
    type: "expense",
    category: "rent",
    tags: ["living", "mandatory"],
    date: "2026-05-05",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "tx-007",
    amount: 4500,
    type: "expense",
    category: "entertainment",
    tags: ["movies", "ott", "gaming"],
    date: "2026-05-18",
    paymentMethod: "Card"
  },
  {
    id: "tx-008",
    amount: 600,
    type: "expense",
    category: "food",
    tags: ["groceries"],
    date: "2026-05-20",
    paymentMethod: "Cash"
  },
  {
    id: "tx-009",
    amount: 25000,
    type: "expense",
    category: "gadgets",
    tags: ["work", "tech"],
    date: "2026-05-22",
    paymentMethod: "Card" // Yeh bad expense hai, check karne ke liye ki pichle average se 300% bada hai ya nahi
  },
  {
    id: "tx-010",
    amount: 1200,
    type: "expense",
    category: "travel",
    tags: ["metro", "work"],
    date: "2026-05-22",
    paymentMethod: "UPI"
  },
  {
    id: "tx-011",
    amount: 3500,
    type: "expense",
    category: "medical",
    tags: ["health", "checkup"],
    date: "2026-05-25",
    paymentMethod: "UPI"
  },
  {
    id: "tx-012",
    amount: 2000,
    type: "expense",
    category: "food",
    tags: ["zomato", "party"],
    date: "2026-05-28",
    paymentMethod: "NetBanking" // different payment method check karne ke liye
  },
  {
    id: "tx-013",
    amount: 45000,
    type: "income",
    category: "salary",
    tags: ["primary", "monthly"],
    date: "2026-06-01",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "tx-014",
    amount: 18000,
    type: "expense",
    category: "rent",
    tags: ["living", "mandatory"],
    date: "2026-06-05",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "tx-015",
    amount: 9000,
    type: "expense",
    category: "travel",
    tags: ["flight", "vacation"],
    date: "2026-06-06",
    paymentMethod: "Card"
  }
];

const ledgerData = [...ledger];

// 🟢 Level 1: Warm-up & Filtering (Problems 1 to 5)
// 1. Total Income & Total Expense (filter + reduce)
// Doh alag-alag functions banao:

const getTotalByType = (type) =>{
    const q = type.trim().toLowerCase();
    return ledgerData
    .filter(transaction => transaction.type.toLowerCase() === q)
    .reduce((sum, data) => sum + data.amount, 0);
}


console.log('total income is : ', getTotalByType('income'));
console.log('total expense is :', getTotalByType('expense'));



// Ek jo saare income transactions ka total sum nikale.
console.log('tatal transction income', getTotalByType('income'));

// Dusra jo saare expense transactions ka total sum nikale.
console.log('total expense is :', getTotalByType('expense'));



// 2. Get All Unique Categories (map + Set)
// Pure ledger array me se sirf categories nikalni hain, aur unique categories ka ek naya array return karna hai (taaki duplicates na hon, jaise food baar-baar na aaye).

const getUniqueCategories = () =>{
    const uniq = ledgerData
    .flatMap(c => c.category);
    return [...new Set(uniq)];
}
console.log('unique categories : ', getUniqueCategories());



// 3. High-Value Expenses (filter)
// Ek function banao jo sirf un expense transactions ko filter kare jinka amount 3000 ya 3000 se zyada hai.

const getHighExpenseTrans = () =>{
    return ledgerData
    .filter(trans =>  trans.type.toLowerCase() === 'expense' &&  trans.amount >= 3000);
}
console.log('High Expense Transaction List : ', getHighExpenseTrans());

// 4. Find Transaction by ID (find)
// Ek function banao jo argument me ek id (e.g., "tx-005") le aur pure ledger me se us specific transaction ka pura object return kare. Agar na mile toh ek custom message de.

const findTransById = (userId) =>{
    const result = ledgerData.find(i => i.id === userId);
   return result ? result : 'transaction not found!';
};




console.log('find transaction :', findTransById('tx-001'));
console.log('find transaction :', findTransById('tx-10254'));


// 5. Check if Any Cash Transaction Exists (some)
// Pata karo ki kya pure ledger me ek bhi aisa transaction hai jo paymentMethod: "Cash" se hua ho. Output sirf true ya false hona chahiye.
const hasCashTransExist = () =>{
    return ledgerData
    .some(trans => trans.paymentMethod.toLowerCase() === 'cash'.toLowerCase())
}
console.log('has cash trans :', hasCashTransExist())




// //6 . Are All Transactions Valid? (every)
// Check karo ki kya ledger ke saare transactions ka amount 0 se bada hai. Agar ek ka bhi amount 0 ya negative ho, toh output false aana chahiye.

const isValidTrans = () =>{
    return ledgerData
    .every(t => t.amount > 0 )
};

console.log('has valid transaction amount :', isValidTrans())

// 7. Extract All Tags into a Single Array (flatMap)
// Saare transactions ke andar jo tags ka array hai, un sabhi tags ko nikal kar ek single flat array me convert karo (e.g., ["groceries", "diet", "primary", "monthly", ...]). Duplicates chalenge abhi. (Hint: Yahan flatMap apna asli jadu dikhayega).

const extractTags = () =>{
    return ledgerData
    .flatMap(tag => tag.tags)
};

console.log('tags: ', extractTags())

// 8. Count Transactions by Type (reduce)
// Ek function banao jo return kare ki pooray ledger me total kitne income ke transactions hain aur kitne expense ke. Output format aisa hona chahiye: { income: 3, expense: 12 }.


const countTransByType = () =>{
    return ledgerData
    .reduce((count, data) =>{
        
        // if(data.type === 'income'){
        //      count.income++
        // }else if(data.type === 'expense'){
        //     count.expense ++
        // }

       count[data.type] =  (count[data.type] || 0) +1;

        return count;

    }, {income:0, expense:0});

} 
console.log('count transaction : ', countTransByType())

// 9. Format Transaction Details (map + Template Literals)
// Pure array par map chalao aur har transaction ke liye ek custom string return karo jo is format me ho:

// "On 2026-05-10, spent 1200 INR on food." (Agar type income ho toh "spent" ki jagah "earned" likhna). Output saari strings ka ek single array hona chahiye.

const formatTransDetails = () =>{
    return ledgerData
    .map( i => `on ${i.date}, ${i.type  === 'income'? "earned" :"spent"} ${i.amount} INR on ${i.category}`)
} 

console.log('format transaction details :', formatTransDetails())


// 10. Find Index of First Rent Payment (findIndex)
// Pata karo ki category: "rent" wala pehla transaction kis index par hai terminal me index print hona chahiye.

const getFirstRentPaymentInd  = () => {
    return ledgerData
    .findIndex(i => i.category.toLowerCase() === 'rent');
};
console.log('first rent payment index : ', getFirstRentPaymentInd())
 
