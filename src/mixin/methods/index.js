let timer = null;
export default {

    //=====================================节流====================================//
    sDebounce(fn, delay = 1000) {
        return function() {
            setTimeout(() => {
                fn.apply(this, arguments);
            }, delay);
        };
    },
    //=====================================深拷贝====================================//
    deepCopy(obj) {
        let clone = {};
        if (
            obj == null ||
            Array.prototype.toString.call(obj).slice(8, -1) === "Date" ||
            typeof obj !== "object"
        ) {
            return obj;
        }
        if (Array.isArray(obj)) {
            clone = [];
            obj.forEach((val, index) => {
                clone[index] = this.deepCopy(val);
            });
            return clone;
        }
        for (const i in obj) {
            if (obj[i] === null) {
                clone[i] = obj[i];
            } else if (Array.isArray(obj[i])) {
                clone[i] = [];
                obj[i].forEach((val, index) => {
                    clone[i][index] = this.deepCopy(val);
                });
            } else if (typeof obj[i] === "object") {
                clone[i] = this.deepCopy(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    },
    //=====================================测试数据注入====================================//
    testFakeDataInject(data) {
        try {
            this.$watch("$store.state.testData.fakeData", (val) => {
                data = Object.assign(data, val);
            }, { deep: true })           
        } catch (error) {
            console.error(error);
        }
    },
    //=====================================测试数据注入并且发送====================================//
    testFakeDataSend(fn) {
        try {
            this.$watch("$store.state.testData.enableSendMsg", (val) => {
                console.log(222222222222)
                fn()
            }, { deep: true })                
        } catch (error) {
            console.error(error);
        }
    },
    //=====================================测试数据注入并且无限发送====================================//
    testFakeDataSendMore(fn) {
        try {
            this.$watch("$store.state.testData.enableSendMoreMsg", (val) => {
                if (val === true) {
                    timer = setInterval(() => {
                        this.$store.commit("initRandomData", this.$route.meta);
                        fn()
                    }, 100)
                } else {
                    clearInterval(timer)
                }
            }, { deep: true })                
        } catch (error) {
            console.error(error);
        }
    }
};
