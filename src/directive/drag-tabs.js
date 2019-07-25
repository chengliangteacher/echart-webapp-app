
//拖动时候的zIndex值
const zIndex = {
    max: 999,
    min: 1
}

class DragTabs {
    constructor(el, binding) {
        this.el = el;
        this.cX = 0;//鼠标点击x坐标(相对于浏览器)
        this.mouseMoveEvent = null;
        this.mouseDownEvent = null;
        this.mouseUpEvent = null;
        this.bindMouseUp = this.bindMouseUp.bind(this);
        
        this.hanldeMousemove = this.hanldeMousemove.bind(this);
        this.init();
        this.bindMouseDown();
    }
    //初始化，绑定点击事件
    init() {
        let observer = new MutationObserver((mutations) => {
            this.init();
            this.bindMouseDown();
        });
        let _this = this;
        observer.observe(this.el, {childList: true});
        this.tabsDom = this.el.children;
        let end = this.el.getBoundingClientRect()["left"];
        Array.from(this.tabsDom).forEach(tab => {
            end += tab.getBoundingClientRect()["width"];
        })
        this.tabsAttr = Array.from(this.tabsDom).map(tab => {
            return {
                left: tab.getBoundingClientRect()["left"],
                right: tab.getBoundingClientRect()["right"],
                width: tab.getBoundingClientRect()["width"],
                start: this.el.getBoundingClientRect()["left"],
                end: end,
                direct: 0,//1代表向右 -1代表向左
                clickX: 0,//当前点击位置
                offsetX: 0,//本次移动相对偏移量
                moveX: 0,//当前transofrm距离
                _moveX: 0,//上一次transform的距离
            }
        })
    }
    //绑定鼠标mousedown事件
    bindMouseDown() {
        let _this = this;
        Array.from(this.tabsDom).forEach((tab, index) => {
            tab.addEventListener("mousedown", function foo(e) {
                e.preventDefault();
                e.stopPropagation();
                _this.changeTabCSS(Array.from(_this.tabsDom), tab);
                _this.mouseDownEvent = foo;
                _this.tabsAttr[index].clickX = e.clientX;//记录当前点击位置
                //绑定鼠标移动
                let foo2 = function(e) {
                    _this.hanldeMousemove.call(_this, e, tab, index);
                }
                _this.mouseMoveEvent = foo2;
                document.documentElement.addEventListener("mousemove", foo2);
                //绑定鼠标up事件
                document.documentElement.addEventListener("mouseup", function foo3(e) {
                    this.mouseUpEvent = foo3;
                    document.documentElement.removeEventListener("mouseup", foo3);
                    _this.bindMouseUp.call(_this, e, tab, index)
                });
            });
        })
    }

    //绑定鼠标松开事件
    bindMouseUp(e, tab, index) {
        e.preventDefault();
        e.stopPropagation();
        this.assignMinIndex(tab)
        this.tabsAttr[index].clickX = e.clientX;
        this.checkTransformDistance(tab, index);
        
        document.documentElement.removeEventListener("mousemove", this.mouseMoveEvent);
    }
    //判断transform距离
    //如果距离小于自身宽度的一半则忽略本次移动，返回初始位置
    //如果距离大于自身宽度的一半，则与最近的一个元素交换位置
    checkTransformDistance(tab, index) {
        let tAttr = this.tabsAttr[index];
        let moveX = tAttr.moveX;//当前transform的距离
        let offsetX = tAttr.offsetX; //本次鼠标拖动的距离
        let width = tAttr.width; //当前标签宽度
        let left = tAttr.left;//当前标签距离屏幕左边距离
        let start = tAttr.start;//父元素本身距离屏幕左边的距离  left-start表示相对于父元素偏移量
        let direct = tAttr.direct;

        let point = moveX + left;
       
        console.log(point, tAttr)
        
        for(let i = 0; i < this.tabsAttr.length - 1; i ++) {
            if (point < (this.tabsAttr[i + 1].left - this.tabsAttr[i].left) / 2 ) {
                tAttr._moveX = this.tabsAttr[i].left - this.tabsAttr[i].start;
                tab.style.transform = `translate3D(${tAttr._moveX}px, 0, 0)`;
            }else if (point > this.tabsAttr[i + 1].left) {
                tAttr._moveX = this.tabsAttr[i + 1].left - this.tabsAttr[i].start;
                tab.style.transform = `translate3D(${tAttr._moveX}px, 0, 0)`;
            }
        }
       
    }




    //绑定鼠标移动事件
    hanldeMousemove(e, tab, index) {
        let moveX = e.clientX;
        this.tabsAttr[index].offsetX = moveX - this.tabsAttr[index].clickX;
        this.tabsAttr[index].moveX = this.tabsAttr[index]._moveX + this.tabsAttr[index].offsetX;
        this.tabsAttr[index].offsetX < 0 ? this.tabsAttr[index].direct = -1 : this.tabsAttr[index].direct = 1;
        if (this.tabsAttr[index].start - this.tabsAttr[index].left > this.tabsAttr[index].moveX) {//左边边界判断
            return;
        }
        // console.log("移动中", this.tabsAttr[index]._moveX, this.tabsAttr[index].moveX)
        tab.style.transform = `translate3D(${this.tabsAttr[index].moveX}px, 0, 0)`
    }

    //改变点击tab的css样式
    changeTabCSS(domList, div) {
        div.style["position"] = "relative";
        div.style["zIndex"] = zIndex.max;
        domList.forEach(dom => { dom.classList.remove('active') });//样式绑定
        div.classList.add("active");
    }
    assignMinIndex(dom) {
        dom.style["zIndex"] = zIndex.min;
    }
}

export default {
    inserted(el, binding) {
        new DragTabs(el, binding)
    }
}