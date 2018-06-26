/* globals describe,it,expect,element,by,waitFor */
require('detox');

describe('Intro', () => {

    it('Main scene visible', async () => {
        await expect(element(by.id('app'))).toExist();
        await expect(element(by.id('app:welcome'))).toBeVisible();
    });

    it('Navigate to Main Foo scene', async () => {
        await expect(element(by.id('app'))).toExist();
        await expect(element(by.id('app:button.foo'))).toBeVisible();
        element(by.id('app:button.foo')).tap();
        await waitFor(element(by.id('app.foo'))).toBeVisible().withTimeout(5000);
    });

    it('Navigate to Main Foo scene and back', async () => {
        await expect(element(by.id('app'))).toExist();
        await expect(element(by.id('app:button.foo'))).toBeVisible();
        element(by.id('app:button.foo')).tap();
        await waitFor(element(by.id('app.foo'))).toBeVisible().withTimeout(5000);

        await expect(element(by.id('app.foo:button.back'))).toBeVisible();
        element(by.id('app.foo:button.back')).tap();

        await waitFor(element(by.id('app'))).toBeVisible().withTimeout(5000);
    });

    it('Navigate to a Demo flow and Demo Foo scene', async () => {
        await expect(element(by.id('app'))).toExist();
        await expect(element(by.id('app:button.foo'))).toBeVisible();
        element(by.id('app:button.foo')).tap();
        await waitFor(element(by.id('app.foo'))).toBeVisible().withTimeout(5000);

        // await expect(element(by.id('app.foo:button.demo'))).toBeVisible();
        await waitFor(element(by.id('app.foo:button.demo'))).toBeVisible().withTimeout(5000);
        element(by.id('app.foo:button.demo')).tap();
        await waitFor(element(by.id('demo:welcome'))).toBeVisible().withTimeout(5000);

        element(by.id('demo:button.foo')).tap();
        await waitFor(element(by.id('demo.foo:welcome'))).toBeVisible().withTimeout(5000);

    });
});
