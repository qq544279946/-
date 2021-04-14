class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        const snake = document.getElementById('snake')!;
        this.element = snake;
        this.head = snake.children[0] as HTMLElement;
        this.bodies = snake.children;
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if (this.X === value) {
            return;
        }

        
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        this.moveBody()
        this.head.style.left = value + 'px';

        this.checkHeadBody()
    }

    set Y(value: number) {
        if (this.Y === value) {
            return;
        }
        
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody()
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', `<div></div>`)
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    checkHeadBody(){
        for(let i = 1; i < this.bodies.length; i++){
            const bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }
}

export default Snake;