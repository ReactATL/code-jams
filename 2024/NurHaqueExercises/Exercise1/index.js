import { User } from "./user.js";
const alice = new User("Alice", "lice@example.com", 24, true);
const Bob = new User("Bob", "bob@example.com", 30, false);
const Charlie = new User("Charlie", "charlie@example.com", 35, true);

const usersList = [Charlie, alice, Bob];

function formatUserData(users) {
  return users
    .filter((user) => user.inactive === true)
    .map((user) => `name: ${user.name}, email: ${user.email},`);
}
function sortUsers(users) {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

const formattedData = formatUserData(usersList);
console.log(formattedData);
