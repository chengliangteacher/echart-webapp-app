class Copy {
    constructor(el, binding) {
        this.el = el
        this.x = 0
        this.y = 0
        this.init()
    }
    init() {
        setTimeout(() => {
            console.log(this.el.getBoundingClientRect())
            this.x = this.el.getBoundingClientRect()["left"]
            this.y = this.el.getBoundingClientRect()["top"]
        }, 0)
        this.el.classList.add("iconfont", "s-copy")
        this.el.addEventListener("mouseover", () => {
            this.el.classList.add("active")
        })
        this.el.addEventListener("mouseout", () => {
            this.el.classList.remove("active")
        })
        this.el.addEventListener("click", e => {
            this.runCopy()
        })
        document.addEventListener("copy", e => {
            if (e.target === this.el) {
                this.showCopyTip()
            }
        })
    }
    runCopy() {
        const selection = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(this.el)
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand("Copy", false, null)
        selection.removeAllRanges()
    }
    showCopyTip() {
        const dom = document.createElement("span")
        dom.innerHTML = "复制成功"
        dom.style.transition = "all .6s"
        dom.style.color = "#2c2"
        dom.style.position = "fixed"
        dom.style.left = this.x + "px"
        dom.style.top = this.y + "px"
        dom.style["whiteSpace"] = "nowrap"
        dom.style.transform = `translate3D(0, -.8rem, 0)`
        document.documentElement.appendChild(dom)
        requestAnimationFrame(() => {
            dom.style.transform = `translate3D(0, -1.5rem, 0)`
        })
        dom.addEventListener("transitionend", () => {
            console.log("end")
        })
        setTimeout(() => {
            if (dom) {
                document.documentElement.removeChild(dom)
            }
        }, 600)
    }
}

export default {
    inserted(el, binding) {
        new Copy(el, binding)
    }
}
