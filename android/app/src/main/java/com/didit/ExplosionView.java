package com.didit;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Point;
import android.support.v4.content.res.ResourcesCompat;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.views.view.ReactViewGroup;
import com.plattysoft.leonids.ParticleSystem;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class ExplosionView extends FrameLayout {

    public  ReactViewGroup reactSubviewContainer;

    private Context context;
    private EmitterView emitterView;
    private EmitterCell emitterCell;
    private ParticleSystem particleSystem;

    public ExplosionView(Context context){
        super(context);

        this.context = context;

        reactSubviewContainer = new ReactViewGroup(context);
        emitterView = new EmitterView(context, null);
        emitterCell = new EmitterCell();

        //FIXME: EmissionView is a rougth approximation of the iOS CAEMissionLayer - The values may not be the same for both platforms but
        //in future we would like to make these act the same. For now please adjust values to get effect you want.
        emitterCell.birthRate = 10.0f;
        emitterCell.lifetime = 2.0f;
        emitterCell.alphaSpeed = -1.5f;
        emitterCell.velocity = 150.0;
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

    public void setSprite(ReadableArray sources) {
        int drawableId = getResources().getIdentifier(sources.getMap(0).getString("uri"), "drawable", context.getPackageName());
        emitterCell.drawable = ResourcesCompat.getDrawable(getResources(), drawableId, null);
    }
}
