export default (value, arg, arg2) => {
    // console.log(value, arg, arg2)
    let result = value;
    let reg = new RegExp(`(${arg})`, "i");
    let className = arg2 ? arg2 : "text-red";
    if (arg && arg.trim() === "") {
        return result;
    }else {
        result = result.match(reg) ? result.replace(reg, `<span class='${className}'>$1</span>`) : result;
        console.log(result)
        return result;
    }

}