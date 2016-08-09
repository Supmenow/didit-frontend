package com.didit;

import com.google.firebase.messaging.RemoteMessage;

/**
 * Created by jamescampbell on 8/9/16.
 */
public class MessagingService extends com.evollu.react.fcm.MessagingService {

    private static final String TAG = "MessagingService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {

        // - Show a local notification which triggers the original intent

        super.onMessageReceived(remoteMessage);
    }
}
