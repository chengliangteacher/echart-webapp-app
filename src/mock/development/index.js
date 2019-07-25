import MockAdapter from "./mock-adapter";
import mockData from "./mock-data/model";

console.log("mockData", mockData);

//=====================================mock数据拦截====================================//

export default function mock(axios) {
    const mock = new MockAdapter(axios);
    // mock.onGet("/mock/data").reply(200, mockData.a.a1);
    // mock.onGet("/mock/data2").reply(200, mockData.a.a2);
    mock.onPost("/test").reply(200, mockData.a.a1);


    mock.onAny().passThrough();
}
