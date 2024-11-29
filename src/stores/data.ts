import type { RareFighter } from "./interfaces";

export const data: RareFighter[] = [
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

  // {
  //   name: "Giant Snapping Turtle",
  //   source: "ToA",
  //   page: 222,
  //   size: ["L"],
  //   type: "beast",
  //   alignment: ["U"],
  //   ac: [
  //     {
  //       ac: 17,
  //       from: ["natural armor"],
  //     },
  //     {
  //       ac: 12,
  //       condition: "while prone",
  //     },
  //   ],
  //   hp: {
  //     average: 75,
  //     formula: "10d10 + 20",
  //   },
  //   speed: {
  //     walk: 30,
  //     swim: 40,
  //   },
  //   str: 19,
  //   dex: 10,
  //   con: 14,
  //   int: 2,
  //   wis: 12,
  //   cha: 5,
  //   senses: ["darkvision 60 ft."],
  //   passive: 11,
  //   cr: "3",
  //   trait: [
  //     {
  //       name: "Amphibious",
  //       entries: ["The turtle can breathe air and water."],
  //     },
  //     {
  //       name: "Stable",
  //       entries: [
  //         "Whenever an effect knocks the turtle {@condition prone}, it can make a {@dc 10} Constitution saving throw to avoid being knocked {@condition prone}. A {@condition prone} turtle is upside down. To stand up, it must succeed on a {@dc 10} Dexterity check on its turn and then use all its movement for that turn.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Bite",
  //       entries: [
  //         "{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}18 ({@damage 4d6 + 4}) slashing damage.",
  //       ],
  //     },
  //   ],
  //   traitTags: ["Amphibious"],
  //   senseTags: ["D"],
  //   damageTags: ["S"],
  //   miscTags: ["MW"],
  //   savingThrowForced: ["constitution"],
  //   hasToken: true,
  //   hasFluff: true,
  // },
];
