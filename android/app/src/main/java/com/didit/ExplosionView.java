package com.didit;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Point;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import com.facebook.react.views.view.ReactViewGroup;
import com.plattysoft.leonids.ParticleSystem;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class ExplosionView extends FrameLayout {

    public  ReactViewGroup reactSubviewContainer;
    private EmitterView emitterView;
    private EmitterCell emitterCell;
    private ParticleSystem particleSystem;

    public ExplosionView(Context context){
        super(context);

        reactSubviewContainer = new ReactViewGroup(context);
        emitterView = new EmitterView(context, null);
        emitterCell = new EmitterCell();

        emitterCell.birthRate = 10.0f;
        emitterCell.drawable = getResources().getDrawable(R.drawable.smiley); // Get from React Native
        emitterCell.lifetime = 5.0f;
        emitterCell.alphaSpeed = -0.4f;
        emitterCell.velocity = 250.0;
        emitterCell.emissionRange = Math.PI * 2.0;
        emitterCell.spin = 0.5;

        emitterView.addCell(emitterCell);
        emitterView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        emitterView.renderMode = EmitterCellRenderMode.OldestLast;

        addView(emitterView);
        addView(reactSubviewContainer);
    }

    @Override
    protected void onLayout(boolean changed, int l, int t, int r, int b) {
        super.onLayout(changed, l, t, r, b);
        emitterView.emitterPosition = new Point(getMeasuredWidth() / 2, getMeasuredHeight() / 2);
    }
}
