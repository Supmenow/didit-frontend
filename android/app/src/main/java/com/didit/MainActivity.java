package com.didit;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.twitter.sdk.android.core.TwitterCore;
import com.twitter.sdk.android.core.TwitterAuthConfig;
import com.digits.sdk.android.Digits;
import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {

    // Note: Your consumer key and secret should be obfuscated in your source code before shipping.
    private static final String TWITTER_KEY = "rLAZ3GGETRtos554YfkHQZTOl";
    private static final String TWITTER_SECRET = "6awZbB19G8hlSPRVsJWS0oAgaxafH8GFtfHsG3IfrYdLm9MxJK";

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DidIt";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        TwitterAuthConfig authConfig = new TwitterAuthConfig(TWITTER_KEY, TWITTER_SECRET);
        Fabric.with(this, new TwitterCore(authConfig), new Digits());

        super.onCreate(savedInstanceState);
    }
}
