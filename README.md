# CineBook

CineBook est un projet front-end pédagogique de réservation de cinéma, conçu pour pratiquer JavaScript ES6+, la manipulation du DOM, la gestion des événements et le rendu dynamique d'une interface utilisateur.

Le projet contient une maquette HTML complète et des données de démonstration pour simuler un système de réservation de places dans une salle de cinéma.

## Aperçu

- Interface de cinéma moderne et responsive
- Sélection d'un film et d'une séance
- Choix des sièges dans une salle virtuelle
- Récapitulatif du panier/commande
- Calcul du total selon le nombre de sièges
- Données de films déjà fournies pour aider à l'apprentissage

## Stack technique

- HTML5
- JavaScript
- Tailwind CSS (via CDN)
- Assets graphiques locaux

## Structure du projet

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
