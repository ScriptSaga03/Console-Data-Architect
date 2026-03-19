// JSON Practice + Promises (Promise api's)

const getData = async () => {
  let loader;
  try {
    console.log('🔃 Fetching Post, please wait...');
    loader = setInterval(() => console.log('⏳ still loading...'), 1000);
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    // status code
    console.log('Status Code:', response.status);
    const result = await response.json();

    clearInterval(loader);
    console.log('✅ Data Received Successfully.');
    console.log('Total Posts:', result.length);
    console.log(result.slice(0, 4));
  } catch (err) {
    if (loader) clearInterval(loader);
    console.error('❌ Error Message:', err.message);
  }
};

getData();

// Parallel - Fast
let allPosts = [];
let allComments = [];
let deletedPost = [];
const getPostAndComments = async () => {
  let loader;
  try {
    console.log('🔃Fetching Data, please wait...');
    loader = setInterval(() => console.log('⏳ still loading...'), 1000);
    const [postRes, commentsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts`),
      fetch(`https://jsonplaceholder.typicode.com/comments`),
    ]);

    // check error for both
    if (!postRes.ok || !commentsRes.ok) {
      throw new Error('One or more requests failed');
    }

    // check staus
    console.log('Post Status Code:', postRes.status);
    console.log('Comment Status Code:', commentsRes.status);

    // JSON Convert
    [allPosts, allComments] = await Promise.all([
      postRes.json(),
      commentsRes.json(),
    ]);

    console.log('✅ Everything Received!');
    console.log('Posts Count:', allPosts.length);
    console.log('Comments Count:', allComments.length);

    console.log('Posts:');
    console.log(allPosts.slice(0, 4));

    console.log('-------------------------------');

    console.log('Comments:');
    console.log(allComments.slice(0, 4));

    // clear loader
    clearInterval(loader);
  } catch (err) {
    if (loader) clearInterval(loader);
    console.error('❌Error Message:', err.message);
  }
};

// search post by ID
const searchPostById = (id) => {
  const result = allPosts.find((post) => post.id === id);
  if (result) {
    console.log(`✅ Found Result for ID ${id}:`);
    console.log('Post Id:', result.id);
    console.log(result);
  } else {
    console.error(`❌ Post with ID ${id} not found!`);
  }
};

// post in Json
const createNewPost = {
  userId: 1,
  name: 'Mehtab',
  title: 'Coding is Everything.',
  body: 'JavaScript is powerful!',
};
// POST METHOD
const addMyPost = async (newPost) => {
  try {
    console.log('📤 Sending data to server...');
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) throw new Error("❌Post couldn't create!");
    const result = await response.json();
    allPosts.push(result);
    console.log('✅ Server Accepted new Post:');
    console.log(result);
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

// Delete METHOD
const deletePostById = async (id) => {
  try {
    console.log(`🗑️ Deleting Post with ID: ${id}...`);
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) throw new Error('Delete request failed!');

    allPosts = allPosts.filter((p) => p.id !== id);
    console.log(
      `✅ Post ${id} deleted successfully from Server and Local Array.`
    );
    console.log('Remaining Posts:', allPosts.length);

    // upgrade for trash
    let postToTrash = allPosts.find((p) => p.id === id);
    if (postToTrash) {
      deletedPost.push(postToTrash);
      allPosts = allPosts.filter((p) => p.id !== id);
      console.log(`✅ Post ${id} moved to Trash Bin.`);
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

// PUT METHOD
const updatedPost = {
  userId: 1,
  name: 'Shuaib',
  title: 'Sleep is Everything.',
  body: 'Sleep is powerful!',
};

const updateMyPost = async (id, updatedData) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      }
    );
    if (!response.ok) throw new Error('❌ PUT request failed!');
    const result = await response.json();

    // Local Sync Logic
    const index = allPosts.findIndex((post) => post.id === id);
    if (index !== -1) {
      allPosts[index] = result;
      console.log('🔄 Local Array Updated Successfully!');
    }
  } catch (err) {
    console.error(err.message);
  }
};

// PATCH METHOD
const updatePostPartial = async (id, partialData) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(partialData),
      }
    );
    if (!response.ok) throw new Error('❌ Patch request failed!');
    console.log('Status Code:', response.status);
    let result = await response.json();

    let index = allPosts.findIndex((p) => p.id === id);
    if (index !== -1) {
      allPosts[index] = { ...allPosts[index], ...result };
    }
    console.log('✅ PATCH Result :', result);
  } catch (err) {
    console.log(err.message);
  }
};

// RESTORE POST
const restorePostById = (id) => {
  const postToRestore = deletedPost.find((p) => p.id === id);

  if (postToRestore) {
    allPosts.push(postToRestore);
    deletedPost = deletedPost.filter((p) => p.id !== id);
    console.log(`♻️ Post ${id} restored to Main List!`);
  } else {
    console.error('❌ Post not found in Trash Bin.');
  }
};

// Start App function
const startApp = async () => {
  await getPostAndComments();
  await addMyPost(createNewPost);
  await updateMyPost(5, updatedPost);
  await updatePostPartial(5, { body: 'Imran' });
  await deletePostById(96);
  console.log('Trash Content:', deletedPost);
  searchPostById(5);
  restorePostById(5);
  searchPostById(5);
};

startApp();
