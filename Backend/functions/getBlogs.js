const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const filePath = path.join(__dirname, "../data/blogs.json"); // Path to blogs.json
    const data = fs.readFileSync(filePath, "utf-8"); // Read the JSON file
    const blogs = JSON.parse(data); // Parse JSON into JavaScript object

    return {
      statusCode: 200,
      body: JSON.stringify(blogs) // Return blogs as a JSON response
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch blogs", details: error.message })
    };
  }
};
