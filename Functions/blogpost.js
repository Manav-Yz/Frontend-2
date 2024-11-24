document.addEventListener("DOMContentLoaded", async () => {
  const postContent = document.querySelector(".post-content");
  const postId = getUrlParameter("post");
  const relatedContainer = document.querySelector(".related-blog-list");

  // Fetch all blogs from Netlify Function
  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://worldofcube.netlify.app/.netlify/functions/getBlogs"); // Replace with your Netlify function URL
      if (!response.ok) throw new Error("Failed to fetch blogs");
      return await response.json();
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      return [];
    }
  };

  try {
    const blogs = await fetchBlogs();
    const postData = blogs.find((post) => post.id === parseInt(postId, 10)); // Match blog post by ID

    if (postData) {
      // Populate blog post content
      postContent.innerHTML = paginateContent(postData.content);
      document.querySelector(".post-title").innerText = postData.title;
      document.querySelector(".post-meta .author").innerText = postData.author;
      document.querySelector(".post-meta .date").innerText = postData.date;

      // Display related blogs
      const relatedBlogs = blogs.filter((post) => post.category === postData.category && post.id !== postData.id);
      if (relatedBlogs.length > 0) {
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
    } else {
      console.error("Post data not found for ID:", postId);
      postContent.innerHTML = `<p>Sorry, the requested blog post could not be found.</p>`;
    }
  } catch (error) {
    console.error("Error loading blog post:", error.message);
    postContent.innerHTML = `<p>Failed to load blog post. Please try again later.</p>`;
  }

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
    return pages
      .map((page, index) => `<div class="document-page">Page ${index + 1}: ${page}</div>`)
      .join("");
  }
});
