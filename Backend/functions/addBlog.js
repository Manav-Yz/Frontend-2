const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const newBlog = JSON.parse(event.body); // Parse incoming blog data
    const filePath = path.join(__dirname, "../data/blogs.json"); // Path to blogs.json

    // Read and update the JSON file
    const data = fs.readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(data);
    blogs.push(newBlog); // Add the new blog
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2)); // Save updated blogs.json

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Blog added successfully!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to add blog", details: error.message })
    };
  }
};
