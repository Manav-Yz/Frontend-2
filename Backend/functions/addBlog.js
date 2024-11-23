let blogs = [];

exports.handler = async (event) => {
  const newBlog = JSON.parse(event.body);
  blogs.push(newBlog);

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Blog added successfully!", blogs }),
  };
};
