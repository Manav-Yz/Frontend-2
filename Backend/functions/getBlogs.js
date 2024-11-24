const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const filePath = path.join(__dirname, "../data/blogs.json"); // Adjust to match your directory
    const data = fs.readFileSync(filePath, "utf-8"); // Read blogs.json
    const blogs = JSON.parse(data); // Parse JSON content

    return {
      statusCode: 200,
      body: JSON.stringify(blogs), // Return blogs data
    };
  } catch (error) {
    console.error("Error reading blogs.json:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch blogs", details: error.message }),
    };
  }
};
