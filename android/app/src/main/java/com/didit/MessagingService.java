package com.didit;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;

import com.google.firebase.messaging.RemoteMessage;

/**
 * Created by jamescampbell on 8/9/16.
 */
public class MessagingService extends com.evollu.react.fcm.MessagingService {

    private static final String TAG = "MessagingService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {

        //FIXME: Detect when app is in foreground and react accordingly
        Intent intent = new Intent("com.evollu.react.fcm.ReceiveNotification");
        intent.putExtra("data", remoteMessage);
        sendOrderedBroadcast(intent, null);

        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent,
                PendingIntent.FLAG_ONE_SHOT);

        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("Did It!")
                .setContentText(remoteMessage.getData().get("message"))
                .setAutoCancel(true)
                .setContentIntent(pendingIntent);

        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        notificationManager.notify(0, notificationBuilder.build());

        // Eye roll and high five actions

        super.onMessageReceived(remoteMessage);
    }
}
