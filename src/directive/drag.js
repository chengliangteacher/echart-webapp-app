/*
    自定义拖动指令
*/
class Drag {
    constructor(el, binding) {
        this.el = el;
        this.isDragNear = binding.arg ? true : false;

        this._realMoveX = 0; //上一次mouseup位置
        this._realMoveY = 0; //上一次mouseup位置
        this.bindMouseDown = this.bindMouseDown.bind(this);
        this.bindMouseUp = this.bindMouseUp.bind(this);
        this.bindMouseMove = this.bindMouseMove.bind(this);
        this.initDrag();
    }
    //初始化
    initDrag() {
        this.clientX = this.el.getBoundingClientRect()["left"]; //元素最初的位置
        this.clientY = this.el.getBoundingClientRect()["top"]; //元素最初的位置
        this.domWidth = this.el.getBoundingClientRect()["width"]; //宽度
        this.domHeight = this.el.getBoundingClientRect()["height"]; //高度
        const dragList = this.el.parentNode.children;

        this.dragList = Array.from(dragList).map(dom => {
            return dom.getBoundingClientRect()["left"];
        });
        this.el.addEventListener("mousedown", this.bindMouseDown);
        document.documentElement.addEventListener("mouseup", this.bindMouseUp);
    }
    //
    freshDragDom() {
        const dragList = this.el.parentNode.children;
        this.dragList = Array.from(dragList).map(dom => {
            return dom.getBoundingClientRect()["left"];
        });
        this.clientX = this.el.getBoundingClientRect()["left"]; //元素最初的位置
        this.clientY = this.el.getBoundingClientRect()["top"]; //元素最初的位置
        this.domWidth = this.el.getBoundingClientRect()["width"]; //宽度
        this.domHeight = this.el.getBoundingClientRect()["height"]; //高度
    }
    //绑定鼠标down事件
    bindMouseDown(e) {
        e.stopPropagation();
        e.preventDefault();
        document.documentElement.addEventListener(
            "mousemove",
            this.bindMouseMove
        );
        this.offsetX = e.offsetX;
        this.offsetY = e.offsetY;
        this.startX = e.clientX;
        this.startY = e.clientY;
    }
    //绑定鼠标移动事件
    bindMouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        this.moveX = e.clientX; //鼠标所在位置
        this.moveY = e.clientY; //鼠标所在位置
        this.realMoveX = this._realMoveX + this.moveX - this.startX;
        this.realMoveY = this._realMoveY + this.moveY - this.startY;
        this.el.style.transform = `translate3D(${this.realMoveX}px, ${
            this.realMoveY
        }px, 0)`;
    }
    //绑定鼠标松开事件
    bindMouseUp(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isDragNear) {
            const near = this.moveX - this.offsetX;
            let nearIndex = -1;
            for (let i = 0, len = this.dragList.length; i < len; i++) {
                if (Math.abs(near - this.dragList[i]) < 30) {
                    nearIndex = i;
                    break;
                } else if (near - this.dragList[0] < 30) {
                    nearIndex = 0;
                    break;
                } else if (near - this.dragList[len - 1] > 30) {
                    nearIndex = len;
                    break;
                }
            }
            if (nearIndex !== -1) {
                this.el.parentNode.insertBefore(
                    this.el,
                    this.el.parentNode.children[nearIndex]
                );
            }
            this.el.style.transform = `translate3D(0, 0, 0)`;
        } else {
            this._realMoveX = this.realMoveX;
            this._realMoveY = this.realMoveY;
            this.el.style.transform = `translate3D(${this._realMoveX}, ${
                this._realMoveY
            }, 0)`;
        }

        document.documentElement.removeEventListener(
            "mousemove",
            this.bindMouseMove
        );
    }
}

export default {
    inserted(el, binding) {
        new Drag(el, binding);
    }
};
