### Projet_kebab

### Architecture De projet 

ce REPO c'est la partie Front-End Qui contient :

 #### Librairies :

*fortawesome 
*react-router-dom
*react-router
*styled-components

#### Dossiers & Fichiers
* public 
* src:
   * asset :contient les images/logo utilisés dans le projet . 
   * component :contient les composants de l'APP .
       * Home.js   : page d'accueil (choix  Pain)
       * Etape2.js :2 eme page (choix de Viande)
       * Etape3.js :3 eme page (choix Salades)
       * Etape4.js :4 eme page (choix Sauces)
       * Recapitulatif.js : Page Recaputilatif
       * CommandValide.js : Commande Validé
       * style.js : Contient le style de app (styled-components)
   * data.js : base de donnée utiliser dans l'APP .
   * App.js : contient les routes (naviguer enter les component)

#### Comment Naviguer Entre les pages (component)

nous avons utilisé l'API React-router-dom ( Router , Switch ,Roote ).
Chaque composant a un role , pour faciliter les tâches
Router : pour specifier l'emplacement ou on veut afficher les composants 
Switch : pour dire a React , tu peux switcher entre les composants et ne les affichent pas  en meme temps 
Roote  : pour donner a chaque component un roote ( url exemple :"/" .. )

#### Comment Passer le data entre les Components

nous avons utilisé des hooks predefinies dans React **useHistory** et  **useLocation** chacun à un role
-useHistory: pour naviguer depuis un bouton et envoyer des paramètres
-useLocation : pour recuperer les paramètres

plus **localStorage**
-localStorage: est un objet pour stocker en local les données de l'utilisateur 

#### les Fonctionalités realisées 

* Proposer le choix du pain: pain, galette ou baguette.

* Proposer le choix de la viande: viande ou tofu.

* Proposer d’ajouter de la salade et / ou des tomates et / ou des oignons.

* Proposer d’ajouter une ou deux sauces (mais pas trois) parmi une sélection de 6 sauces
(au choix).

* Une fois qu’un kébab est dans le panier, on affiche celui-ci avec un bouton commander

* L’utilisateur peut supprimer un kébab du panier


