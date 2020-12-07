export class Menu 
{
    private id: string;

    constructor(id: string) 
    {
        this.id = id;
    }

    /**
     * Bind the btn open and close the menu
     */
    public bindMobileBtn(id: string)
    {
        const btn = document.getElementById(id);
        const body = document.querySelector('body');
        
        if (btn != null) {
            btn.addEventListener('click', (e: Event) => {
                btn.classList.toggle('open');
                document.getElementById(this.id).classList.toggle('open');
                body.classList.toggle('no-scroll');
            });
        }
    }
}