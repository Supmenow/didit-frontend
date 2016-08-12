package com.didit;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.support.v4.app.NotificationCompat;

import com.google.firebase.messaging.RemoteMessage;

/**
 * Created by jamescampbell on 8/9/16.
 */
public class MessagingService extends com.evollu.react.fcm.MessagingService {

    private static final String TAG = "MessagingService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {

        Intent launchAppIntent = new Intent(this, MainActivity.class);
        launchAppIntent.putExtra("data", remoteMessage);
        launchAppIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);

        Intent showNotificationIntent = new Intent("com.evollu.react.fcm.ReceiveNotification");
        showNotificationIntent.putExtra("data", remoteMessage);
        sendOrderedBroadcast(showNotificationIntent, null);

        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, launchAppIntent,
                PendingIntent.FLAG_ONE_SHOT);

        Uri soundUri = Uri.parse("android.resource://" + getPackageName() + "/" + remoteMessage.getData().get("sound"));
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("Did It!")
                .setContentText(remoteMessage.getData().get("message"))
                .setAutoCancel(true)
                .setSound(soundUri)
                .setContentIntent(pendingIntent);

        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        notificationManager.notify(0, notificationBuilder.build());

        // Eye roll and high five actions

        super.onMessageReceived(remoteMessage);
    }
}
