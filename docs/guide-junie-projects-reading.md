# Guide Junie — lecture du dossier `src/assets/projects`

## Objectif
Utiliser le dossier `projects/` comme source principale pour enrichir :
- la home
- les modales projet
- les pages projet dédiées
- les galeries
- les métadonnées SEO/GEO

## Structure constatée
Chaque sous-dossier correspond à un client / projet :
- `A3plumes`
- `CT91`
- `Choreame`
- `La Moma`
- `La suite Beauté`
- `Spiruline d'Aqui`
- `univerfascia`

Les noms des images contiennent déjà les mots-clés à exploiter.

## Règle de lecture du dossier
Pour chaque projet :
1. lister toutes les images du dossier
2. lire le nom de fichier comme un indice métier / UX / technique
3. classer chaque image dans une catégorie :
   - `hero`
   - `ux_ui`
   - `feature`
   - `admin`
   - `plugin_custom`
   - `reservation`
   - `payment`
   - `seo_geo`
   - `footer`
   - `dashboard`
4. choisir :
   - 1 image principale pour la home
   - 3 à 8 images pour la galerie du projet
   - 2 à 4 images pour illustrer les points clés dans la modale ou la page projet

## Mapping recommandé par projet

### A3plumes
Mots-clés visibles :
- `module_elearning_plugin_maison`
- `dashboard_custom_personnal`
- `badge_unlock`
- `admin_dynamic_creation`
- `etape_modale`
- `ux_ui_sur_mesure`
- `footer_custom`

À mettre en avant :
- projet from scratch
- module e-learning sur mesure
- dashboard apprenant
- progression / étapes / déblocage
- badges / gamification
- UX/UI custom

Image home recommandée :
- `slide_home_desing.png`

### CT91
Mots-clés visibles :
- `slide_home`
- `reservation_planning_evenement`
- `reservation_evenement_modal_ux`
- `custom_espace_membre`
- `admin_panel_custom_sur_mesure_espace_membre`
- `custom_admin_doc_online`
- `partage_espace_membre_automatique_document`
- `carte_clubs_dynamique`

À mettre en avant :
- refonte complète
- planning / réservation formations et événements
- espace club / espace membre
- partage documentaire
- cartographie dynamique
- admin custom / billetterie / analytics / SEO

Image home recommandée :
- `slide_home.png`

### Choreame
Mots-clés visibles :
- `home_slider_custom_theme`
- `plugin_custom_click_reservation_en_ligne`
- `plugin_resa_custom_choix_formule`
- `prepaiement_reservation_cours_en_ligne`
- `fiche_eleve_custom_plugin_resa_cours`
- `page_stat_plugin_custom`
- `reservation_listing_plugin_custom`

À mettre en avant :
- refonte complète
- réservation multi-cours
- choix de formule / plan de paiement
- prépaiement
- fiche élève / stats admin
- plugin maison / Stripe / Woo

Image home recommandée :
- `home_slider_custom_theme.png`

### La Moma
Mots-clés visibles :
- `home_slide`
- `accueil_page`
- `resa_en_ligne_plugin_wp`
- `paiement_resa_en_ligne`

À mettre en avant :
- refonte
- UX/UI plus fluide
- réservation en ligne
- paiement en ligne
- Woo / Stripe

Image home recommandée :
- `home_slide.png`

### La suite Beauté
Mots-clés visibles :
- `slide_home_them_custom`
- `ux_ui_experience_custom_theme`
- `ux_ui_sur_mesure_custom`
- `resa_mod_sur_mesure_custom`
- `api_call_redirect_reservation_kalendes`
- `news_presentation_custom`

À mettre en avant :
- refonte complète
- thème custom
- UX beauté / bien-être
- réservation / cartes cadeau
- intégration Kalendes
- SEO optimisation

Image home recommandée :
- `slide_home_them_custom.png`

### Spiruline d'Aqui
Mots-clés visibles :
- `home_sur_mesure_theme`
- `mise_en_avant_premium`
- `add_to_cart_custom_premium`
- `custom_plugin_calcul_automatisation_shipping`
- `custom_plugin_gestion_commande_transporteur`
- `custom_transporteur_choix_point_relay`
- `shipping_custom_plugin_compatible_multi_deliver`
- `custom_plugin_premium_avis`
- `footer_custom_carte_new_ux`

À mettre en avant :
- récupération après hack + refonte
- thème custom
- UX panier / achat
- plugin shipping sur mesure
- points relais / transporteurs
- plugin premium avis
- SEO / GEO

Image home recommandée :
- `home_sur_mesure_theme.png`

### univerfascia
Mots-clés visibles :
- `home_slide_them_custom`
- `ux_ui_home_slide`
- `custom_ux_ui_special_theme_front`
- `specil_ux_ui_experience_custom_them`
- `custom_contact_page`
- `custom_footer_special_design_sur_mesure`

À mettre en avant :
- refonte complète
- autonomie client
- thème custom
- UX/UI sur mesure
- page contact retravaillée
- footer card custom
- SEO / GEO en cours

Image home recommandée :
- `home_slide_them_custom.png`

## Où afficher les visuels

### 1. Home
Afficher uniquement les projets les plus forts, avec :
- 1 image principale par projet
- tags courts
- titre
- statut
- CTA vers modale / page projet

### 2. Modale projet
Afficher :
- résumé projet
- points forts
- 2 à 4 captures clés
- stack
- CTA vers page projet complète

### 3. Page projet dédiée
Afficher :
- hero projet
- résumé métier
- problématique
- solution
- fonctionnalités clés
- stack
- galerie complète
- liens externes si URL disponible
- SEO/GEO metadata

## Champs à prévoir dans les meta des projets
Pour chaque projet, prévoir :
- `slug`
- `title`
- `client`
- `status`
- `year`
- `url`
- `excerpt`
- `seoTitle`
- `seoDescription`
- `geoKeywords`
- `services`
- `stack`
- `highlights`
- `heroImage`
- `gallery`
- `coverAlt`

## Règles SEO/GEO
Toujours faire ressortir dans les contenus selon le projet :
- refonte complète / création sur mesure
- responsive
- UX/UI optimisée
- développement sur mesure
- plugin custom / module maison
- réservation en ligne / e-commerce / paiement
- visibilité Google / SEO / GEO
- autonomie client / admin / dashboard

## Ce que Junie doit faire maintenant
1. brancher le dossier `src/assets/projects/...`
2. créer une vraie source de données projet (JSON ou Astro content)
3. affecter 1 image de couverture + une galerie par projet
4. enrichir les cartes home
5. enrichir les modales
6. créer les pages projet manquantes avec liens internes
7. prévoir un template distinct pour les petites expériences / missions secondaires
