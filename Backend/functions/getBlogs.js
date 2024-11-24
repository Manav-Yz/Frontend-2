const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    // Use __dirname to get the current function directory and resolve blogs.json
    const filePath = path.join(__dirname, "../data/blogs.json");

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const data = fs.readFileSync(filePath, "utf-8"); // Read blogs.json
    const blogs = JSON.parse(data); // Parse JSON content

    return {
      statusCode: 200,
      body: JSON.stringify(blogs), // Return blogs data
    };
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch blogs", details: error.message }),
    };
  }
};
