#### About

This is a quick react native + redux + detox + react navigation setup project


#### Installation

yarn install
detox build --configuration ios.sim.debug
detox test --configuration ios.sim.debug


#### Issues

As you can see, the first two tests run ok, the next to fail to run.

- Test 1 is checking whether the initial Scene is present
- Test 2 is test 1 + then navigating to another scene in the same flow
- Test 3 is test 2 + navigating back to initial Scene
- Test 4 is test 1 + navigation to another flow + navigation to another scene in that flow

###### Test output
```
[Demo]: detox test --configuration ios.sim.debug
node_modules/.bin/jest . --config=./jest/detox_config.json --maxWorkers=1 --testNamePattern='^((?!:android:).)*$'
 server listening on localhost:59456...
 : Searching for device matching iPhone 7 Plus...
 : Uninstalling org.reactjs.native.example.Demo...
 : org.reactjs.native.example.Demo uninstalled
 : Installing /Users/me/react-native-demo/ios/build/Build/Products/Debug-iphonesimulator/Demo.app...
 : /Users/me/react-native-demo/ios/build/Build/Products/Debug-iphonesimulator/Demo.app installed
 : Trying to set permissions...
 : Permissions are set
 : Launching org.reactjs.native.example.Demo...
7: org.reactjs.native.example.Demo launched. The stdout and stderr logs were recreated, you can watch them with:
        tail -F $HOME/Library/Developer/CoreSimulator/Devices/F99F4829-A25E-4C96-ADF9-17C6F055507C/data/tmp/detox.last_ aunch_app_log.{out,err}
 FAIL  app/__e2e__/App.spec.js (161.704s)
  Intro
    ✓ Main scene visible (1638ms)
    ✓ Navigate to Main Foo scene (6595ms)
    ✕ Navigate to Main Foo scene and back (61359ms)
    ✕ Navigate to a Demo flow and Demo Foo scene (60978ms)

  ● Intro › Navigate to Main Foo scene and back

    Timeout - Async callback was not invoked within the 60000ms timeout specified by jest.setTimeout.

      16 |     });
      17 |
    > 18 |     it('Navigate to Main Foo scene and back', async () => {
         |     ^
      19 |         await expect(element(by.id('app'))).toExist();
      20 |         await expect(element(by.id('app:button.foo'))).toBeVisible();
      21 |         element(by.id('app:button.foo')).tap();

      at Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:85:20)
      at Suite.<anonymous> (app/__e2e__/App.spec.js:18:5)
      at Object.<anonymous> (app/__e2e__/App.spec.js:4:1)

  ● Intro › Navigate to a Demo flow and Demo Foo scene

    Timeout - Async callback was not invoked within the 60000ms timeout specified by jest.setTimeout.

      28 |     });
      29 |
    > 30 |     it('Navigate to a Demo flow and Demo Foo scene', async () => {
         |     ^
      31 |         await expect(element(by.id('app'))).toExist();
      32 |         await expect(element(by.id('app:button.foo'))).toBeVisible();
      33 |         element(by.id('app:button.foo')).tap();

      at Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:85:20)
      at Suite.<anonymous> (app/__e2e__/App.spec.js:30:5)
      at Object.<anonymous> (app/__e2e__/App.spec.js:4:1)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        162.046s
Ran all test suites matching /./i with tests matching "^((?!:android:).)*$".
child_process.js:615
    throw err;
    ^

Error: Command failed: node_modules/.bin/jest . --config=./jest/detox_config.json --maxWorkers=1 --testNamePattern='^((?!:android:).)*$'
    at checkExecSyncError (child_process.js:575:11)
    at Object.execSync (child_process.js:612:13)
    at runJest (/Users/me/react-native-demo/node_modules/detox/local-cli/detox-test.js:135:6)
    at run (/Users/me/react-native-demo/node_modules/detox/local-cli/detox-test.js:78:7)
    at Object.<anonymous> (/Users/me/react-native-demo/node_modules/detox/local-cli/detox-test.js:181:1)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
```


###### cat detox.last_launch_app_log.err
```
[tmp]: cat detox.last_launch_app_log.err
2018-06-26 20:33:35.280 Demo[36004:2721274] Crash handler setup started.
2018-06-26 20:33:35.280 Demo[36004:2721274] Crash handler setup completed.
2018-06-26 20:33:35.280 Demo[36004:2721274] Enabling accessibility for automation on Simulator.
objc[36004]: Class VCWeakObjectHolder is implemented in both /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/PrivateFrameworks/AVConference.framework/Frameworks/ViceroyTrace.framework/ViceroyTrace (0x12a46c4d0) and /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/PrivateFrameworks/AVConference.framework/AVConference (0x12906ae38). One of the two will be used. Which one is undefined.
2018-06-26 20:33:36.451 [info][tid:main][RCTCxxBridge.mm:210] Initializing <RCTCxxBridge: 0x6000003c8ac0> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:36.481 [warn][tid:main][RCTBridge.m:119] Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()?
2018-06-26 20:33:36.500 [warn][tid:main][RCTModuleData.mm:67] Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
2018-06-26 20:33:36.517 [info][tid:main][RCTRootView.m:293] Running application Demo ({
    initialProps =     {
    };
    rootTag = 1;
})
2018-06-26 20:33:37.099 [info][tid:com.facebook.react.JavaScript] Running application "Demo" with appParams: {"rootTag":1,"initialProps":{}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
2018-06-26 20:33:37.118 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041617072-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041617072-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041617072-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041617072-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:37.461 [info][tid:main][RCTCxxBridge.mm:917] Invalidating <RCTCxxBridge: 0x6000003c8ac0> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:37.461 [info][tid:main][RCTCxxBridge.mm:210] Initializing <RCTCxxBridge: 0x6000001ccf30> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:37.463 [warn][tid:main][RCTModuleData.mm:67] Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
2018-06-26 20:33:37.843 [info][tid:main][RCTRootView.m:293] Running application Demo ({
    initialProps =     {
    };
    rootTag = 11;
})
2018-06-26 20:33:37.846 [info][tid:com.facebook.react.JavaScript] Running application "Demo" with appParams: {"rootTag":11,"initialProps":{}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
2018-06-26 20:33:37.862 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041617824-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041617824-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041617824-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041617824-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:38.741 [info][tid:main][RCTCxxBridge.mm:917] Invalidating <RCTCxxBridge: 0x6000001ccf30> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:38.742 [info][tid:main][RCTCxxBridge.mm:210] Initializing <RCTCxxBridge: 0x6040001cec40> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:38.742 [warn][tid:main][RCTModuleData.mm:67] Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
2018-06-26 20:33:39.042 [info][tid:main][RCTRootView.m:293] Running application Demo ({
    initialProps =     {
    };
    rootTag = 21;
})
2018-06-26 20:33:39.043 [info][tid:com.facebook.react.JavaScript] Running application "Demo" with appParams: {"rootTag":21,"initialProps":{}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
2018-06-26 20:33:39.057 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041619036-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041619036-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041619036-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041619036-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:44.914 [info][tid:main][RCTCxxBridge.mm:917] Invalidating <RCTCxxBridge: 0x6040001cec40> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:44.915 [info][tid:main][RCTCxxBridge.mm:210] Initializing <RCTCxxBridge: 0x6000001cce40> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:33:44.915 [warn][tid:main][RCTModuleData.mm:67] Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
2018-06-26 20:33:45.193 [info][tid:main][RCTRootView.m:293] Running application Demo ({
    initialProps =     {
    };
    rootTag = 31;
})
2018-06-26 20:33:45.198 [info][tid:com.facebook.react.JavaScript] Running application "Demo" with appParams: {"rootTag":31,"initialProps":{}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
2018-06-26 20:33:45.213 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:51.088 [info][tid:com.facebook.react.JavaScript] action %cNavigation/NAVIGATE %c@ 20:33:51.086
2018-06-26 20:33:51.089 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.089 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/NAVIGATE',
  routeName: 'AppFoo',
  params: { transition: 'slideFromRight' } }
2018-06-26 20:33:51.090 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.090 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:33:51.093 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:51.120 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:33:51.119
2018-06-26 20:33:51.121 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.121 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'StackRouterRoot' }
2018-06-26 20:33:51.122 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.122 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:33:51.822 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:33:51.821
2018-06-26 20:33:51.822 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.823 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'id-1530041625183-1' }
2018-06-26 20:33:51.823 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:51.823 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:33:52.237 [info][tid:com.facebook.react.JavaScript] action %cNavigation/BACK %c@ 20:33:52.237
2018-06-26 20:33:52.238 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041625183-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.238 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/BACK' }
2018-06-26 20:33:52.239 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.240 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:33:52.241 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:33:52.252 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:33:52.251
2018-06-26 20:33:52.253 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.253 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'StackRouterRoot' }
2018-06-26 20:33:52.254 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.254 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:33:52.946 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:33:52.945
2018-06-26 20:33:52.947 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.947 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'id-1530041625183-1' }
2018-06-26 20:33:52.947 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041625183-1',
          isTransitioning: true,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041625183-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:33:52.948 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:34:45.471 [info][tid:main][RCTCxxBridge.mm:917] Invalidating <RCTCxxBridge: 0x6000001cce40> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:34:45.471 [info][tid:main][RCTCxxBridge.mm:210] Initializing <RCTCxxBridge: 0x6000001cc3f0> (parent: <RCTBridge: 0x6040000d7530>, executor: (null))
2018-06-26 20:34:45.472 [warn][tid:main][RCTModuleData.mm:67] Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.
2018-06-26 20:34:45.783 [info][tid:main][RCTRootView.m:293] Running application Demo ({
    initialProps =     {
    };
    rootTag = 41;
})
2018-06-26 20:34:45.784 [info][tid:com.facebook.react.JavaScript] Running application "Demo" with appParams: {"rootTag":41,"initialProps":{}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
2018-06-26 20:34:45.799 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:34:51.637 [info][tid:com.facebook.react.JavaScript] action %cNavigation/NAVIGATE %c@ 20:34:51.635
2018-06-26 20:34:51.638 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: false,
          index: 0,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:51.639 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/NAVIGATE',
  routeName: 'AppFoo',
  params: { transition: 'slideFromRight' } }
2018-06-26 20:34:51.639 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:51.640 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:34:51.642 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:34:51.668 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:34:51.667
2018-06-26 20:34:51.669 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:51.670 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'StackRouterRoot' }
2018-06-26 20:34:51.670 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:51.670 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:34:52.368 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:34:52.368
2018-06-26 20:34:52.369 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:52.369 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'id-1530041685778-1' }
2018-06-26 20:34:52.370 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:52.370 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:34:52.703 [info][tid:com.facebook.react.JavaScript] action %cNavigation/RESET %c@ 20:34:52.703
2018-06-26 20:34:52.704 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-1',
          isTransitioning: true,
          index: 1,
          routes:
           [ { params: undefined,
               key: 'id-1530041685778-0',
               routeName: 'App' },
             { params: { transition: 'slideFromRight' },
               routeName: 'AppFoo',
               key: 'id-1530041685778-2' } ],
          routeName: 'MainRoot' } ] } }
2018-06-26 20:34:52.704 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/RESET',
  key: null,
  index: 0,
  actions:
   [ { type: 'Navigation/NAVIGATE',
       routeName: 'DemoRoot',
       params: undefined } ] }
2018-06-26 20:34:52.705 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-4',
          isTransitioning: false,
          index: 0,
          routes: [ { routeName: 'Demo', key: 'id-1530041685778-3' } ],
          routeName: 'DemoRoot' } ] } }
2018-06-26 20:34:52.705 [info][tid:com.facebook.react.JavaScript] —— log end ——
2018-06-26 20:34:52.706 [info][tid:com.facebook.react.JavaScript] 'navigation', { dispatch: [Function],
  route:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-4',
          isTransitioning: false,
          index: 0,
          routes: [ { routeName: 'Demo', key: 'id-1530041685778-3' } ],
          routeName: 'DemoRoot' } ] },
  state:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-4',
          isTransitioning: false,
          index: 0,
          routes: [ { routeName: 'Demo', key: 'id-1530041685778-3' } ],
          routeName: 'DemoRoot' } ] },
  addListener: [Function],
  goBack: [Function: goBack],
  navigate: [Function: navigate],
  pop: [Function: pop],
  popToTop: [Function: popToTop],
  setParams: [Function: setParams],
  getParam: [Function: getParam],
  push: [Function: push],
  replace: [Function: replace] }
2018-06-26 20:34:52.721 [info][tid:com.facebook.react.JavaScript] action %cNavigation/COMPLETE_TRANSITION %c@ 20:34:52.721
2018-06-26 20:34:52.722 [info][tid:com.facebook.react.JavaScript] '%c prev state', 'color: #9E9E9E; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-4',
          isTransitioning: false,
          index: 0,
          routes: [ { routeName: 'Demo', key: 'id-1530041685778-3' } ],
          routeName: 'DemoRoot' } ] } }
2018-06-26 20:34:52.722 [info][tid:com.facebook.react.JavaScript] '%c action    ', 'color: #03A9F4; font-weight: bold', { type: 'Navigation/COMPLETE_TRANSITION',
  key: 'StackRouterRoot' }
2018-06-26 20:34:52.722 [info][tid:com.facebook.react.JavaScript] '%c next state', 'color: #4CAF50; font-weight: bold', { app: { initialized: false },
  navigation:
   { key: 'StackRouterRoot',
     isTransitioning: false,
     index: 0,
     routes:
      [ { params: undefined,
          key: 'id-1530041685778-4',
          isTransitioning: false,
          index: 0,
          routes: [ { routeName: 'Demo', key: 'id-1530041685778-3' } ],
          routeName: 'DemoRoot' } ] } }
2018-06-26 20:34:52.723 [info][tid:com.facebook.react.JavaScript] —— log end ——
```