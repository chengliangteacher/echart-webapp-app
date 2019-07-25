class LimitFrequency {
    debounce(fn, delay = 1000) {
        let later = 0;
        return function() {
            const now = Date.now();
            if (now - later > delay) {
                fn();
                later = now;
            } else {
                later = now;
            }
        };
    }

    throttle(fn, delay = 1000) {
        let later = 0;
        return function() {
            const now = Date.now();
            if (now - later > delay) {
                fn();
                later = now;
            }
        };
    }
}

export default new LimitFrequency();
