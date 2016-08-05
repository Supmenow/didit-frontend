package com.didit;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class ReactExplosionManager extends SimpleViewManager<ExplosionView> {

    public static final String REACT_CLASS = "RCTExplosionManager";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    //ReactImageView
    public ExplosionView createViewInstance(ThemedReactContext context) {
        return new ExplosionView(context, null);
    }
}
