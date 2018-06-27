/* globals describe,it,expect,element,by,waitFor */
require('detox');

describe('Intro', () => {

    it('Navigate to Main Foo scene', async () => {
        await expect(element(by.id('app'))).toBeVisible();

        await expect(element(by.id('app'))).toBeVisible();
        await element(by.id('view.app.intro:scrollview')).swipe('left');
        await element(by.id('view.app.intro:scrollview')).swipe('left');
        await element(by.id('view.app.intro:scrollview')).swipe('left');
        await element(by.id('view.app.intro:scrollview')).swipe('left');

        await expect(element(by.id('demo'))).toBeVisible();
        await expect(element(by.id('demo:welcome'))).toBeVisible();

        await expect(element(by.id('demo:button.foo'))).toBeVisible();
        await element(by.id('demo:button.foo')).tap();
        await expect(element(by.id('demo.foo:welcome'))).toBeVisible();

        await expect(element(by.id('demo.foo:button.app'))).toBeVisible();
        await element(by.id('demo.foo:button.app')).tap();
        await expect(element(by.id('app:welcome'))).toBeVisible();

        await element(by.id('view.app.intro:scrollview')).swipe('left');
        await expect(element(by.id('intro:page.1'))).toBeVisible();
    });

    // it('Main scene visible', async () => {
    //     await expect(element(by.id('app'))).toBeVisible();
    //     await expect(element(by.id('app:welcome'))).toBeVisible();
    // });
    //
    // it('Navigate to Main Foo scene', async () => {
    //     await expect(element(by.id('app'))).toBeVisible();
    //     await expect(element(by.id('app:button.foo'))).toBeVisible();
    //     await element(by.id('app:button.foo')).tap();
    //     await expect(element(by.id('app.foo'))).toBeVisible();
    // });
    //
    //
    // it('Navigate to Main Foo scene and back', async () => {
    //     await expect(element(by.id('app'))).toBeVisible();
    //     await expect(element(by.id('app:button.foo'))).toBeVisible();
    //     await element(by.id('app:button.foo')).tap();
    //     await expect(element(by.id('app.foo'))).toBeVisible();
    //
    //     await expect(element(by.id('app.foo:button.back'))).toBeVisible();
    //     await element(by.id('app.foo:button.back')).tap();
    //     await expect(element(by.id('app'))).toBeVisible();
    // });
    //
    // it('Navigate to a Demo flow and Demo Foo scene', async () => {
    //     await expect(element(by.id('app'))).toBeVisible();
    //     await expect(element(by.id('app:button.foo'))).toBeVisible();
    //     await element(by.id('app:button.foo')).tap();
    //     await expect(element(by.id('app.foo'))).toBeVisible();
    //
    //     await expect(element(by.id('app.foo:button.demo'))).toBeVisible();
    //     await element(by.id('app.foo:button.demo')).tap();
    //     await expect(element(by.id('demo:welcome'))).toBeVisible();
    //
    //     await expect(element(by.id('demo:button.foo'))).toBeVisible();
    //     await element(by.id('demo:button.foo')).tap();
    //     await expect(element(by.id('demo.foo:welcome'))).toBeVisible();
    //
    // });












    // it('Navigate to a Demo flow and Demo Foo scene', async () => {
    //     await expect(element(by.id('app'))).toExist();
    //     await expect(element(by.id('app:button.foo'))).toBeVisible();
    //     await element(by.id('app:button.foo')).tap();
    //     await expect(element(by.id('app.foo'))).toBeVisible();
    //
    //     // await expect(element(by.id('app.foo:button.demo'))).toBeVisible();
    //     await expect(element(by.id('app.foo:button.demo'))).toBeVisible();
    //     await element(by.id('app.foo:button.demo')).tap();
    //     await expect(element(by.id('demo:welcome'))).toBeVisible();
    //
    //     await expect(element(by.id('demo:button.foo'))).toBeVisible();
    //     await element(by.id('demo:button.foo')).tap();
    //     await expect(element(by.id('demo.foo:welcome'))).toBeVisible();
    //
    // });
});
