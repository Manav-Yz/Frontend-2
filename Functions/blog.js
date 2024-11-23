document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector(".blog-group");
  if (blogContainer) {
      blogPosts.forEach((post) => {
          const blogItem = document.createElement("div");
          blogItem.classList.add("blog-er");
          blogItem.setAttribute("data-title", post.title.toLowerCase());

          blogItem.innerHTML = `
              <a href="blogpost.html?post=${post.id}" class="blog-link">
                  <img src="${post.imageUrl}" alt="${post.imageAlt}" class="blog-image" />
                  <div class="blog-details">
                      <h4 class="blog-title">${post.title}</h4>
                      <p class="blog-description">${post.description}</p>
                  </div>
              </a>
          `;
          blogContainer.appendChild(blogItem);
      });
  } else {
      console.error("Blog container not found! Ensure .blog-group exists in the HTML.");
  }


  // Search Functionality
  const searchBar = document.getElementById("search-bar");
  if (searchBar) {
    searchBar.addEventListener("keyup", () => {
      const input = searchBar.value.toLowerCase();
      document.querySelectorAll(".blog-er").forEach((blog) => {
        const title = blog.getAttribute("data-title");
        if (title) {
          blog.style.display = title.includes(input) ? "block" : "none";
        } else {
          console.warn("Blog element missing data-title attribute.");
        }
      });
    });
  } else {
    console.error("Search bar not found! Ensure #search-bar exists in the HTML.");
  }

});


