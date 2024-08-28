const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I open the homepage$/, async () => {
    await browser.url('https://example.com');
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await $('#user-name').setValue(username);
    await $('#password').setValue(password);
    await $('#login-button').click();
});

Then(/^I should see the user profile page$/, async () => {
    await expect(browser).toHaveUrlContaining('/profile');
});
