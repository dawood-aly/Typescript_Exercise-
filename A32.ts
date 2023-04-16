const current_users = ['John', 'David', 'mary', 'Sarah', 'Tom'];
const new_users = ['Sarah', 'Tom', 'samantha', 'Luke', 'david'];

for (let new_user of new_users) {
  if (current_users.some(users => users.toLowerCase() === new_user.toLowerCase())) {
    console.log(`The username '${new_user}' is not available. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
