interface Position {
    x: number;
    y: number;
}

export class HomeMove {
    private max: number;
    private size: Position;
    private element: HTMLElement;

    constructor(id: string, max: number) {
        this.max = max;
        this.element = document.getElementById(id);
        this.size = {
            x: window.innerWidth,
            y: window.innerHeight,
        };
        
        this.element.onmousemove = ((e) => {
            const valX = this.calcMove(e.clientX, this.size.x);
            const valY = this.calcMove(e.clientY, this.size.y);
            
            this.element.style.backgroundPosition = String(valX * -1) + 'px '  + String(valY * -1) + 'px';
        });
    }

    calcMove(position: number, size: number) {
        const percent = (position * 100) / size;
        
        return (percent * this.max) / 100;
    }
}