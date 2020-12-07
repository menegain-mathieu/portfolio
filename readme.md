## Installation et développement

 - Utiliser la commande `npm i` pour installer les différents packages utiles au développement.
 - La commande `npm run start` permet de lancer la compilation des fichiers et écoutera toutes modifications des fichiers TS et SCSS.
 - Un système de LiveReload est en place, tu peux installer l'extension [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) afin de ne pas être obligé de faire un CTRL+F5 lorsque tu modifie et enregistre un fichier TS ou SCSS 
 - Un polyfill est installé avec l'ensemble pour assurer une meilleur compatibilité du CSS généré sur l'ensemble des navigateurs.
 - Penser à bien structurer les fonctionnalités dans différents fichiers, exemple : je souhaite faire un style pour ma bannière, je vais donc créer un fichier `banner.scss` dans le dossier `./resources/styles/lib/` , le responsive spécifique à cette fonctionnalité devra ce trouvé dans ce fichier également. Seul le responsive global pourra être ajouté dans le fichier `responsive.scss`
 - Pour travailler en local, nous utilisons [Laragon](https://laragon.org/)
-  Si des background-images sont à ajouter, si ceux-ci ne sont pas amenés à être administrable; prévoir de faire un attribut style="background-image: url(monurl.jpg);" puis de faire le reste du style dans le fichier SCSS approprié.