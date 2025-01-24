// Regular World Ruleset
const ruleset = {
  combat: {
    melee: {
      fist: { damage: 3, description: "Minimal impact, used in unarmed combat." },
      knife: { damage: [5, 8], description: "Effective for close combat." },
      sword: { damage: [10, 15], description: "Powerful, requires skill to use." },
    },
    ranged: {
      handgun: { damage: [8, 12], description: "Good for short to medium range." },
      rifle: { damage: [15, 20], description: "High precision at long range." },
      bow: { damage: [5, 10], description: "Silent, traditional weapon." },
    },
  },

  transport: {
    car: {
      sportsCar: { speed: [80, 120], behavior: "Avoids unsafe scenarios." },
      sedan: { speed: [50, 80], behavior: "Follows traffic rules." },
      pickupTruck: { speed: [40, 70], behavior: "Reliable off-road." },
    },
    publicTransport: {
      bus: { speed: [20, 50] },
      train: { speed: [70, 100] },
    },
    aircraft: {
      commercial: { speed: [500, 600] },
      privateJet: { speed: [400, 500] },
    },
    onFoot: {
      walking: { speed: [3, 4], behavior: "Common for short distances." },
      running: { speed: [5, 8], behavior: "Used for emergencies or exercise." },
    },
  },

  economy: {
    currency: "credits",
    pricing: {
      meal: { range: [5, 10] },
      gas: { perGallon: 2 },
      weapons: { range: [50, 500] },
    },
    jobs: {
      lowIncome: { range: [10, 20] },
      highIncome: { range: [50, 100] },
    },
  },

  environment: {
    weather: {
      clear: "No effect.",
      rain: "Slows transport by 10-20%.",
      snow: "Reduces speed by 30-50%.",
      storm: "Disables air travel.",
    },
    regions: [
      { type: "Urban", description: "High population and traffic." },
      { type: "Rural", description: "Sparse population, off-road travel." },
      { type: "Wilderness", description: "Dangerous, potential wildlife." },
    ],
  },

  events: {
    combat: ["Ambush", "Weapon Malfunction"],
    transport: ["Traffic Jam", "Flat Tire"],
    weather: ["Flash Flood", "Heatwave"],
  },

  interactions: {
    social: ["Friendly", "Neutral", "Hostile"],
    environmental: ["Explore", "Avoid"],
  },
};

module.exports = ruleset;