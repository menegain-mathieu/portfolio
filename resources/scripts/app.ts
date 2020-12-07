import { Menu } from './lib/menu';
import { HomeMove } from './lib/home_move';

export class AppComponent 
{
    constructor()
    {
        let menu = new Menu('navbar');
        menu.bindMobileBtn('open_menu');
        
        // Animate logo
        const logo = document.querySelector('#home svg');
        setTimeout(() => {
            logo.classList.add('active');
        }, 500);
        
        //Animate mouvement home banner
        // const movement = new HomeMove('home', '#bg picture', 15);

        console.log('Site Start');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    new AppComponent();
});
