# CineBook — Starter kit pédagogique

CineBook est une interface de réservation de cinéma conçue pour pratiquer JavaScript ES6+ et la manipulation du DOM. L’interface est prête, mais ses fonctionnalités dynamiques restent volontairement à développer.

## Ce qui est fourni

- Une interface HTML5 claire, moderne et responsive, mise en forme uniquement avec les classes utilitaires de Tailwind CSS via CDN.
- Quatre films fictifs et leurs séances dans `js/data.js`.
- Quatre affiches originales stockées localement dans `assets/images/`.
- Une page unique déjà remplie avec des cartes, des séances, des sièges et un récapitulatif statiques.
- Un plan de salle prévu pour 5 rangées de 6 sièges.
- Tous les conteneurs HTML nécessaires au catalogue, aux séances, aux sièges et au récapitulatif.
- Des étapes, questions et TODO détaillés dans `js/app.js`.

Les apprenants doivent programmer l’affichage des films, les sélections, le plan de salle, le calcul du total, le récapitulatif et la confirmation. Aucune de ces solutions n’est fournie.

Les exemples statiques se trouvent directement dans les vrais conteneurs de l’application. Ils servent de modèles HTML : l’apprenant peut étudier une carte ou un siège, vider ensuite le conteneur concerné, puis recréer les mêmes éléments depuis les tableaux JavaScript. La page ressemble ainsi dès le départ au résultat final, mais ses interactions restent à programmer.

## Démarrage

1. Ouvrez ce dossier dans Visual Studio Code.
2. Ouvrez `index.html` dans un navigateur, ou utilisez l’extension **Live Server**.
3. Ouvrez les outils de développement du navigateur (`F12`) et consultez la console.
4. Travaillez principalement dans `js/app.js`, une étape à la fois.

Une connexion Internet est nécessaire au chargement de Tailwind CSS via son CDN. Les affiches, elles, fonctionnent hors ligne.

## Découverte des fichiers

```text
.
├── index.html          Interface et conteneurs à manipuler
├── js/data.js          Films, séances et sièges occupés
├── js/app.js           Parcours pédagogique et zones TODO
└── assets/images/      Affiches locales des films
```

`data.js` doit rester chargé avant `app.js` dans la page : ainsi, le tableau `films` est disponible quand votre code démarre.

## Ordre de travail conseillé

1. Explorez l’interface HTML et repérez les identifiants.
2. Examinez le tableau `films` avec `console.log(films)`.
3. Sélectionnez les conteneurs HTML utiles.
4. Développez l’affichage des cartes de films.
5. Ajoutez les interactions dans l’ordre des sections de `app.js`.
6. Testez chaque fonctionnalité avant de passer à la suivante.

## Conseils

- Lisez entièrement les commentaires d’une section avant de coder.
- Utilisez `console.log()` pour vérifier une valeur ou comprendre un objet.
- Consultez la console dès qu’un comportement ne fonctionne pas.
- Faites de petites modifications, puis testez-les immédiatement.
- Recherchez une méthode JavaScript dans la documentation quand son rôle n’est pas clair.
- Évitez de copier une solution que vous ne sauriez pas expliquer.

Actualiser la page réinitialise naturellement les choix : aucune sauvegarde permanente n’est attendue dans ce sprint.
