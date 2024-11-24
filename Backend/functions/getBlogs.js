const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    // Use process.cwd() to get the root directory of the deployed site
    const filePath = path.join(process.cwd(), "Backend/data/blogs.json");

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
