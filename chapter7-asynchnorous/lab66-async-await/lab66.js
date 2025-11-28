console.log("hello lab66");

// callback - very old

// promise - old
fetch("http://localhost:8000/users")
  .then((data) => data.json())
  .then((data) => console.log("Data from Promise response: ", data));

// Async / Await - new

const fetchUserData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const userData = await res.json();
  console.log(userData);
};

fetchUserData();
