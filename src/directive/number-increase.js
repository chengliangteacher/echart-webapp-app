export default {
	update(el, binding) {
        let arg = binding.arg ? binding.arg : "";
        let end = binding.value;
        let start = 0;
        let interval = .5;
        let step = 1;
        let t = 0;
        if (end -start !== 0) {
            t = 1000 / ( (end - start) / interval );
        }
        // console.log(t)
        if (t < 1) {
            step = parseInt(1/t);
        }
        if (!t) {
            el.innerHTML = 0;
            return;
        }
        let timer = setInterval(() => {
            if (start > end) {
                clearInterval(timer);
            }else {
                el.innerHTML = arg + start;
                start += step;
            }
        }, t)
		
	}
}
