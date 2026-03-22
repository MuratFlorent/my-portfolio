# Tasks Junie — intégration des projets portfolio Light Developer

## Objectif global
Prendre le dossier `src/assets/projects/` et les fichiers de seed fournis pour transformer les projets en vraies études de cas SEO/GEO-ready, avec :
- cartes home cohérentes
- modales enrichies
- pages projet dédiées
- galerie d'images
- métadonnées SEO propres
- base réutilisable pour les prochains projets

## Fichiers fournis
- `project-catalog.lightdeveloper.json`
- `project-pages-stubs/*.md`
- `future-project-template.md`

## Task 1 — créer une source de données projet unique
- utiliser le JSON ou les stubs markdown comme source de vérité
- éviter les données codées en dur dans plusieurs composants
- prévoir un schéma uniforme : slug, title, status, services, stack, SEO, gallery, hero, homeCard

## Task 2 — créer la collection / typage Astro Content
- créer une collection `projects`
- intégrer les stubs markdown dans `src/content/projects/`
- définir un schema content collection qui valide : url, hero, gallery, seoTitle, seoDescription, results, stack, services

## Task 3 — homepage : afficher seulement les projets piliers
- afficher sur la home 4 projets maximum
- utiliser `homeCardImage` pour la carte
- utiliser `cardEyebrow`, `cardTitle`, `cardSummary`
- lien vers page projet dédiée + ouverture modale rapide
- CTA final : “Explorer toutes les réalisations” vers `/projets`

## Task 4 — modales projet
- la modale devient un teaser premium, pas la page complète
- afficher : cover, résumé, services/stack clés, 3 résultats max, CTA vers page projet
- intégrer une galerie courte ou slider léger si utile
- CTA “Discuter d’un projet similaire” préremplit le formulaire avec la référence du projet

## Task 5 — pages projet dédiées
- créer `/projets/[slug]`
- hero avec `coverImage`
- sections : contexte, solution, résultats, stack/services, galerie, CTA contact
- intégrer les URLs live lorsqu'elles existent
- ajouter navigation projet suivant / précédent si facile

## Task 6 — galerie images
- afficher toutes les images listées dans `gallery`
- support desktop et mobile
- possible lightbox ou modal image
- utiliser les noms de fichiers comme base pour les captions internes ou alt text enrichis

## Task 7 — SEO/GEO poussé
Pour chaque page projet :
- utiliser `seoTitle` et `seoDescription`
- ajouter meta OG/Twitter
- générer canonical propre
- ajouter JSON-LD de type `CreativeWork` ou `WebSite`/`WebPage` selon l'implémentation
- reprendre les mots-clés métiers sans bourrage : sur mesure, refonte, UX/UI, réservation, e-commerce, WooCommerce, Stripe, plugin custom, shipping, espace membre, no-code, full stack
- intégrer dans le texte des formulations naturelles orientées recherche IA : “solution digitale sur mesure”, “plugin métier”, “réservation en ligne”, “développement spécifique”, “visibilité Google”

## Task 8 — alt texts et accessibilité
- générer des alt text descriptifs à partir du contexte projet + du nom de fichier
- ne pas laisser les images sans alt utile
- garder des titres de sections clairs

## Task 9 — section “Expériences / aides / optimisations” à préparer
- utiliser `future-project-template.md` pour les plus petites missions (SEO, optimisation, aide, refonte partielle, maintenance)
- créer plus tard une seconde collection ou une taxonomie `caseStudyType`

## Task 10 — responsive et perf
- les cartes projet doivent rester lisibles sur mobile
- lazy load galerie
- préférer des images optimisées Astro si possible
- garder une vraie hiérarchie visuelle entre home, modale et page détail
