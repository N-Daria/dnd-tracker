import type { RareFighter } from "./interfaces";

export const data: RareFighter[] = [
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

  // {
  //   name: "Тьма",
  //   ac: [18],
  //   hp: 92,
  //   dex: 14,
  // },

  // {
  //   name: "Чарли Паркер",
  //   ac: [17],
  //   hp: 83,
  //   dex: 18,
  // },

  // {
  //   name: "Решелье",
  //   ac: [17],
  //   hp: 83,
  //   dex: 16,
  // },

  // {
  //   name: "Солт",
  //   ac: [11],
  //   hp: 71,
  //   dex: 13,
  // },

  // {
  //   name: "Мист",
  //   ac: [18],
  //   hp: 102,
  //   dex: 18,
  // },

  // {
  //   name: "Мириэль",
  //   ac: [15],
  //   hp: 163,
  //   dex: 12,
  // },

  //     name: "Силана",
  // {
  //   name: "Силана",
  //   ac: [18],
  //   hp: 333,
  //   dex: 22,
  //   note: `
  //   Сопротивление: дробящий, колющий, рубящий от немагических.
  //   Преимущество на броски от страха и очарования.
  //   Чувства: Дьявольский взгляд 120 футов
  //   Легендарное сопротивление (1/день)
  //   `,
  // },

  //     name: "Родрик",
  // {
  //   name: "Родрик",
  //   ac: [20],
  //   hp: 153,
  //   dex: 10,
  //   note: `
  //     Иммунитет к состоянию испуг, ослепление, очарование
  //     Упорный
  //     Аура защиты. Рыцарь и каждый союзник в пределах 10 футов от него с преимуществом совершают спасброски. Эта особенность подавляется, пока рыцарь находится в недееспособном состоянии.
  //     `,
  // },

  //     name: "Деймос",
  // {
  //   name: "Деймос",
  //   ac: [16],
  //   hp: 105,
  //   dex: 13,
  //   note: `
  //     Сопротивление к урону: некротическая энергия
  //     Иммунитет к урону: яд
  //     Иммунитет к состояниям: испуг
  //     Легендарное сопротивление (1/день)
  //     `,
  // },

  // name: "Steel Predator",
  // {
  //   name: "Steel Predator",
  //   source: "MPMM",
  //   page: 232,
  //   otherSources: [
  //     {
  //       source: "MTF",
  //       page: 239,
  //     },
  //   ],
  //   size: ["L"],
  //   type: "construct",
  //   alignment: ["L", "N"],
  //   alignmentPrefix: "Typically ",
  //   ac: [
  //     {
  //       ac: 20,
  //       from: ["natural armor"],
  //     },
  //   ],
  //   hp: {
  //     average: 207,
  //     formula: "18d10 + 108",
  //   },
  //   speed: {
  //     walk: 40,
  //   },
  //   str: 24,
  //   dex: 17,
  //   con: 22,
  //   int: 4,
  //   wis: 14,
  //   cha: 6,
  //   skill: {
  //     perception: "+7",
  //     stealth: "+8",
  //     survival: "+7",
  //   },
  //   senses: ["blindsight 30 ft.", "darkvision 60 ft."],
  //   passive: 17,
  //   resist: ["cold", "lightning", "necrotic", "thunder"],
  //   immune: [
  //     "poison",
  //     "psychic",
  //     {
  //       immune: ["bludgeoning", "piercing", "slashing"],
  //       note: "from nonmagical attacks",
  //       cond: true,
  //     },
  //   ],
  //   conditionImmune: [
  //     "charmed",
  //     "exhaustion",
  //     "frightened",
  //     "paralyzed",
  //     "petrified",
  //     "poisoned",
  //     "stunned",
  //   ],
  //   languages: [
  //     "understands Modron and the language of its owner but can't speak",
  //   ],
  //   cr: "16",
  //   spellcasting: [
  //     {
  //       name: "Spellcasting",
  //       type: "spellcasting",
  //       headerEntries: [
  //         "The steel predator casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability:",
  //       ],
  //       daily: {
  //         "3e": [
  //           "{@spell dimension door} (self only)",
  //           "{@spell plane shift} (self only)",
  //         ],
  //       },
  //       ability: "wis",
  //       displayAs: "action",
  //     },
  //   ],
  //   trait: [
  //     {
  //       name: "Magic Resistance",
  //       entries: [
  //         "The steel predator has advantage on saving throws against spells and other magical effects.",
  //       ],
  //     },
  //     {
  //       name: "Unusual Nature",
  //       entries: [
  //         "The steel predator doesn't require air, food, drink, or sleep.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: [
  //         "The steel predator makes one Bite attack and two Claw attacks.",
  //       ],
  //     },
  //     {
  //       name: "Bite",
  //       entries: [
  //         "{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}18 ({@damage 2d10 + 7}) lightning damage.",
  //       ],
  //     },
  //     {
  //       name: "Claw",
  //       entries: [
  //         "{@atk mw} {@hit 12} to hit, reach 5 ft., one target. {@h}16 ({@damage 2d8 + 7}) force damage.",
  //       ],
  //     },
  //     {
  //       name: "Stunning Roar {@recharge 5}",
  //       entries: [
  //         "The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a {@dc 19} Constitution saving throw. On a failed save, a creature takes 33 ({@damage 6d10}) thunder damage, drops everything it's holding, and is {@condition stunned} for 1 minute. The {@condition stunned} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. On a successful save, a creature takes half as much damage and isn't {@condition stunned}.",
  //       ],
  //     },
  //   ],
  //   environment: ["urban"],
  //   soundClip: {
  //     type: "internal",
  //     path: "bestiary/steel-predator.mp3",
  //   },
  //   traitTags: ["Magic Resistance", "Unusual Nature"],
  //   senseTags: ["B", "D"],
  //   actionTags: ["Multiattack"],
  //   languageTags: ["CS", "OTH"],
  //   damageTags: ["L", "O", "T"],
  //   damageTagsSpell: ["O"],
  //   spellcastingTags: ["O"],
  //   miscTags: ["AOE", "MW"],
  //   conditionInflict: ["stunned"],
  //   savingThrowForced: ["constitution"],
  //   savingThrowForcedSpell: ["charisma"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },

  //     name: "Iron Golem",
  // {
  //   name: "Iron Golem",
  //   source: "MM",
  //   page: 170,
  //   srd: true,
  //   otherSources: [
  //     {
  //       source: "CoS",
  //     },
  //     {
  //       source: "SKT",
  //     },
  //     {
  //       source: "WDMM",
  //     },
  //     {
  //       source: "GoS",
  //     },
  //     {
  //       source: "EGW",
  //     },
  //     {
  //       source: "MOT",
  //     },
  //     {
  //       source: "IDRotF",
  //     },
  //     {
  //       source: "SatO",
  //     },
  //     {
  //       source: "BMT",
  //     },
  //     {
  //       source: "DoDk",
  //     },
  //     {
  //       source: "VEoR",
  //     },
  //     {
  //       source: "CoA",
  //     },
  //   ],
  //   size: ["L"],
  //   type: "construct",
  //   alignment: ["U"],
  //   ac: [
  //     {
  //       ac: 20,
  //       from: ["natural armor"],
  //     },
  //   ],
  //   hp: {
  //     average: 210,
  //     formula: "20d10 + 100",
  //   },
  //   speed: {
  //     walk: 30,
  //   },
  //   str: 24,
  //   dex: 9,
  //   con: 20,
  //   int: 3,
  //   wis: 11,
  //   cha: 1,
  //   senses: ["darkvision 120 ft."],
  //   passive: 10,
  //   immune: [
  //     "fire",
  //     "poison",
  //     "psychic",
  //     {
  //       immune: ["bludgeoning", "piercing", "slashing"],
  //       note: "from nonmagical attacks that aren't adamantine",
  //       cond: true,
  //     },
  //   ],
  //   conditionImmune: [
  //     "charmed",
  //     "exhaustion",
  //     "frightened",
  //     "paralyzed",
  //     "petrified",
  //     "poisoned",
  //   ],
  //   languages: ["understands the languages of its creator but can't speak"],
  //   cr: "16",
  //   trait: [
  //     {
  //       name: "Fire Absorption",
  //       entries: [
  //         "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.",
  //       ],
  //     },
  //     {
  //       name: "Immutable Form",
  //       entries: [
  //         "The golem is immune to any spell or effect that would alter its form.",
  //       ],
  //     },
  //     {
  //       name: "Magic Resistance",
  //       entries: [
  //         "The golem has advantage on saving throws against spells and other magical effects.",
  //       ],
  //     },
  //     {
  //       name: "Magic Weapons",
  //       entries: ["The golem's weapon attacks are magical."],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: ["The golem makes two melee attacks."],
  //     },
  //     {
  //       name: "Slam",
  //       entries: [
  //         "{@atk mw} {@hit 13} to hit, reach 5 ft., one target. {@h}20 ({@damage 3d8 + 7}) bludgeoning damage.",
  //       ],
  //     },
  //     {
  //       name: "Sword",
  //       entries: [
  //         "{@atk mw} {@hit 13} to hit, reach 10 ft., one target. {@h}23 ({@damage 3d10 + 7}) slashing damage.",
  //       ],
  //     },
  //     {
  //       name: "Poison Breath {@recharge 5}",
  //       entries: [
  //         "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a {@dc 19} Constitution saving throw, taking 45 ({@damage 10d8}) poison damage on a failed save, or half as much damage on a successful one.",
  //       ],
  //     },
  //   ],
  //   soundClip: {
  //     type: "internal",
  //     path: "bestiary/iron-golem.mp3",
  //   },
  //   traitTags: [
  //     "Damage Absorption",
  //     "Immutable Form",
  //     "Magic Resistance",
  //     "Magic Weapons",
  //   ],
  //   senseTags: ["SD"],
  //   actionTags: ["Breath Weapon", "Multiattack"],
  //   languageTags: ["CS"],
  //   damageTags: ["B", "I", "S"],
  //   miscTags: ["AOE", "MW", "RCH"],
  //   savingThrowForced: ["constitution"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },

  //     name: "Solar Bastion Knight",
  // {
  //   name: "Рыцарь",
  //   source: "BMT",
  //   page: 75,
  //   size: ["M"],
  //   type: {
  //     type: "humanoid",
  //     tags: ["paladin"],
  //   },
  //   alignment: ["N", "G"],
  //   alignmentPrefix: "typically ",
  //   ac: [
  //     {
  //       ac: 20,
  //       from: ["{@item plate armor|PHB}", "{@item shield|PHB}"],
  //     },
  //   ],
  //   hp: {
  //     average: 150,
  //     formula: "20d8 + 60",
  //   },
  //   speed: {
  //     walk: 30,
  //   },
  //   str: 18,
  //   dex: 10,
  //   con: 17,
  //   int: 15,
  //   wis: 16,
  //   cha: 17,
  //   save: {
  //     wis: "+7",
  //     cha: "+7",
  //   },
  //   skill: {
  //     arcana: "+6",
  //     history: "+6",
  //   },
  //   passive: 13,
  //   conditionImmune: ["blinded", "charmed", "frightened"],
  //   languages: ["Common plus any one language"],
  //   cr: "9",
  //   spellcasting: [
  //     {
  //       name: "Spellcasting",
  //       type: "spellcasting",
  //       headerEntries: [
  //         "The knight casts one of the following spells, using Charisma as the spellcasting ability (spell save {@dc 15}):",
  //       ],
  //       daily: {
  //         "1e": [
  //           "{@spell Greater Restoration}",
  //           "{@spell Sending}",
  //           "{@spell Word of Recall} (the prepared sanctuary is the Solar Bastion)",
  //         ],
  //       },
  //       ability: "cha",
  //       displayAs: "action",
  //     },
  //   ],
  //   trait: [
  //     {
  //       name: "Aura of Protection",
  //       entries: [
  //         "The knight and each ally within 10 feet of it have advantage on saving throws. This trait is suppressed while the knight has the {@condition incapacitated} condition.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: ["The knight makes three Sunspear attacks."],
  //     },
  //     {
  //       name: "Sunspear",
  //       entries: [
  //         "{@atk ms,rs} {@hit 8} to hit, reach 5 ft. or range 120 ft., one target. {@h}14 ({@damage 3d6 + 4}) radiant damage, or 21 ({@damage 5d6 + 4}) radiant damage if the target is a Fiend or an Undead.",
  //       ],
  //     },
  //     {
  //       name: "Solar Flare {@recharge 5}",
  //       entries: [
  //         "The knight unleashes a blaze of brilliant energy that fills a 30-foot-radius sphere centered on the knight. Each creature of the knight's choice in that area must make a {@dc 15} Dexterity saving throw. On a failed save, a creature takes 22 ({@damage 4d10}) radiant damage and has the {@condition blinded} condition until the end of its next turn. On a successful save, a creature takes half as much damage only. For the next minute, the affected area is filled with bright light that is sunlight.",
  //       ],
  //     },
  //   ],
  //   actionTags: ["Multiattack"],
  //   languageTags: ["C", "X"],
  //   damageTags: ["R"],
  //   spellcastingTags: ["O"],
  //   miscTags: ["AOE"],
  //   conditionInflict: ["blinded"],
  //   savingThrowForced: ["dexterity"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },

  //     name: "Nightwalker",
  // {
  //   name: "Nightwalker",
  //   source: "MPMM",
  //   page: 194,
  //   otherSources: [
  //     {
  //       source: "MTF",
  //       page: 216,
  //     },
  //   ],
  //   size: ["H"],
  //   type: "undead",
  //   alignment: ["C", "E"],
  //   alignmentPrefix: "Typically ",
  //   ac: [14],
  //   hp: {
  //     average: 337,
  //     formula: "25d12 + 175",
  //   },
  //   speed: {
  //     walk: 40,
  //     fly: 40,
  //   },
  //   str: 22,
  //   dex: 19,
  //   con: 24,
  //   int: 6,
  //   wis: 9,
  //   cha: 8,
  //   save: {
  //     con: "+13",
  //   },
  //   senses: ["darkvision 120 ft."],
  //   passive: 9,
  //   resist: [
  //     "acid",
  //     "cold",
  //     "fire",
  //     "lightning",
  //     "thunder",
  //     {
  //       resist: ["bludgeoning", "piercing", "slashing"],
  //       note: "from nonmagical attacks",
  //       cond: true,
  //     },
  //   ],
  //   immune: ["necrotic", "poison"],
  //   conditionImmune: [
  //     "exhaustion",
  //     "frightened",
  //     "grappled",
  //     "paralyzed",
  //     "petrified",
  //     "poisoned",
  //     "prone",
  //     "restrained",
  //   ],
  //   cr: "20",
  //   trait: [
  //     {
  //       name: "Annihilating Aura",
  //       entries: [
  //         "Any creature that starts its turn within 30 feet of the nightwalker must succeed on a {@dc 21} Constitution saving throw or take 21 ({@damage 6d6}) necrotic damage. Undead are immune to this aura.",
  //       ],
  //     },
  //     {
  //       name: "Life Eater",
  //       entries: [
  //         "A creature dies if reduced to 0 hit points by the nightwalker and can't be revived except by a {@spell wish} spell.",
  //       ],
  //     },
  //     {
  //       name: "Unusual Nature",
  //       entries: [
  //         "The nightwalker doesn't require air, food, drink, or sleep.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: [
  //         "The nightwalker makes two Enervating Focus attacks, one of which can be replaced by Finger of Doom, if available.",
  //       ],
  //     },
  //     {
  //       name: "Enervating Focus",
  //       entries: [
  //         "{@atk mw} {@hit 12} to hit, reach 15 ft., one target. {@h}28 ({@damage 5d8 + 6}) necrotic damage. The target must succeed on a {@dc 21} Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.",
  //       ],
  //     },
  //     {
  //       name: "Finger of Doom {@recharge}",
  //       entries: [
  //         "The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a {@dc 21} Wisdom saving throw or take 39 ({@damage 6d12}) necrotic damage and become {@condition frightened} until the end of the nightwalker's next turn. While {@condition frightened} in this way, the creature is also {@condition paralyzed}. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours.",
  //       ],
  //     },
  //   ],
  //   environment: ["arctic", "desert", "swamp", "underdark"],
  //   soundClip: {
  //     type: "internal",
  //     path: "bestiary/nightwalker.mp3",
  //   },
  //   traitTags: ["Unusual Nature"],
  //   senseTags: ["SD"],
  //   actionTags: ["Multiattack"],
  //   damageTags: ["N"],
  //   miscTags: ["HPR", "MW", "RCH"],
  //   conditionInflict: ["frightened", "paralyzed"],
  //   savingThrowForced: ["constitution", "wisdom"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },

  //     name: "Nightmare Shepherd",
  // {
  //   name: "Nightmare Shepherd 1",
  //   source: "MOT",
  //   page: 221,
  //   size: ["L"],
  //   type: "fiend",
  //   alignment: ["L", "E"],
  //   ac: [
  //     {
  //       ac: 18,
  //       from: ["natural armor"],
  //     },
  //   ],
  //   hp: {
  //     average: 133,
  //     formula: "14d10 + 56",
  //   },
  //   speed: {
  //     walk: 30,
  //     fly: 60,
  //   },
  //   str: 19,
  //   dex: 15,
  //   con: 18,
  //   int: 14,
  //   wis: 17,
  //   cha: 20,
  //   save: {
  //     con: "+8",
  //     wis: "+7",
  //   },
  //   skill: {
  //     arcana: "+6",
  //     deception: "+9",
  //     perception: "+7",
  //     persuasion: "+9",
  //   },
  //   senses: ["darkvision 120 ft."],
  //   passive: 17,
  //   resist: ["cold", "necrotic"],
  //   immune: ["poison"],
  //   conditionImmune: ["poisoned"],
  //   languages: ["Abyssal", "Common", "Infernal"],
  //   cr: "11",
  //   spellcasting: [
  //     {
  //       name: "Innate Spellcasting",
  //       type: "spellcasting",
  //       headerEntries: [
  //         "The shepherd's spellcasting ability is Charisma (spell save {@dc 17}). It can innately cast the following spells, requiring no material components:",
  //       ],
  //       daily: {
  //         "1e": [
  //           "{@spell confusion}",
  //           "{@spell dispel magic}",
  //           "{@spell hold person}",
  //           "{@spell suggestion}",
  //         ],
  //       },
  //       ability: "cha",
  //     },
  //   ],
  //   trait: [
  //     {
  //       name: "Aura of Nightmares",
  //       entries: [
  //         "Undead creatures within 30 feet of the shepherd gain a +5 bonus to attack and damage rolls. When any other creature that isn't undead or a construct starts its turn within 30 feet of the shepherd, that creature must succeed on a {@dc 17} Wisdom saving throw or take 11 ({@damage 2d10}) psychic damage.",
  //       ],
  //     },
  //     {
  //       name: "Magic Resistance",
  //       entries: [
  //         "The shepherd has advantage on saving throws against spells and other magical effects.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: [
  //         "The shepherd makes two attacks: one with its claws and one with its staff.",
  //       ],
  //     },
  //     {
  //       name: "Claws",
  //       entries: [
  //         "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage plus 16 ({@damage 3d10}) necrotic damage.",
  //       ],
  //     },
  //     {
  //       name: "Staff",
  //       entries: [
  //         "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage, or 13 ({@damage 2d8 + 4}) bludgeoning damage if used with two hands, plus 26 ({@damage 4d12}) psychic damage.",
  //       ],
  //     },
  //     {
  //       name: "Herd the Underworld (Recharges after a Short or Long Rest)",
  //       entries: [
  //         "The shepherd pulls twisted souls from the Underworld; {@dice 1d6} {@creature shadow||shadows} (without Sunlight Weakness) arise in unoccupied spaces within 20 feet of the shepherd. The shadows act right after the shepherd on the same initiative count and fight until they're destroyed. They disappear when the shepherd dies.",
  //       ],
  //     },
  //   ],
  //   traitTags: ["Magic Resistance"],
  //   senseTags: ["SD"],
  //   actionTags: ["Multiattack"],
  //   languageTags: ["AB", "C", "I"],
  //   damageTags: ["B", "N", "S", "Y"],
  //   spellcastingTags: ["I"],
  //   miscTags: ["MW"],
  //   conditionInflictSpell: ["paralyzed"],
  //   savingThrowForced: ["wisdom"],
  //   savingThrowForcedSpell: ["wisdom"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },
  //     name: "Nightmare Shepherd 2",
  // {
  //   name: "Nightmare Shepherd 2",
  //   source: "MOT",
  //   page: 221,
  //   size: ["L"],
  //   type: "fiend",
  //   alignment: ["L", "E"],
  //   ac: [
  //     {
  //       ac: 18,
  //       from: ["natural armor"],
  //     },
  //   ],
  //   hp: {
  //     average: 133,
  //     formula: "14d10 + 56",
  //   },
  //   speed: {
  //     walk: 30,
  //     fly: 60,
  //   },
  //   str: 19,
  //   dex: 15,
  //   con: 18,
  //   int: 14,
  //   wis: 17,
  //   cha: 20,
  //   save: {
  //     con: "+8",
  //     wis: "+7",
  //   },
  //   skill: {
  //     arcana: "+6",
  //     deception: "+9",
  //     perception: "+7",
  //     persuasion: "+9",
  //   },
  //   senses: ["darkvision 120 ft."],
  //   passive: 17,
  //   resist: ["cold", "necrotic"],
  //   immune: ["poison"],
  //   conditionImmune: ["poisoned"],
  //   languages: ["Abyssal", "Common", "Infernal"],
  //   cr: "11",
  //   spellcasting: [
  //     {
  //       name: "Innate Spellcasting",
  //       type: "spellcasting",
  //       headerEntries: [
  //         "The shepherd's spellcasting ability is Charisma (spell save {@dc 17}). It can innately cast the following spells, requiring no material components:",
  //       ],
  //       daily: {
  //         "1e": [
  //           "{@spell confusion}",
  //           "{@spell dispel magic}",
  //           "{@spell hold person}",
  //           "{@spell suggestion}",
  //         ],
  //       },
  //       ability: "cha",
  //     },
  //   ],
  //   trait: [
  //     {
  //       name: "Aura of Nightmares",
  //       entries: [
  //         "Undead creatures within 30 feet of the shepherd gain a +5 bonus to attack and damage rolls. When any other creature that isn't undead or a construct starts its turn within 30 feet of the shepherd, that creature must succeed on a {@dc 17} Wisdom saving throw or take 11 ({@damage 2d10}) psychic damage.",
  //       ],
  //     },
  //     {
  //       name: "Magic Resistance",
  //       entries: [
  //         "The shepherd has advantage on saving throws against spells and other magical effects.",
  //       ],
  //     },
  //   ],
  //   action: [
  //     {
  //       name: "Multiattack",
  //       entries: [
  //         "The shepherd makes two attacks: one with its claws and one with its staff.",
  //       ],
  //     },
  //     {
  //       name: "Claws",
  //       entries: [
  //         "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage plus 16 ({@damage 3d10}) necrotic damage.",
  //       ],
  //     },
  //     {
  //       name: "Staff",
  //       entries: [
  //         "{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) bludgeoning damage, or 13 ({@damage 2d8 + 4}) bludgeoning damage if used with two hands, plus 26 ({@damage 4d12}) psychic damage.",
  //       ],
  //     },
  //     {
  //       name: "Herd the Underworld (Recharges after a Short or Long Rest)",
  //       entries: [
  //         "The shepherd pulls twisted souls from the Underworld; {@dice 1d6} {@creature shadow||shadows} (without Sunlight Weakness) arise in unoccupied spaces within 20 feet of the shepherd. The shadows act right after the shepherd on the same initiative count and fight until they're destroyed. They disappear when the shepherd dies.",
  //       ],
  //     },
  //   ],
  //   traitTags: ["Magic Resistance"],
  //   senseTags: ["SD"],
  //   actionTags: ["Multiattack"],
  //   languageTags: ["AB", "C", "I"],
  //   damageTags: ["B", "N", "S", "Y"],
  //   spellcastingTags: ["I"],
  //   miscTags: ["MW"],
  //   conditionInflictSpell: ["paralyzed"],
  //   savingThrowForced: ["wisdom"],
  //   savingThrowForcedSpell: ["wisdom"],
  //   hasToken: true,
  //   hasFluff: true,
  //   hasFluffImages: true,
  // },

  {
    name: "Корвус Штормвинд",
    ac: [14],
    hp: 10,
    dex: 16,
  },

  {
    name: "Меррик Крепкопых",
    ac: [15],
    hp: 11,
    dex: 19,
  },

  {
    name: "Альрик Драконсвет",
    ac: [18],
    hp: 12,
    dex: 6,
  },

  {
    name: "Грумп",
    ac: [18],
    hp: 11,
    dex: 10,
  },
];
