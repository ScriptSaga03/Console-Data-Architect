// =========================================================================
// PROJECT 1: SMART EXPENSE & BUDGET TRACKER (CONSOLE ENGINE)
// Developer: Mehtab Ansari
// Concepts Covered: Arrays, Objects, HOFs (map, filter, reduce, every, some, flatMap, toSorted), ES6+
// =========================================================================

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
    paymentMethod: "Card"
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
    paymentMethod: "NetBanking"
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

// Making a shallow copy to prevent mutation of base dataset
const ledgerData = [...ledger];

// =========================================================================
// 🟢 LEVEL 1: WARM-UP & FILTERING (Problems 1 to 5)
// =========================================================================

// QUESTION 1: Total Income & Total Expense (filter + reduce)
// Create a reusable function to get the total sum based on the transaction type ('income' or 'expense').
const getTotalByType = (type) => {
    const q = type.trim().toLowerCase();
    return ledgerData
        .filter(transaction => transaction.type.toLowerCase() === q)
        .reduce((sum, data) => sum + data.amount, 0);
};

console.log('--- Problem 1 ---');
console.log('Total Income:', getTotalByType('income'));
console.log('Total Expense:', getTotalByType('expense'));


// QUESTION 2: Get All Unique Categories (map + Set)
// Extract all categories from the ledger and return a new array containing only unique categories.
const getUniqueCategories = () => {
    const uniq = ledgerData.flatMap(c => c.category.toLowerCase());
    return [...new Set(uniq)];
};

console.log('\n--- Problem 2 ---');
console.log('Unique Categories:', getUniqueCategories());


// QUESTION 3: High-Value Expenses (filter)
// Create a function that filters and returns only expense transactions with an amount of 3000 or more.
const getHighExpenseTrans = () => {
    return ledgerData
        .filter(trans => trans.type.toLowerCase() === 'expense' && trans.amount >= 3000);
};

console.log('\n--- Problem 3 ---');
console.log('High Expense Transactions:', getHighExpenseTrans());


// QUESTION 4: Find Transaction by ID (find)
// Create a function that takes an ID as an argument and returns that specific transaction object. Return a custom message if not found.
const findTransById = (userId) => {
    const result = ledgerData.find(i => i.id === userId);
    return result ? result : 'Transaction not found!';
};

console.log('\n--- Problem 4 ---');
console.log('Find tx-001:', findTransById('tx-001'));
console.log('Find tx-10254:', findTransById('tx-10254'));


// QUESTION 5: Check if Any Cash Transaction Exists (some)
// Determine whether there is at least one transaction in the ledger that used "Cash" as the payment method. Returns true/false.
const hasCashTransExist = () => {
    return ledgerData.some(trans => trans.paymentMethod.toLowerCase() === 'cash');
};

console.log('\n--- Problem 5 ---');
console.log('Has Cash Transaction:', hasCashTransExist());


// =========================================================================
// 🟡 LEVEL 2: TARGET DATA MANIPULATION (Problems 6 to 10)
// =========================================================================

// QUESTION 6: Are All Transactions Valid? (every)
// Check if all transactions in the ledger have an amount greater than 0. If any transaction has a 0 or negative amount, return false.
const isValidTrans = () => {
    return ledgerData.every(t => t.amount > 0);
};

console.log('\n--- Problem 6 ---');
console.log('Is Ledger Completely Valid:', isValidTrans());


// QUESTION 7: Extract All Tags into a Single Array (flatMap)
// Pull out the tags array from all transactions and flatten them into a single flat array. Duplicates are allowed.
const extractTags = () => {
    return ledgerData.flatMap(tag => tag.tags);
};

console.log('\n--- Problem 7 ---');
console.log('All Flat Tags:', extractTags());


// QUESTION 8: Count Transactions by Type (reduce)
// Create a function that counts the total number of income vs expense transactions and returns an object in the format: { income: X, expense: Y }.
const countTransByType = () => {
    return ledgerData.reduce((count, data) => {
        count[data.type] = (count[data.type] || 0) + 1;
        return count;
    }, { income: 0, expense: 0 });
};

console.log('\n--- Problem 8 ---');
console.log('Transaction Counts:', countTransByType());


// QUESTION 9: Format Transaction Details (map + Template Literals)
// Iterate through the array and format each transaction into a readable string sequence. Return an array of formatted strings.
const formatTransDetails = () => {
    return ledgerData.map(i => 
        `On ${i.date}, ${i.type === 'income' ? "earned" : "spent"} ${i.amount} INR on ${i.category}.`
    );
};

console.log('\n--- Problem 9 ---');
console.log('Formatted Logs:', formatTransDetails());


// QUESTION 10: Find Index of First Rent Payment (findIndex)
// Locate the array index of the very first transaction belonging to the "rent" category.
const getFirstRentPaymentInd = () => {
    return ledgerData.findIndex(i => i.category.toLowerCase() === 'rent');
};

console.log('\n--- Problem 10 ---');
console.log('First Rent Payment Index:', getFirstRentPaymentInd());


// =========================================================================
// 🟠 LEVEL 3: INTERMEDIATE LOGIC BUILDING (Problems 11 to 15)
// =========================================================================

// QUESTION 11: Sort Amounts Low to High (toSorted / Immutability)
// Sort the ledger by transaction amounts in ascending order without modifying or mutating the original dataset.
const sortedTransactionAmount = () => {
    return ledgerData.toSorted((a, b) => a.amount - b.amount);
};

console.log('\n--- Problem 11 ---');
console.log('Sorted Transactions (Ascending):', sortedTransactionAmount());


// QUESTION 12: Case-Insensitive Search Transactions by Tag (filter + includes + map)
// Create a reusable function that takes a tag name string and returns an array of transactions containing that tag, regardless of uppercase/lowercase input.
const searchTransByTag = (query) => {
    if (!query || !query.trim()) return [];
    const q = query.trim().toLowerCase();

    return ledgerData.filter(i => {
        const lowerCaseTags = i.tags.map(tag => tag.toLowerCase());
        return lowerCaseTags.includes(q);
    });
};

console.log('\n--- Problem 12 ---');
console.log('Search Tag "work":', searchTransByTag('work'));
console.log('Search Tag "PARTY" (Case Insensitive Check):', searchTransByTag('PARTY'));


// QUESTION 13: Group Expenses by Category (reduce)
// Filter out the income entries and group all expense transactions dynamically into lists under their respective category names.
const groupExpensesByCat = () => {
    return ledgerData.reduce((acc, curr) => {
        if (curr.type.toLowerCase() === 'expense') {
            const cat = curr.category.toLowerCase();
            acc[cat] = acc[cat] || [];
            acc[cat].push(curr);
        }
        return acc;
    }, {});
};

console.log('\n--- Problem 13 ---');
console.log('Grouped Expenses Object:', groupExpensesByCat());


// QUESTION 14: Average Expense Amount (filter + reduce)
// Isolate all expense transactions, calculate their cumulative sum, and return the mathematical mean formatted to 2 decimal places.
const getAvgExpenseAmount = () => {
    const expenses = ledgerData.filter(t => t.type.toLowerCase() === 'expense');
    if (expenses.length === 0) return "0.00";
    
    const totalExpenseAmount = expenses.reduce((sum, t) => sum + t.amount, 0);
    const average = totalExpenseAmount / expenses.length;
    return average.toFixed(2);
};

console.log('\n--- Problem 14 ---');
console.log('Average Expense Amount:', getAvgExpenseAmount());


// QUESTION 15: Simple Month Filter (filter + startsWith)
// Create a function that accepts a month string filter (e.g., "YYYY-MM") and returns transactions corresponding to that specific month window.
const monthFilter = (month) => {
    if (!month || !month.trim()) return [];
    return ledgerData.filter(t => t.date.startsWith(month.trim()));
};

console.log('\n--- Problem 15 ---');
console.log('Transactions in May 2026:', monthFilter("2026-05"));
console.log('=========================================================================');
