# Guide Junie — intégration AFI / financement / formation

## Objectif
Ajouter ou refondre la partie **formation / financement / AFI** sur le portfolio Light Developer, à la fois :
- sur la **home**
- sur une **page dédiée**
- avec une logique plus claire, plus premium et plus cohérente avec le nouveau positionnement

## Dossier source
- `afi-content.lightdeveloper.json` : base de contenu structurée
- `assets/afi06-logo.gif` : logo AFI
- `assets/afi-home-hero.png` : capture inspiration hero AFI
- `assets/afi-home-columns.png` : capture inspiration colonnes / bénéfices

## Liens à intégrer
1. Formation WordPress, SEO et design intuitif  
   `https://asso-formateur.fr/course/wordpress-seo-et-design-intuitif/`

2. Formation "Créer et gérer un site internet sans coder avec WordPress"  
   `https://asso-formateur.fr/course/creer-et-gerer-un-site-internet-sans-coder-avec-wordpress/`

3. Questionnaire de pré-formation  
   `https://asso-formateur.fr/questionnaire-de-pre-formation-apprenant/`

## Intention UX/UI
Ne pas refaire un simple bloc "carte verticale" cassé.
Cette zone doit devenir :
- une **vraie section indépendante**
- plus **large**
- plus **lisible**
- plus **centrée**
- clairement reliée à l’idée :
  **se former tout en faisant avancer son projet**

## Home — ce qu’il faut afficher
Créer une section de type :
- eyebrow : `Formation & accompagnement`
- titre : `Se former tout en faisant avancer son projet`
- intro courte
- 3 cartes ou 3 points d’entrée :
  1. formation WordPress / SEO / UX
  2. formation sans coder avec WordPress
  3. questionnaire de pré-formation

### Important
Le bloc ne doit pas être coincé dans un wrapper trop étroit.
Créer un vrai container du type :
- `section`
- `section-shell`
- `formation-panel`
- `formation-grid`

## Page dédiée à créer
Créer une page du type :
- `/formation-financement`
ou
- `/formation-accompagnement`

### Contenu recommandé
1. Hero simple
2. Présentation de l’approche formation
3. Bloc 1 : WordPress / SEO / design intuitif
4. Bloc 2 : créer un site sans coder
5. Bloc 3 : questionnaire de pré-formation
6. CTA contact / échange

## SEO / GEO à pousser
Dans les metas et contenus, faire remonter :
- formation WordPress
- formation SEO
- design UX
- créer un site sans coder
- autonomie digitale
- accompagnement projet
- montée en autonomie
- visibilité Google
- no-code
- questionnaire de pré-formation

## Rappel important — galeries projets
Sur les projets, repartir aussi sur les meilleures images :
- privilégier les fichiers marqués `home`, `slide`, `hero`, `uxui`, `dashboard`, `custom`, `booking`, `shipping`, `seo`, `geo`
- ne pas se contenter des premières images visibles
- pour chaque projet :
  - 1 cover home
  - 2 à 4 images modale
  - une galerie dédiée plus riche dans la page projet

## Task à exécuter
1. Lire `afi-content.lightdeveloper.json`
2. Intégrer la section home AFI
3. Créer la page dédiée
4. Brancher logo + captures si utile comme inspiration visuelle ou media
5. Vérifier que le bloc formation utilise son propre container/layout
6. Vérifier le responsive mobile / tablette / laptop / desktop
7. Reprendre aussi la logique galerie des projets avec les bonnes images-clés
