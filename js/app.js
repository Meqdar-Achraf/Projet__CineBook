"use strict";

// Bienvenue dans le fichier de travail principal de CineBook !
// Le HTML et les données sont prêts, mais les interactions sont volontairement absentes.
// La page contient déjà un exemple statique complet pour montrer le résultat attendu.
// Inspectez et copiez la structure HTML utile, puis remplacez ces exemples avec
// les éléments que votre code crée à partir des tableaux de data.js.
// Avancez section par section et testez souvent dans le navigateur.

// ==================================================
// 0 - SÉLECTIONNER LES ÉLÉMENTS HTML
// ==================================================
// OBJECTIF : garder des références vers les zones qui seront modifiées.
// NOTIONS UTILES : const, document.querySelector(), document.getElementById().
// QUESTIONS : Quel identifiant correspond au catalogue ? Au prix total ?
// TODO : créez ici des constantes explicites pour les éléments nécessaires.
// ÉCRIVEZ VOTRE CODE ICI :

import { films } from "./data.js";

const film__container = document.getElementById("films-container");

// ==================================================
// 0 BIS - MÉMORISER L'ÉTAT DE L'APPLICATION
// ==================================================
// OBJECTIF : mémoriser temporairement le film, la séance et les sièges choisis.
// Les données décrivent les films ; l'état décrit les choix actuels de l'utilisateur.
// NOTIONS UTILES : let, null, tableau vide [].
// PISTES : que faut-il remettre à zéro lorsqu'un autre film est choisi ?
// TODO : déclarez trois variables avec des valeurs initiales adaptées.
// ÉCRIVEZ VOTRE CODE ICI :

// ==================================================
// US01 - AFFICHER LES FILMS
// ==================================================
// OBJECTIF : créer une carte pour chaque objet du tableau "films" et l'ajouter
// dans #films-container.
// NOTIONS UTILES : forEach, createElement ou innerHTML, propriétés d'un objet.
// QUESTIONS : Comment parcourir films ? Comment utiliser film.affiche et film.titre ?
// TODO : 1) vider les cartes statiques ; 2) construire les cartes ; 3) les insérer.
// PISTE : ajoutez l'identifiant du film dans un attribut data-film-id du bouton.
// MODÈLE : observez l'élément <article data-film-id="1"> dans index.html.
// ÉCRIVEZ VOTRE CODE ICI :

let duration = "";

function time(movie) {
  let H = parseInt(movie.duree / 60);
  let min = movie.duree % 60;
  duration = `${H} H ${min} min`;
  return duration;
}
function affichefilm(data) {
  for (let i = 0; i < data.length; i++) {
    const article = document.createElement("article");
    article.setAttribute(
      "class",
      "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg",
    );
    article.setAttribute("data-film-id", `${i + 1}`);

    const div1 = `<div class="relative"><img src="${data[i].affiche}" alt="Affiche du ${data[i].titre}" class="aspect-[2/3] w-full object-cover"><span class="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-lg">${data[i].prix} DH</span></div>`;
    const div2 = `<div class="p-4"><p class="text-xs font-bold uppercase tracking-wider text-cine-red">${data[i].genre}</p><h3 class="mt-1 text-lg font-black">${data[i].titre}</h3><p class="mt-2 text-sm text-slate-500">${time(data[i])}</p><button type="button" class="mt-4 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-extrabold text-slate-700 choix__button isnotselected" id="${data[i].id}">Choisir ce film</button></div>`;
    article.innerHTML = div1 + div2;

    film__container.appendChild(article);
  }
}

affichefilm(films);

// ==================================================
// US02 - SÉLECTIONNER UN FILM
// ==================================================
// OBJECTIF : réagir au clic sur une carte, retrouver le film correspondant et
// afficher ses informations dans #film-details.
// NOTIONS UTILES : addEventListener, Number(), find(), textContent, classList.
// QUESTIONS : Où lire l'id du bouton ? Comment comparer cet id à film.id ?
// TODO : écouter les clics, modifier l'état et mettre à jour les détails.
// PISTE : un changement de film doit aussi réinitialiser séance et sièges.
// MODÈLE : #film-details contient déjà un exemple de détail à reproduire.
// ÉCRIVEZ VOTRE CODE ICI :

const buttons = document.querySelectorAll(".choix__button");
const film_selection = document.getElementById("films-selectione");
const film_seances = document.querySelector("#film-seances");

function selectfilm(buttonselections) {
  buttonselections.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttonselections.forEach((btnelement) => {
        btnelement.classList.replace("bg-cine-red", "bg-slate-50");
        btnelement.classList.replace("text-white", "text-slate-700");
        btnelement.classList.replace("isselected", "isnotselected");
        btnelement.innerText = "choisir ce film";
      });

      btn.classList.replace("bg-slate-50", "bg-cine-red");
      btn.classList.replace("text-slate-700", "text-white");
      btn.classList.replace("isnotselected", "isselected");
      btn.innerText = "selectioné";
      siege.innerHTML = "";
      creatfilmresevationcard();
      const reservedfilm = creatfilmresevationcard();
      affichageseance(reservedfilm);
      seanceselection();
    });
  });
}

function creatfilmresevationcard() {
  const clickedbtn = document.querySelector(".isselected");
  const movie = films.find((Element) => Element.id == clickedbtn.id);
  document.querySelector("#film-details")?.remove();
  const film_card = document.createElement("div");
  film_card.setAttribute(
    "class",
    "mt-6 grid gap-5 rounded-2xl bg-slate-50 p-5 sm:grid-cols-[100px_1fr]",
  );
  film_card.setAttribute("id", "film-details");
  film_card.setAttribute("card-id", `card-${movie.id}`);

  const film_card_affiche = `<img src="${movie.affiche}" alt="${movie.titre}" class="aspect-[2/3] w-24 rounded-xl object-cover shadow-md">`;
  const film_card_details = `<div><div class="flex flex-wrap items-center gap-2"><h3 class="text-xl font-black">${movie.titre}</h3><span class="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">${movie.prix} DH</span></div><p class="mt-2 text-sm font-semibold text-slate-500">${movie.genre} · ${time(movie)}</p><p class="mt-3 leading-7 text-slate-600">${movie.description}</p></div>`;

  film_card.innerHTML = film_card_affiche + film_card_details;
  film_selection.appendChild(film_card);
  return movie;
}

selectfilm(buttons);

// ==================================================
// US03 - AFFICHER LES SÉANCES
// ==================================================
// OBJECTIF : afficher les horaires du film sélectionné dans #seances-container.
// NOTIONS UTILES : tableau imbriqué, boucle, bouton, innerHTML.
// QUESTIONS : Dans quelle propriété du film se trouvent les séances ?
// TODO : créer un bouton par séance et conserver son id dans data-seance-id.
// MODÈLE : les trois boutons statiques de #seances-container montrent le HTML attendu.
// ÉCRIVEZ VOTRE CODE ICI :

function affichageseance(filmrsv) {
  document.querySelector("#seances-container")?.remove();

  const film_horraire = document.createElement("div");
  film_horraire.setAttribute("class", "mt-6 flex flex-wrap gap-3");
  film_horraire.setAttribute("id", "seances-container");
  film_horraire.setAttribute("horraire-id", `horraire-${filmrsv.id}`);
  for (let i = 0; i < filmrsv.seances.length; i++) {
    const button_seance = `<button type="button" movieid=${filmrsv} dataseanceid="${filmrsv.seances[i].id}" class="rounded-xl bg-slate-50 border border-slate-300 px-5 py-3 font-bold text-slate-700 shadow-md seance-button isnotactive">${filmrsv.seances[i].horaire}</button>`;
    film_horraire.innerHTML += button_seance;
  }
  film_seances.appendChild(film_horraire);
}
// ==================================================
// US04 - SÉLECTIONNER UNE SÉANCE
// ==================================================
// OBJECTIF : mémoriser la séance cliquée et montrer visuellement le bouton actif.
// NOTIONS UTILES : addEventListener, find(), classList, conditions.
// QUESTIONS : Faut-il autoriser une séance qui n'appartient pas au film choisi ?
// TODO : retrouver la séance, modifier l'état et réinitialiser les sièges choisis.
// ÉCRIVEZ VOTRE CODE ICI :
function seanceselection() {
  const seancebuttons = document.querySelectorAll(".seance-button");

  seancebuttons.forEach((Elementbutton) => {
    Elementbutton.addEventListener("click", function (e) {
      seancebuttons.forEach((btnelement) => {
        btnelement.classList.replace("bg-cine-red", "bg-slate-50");
        btnelement.classList.replace("text-white", "text-slate-700");
        btnelement.classList.replace("isactive", "isnotactive");
      });

      Elementbutton.classList.replace("bg-slate-50", "bg-cine-red");
      Elementbutton.classList.replace("text-slate-700", "text-white");
      Elementbutton.classList.replace("isnotactive", "isactive");
      affichagesiege();
      var filmonselection = creatfilmresevationcard();
    });
  });
}

// ==================================================
// US05 - AFFICHER LES 30 SIÈGES
// ==================================================
// OBJECTIF : créer les rangées A à E, avec les numéros 1 à 6.
// NOTIONS UTILES : boucles imbriquées, concaténation, createElement, classList.
// QUESTIONS : Comment fabriquer le nom "C4" ? Où sont les sièges occupés ?
// TODO : générer les sièges et donner un état visuel différent aux places occupées.
// PISTE : rangees et siegesParRangee sont fournis dans data.js.
// MODÈLE : #sieges-container contient les 30 sièges statiques et leurs classes Tailwind.
// ÉCRIVEZ VOTRE CODE ICI :
const columns = ["A", "B", "C", "D", "E"];
const siege = document.getElementById("sieges-container");
let nombreplaces = 0;
function affichagesiege() {
  const buttonseanceactive = document.querySelector(".isactive");
  const horaireselecte = creatfilmresevationcard().seances.find(
    (ele) => ele.id == buttonseanceactive.getAttribute("dataseanceid"),
  );
  siege.innerHTML = "";

  columns.forEach((column) => {
    const rowdiv = document.createElement("span");
    rowdiv.setAttribute(
      "class",
      "self-center text-xs font-extrabold text-slate-500",
    );
    rowdiv.textContent = column;
    siege.appendChild(rowdiv);

    for (let i = 1; i <= 6; i++) {
      const place = document.createElement("button");
      place.textContent = column + i;
      if (horaireselecte.siegesOccupes.includes(place.textContent)) {
        place.setAttribute(
          "class",
          "aspect-square rounded-lg bg-slate-400 text-xs font-bold text-white opacity-50 isdisable isselected",
        );
        place.disabled = true;
      } else {
        place.setAttribute(
          "class",
          "aspect-square rounded-lg bg-blue-600 text-xs font-bold text-white isenable isnotselected",
        );
        place.disabled = false;
      }
      siege.appendChild(place);
    }
  });
  const enabledsiege = siege.querySelectorAll(".isenable");
  selectplace(enabledsiege);
}

// ==================================================
// US06 - SÉLECTIONNER ET DÉSÉLECTIONNER DES SIÈGES
// ==================================================
// OBJECTIF : ajouter ou retirer une place du tableau des sièges sélectionnés.
// NOTIONS UTILES : includes(), push(), splice() ou filter(), classList.toggle().
// QUESTIONS : Comment empêcher le clic sur une place occupée ?
// TODO : écouter chaque siège disponible et actualiser son état visuel.
// ÉCRIVEZ VOTRE CODE ICI :
function selectplace(data) {
  const buttonseanceactive = document.querySelector(".isactive");
  const horaireselecte = creatfilmresevationcard().seances.find(
    (ele) => ele.id == buttonseanceactive.getAttribute("dataseanceid"),
  );
  data.forEach((plc) => {
    plc.addEventListener("click", function () {
      
      if (plc.classList.contains("isnotselected")) {
        plc.classList.replace("bg-blue-600", "bg-cine-red");
        plc.classList.replace("bg-blue-600", "bg-cine-red");
        plc.classList.replace("isnotselected", "isselected");
        nombreplaces++;
        console.log(nombreplaces);

      } else {
        plc.classList.replace("bg-cine-red", "bg-blue-600");
        plc.classList.replace("isselected","isnotselected");
        nombreplaces--;
        console.log(nombreplaces);
      }
    });
  });
}
// ==================================================
// US07 - CALCULER LE TOTAL ET METTRE À JOUR LE RÉCAPITULATIF
// ==================================================
// OBJECTIF : afficher le film, la séance, les sièges et le montant actuel.
// NOTIONS UTILES : multiplication, length, join(), textContent.
// QUESTIONS : Quelle formule relie prix du film et nombre de sièges ?
// TODO : écrire une fonction appelée après chaque changement de sélection.
// MODÈLE : le récapitulatif HTML affiche des exemples de valeurs déjà remplies.
// ÉCRIVEZ VOTRE CODE ICI :

// ==================================================
// US08 - CONFIRMER LA RÉSERVATION
// ==================================================
// OBJECTIF : vérifier les choix puis afficher un succès ou une erreur dans
// #reservation-message. Les données restent seulement en mémoire.
// NOTIONS UTILES : if / else, addEventListener, textContent, classList.
// QUESTIONS : Quelles conditions rendent une réservation valide ?
// TODO : écouter #confirmer-reservation et construire un message clair.
// ÉCRIVEZ VOTRE CODE ICI :

// PREMIER TEST CONSEILLÉ :
// console.log(films);
// Décommentez temporairement cette ligne pour explorer les données, puis avancez.
