interface Position {
    x: number;
    y: number;
}

export class HomeMove {
    private max: number;
    private size: Position;
    private element: HTMLElement;
    private selector: HTMLElement;

    constructor(id: string, element: string, max: number) {
        this.max = max;
        this.selector = document.getElementById(id);
        this.element = document.querySelector(element);
        this.size = {
            x: window.innerWidth,
            y: window.innerHeight,
        };
        
        this.selector.onmousemove = ((e) => {
            const valX = this.calcMove(e.clientX, this.size.x);
            const valY = this.calcMove(e.clientY, this.size.y);
            
            this.element.style.top = String(valY * -1) + 'px ';
            this.element.style.left = String(valX * -1) + 'px ';
        });
    }

    calcMove(position: number, size: number) {
        const percent = (position * 100) / size;
        
        return (percent * this.max) / 100;
    }
}