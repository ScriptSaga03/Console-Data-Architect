
🌐 DataBridge API | Advanced Async Logic Handler
This project is a deep dive into Asynchronous JavaScript and REST API Orchestration. Instead of just fetching data, it focuses on managing a local state in sync with server-side operations, implementing a professional "Source of Truth" architecture.

🚀 Key Technical Features
Parallel Stream Processing: Optimized data fetching using Promise.all to retrieve Posts and Comments concurrently, cutting load times by 50%.

**Full CRUD Lifecycle:** - POST: Simulating data creation with custom headers.
**PUT & PATCH:** Implemented both Full and Partial updates with local array synchronization using the Spread Operator.
**DELETE:** Server-side removal synced with local state.
**Trash Bin & Recovery Logic:** A non-destructive delete system that moves data to a deletedPost bin, allowing for seamless restoration to the main list.
**State Synchronization:** Uses high-performance array methods (find, findIndex, filter) to ensure the UI/Local state reflects server changes without page refreshes.
**Robust Error Handling:** Custom try-catch blocks with response.ok validation and status code logging.

🛠 Tech Stack & Tools
Language: Vanilla JavaScript (ES6+)
API: JSONPlaceholder (RESTful API)
Patterns: Promises, Async/Await, Event Loop management (setInterval/clearInterval).

🧠 Logic Spotlight: The Restoration Pattern
The restorePostById function demonstrates precise data handling. It ensures that when a post is recovered, it is treated as a single object (using .find()) before being merged back into the primary data stream.
