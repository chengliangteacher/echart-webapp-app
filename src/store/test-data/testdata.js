import mockFackData from "./mocks"



export default {
    state: {
        enableSendMsg: 0, //触发数据生成
        enableSendMoreMsg: false, //触发无限数据生成
        fakeData: {}, //模拟的数据
    },
    mutations: {
        //=====================================初始化标准数据====================================//
        initData(state, meta) {
            const testInfo = meta.testInfo;
            const key = testInfo ? testInfo.key : "";
            try {
                state.fakeData = mockFackData[key].standard();
            } catch (error) {
                console.error(error);
            }
        },
        //=====================================初始化随机数据====================================//
        initRandomData(state, meta) {
            const testInfo = meta.testInfo;
            const key = testInfo ? testInfo.key : "";
            try {
                state.fakeData = mockFackData[key].random();
            } catch (error) {
                console.error(error);
            }
        },
        //=====================================初始化随机数据并且发送请求====================================//
        initRandomDataAndSend(state, meta) {
            const testInfo = meta.testInfo;
            const key = testInfo ? testInfo.key : "";
            try {
                state.fakeData = mockFackData[key].random();
                state.enableSendMsg = Math.random();
            } catch (error) {
                console.error(error);
            }
        },
        //=====================================随机数据并且连续发送====================================//
        initRandomDataAndSendMore(state, meta) {
            const testInfo = meta.testInfo;
            const key = testInfo ? testInfo.key : "";
            try {
                state.fakeData = mockFackData[key].random();
                state.enableSendMoreMsg = !state.enableSendMoreMsg;
            } catch (error) {
                console.error(error);
            }
        },
        initSearchData() {
            
        }
    },
    action() {
        
    }
    
};
