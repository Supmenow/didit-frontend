package com.didit;

import android.util.Log;
import android.view.View;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class ReactExplosionManager extends ViewGroupManager<ExplosionView> {

    public static final String REACT_CLASS = "RCTExplosion";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    //ReactImageView
    public ExplosionView createViewInstance(ThemedReactContext context) {
        return new ExplosionView(context);
    }

    @Override
    public void addView(ExplosionView parent, View child, int index) {
        parent.reactSubviewContainer.addView(child, index);
    }
}
