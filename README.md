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
├── index.html              # Structure principale de l'application
├── js/
│   ├── data.js             # Données des films et séances
│   └── app.js              # Logique pédagogique / TODO à compléter
├── assets/
│   └── images/             # Affiches des films
├── .gitignore
├── README.md
└── package.json            # Non présent dans ce dépôt
```

## Fonctionnement

L'application est pensée comme un support d'apprentissage :

- `index.html` contient les conteneurs HTML nécessaires à l'interface.
- `js/data.js` fournit les informations sur les films, les séances et les sièges occupés.
- `js/app.js` est le fichier principal où l'étudiant ajoute la logique métier.
- Les éléments visuels sont déjà préconçus pour servir de modèle.

## Démarrage rapide

1. Clonez le dépôt :

```bash
git clone https://github.com/Meqdar-Achraf/Projet__CineBook.git
```

2. Ouvrez le dossier du projet.

3. Lancez le fichier `index.html` dans un navigateur.

4. Pour un meilleur confort de développement, utilisez un serveur local comme Live Server dans VS Code.

## Objectifs pédagogiques

Ce dépôt est idéal pour pratiquer :

- sélection et parcours d'éléments DOM
- ajout dynamique de contenu HTML
- gestion des événements click
- travail avec des tableaux d'objets
- manipulation de classes CSS
- mise à jour de l'interface en fonction des sélections utilisateur

## Fichiers importants

- `index.html` : page principale du site
- `js/data.js` : source des données films/séances
- `js/app.js` : logique à implémenter et à compléter
- `assets/images/` : visuels de la plateforme
