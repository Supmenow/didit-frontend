package com.didit;

import android.graphics.drawable.Drawable;

/**
 * Created by jamescampbell on 8/5/16.
 */
public class EmitterCell {

    /* The number of emitted objects created every second. Default value is
     * zero. */

    public Float birthRate = 0.0f;

    /* The lifetime of each emitted object in seconds, specified as a mean
     * value and a range about the mean. Both values default to zero.*/

    public Float lifetime = 0.0f;

    /* An angle (in radians) defining a cone around the emission angle.
     * Emitted objects are uniformly distributed across this cone. Defaults
     * to zero. */

    public Double emissionRange = 0.0;

    /* The initial mean velocity of each emitted object, and its range. Both
     * values default to zero. */
    public Double velocity = 0.0;

    /* The rotation speed applied to each emitted object, defined as mean
     * and range about the mean. Defaults to zero. */
    public Double spin = 0.0;

    /* The speed at which color components of emitted objects change over
     * their lifetime, defined as the rate of change per second. Defaults
     * to (0, 0, 0, 0). */
    public Float alphaSpeed = 0.0f;

    /* The cell contents. Defaults to null.*/
    public Drawable drawable = null;
}
