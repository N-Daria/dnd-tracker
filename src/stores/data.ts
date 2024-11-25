export interface Data {
  name: string;
  initiative?: number;

  source?: string;
  page?: number;
  otherSources?: { source: string; page: number }[];
  size?: string[];
  type?:
    | string
    | {
        type: string;
        tags: string[];
      };

  alignment?: string[];
  alignmentPrefix?: string;
  ac:
    | number[]
    | {
        ac: number;
        from: string[];
      }[];
  hp: number | { average: number; formula: string };

  speed?: Speed;
  str?: number;
  dex: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  save?: {
    [key in keyof Stats]?: string;
  };
  skill?: {
    [key: string]: string;
  };
  languages?: string[];
  senses?: string[];

  passive?: number;

  resist?: ResistOrImmune[];
  immune?: ResistOrImmune[];
  conditionImmune?: string[];
  cr?: string;
  spellcasting?: [
    {
      name: string;
      type: string;
      headerEntries: string[];
      daily: {
        [key: string]: string[];
      };
      ability: string;
    }
  ];
  trait?: {
    name: string;
    entries: string[];
  }[];
  action?: {
    name: string;
    entries: string[];
  }[];
  environment?: string[];
  soundClip?: {
    type: string;
    path: string;
  };
  traitTags?: string[];
  senseTags?: string[];
  actionTags?: string[];
  languageTags?: string[];
  spellcastingTags?: string[];
  conditionInflictSpell?: string[];
  savingThrowForcedSpell?: string[];
  damageTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  savingThrowForced?: string[];
  hasToken?: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;

  [key: string]: unknown;
}

type Stats = {
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
};

type Speed = {
  walk?: number;
  fly?: number;
  climb?: number;
  swim?: number;
  burrow?: number;
};

type ResistOrImmune =
  | "acid"
  | "cold"
  | "fire"
  | "lightning"
  | "thunder"
  | "necrotic"
  | "poison"
  | {
      immune?: ["bludgeoning", "piercing", "slashing"];
      resist?: ["bludgeoning", "piercing", "slashing"];
      note: string;
      cond: boolean;
    };

export const data: Data[] = [
  {
    name: "Nightwalker",
    source: "MPMM",
    page: 194,
    otherSources: [
      {
        source: "MTF",
        page: 216,
      },
    ],
    size: ["H"],
    type: "undead",
    alignment: ["C", "E"],
    alignmentPrefix: "Typically ",
    ac: [14],
    hp: {
      average: 337,
      formula: "25d12 + 175",
    },
    speed: {
      walk: 40,
      fly: 40,
    },
    str: 22,
    dex: 19,
    con: 24,
    int: 6,
    wis: 9,
    cha: 8,
    save: {
      con: "+13",
    },
    senses: ["darkvision 120 ft."],
    passive: 9,
    resist: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      {
        resist: ["bludgeoning", "piercing", "slashing"],
        note: "from nonmagical attacks",
        cond: true,
      },
    ],
    immune: ["necrotic", "poison"],
    conditionImmune: [
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
    ],
    cr: "20",
    trait: [
      {
        name: "Annihilating Aura",
        entries: [
          "Any creature that starts its turn within 30 feet of the nightwalker must succeed on a {@dc 21} Constitution saving throw or take 21 ({@damage 6d6}) necrotic damage. Undead are immune to this aura.",
        ],
      },
      {
        name: "Life Eater",
        entries: [
          "A creature dies if reduced to 0 hit points by the nightwalker and can't be revived except by a {@spell wish} spell.",
        ],
      },
      {
        name: "Unusual Nature",
        entries: [
          "The nightwalker doesn't require air, food, drink, or sleep.",
        ],
      },
    ],
    action: [
      {
        name: "Multiattack",
        entries: [
          "The nightwalker makes two Enervating Focus attacks, one of which can be replaced by Finger of Doom, if available.",
        ],
      },
      {
        name: "Enervating Focus",
        entries: [
          "{@atk mw} {@hit 12} to hit, reach 15 ft., one target. {@h}28 ({@damage 5d8 + 6}) necrotic damage. The target must succeed on a {@dc 21} Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
        ],
      },
      {
        name: "Finger of Doom {@recharge}",
        entries: [
          "The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a {@dc 21} Wisdom saving throw or take 39 ({@damage 6d12}) necrotic damage and become {@condition frightened} until the end of the nightwalker's next turn. While {@condition frightened} in this way, the creature is also {@condition paralyzed}. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours.",
        ],
      },
    ],
    environment: ["arctic", "desert", "swamp", "underdark"],
    soundClip: {
      type: "internal",
      path: "bestiary/nightwalker.mp3",
    },
    traitTags: ["Unusual Nature"],
    senseTags: ["SD"],
    actionTags: ["Multiattack"],
    damageTags: ["N"],
    miscTags: ["HPR", "MW", "RCH"],
    conditionInflict: ["frightened", "paralyzed"],
    savingThrowForced: ["constitution", "wisdom"],
    hasToken: true,
    hasFluff: true,
    hasFluffImages: true,
  },

  {
    name: "Nightmare Shepherd",
    source: "MOT",
    page: 221,
    size: ["L"],
    type: "fiend",
    alignment: ["L", "E"],
    ac: [
      {
        ac: 18,
        from: ["natural armor"],
      },
    ],
    hp: {
      average: 133,
      formula: "14d10 + 56",
    },
    speed: {
      walk: 30,
      fly: 60,
    },
    str: 19,
    dex: 15,
    con: 18,
    int: 14,
    wis: 17,
    cha: 20,
    save: {
      con: "+8",
      wis: "+7",
    },
    skill: {
      arcana: "+6",
      deception: "+9",
      perception: "+7",
      persuasion: "+9",
    },
    senses: ["darkvision 120 ft."],
    passive: 17,
    resist: ["cold", "necrotic"],
    immune: ["poison"],
    conditionImmune: ["poisoned"],
    languages: ["Abyssal", "Common", "Infernal"],
    cr: "11",
    spellcasting: [
      {
        name: "Innate Spellcasting",
        type: "spellcasting",
        headerEntries: [
          "The shepherd's spellcasting ability is Charisma (spell save {@dc 17}). It can innately cast the following spells, requiring no material components:",
        ],
        daily: {
          "1e": [
            "{@spell confusion}",
            "{@spell dispel magic}",
            "{@spell hold person}",
            "{@spell suggestion}",
          ],
        },
        ability: "cha",
      },
    ],
    trait: [
      {
        name: "Aura of Nightmares",
        entries: [
          "Undead creatures within 30 feet of the shepherd gain a +5 bonus to attack and damage rolls. When any other creature that isn't undead or a construct starts its turn within 30 feet of the shepherd, that creature must succeed on a {@dc 17} Wisdom saving throw or take 11 ({@damage 2d10}) psychic damage.",
        ],
      },
      {
        name: "Magic Resistance",
        entries: [
          "The shepherd has advantage on saving throws against spells and other magical effects.",
        ],
      },
    ],
    action: [
      {
        name: "Multiattack",
        entries: [
          "The shepherd makes two attacks: one with its claws and one with its staff.",
        ],
      },
      {
        name: "Claws",
        entries: [
          "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage plus 16 ({@damage 3d10}) necrotic damage.",
        ],
      },
      {
        name: "Staff",
        entries: [
          "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage, or 13 ({@damage 2d8 + 4}) bludgeoning damage if used with two hands, plus 26 ({@damage 4d12}) psychic damage.",
        ],
      },
      {
        name: "Herd the Underworld (Recharges after a Short or Long Rest)",
        entries: [
          "The shepherd pulls twisted souls from the Underworld; {@dice 1d6} {@creature shadow||shadows} (without Sunlight Weakness) arise in unoccupied spaces within 20 feet of the shepherd. The shadows act right after the shepherd on the same initiative count and fight until they're destroyed. They disappear when the shepherd dies.",
        ],
      },
    ],
    traitTags: ["Magic Resistance"],
    senseTags: ["SD"],
    actionTags: ["Multiattack"],
    languageTags: ["AB", "C", "I"],
    damageTags: ["B", "N", "S", "Y"],
    spellcastingTags: ["I"],
    miscTags: ["MW"],
    conditionInflictSpell: ["paralyzed"],
    savingThrowForced: ["wisdom"],
    savingThrowForcedSpell: ["wisdom"],
    hasToken: true,
    hasFluff: true,
    hasFluffImages: true,
  },

  {
    name: "hero1",
    ac: [20],
    hp: 30,
    dex: 10,
  },

  {
    name: "Aspect of Tiamat",
    source: "FTD",
    page: 166,
    size: ["G"],
    type: {
      type: "dragon",
      tags: ["chromatic"],
    },
    alignment: ["C", "E"],
    ac: [
      {
        ac: 23,
        from: ["natural armor"],
      },
    ],
    hp: {
      average: 574,
      formula: "28d20 + 280",
    },
    speed: {
      walk: 60,
      burrow: 60,
      fly: 120,
      swim: 60,
    },
    str: 30,
    dex: 14,
    con: 30,
    int: 21,
    wis: 20,
    cha: 26,
    save: {
      dex: "+11",
      con: "+19",
      wis: "+14",
      cha: "+17",
    },
    skill: {
      intimidation: "+26",
      perception: "+23",
    },
    senses: ["truesight 120 ft."],
    passive: 33,
    immune: [
      "acid",
      "cold",
      "fire",
      "lightning",
      "poison",
      {
        immune: ["bludgeoning", "piercing", "slashing"],
        note: "from nonmagical attacks",
        cond: true,
      },
    ],
    conditionImmune: [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "poisoned",
      "stunned",
    ],
    languages: ["Common", "Draconic", "Infernal"],
    cr: "30",
    trait: [
      {
        name: "Chromatic Wrath (Recharges after a Short or Long Rest)",
        entries: [
          'If the aspect would be reduced to 0 hit points, her current hit point total instead resets to 500 hit points, she recharges her Chromatic Flames, and she regains any expended uses of Legendary Resistance. Additionally, the aspect can now use the options in the "Mythic Actions" section for 1 hour. Award a party an additional 155,000 XP (310,000 XP total) for defeating the aspect of Tiamat after her Chromatic Wrath activates.',
        ],
      },
      {
        name: "Legendary Resistance (5/Day)",
        entries: [
          "If the aspect fails a saving throw, she can choose to succeed instead.",
        ],
      },
    ],
    action: [
      {
        name: "Multiattack",
        entries: [
          "The aspect makes one Bite attack, one Claw attack, and one Tail attack.",
        ],
      },
      {
        name: "Bite",
        entries: [
          "{@atk mw} {@hit 19} to hit, reach 20 ft., one target. {@h}23 ({@damage 2d12 + 10}) piercing damage plus 19 ({@damage 3d12}) force damage.",
        ],
      },
      {
        name: "Claw",
        entries: [
          "{@atk mw} {@hit 19} to hit, reach 15 ft., one target. {@h}21 ({@damage 2d10 + 10}) slashing damage. If the target is a Huge or smaller creature, it is {@condition grappled} (escape {@dc 20}) and is {@condition restrained} until this grapple ends. The aspect can have only one creature {@condition grappled} this way at a time.",
        ],
      },
      {
        name: "Tail",
        entries: [
          "{@atk mw} {@hit 19} to hit, reach 15 ft., one target. {@h}23 ({@dice 2d12 + 10}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 27} Strength saving throw or be knocked {@condition prone}.",
        ],
      },
      {
        name: "Chromatic Flames {@recharge 5}",
        entries: [
          "The aspect exhales multicolored flames in a 300-foot cone. Each creature in that area must make a {@dc 27} Dexterity saving throw. On a failed save, the creature takes 71 ({@damage 11d12}) damage of a type of the aspect's choosing: acid, cold, fire, lightning, or poison. On a successful save, the creature takes half as much damage.",
        ],
      },
    ],
    legendary: [
      {
        name: "Attack",
        entries: ["The aspect makes one Claw or Tail attack."],
      },
      {
        name: "Furious Bite (Costs 2 Actions)",
        entries: [
          "The aspect makes one Bite attack. If the attack hits a creature, the target must succeed on a {@dc 27} Wisdom saving throw or become {@condition frightened} of the aspect until the end of its next turn.",
        ],
      },
    ],
    mythicHeader: [
      "If the aspect's Chromatic Wrath trait has activated in the last hour, she can use the options below as legendary actions.",
    ],
    mythic: [
      {
        name: "Hurl Through Avernus (Costs 2 Actions)",
        entries: [
          "The aspect targets a creature she is grappling. The creature must succeed on a {@dc 25} Charisma saving throw or take 44 ({@damage 8d10}) psychic damage and be banished to Avernus (the first layer of the Nine Hells). At the start of the aspect's next turn, the creature reappears in an unoccupied space within 10 feet of the aspect.",
        ],
      },
      {
        name: "Chromatic Flare (Costs 3 Actions)",
        entries: [
          "The aspect flares with elemental energy. Each creature of the aspect's choice in a 60-foot-radius sphere centered on her must make a {@dc 27} Dexterity saving throw. On a failed save, the creature takes 39 ({@damage 6d12}) damage of a type chosen by the aspect: acid, cold, fire, lightning, or poison. On a successful save, the creature takes half as much damage.",
        ],
      },
    ],
    dragonAge: "aspect",
    traitTags: ["Legendary Resistances"],
    senseTags: ["U"],
    actionTags: ["Multiattack"],
    languageTags: ["C", "DR", "I"],
    damageTags: ["O", "P", "S", "Y"],
    miscTags: ["AOE", "MW", "RCH"],
    conditionInflict: ["frightened", "grappled", "prone", "restrained"],
    savingThrowForced: ["charisma", "dexterity", "strength", "wisdom"],
    hasToken: true,
    hasFluff: true,
    hasFluffImages: true,
  },
];
