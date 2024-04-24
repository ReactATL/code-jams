import { User } from "./user.js";
const alice = new User("Alice", "lice@example.com", 24, true);
const Bob = new User("Bob", "bob@example.com", 30, false);
const Charlie = new User("Charlie", "charlie@example.com", 35, true);

const usersList = [alice, Bob, Charlie];

function formatUserData(users) {
  return users
    .filter((user) => user.inactive === true)
    .map((user) => ({
      name: user.name,
      email: user.email,
    }));
}

const formattedData = formatUserData(usersList);
console.log(formattedData);
