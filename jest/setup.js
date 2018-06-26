/* globals beforeAll,afterAll,beforeEach,device,jasmine */

// eslint-disable-next-line import/no-unresolved
require('babel-polyfill');
const detox = require('detox');
const config = require('../package.json').detox;

// Set the default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

beforeAll(async () => {
    await detox.init(config, {
        launchApp: false,
    });
    await device.launchApp({
        permissions: {
            notifications: 'YES',
            location: 'always',
        },
    });
});

afterAll(async () => {
    await detox.cleanup();
});

beforeEach(async () => {
    await device.reloadReactNative();
});
