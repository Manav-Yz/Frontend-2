document.addEventListener("DOMContentLoaded", () => {
  const postContent = document.querySelector(".post-content");
  const postId = getUrlParameter("post");
  const postData = blogPosts.find((post) => post.id === parseInt(postId, 10));
  const relatedContainer = document.querySelector(".related-blog-list");

  if (postData) {
      postContent.innerHTML = paginateContent(postData.content);
      document.querySelector(".post-title").innerText = postData.title;
      document.querySelector(".post-meta .author").innerText = postData.author;
      document.querySelector(".post-meta .date").innerText = postData.date;
  } else {
      console.error("Post data not found for ID:", postId);
  }
  
    // Related Blogs
    const relatedBlogs = blogPosts.filter((post) => post.category === postData.category && post.id !== postData.id);
    if (relatedBlogs.length) {
      document.querySelector(".related-blogs").style.display = "flex";
      relatedBlogs.forEach((blog) => {
        const blogItem = document.createElement("div");
        blogItem.classList.add("related-blog-item");
        blogItem.innerHTML = `
          <a href="blogpost.html?post=${blog.id}">
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>
          </a>`;
        relatedContainer.appendChild(blogItem);
      });
    }
  
    // Like Button
    let likeCount = 0;
    document.getElementById("likeButton").addEventListener("click", () => {
      likeCount++;
      document.getElementById("likeCount").innerText = likeCount;
      sendDataToDatabase({ likes: likeCount });
    });
  
    // Comments Section
    document.getElementById("submitComment").addEventListener("click", () => {
      const comment = document.getElementById("commentInput").value;
      if (comment.trim()) {
        const commentContainer = document.querySelector(".comments-container");
        const newComment = document.createElement("p");
        newComment.innerText = comment;
        commentContainer.appendChild(newComment);
        sendDataToDatabase({ comment });
        document.getElementById("commentInput").value = "";
      }
    });
  
    // Utility: Get URL Parameters
    function getUrlParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }
  
    // Utility: Paginate Content
    function paginateContent(content, wordsPerPage = 300) {
      const words = content.split(" ");
      const pages = [];
      for (let i = 0; i < words.length; i += wordsPerPage) {
        pages.push(words.slice(i, i + wordsPerPage).join(" "));
      }
      return pages.map((page, index) => `<div class="document-page">${page}</div>`).join("");
    }
  
    // Utility: Send Data to Database (Stub)
    function sendDataToDatabase(data) {
      console.log("Sending to database:", data);
      // Replace with actual API calls.
    }
  });
  