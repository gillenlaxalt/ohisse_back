# projet-04-ou-quon-grimpe-back

## installation du back-end

Le back-end est une API rest qui va faire le lien entre la base de données et le front. 

1) Cloner le projet
2) Faire cette commande si on veut récupérer toutes les branches 
  `for BRANCH in $(git branch -a | grep remotes | grep -v HEAD | grep -v master); do git branch --track "${BRANCH#remotes/origin/}" "${BRANCH}"; done`
3) Aller dans le dossier back/laravel
4) Dans le terminal, lancer `composer install`
5) Dans le fichier `.env` rentrer les informations nécessaires pour vous connecter à la base de données : Nom de la BDD, identifiant, MDP)
6) Lancer les commandes suivantes à la suite :
   `php artisan key:generate`
   `php artisan jwt:secret`
   `php artisan migrate`
   
 Dans le dossier docs, vous trouverez plusieurs fichiers tutoriel qui vous expliquent la migration et le JWT Auth
 
 Lancer le serveur avec cette commande : php -S 0.0.0.0:8080 -t public
 
 ## installation du back-office
 
 Au niveau du dossier front, dans le terminal
  `yarn`
  
 Pour lancer le serveur
  `yarn start`
