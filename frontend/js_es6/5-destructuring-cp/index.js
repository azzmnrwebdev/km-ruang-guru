// format nama user menjadi "John - john@example.com", dan akses nama user dengan teknik destructuring assignment.
const format = (user) => {
  // TODO: answer here
  const { name, email } = user;
  return `${name} - ${email}`;
};

console.log(format({ name: "John", email: "john@example.com" }));

module.exports = format;
