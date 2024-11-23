const blogs = [
  { id: 1, title: "Welcome to Reality Cube", content: "Exploring the cube." },
  { id: 2, title: "Understanding Reality Cube", content: "Diving deeper into the cube mechanics." },
];

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(blogs),
  };
};
