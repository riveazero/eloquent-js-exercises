class MultiplicatorUnitFailure extends Error {}

function reliableMultiply(a, b) {
    while(true) {
        try {
            if (Math.random() < 0.2) return a * b;
            else {
                throw new MultiplicatorUnitFailure('Klunk');
            }
        }
        catch(err) {
            if (!(err instanceof MultiplicatorUnitFailure)) throw err;
        }
    }
}