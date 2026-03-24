# Configuration des Notifications par Email - Netlify Forms

Pour recevoir les leads de vos formulaires sur les adresses email suivantes :
- `murat.light.developer@gmail.com`

Veuillez suivre ces étapes dans votre interface Netlify :

1.  Connectez-vous à votre [Tableau de bord Netlify](https://app.netlify.com/).
2.  Allez dans votre projet (site).
3.  Naviguez vers **Site configuration** > **Forms**.
4.  Dans la section **Form notifications**, cliquez sur **Add notification** > **Email notification**.
5.  Configurez une notification pour chaque formulaire :
    - **Form to notify about** : Choisissez `contact-rapide`.
    - **Email to notify** : Entrez les deux adresses séparées par une virgule.
    - Cliquez sur **Save**.
6.  Répétez l'opération pour le formulaire `demande-devis`.
7.  Vérifiez que le paramètre **Honeypot field** est bien réglé sur `bot-field` (ce qui est déjà configuré dans le code).
8.  Assurez-vous que le **reCAPTCHA** est activé (Netlify le gère automatiquement grâce aux attributs `data-netlify-recaptcha="true"` ajoutés).

Les formulaires ont été configurés pour rediriger vers :
- `/merci` (pour le contact rapide)
- `/merci-devis` (pour les demandes de devis)

Une page invisible `src/pages/forms-detectable.astro` a été ajoutée pour garantir que Netlify détecte les formulaires même s'ils sont dans des modales.
