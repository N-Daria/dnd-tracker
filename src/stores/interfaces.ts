export interface RareFighter {
  name: string;
  ac:
    | number[]
    | {
        ac: number;
        from: string[];
      }[];
  hp: number | { average: number; formula: string };
  dex: number;

  passive?: number;
  resist?: ResistOrImmune[];
  immune?: ResistOrImmune[];
  conditionImmune?: string[];

  [key: string]: unknown;
}

export interface Fighter extends RareFighter {
  initiative: number;
}

export type Conditions =
  | "blinded"
  | "charmed"
  | "deafened"
  | "frightened"
  | "grappled"
  | "incapacitated"
  | "invisible"
  | "paralyzed"
  | "petrified"
  | "poisoned"
  | "prone"
  | "restrained"
  | "stunned"
  | "unconscious"
  | "exhaustion";

type ResistOrImmune =
  | "acid"
  | "cold"
  | "fire"
  | "lightning"
  | "thunder"
  | "necrotic"
  | "poison"
  | "force"
  | "psychic"
  | "radiant"
  | {
      immune?: ["bludgeoning", "piercing", "slashing"];
      resist?: ["bludgeoning", "piercing", "slashing"];
      note: string;
      cond: boolean;
    };
