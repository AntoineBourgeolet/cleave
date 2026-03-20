import { defineCollection, z } from 'astro:content';

const bossEntry = z.object({
  name: z.string(),
  points: z.array(z.string()),
});

const dungeons = defineCollection({
  type: 'data',
  schema: z.object({
    /** Nom FR affiché sur le site */
    name: z.string(),
    /** Nom EN (source guides) */
    englishName: z.string(),
    /** Chemin vers l'image (dans public/) */
    image: z.string(),
    /** Identifiant de saison : s0, s1, s2… */
    season: z.string().default('s0'),
    /** Ordre d'affichage sur la home */
    order: z.number().default(99),
    /** Commande TomTom à coller in-game */
    tomtom: z.string(),
    /** Indication de route (1-2 lignes max) */
    route: z.string(),
    /** Bonus/objet utile à ramasser */
    bonus: z.string(),
    /** Appels importants (interrupts, dispels, etc.) */
    importantCalls: z.array(z.string()),
    /** Fiches boss ultra condensées */
    bosses: z.array(bossEntry),
  }),
});

export const collections = { dungeons };
