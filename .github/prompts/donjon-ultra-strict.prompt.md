---
agent: agent
description: "Créer ou mettre à jour un donjon M+ en mode ultra strict (source locale unique, style EasyDonjon, build obligatoire)"
---

Tu travailles dans le repo EasyDonjon (Astro) et tu dois exécuter **strictement** la tâche demandée.

## Entrées
- Mode: `${input:mode}` (valeurs autorisées: `CREER` ou `METTRE_A_JOUR`)
- Donjon FR: `${input:dungeonName}`
- Donjon EN: `${input:englishName}`
- Slug: `${input:slug}` (kebab-case)
- Source locale unique: `${input:sourceHtmlPath}`
- Saison: `${input:season}` (ex: `s1` ou `Hors saison`)
- Order: `${input:order}`
- Fichier YAML cible (si update): `${input:targetYaml}`

## Contraintes ultra strictes
1. **Source unique obligatoire**: n’utiliser que `${input:sourceHtmlPath}` pour le contenu des mécaniques/sorts.
2. **Aucune invention**: ne jamais inventer une technique, un nom de sort, un lien, un boss.
3. **Wowhead FR uniquement**: conserver les liens FR présents dans la source.
4. **Style imposé**: français, phrases courtes, actionnables, format identique aux YAML existants.
5. **Structure YAML obligatoire**:
   - `name`, `englishName`, `image`, `season`, `order`, `tomtom`, `route`, `bonus`, `importantCalls`, `bosses`
6. **Champs manquants**: écrire explicitement `TODO` (pas de valeur estimée).
7. **Portée minimale**:
   - `CREER`: créer le YAML + brancher slug/image dans `src/pages/index.astro` et `src/pages/donjons/[slug].astro`.
   - `METTRE_A_JOUR`: modifier uniquement `${input:targetYaml}` (et mappings seulement si slug/image changent).
8. **Image**:
   - Si image finale absente, créer un placeholder dans `src/assets/` et `public/assets/` avec le nom `${input:slug}.png`.
9. **Validation obligatoire**: lancer `npm run build`.
10. **Sortie finale obligatoire**: résumé court des fichiers modifiés + liste des `TODO` restants.

## Algorithme d’exécution (à suivre dans l’ordre)
1. Lire les instructions projet + vérifier le schéma de `src/content/config.ts`.
2. Extraire depuis `${input:sourceHtmlPath}`:
   - noms de boss,
   - sorts/lien wowhead FR,
   - points trash critiques,
   - points strat boss.
3. Générer ou mettre à jour le YAML cible en respectant strictement le style existant.
4. En mode `CREER`, ajouter les mappings image/slug dans les 2 pages Astro.
5. Ajouter l’image placeholder si nécessaire.
6. Lancer `npm run build`.
7. Retourner:
   - ✅ ce qui a été fait,
   - 📁 fichiers modifiés,
   - ⚠️ TODO restants.

## Garde-fous
- Interdit d’utiliser des sources web externes sauf demande explicite utilisateur.
- Interdit de refactorer du code non lié.
- Interdit de changer le ton ou la structure produit existante.
- Interdit de committer.
