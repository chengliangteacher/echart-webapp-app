

export default {
    state: {
        //=========================================================================//
        currentOptionIndex: 0, //当前拥有options属性的数量， 方便命名 option option2 option3 
        pickerOptionsIndex: 0, //当前拥有pickerOptions属性的数量， 方便命名 pickerOptions pickerOptions2 pickerOptions3 
        cascaderOptionsIndex: 0, //当前级联选择器属性的数量， 方便命名 cascaderOptions cascaderOptions2 cascaderOptions3 
        propsOptionsIndex: 0, //当前级联选择器props属性的数量， 方便命名 propsOptions propsOptions2 propsOptions3 
        //=========================================================================//
        searchInfo: [], //搜索列表数据
        created: "", //
        data: "",
        methods: "",
    },
    mutations: {
        //=====================================改变搜索列表数据====================================//
        changeSearchInfo(state, data) {
            state.searchInfo = data;
        },
        //=====================================改变data的值====================================//
        clearData(state) {
            state.data = "";
        },
        addData(state, payload) {
            const key = payload.key;
            const value = payload.value === "" ? `""` : payload.value;
            state.data += `${key}: ${value},`;
        },
        //=====================================级联选择器====================================//
        clearCascaderOptions(state) {
            state.cascaderOptionsIndex = 0;
        },
        addCascaderOptions(state) {
            state.cascaderOptionsIndex++;
        },   
        clearPropsOptions(state) {
            state.propsOptionsIndex = 0;
        },
        addPropsOptions(state) {
            state.propsOptionsIndex++;
        },   

        //=====================================清除pickerOptions计数器====================================//
        clearPickerOptions(state) {
            state.pickerOptionsIndex = 0;
        },
        //=====================================pickerOptions计数器自增====================================//
        addPickerOptions(state) {
            state.pickerOptionsIndex++;
        },
        //=====================================清除options计数器====================================//
        clearCurrentOptionsIndex(state) {
            state.currentOptionIndex = 0;
        },
        //=====================================options计数器自增====================================//
        addCurrentOptionsIndex(state) {
            state.currentOptionIndex++;
        },

        //=====================================清空方法====================================//
        clearMethods(state) {
            state.methods = "";
        },
        //=====================================新增方法====================================//
        addMethods(state, fn) {
            state.methods += fn;
        },
        //=====================================清空created====================================//
        clearCreated(state) {
            state.created = "";
        },
        //=====================================新增created====================================//
        addCreated(state, fn) {
            state.created += fn;
        },
    },

    
};
