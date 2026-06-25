const user = await createUser(page);

await loginPage.login(
    user.email,
    user.password
);