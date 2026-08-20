import type { Lang } from "./ui";

export type Position = {
  id: string;
  titles: Record<Lang, string>;
  locations: Record<Lang, string>;
  types: Record<Lang, string>;
  summaries: Record<Lang, string>;
};

// Edit/add open positions here. Set the array to [] to show the "no openings" message.
export const positions: Position[] = [
  {
    id: "electrician",
    titles: {
      sl: "Elektroinštalater (m/ž)",
      de: "Elektroinstallateur (m/w)",
      ba: "Elektroinstalater (m/ž)",
    },
    locations: {
      sl: "Nemčija / teren",
      de: "Deutschland / vor Ort",
      ba: "Njemačka / teren",
    },
    types: {
      sl: "Polni delovni čas",
      de: "Vollzeit",
      ba: "Puno radno vrijeme",
    },
    summaries: {
      sl: "Iščemo izkušenega elektroinštalaterja za delo na terenu v Nemčiji — stanovanjski in poslovni objekti. Vozniško dovoljenje B.",
      de: "Wir suchen einen erfahrenen Elektroinstallateur für die Arbeit vor Ort in Deutschland — Wohn- und Gewerbeobjekte. Führerschein B.",
      ba: "Tražimo iskusnog elektroinstalatera za rad na terenu u Njemačkoj — stambeni i poslovni objekti. Vozačka dozvola B.",
    },
  },
  {
    id: "assistant-worker",
    titles: {
      sl: "Pomožni delavec (m/ž)",
      de: "Hilfsarbeiter (m/w)",
      ba: "Pomoćni radnik (m/ž)",
    },
    locations: {
      sl: "Nemčija / teren",
      de: "Deutschland / vor Ort",
      ba: "Njemačka / teren",
    },
    types: {
      sl: "Polni delovni čas",
      de: "Vollzeit",
      ba: "Puno radno vrijeme",
    },
    summaries: {
      sl: "Iščemo pomožnega delavca za delo na terenu v Nemčiji — pomoč pri električnih inštalacijah na gradbiščih.",
      de: "Wir suchen einen Hilfsarbeiter für die Arbeit vor Ort in Deutschland — Unterstützung bei Elektroinstallationen auf Baustellen.",
      ba: "Tražimo pomoćnog radnika za rad na terenu u Njemačkoj — pomoć pri električnim instalacijama na gradilištima.",
    },
  },
];
