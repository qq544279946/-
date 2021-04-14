// 定义食物Food
class Food{
    element: HTMLElement;

    maxWidth: number;

    maxHeight: number;

    constructor(maxWidth:number = 290, maxHeight: number = 290){
        this.element = document.getElementById('food') as HTMLElement;
        
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }

    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    change(){
        let top = `${Math.round(Math.random() * Math.floor(this.maxHeight/10)) * 10}px`;
        let left = `${Math.round(Math.random() * Math.floor(this.maxHeight/10)) * 10}px`;
        this.element.style.left = left;
        this.element.style.top = top;
    }
}

export default Food;