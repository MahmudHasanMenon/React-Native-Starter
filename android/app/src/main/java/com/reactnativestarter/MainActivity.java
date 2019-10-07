package com.reactnativestarter;

 import java.util.List;
 import java.util.Arrays;
 import com.facebook.react.shell.MainReactPackage;
 import com.facebook.react.ReactPackage;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeStarter";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
    // @Override
    // protected List<ReactPackage> getPackages() {
    //     return Arrays.<ReactPackage>asList(
    //         new MainReactPackage()
    //     );
    // }
}
