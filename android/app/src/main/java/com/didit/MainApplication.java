package com.didit;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.proxima.RCTDigits.DigitsPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new CodePush(getApplicationContext().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
              new FIRMessagingPackage(),
              new DigitsPackage(),
              new ReactExplosionPackage(),
              new ReactNativeContacts()
      );
    }

    @Override
    protected String getJSBundleFile() {
      if (BuildConfig.DEBUG) {
        return super.getJSBundleFile();
      } else {
        return CodePush.getJSBundleFile();
      }
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
