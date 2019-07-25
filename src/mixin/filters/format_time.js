/*
 * @description 时间格式转化
 * @author shuxiaokai
 * @param data		合法的时间戳或者Date对象
 * @param rule		转换时间的规则目前支持YY，MM，DD，HH，mm，ss, week, cd(距离现在的时间), media(媒体时间，视频音频的播放时间，最高99分钟59秒)
 * 注意new Date()不传参数获取month为0-11；传递了月份参数则获取月份为当前月份
 *
 */
export default (date, rule) => {
    if (!date) {
        return
    }
    date = new Date(date)

    if (
        Object.prototype.toString.call(date) !== "[object Date]" ||
        isNaN(date.getTime())
    ) {
        //若时间戳无效则getTime返回NaN
        throw new Error("非法的时间参数")
    }

    //
    const zhWeek = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ]
    const zhWeek2 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    const ruleReg = /YY(?:YY)?|MM(?:MM)?|D{1,2}|H{1,2}|m{1,2}?!e|s{1,2}|week|cd|media/g
    const flagReg = /[^Y]/g
    //获取基础时间
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1) //0~11个月份
    const day = String(date.getDate())
    const week = String(date.getDay())
    const hour = String(date.getHours())
    const minu = String(date.getMinutes())
    const sec = String(date.getSeconds())
    //const msec = date.getMilliseconds();

    //倒计时转化函数
    const formatCd = time => {
        let diff = (Date.now() - time) / 1000
        if (diff <= 60) {
            return "刚刚"
        } else if (diff <= 60 * 60) {
            return `${parseInt(diff / 60)}分钟前`
        } else if (diff <= 60 * 60 * 24) {
            return `${parseInt(diff / 3600)}小时前`
        } else if (diff <= 60 * 60 * 24 * 30) {
            return `${parseInt(diff / (3600 * 24))}天前`
        } else if (diff <= 60 * 60 * 24 * 30 * 12) {
            return `${parseInt(diff / (3600 * 24 * 30))}月前`
        } else {
            return `${parseInt(diff / (3600 * 24 * 30 * 12))}年前`
        }
        return 1
    }
    /*
     * 说明：将秒数转换为特殊格式，3s转化为00:03，适合于视频播放的时间转换
     * @params time: 视频或音频秒数
     * 若小于0则返回00:00，总时长不能超过100个小时,参数为空则返回00:00
     */
    const formatMedia = time => {
        time = time.valueOf()
        let minus = Math.floor(time / 60) > 99 ? 99 : Math.floor(time / 60)
        let sec = time % 60
        let result =
            minus.toString().padStart(2, "0") +
            ":" +
            sec.toString().padStart(2, "0")
        return result
    }
    //匹配函数，将时间规则转换为数字
    const formatFlag = flag => {
        let f = ""
        switch (flag) {
            case "YY":
                f = year.slice(2, 4)
                break
            case "YYYY":
                f = year
                break
            case "M":
                f = month
                break
            case "MM":
                f = month.padStart(2, 0)
                break
            case "D":
                f = day
                break
            case "DD":
                f = day.padStart(2, 0)
                break
            case "H":
                f = hour
                break
            case "HH":
                f = hour.padStart(2, 0)
                break
            case "m":
                f = minu
                break
            case "mm":
                f = minu.padStart(2, 0)
                break
            case "s":
                f = sec
                break
            case "ss":
                f = sec.padStart(2, 0)
                break
            case "week":
                f = zhWeek[week]
                break
            case "cd":
                f = formatCd(date)
                break
            case "media":
                f = formatMedia(date)
                break
            default:
                f = ""
        }
        return f
    }

    const result = rule.replace(ruleReg, $1 => {
        // console.log($1)
        return formatFlag($1)
    })
    return result
}
