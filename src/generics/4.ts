interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const user = {
  name: "John",
  surname: "Watson",
  email: "johnwatson@example.com",
  password: "password987",
}

function createOrUpdateUser<User>(initialValues: Partial<User>) : object {
    return { ...user, ...initialValues };
}

const updatedUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123',
});

console.log(updatedUser);
