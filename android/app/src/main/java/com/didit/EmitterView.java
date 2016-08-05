package com.didit;

import android.content.Context;
import android.graphics.Point;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.plattysoft.leonids.ParticleSystem;

import java.util.ArrayList;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class EmitterView extends FrameLayout {

    private static int MAX_PARTICLES = 255;
    private ArrayList<ParticleSystem> particleSystems = new ArrayList<ParticleSystem>();

    /* The array of emitter cells attached to the layer. */
    private ArrayList<EmitterCell> emitterCells = new ArrayList<EmitterCell>();

    /* The center of the emission shape. Defaults to (0, 0, 0). */
    public Point emitterPosition = new Point();

    /* A string defining how particles are composited into the layer's
        * image. Current options are `unordered' (the default), `oldestFirst',
        * `oldestLast', `backToFront' (i.e. sorted into Z order) and
        * `additive'. The first four use source-over compositing, the last
        * uses additive compositing. */
    public String renderMode = EmitterCellRenderMode.Unordered;

    EmitterView(Context context, AttributeSet attrs) {
        super(context, attrs);
        updateParticleSystems();
    }

    public void addCell(EmitterCell cell) {
        emitterCells.add(cell);
        updateParticleSystems();
    }

    /* FIXME: In the future when we open-source our particle code we should port a more direct replacement
       for CAEmitterLayer over this modified copy of Leonids. */
    private void updateParticleSystems() {
        for (EmitterCell cell: emitterCells) {
            ParticleSystem system = new ParticleSystem(this, MAX_PARTICLES, cell.drawable, cell.lifetime.longValue() * 1000)
            .setSpeedModuleAndAngleRange(0f, 0.3f, 180, 180)
                    .setRotationSpeed(144)
                    .setAcceleration(0.00005f, 90);
            system.emit(this, cell.birthRate.intValue());

            particleSystems.add(system);
        }
    }
}
