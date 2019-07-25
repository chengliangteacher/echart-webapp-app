/* 
  获取数组中最大值和最大值的索引
  @params  Array<number>
  @return {value: , index: ,}//最大值和最大值所在的索引

*/

export const getMax = arr => {
    if (!Array.isArray(arr)) {
        throw new Error("请传入数组")
    }
    arr.forEach(val => {
        if (typeof val !== "number") {
            throw new Error("数组中对应元素应该为number类型")
        }
    })
    const max = Math.max(...arr)
    const index = arr.indexOf(max)
    return {
        value: max,
        index: index
    }
}

/* 
  @params window.location.search

*/
export const getQueryParams = str => {
    if (typeof str !== "string") {
        throw new Error("参数必须为字符串")
    }
    const result = {}
    const realStr = str.replace(/\?/, "") //去除问号
    const paramsArr = realStr.split("&")
    paramsArr.forEach(val => {
        const key = val.split("=")[0]
        const value = val.split("=")[1]
        result[key] = value
    })
    return result
}
/* 
    @description  去抖
    @autor        shuxiaokai
    @create       2019-05-30 13:21"
    @params       
    @return       
*/
export const debounce = (fn, delay = 300) => {
    let later = 0
    return function() {
        const now = Date.now()
        if (now - later > delay) {
            fn()
            later = now
        } else {
            later = now
        }
    }
}

/* 
    @description  节流
    @autor        shuxiaokai
    @create       2019-05-30 13:21"
    @params       
    @return       
*/
export const throttle = (fn, delay = 300) => {
    let later = 0
    // console.log(fn)
    return function() {
        const now = Date.now()
        if (now - later > delay) {
            fn()
            later = now
        }
    }
}

/* 
    @description  将数据导出为文件
    @autor        shuxiaokai
    @create       2019-04-19 17:18"
    @params       
    @return       
*/
export const exportFile = (value, type = "text/plain", name = "aaa") => {
    const blob = new Blob([value], { type })
    const URL = window.URL
    const blobUrl = URL.createObjectURL(blob)
    let download = document.createElement("a")
    download.download = name
    download.href = blobUrl
    download.click()
    download = null
}
