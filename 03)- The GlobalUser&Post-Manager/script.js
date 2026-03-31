// 🚀 Project 2: The Global User & Post Manager (Console Based)

const app = {
  posts: [],
  comments: [],
  users: [],
  enrichedUsers: [],

  // delay function
  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

  init: async function () {
    await this.fetchData();
    // 1. Create Test
    await this.createPost(1, "New Post", "This is content");
    // 2. Update Test (PATCH)
    await this.updatePost(1, 1, { title: "Updated Title" });
    // 3. Delete Test
    await this.deletePost(1, 1);
    // 4. Search Test
    this.globalSearch("Leanne");
    this.postStats();
    this.filterByLocation();
    this.getPublicProfile();
    this.exportFirstUserJSON();
  },

  // fetch data
  fetchData: async function () {
    try {
      console.log("🔃 fetching data, please wait 3s");
      await this.delay(1500);

      const results = await Promise.allSettled([
        fetch(`https://jsonplaceholder.typicode.com/posts`),
        fetch(`https://jsonplaceholder.typicode.com/comments`),
        fetch(`https://jsonplaceholder.typicode.com/users`),
      ]);

      // console.log(`status code: ${resPost.status}`);
      const [postRes, commentRes, userRes] = results;

      // 1. Mandatory Check
      if (
        userRes.status === "rejected" ||
        (userRes.status === "fulfilled" && !userRes.value.ok)
      ) {
        throw new Error(
          "CRITICAL: Users data is mandatory to build the dashboard!",
        );
      }

      // error msg
      const checkResponse = (res, name) => {
        if (res.status === "rejected") {
          return `❌ ${name} API Network Error: ${res.reason}`;
        }
        if (res.status === "fulfilled" && !res.value.ok) {
          return `⚠️ ${name} Server Error: Status ${res.value.status}`;
        }
        return null;
      };

      const errors = [
        checkResponse(postRes, "Posts"),
        checkResponse(commentRes, "Comments"),
        checkResponse(userRes, "Users"),
      ].filter((msg) => msg !== null);

      if (errors.length > 0) {
        console.warn("Some optional data failed to load:");
        errors.forEach((e) => console.error(e));
      }

      // data extract
      if (postRes.status === "fulfilled" && postRes.value.ok) {
        this.posts = await postRes.value.json();
        console.log("✅ Posts fetched:", this.posts.length);
      }

      if (commentRes.status === "fulfilled" && commentRes.value.ok) {
        this.comments = await commentRes.value.json();
        console.log("✅ Comments fetched:", this.comments.length);
      }

      if (userRes.status === "fulfilled" && userRes.value.ok) {
        this.users = await userRes.value.json();
        console.log("✅ Users fetched:", this.users.length);
      }

      this.enrichedUsers = this.users.map((u) => {
        return {
          ...u,
          // Posts
          myPosts: this.posts
            .filter((p) => p.userId === u.id)
            .map(({ userId, ...postData }) => ({
              ...postData,
              // Comments
              postComments: this.comments
                .filter((c) => c.postId === postData.id)
                .map(({ postId, ...commentData }) => ({
                  ...commentData,
                })),
            })),
        };
      });

      // const firstUser = this.enrichedUsers[0];
      // console.log("🔍 FULL DATA STRUCTURE OF ONE USER:");
      // console.log(JSON.stringify(firstUser, null, 2));
    } catch (err) {
      console.log("Unexpected System Error:", err.message);
    }
  },

  // postStats
  postStats: function () {
    if (!this.enrichedUsers || this.enrichedUsers.length === 0) return;

    const stats = this.enrichedUsers.map((u) => {
      return {
        userName: u.name,
        totalPosts: u.myPosts.length,
        firstPostTitle: u.myPosts[0] ? u.myPosts[0].title : "No posts found",
      };
    });
    console.table(stats);
    return stats;
  },

  

  // filter by location
  filterByLocation: function () {
    if (this.enrichedUsers.length === 0) return;
    const specificLoc = this.enrichedUsers
      .filter(
        (u) =>
          u.address.city.includes("Gwenborough") ||
          u.address.city.includes("South"),
      )
      .map((u) => u.name);

    if (specificLoc.length > 0) {
      console.log("📍 Users from specific locations:", specificLoc);
    } else {
      console.log("📍 Users from specific locations not found.");
    }
  },

  // public Profile
  getPublicProfile: function () {
    if (this.enrichedUsers.length === 0) return;
    const publicProfiles = this.enrichedUsers.map((u) => {
      const { zipcode, geo, ...cleanAddress } = u.address;

      return {
        id: u.id,
        name: u.name,
        email: u.email,
        address: cleanAddress,
      };
    });
    if (publicProfiles.length > 0) {
      console.log("Public Profile :");
      console.log(publicProfiles.slice(0, 1));
    } else {
      console.log("not found public profile");
    }
  },

  // export json
  exportFirstUserJSON: function () {
    if (this.enrichedUsers.length === 0) return;
    // Pretty Print
    const jsonString = JSON.stringify(this.enrichedUsers[0], null, 2);
    console.log("📄 First User JSON Export:");
    console.log(jsonString);
    // Wapas object mein badalna
    const backToObject = JSON.parse(jsonString);
    console.log("🔄 Converted back to Object:", backToObject.name);
  },

  // crud operation
  createPost: async function (userId, title, body) {
    try {
      console.log("⌛ creating post, please wait");
      await this.delay(2000);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify({ title, body, userId }),
        },
      );

      // throw error
      if (!response.ok) {
        const errorMsg = response.status === 400 ? "❌ Failed" : "⚠️ Error";
        throw new Error(errorMsg);
      }

      // extract
      const result = await response.json();
      this.posts.push(result);

      
      const targetUser = this.enrichedUsers.find((u) => u.id === userId);
      if (targetUser) {
        targetUser.myPosts.unshift({
          ...result,
          id: result.id,
          postComments: [],
        });
        console.log(`✅ Locally added post to ${targetUser.name}'s profile. `);
      } else {
        console.warn(`⚠️ User with ID ${userId} not found in enrichedUsers.`);
      }


      
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
  },


  // remove
  deletePost: async function (userId, postId) {
    try {
      console.log(`⌛ Deleting post ${postId}...`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const user = this.enrichedUsers.find(u => u.id === userId);
        if (user) {
          user.myPosts = user.myPosts.filter(p => p.id !== postId);
          console.log(`✅ Post ${postId} removed for ${user.name}`);
        }
      }
    } catch (err) {
      console.error("❌ Delete Error:", err.message);
    }
  },


  // update post 
  updatePost: async function (userId, postId, updatedData, isFullUpdate = false) {
    try {
      console.log(`⌛ Updating post ${postId}...`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: isFullUpdate ? "PUT" : "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();

      // Local Update Logic
      const user = this.enrichedUsers.find(u => u.id === userId);
      if (user) {
        user.myPosts = user.myPosts.map(p => p.id === postId ? { ...p, ...result } : p);
        console.log(`✅ Post ${postId} updated!`);
      }
    } catch (err) {
      console.error("❌ Update Error:", err.message);
    }
  },

  // smart search
  globalSearch: function (query) {
    const term = query.toLowerCase();
    const results = this.enrichedUsers.filter(u => {
      const nameMatch = u.name.toLowerCase().includes(term);
      const postMatch = u.myPosts.some(p => p.title.toLowerCase().includes(term));
      const commentMatch = u.myPosts.some(p => 
        p.postComments.some(c => c.body.toLowerCase().includes(term))
      );
      return nameMatch || postMatch || commentMatch;
    });

    console.log(`🔍 Search for "${query}": Found ${results.length} users.`);
    return results;
  }
};

app.init();
