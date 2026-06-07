import type { SlideData } from '../../engine/types';

export const slidesHumanoidsEN: SlideData[] = [
  // 1. TITLE
  {
    type: 'title',
    title: 'The Humanoid Revolution',
    subtitle: 'The companies and robots redefining what machines can do',
    tagline: 'Atlas walks. Optimus works. Figure talks. The future is now.',
    presenter: 'AutoDeck Research',
    badge: '2025 Edition',
  },

  // 2. QUOTE — why now?
  {
    type: 'quote',
    title: 'Why Now?',
    question: 'What changed to make humanoid robots suddenly viable in 2024–25?',
    points: [
      '🧠  Large language models gave robots the ability to understand and act on natural language commands — no manual programming required',
      '⚡  High-torque electric actuators finally match hydraulic power density at a fraction of the cost, enabling affordable mass production',
      '📷  Vision transformers + sim-to-real training collapsed the gap between lab demos and real-world deployment overnight',
    ],
  },

  // 3. STATS — the big numbers
  {
    type: 'stats',
    title: 'The Race by the Numbers',
    subtitle: 'Humanoid robotics is the fastest-growing hardware category on Earth',
    stats: [
      { value: '$38B', label: 'Market Size by 2035' },
      { value: '$2B+', label: 'Raised in 2024 Alone' },
      { value: '15+', label: 'Companies Actively Racing' },
      { value: '1M+', label: 'Units Targeted by 2030' },
    ],
    leftLabel: '2020 State',
    rightLabel: '2025 State',
    leftItems: [
      'Lab-only prototypes, no deployments',
      '$10M+ per unit cost',
      'Pre-programmed movements only',
      'Zero commercial contracts',
    ],
    rightItems: [
      'Factory-floor commercial deployments',
      '$16K entry-level units (Unitree G1)',
      'Natural language task execution',
      '1000+ units running at Tesla factories',
    ],
    bottomLine: 'From research curiosity to industrial workhorse — in under 5 years',
  },

  // 4. CONTENT — the 8 companies
  {
    type: 'content',
    title: 'The Companies Leading the Race',
    subtitle: 'Eight teams redefining what a robot can be',
    cards: [
      { icon: '🤖', title: 'Figure AI', description: 'Figure 02 — BMW factory deployment, OpenAI-powered speech, $675M raised from Microsoft, NVIDIA & Bezos.' },
      { icon: '⚡', title: 'Tesla Optimus', description: 'Gen 2 — 22 DoF hands, FSD neural stack, 1000+ units already running inside Tesla\'s own factories.' },
      { icon: '🦾', title: 'Boston Dynamics', description: 'Electric Atlas — world\'s most agile humanoid. Backflips, tool use, Hyundai-backed R&D powerhouse.' },
      { icon: '📦', title: 'Agility Robotics', description: 'Digit — first humanoid in real Amazon warehouses. 65 lb payload. The pioneer of commercial deployment.' },
      { icon: '🏠', title: '1X Technologies', description: 'NEO — home assistant humanoid backed by OpenAI. Soft-touch actuators designed to be safe near people.' },
      { icon: '💴', title: 'Unitree Robotics', description: 'G1 at $16K — the most affordable full humanoid on the market. Ships today. Made in China.' },
      { icon: '🚀', title: 'Apptronik', description: 'Apollo — NASA-heritage team, 55 lb payload, partnered with Mercedes-Benz for auto manufacturing.' },
      { icon: '🧬', title: 'Sanctuary AI', description: 'Phoenix — 20 DoF hands rivaling human dexterity. AI-native architecture built for general-purpose manipulation.' },
    ],
  },

  // 5. COMPARISON — Figure AI vs Tesla Optimus
  {
    type: 'comparison',
    title: 'The Two Frontrunners',
    left: {
      label: 'Figure AI — Figure 02',
      color: 'blue',
      items: [
        { icon: '💰', text: 'Raised $675M from OpenAI, Microsoft, NVIDIA, and Jeff Bezos' },
        { icon: '🗣️', text: 'OpenAI-powered natural language interface — speak a task, it executes' },
        { icon: '🏭', text: 'Deployed in BMW Spartanburg plant performing real assembly tasks' },
        { icon: '🤲', text: 'Full-body dexterous manipulation including fine-motor finger work' },
        { icon: '🔋', text: '16+ hour operational battery life per charge cycle' },
        { icon: '💲', text: 'Targets $10–15/hr labor equivalent cost at scale' },
      ],
    },
    right: {
      label: 'Tesla — Optimus Gen 2',
      color: 'violet',
      items: [
        { icon: '🏗️', text: '1000+ units already running inside Tesla\'s own factories today' },
        { icon: '🧠', text: 'Trained on the same AI stack powering Full Self-Driving' },
        { icon: '✋', text: '22 degrees of freedom per hand — near-human dexterity' },
        { icon: '💵', text: 'Targets sub-$20K consumer unit price — cheaper than a car' },
        { icon: '🔗', text: 'Benefits from Tesla\'s existing supply chain and production scale' },
        { icon: '🔄', text: 'End-to-end neural network for both locomotion and manipulation' },
      ],
    },
    callout: 'Both target the $100 trillion global labor market — the biggest prize in tech history.',
  },

  // 6. CONTENT — established players
  {
    type: 'content',
    title: 'The Established Players',
    subtitle: 'Decades of research — now going commercial',
    cards: [
      { icon: '🦿', title: 'Atlas (Boston Dynamics)', description: 'Fully electric since 2024. Backward somersaults, parkour, autonomous tool use. Hyundai plans factory rollout.' },
      { icon: '🏭', title: 'Digit (Agility Robotics)', description: 'First humanoid in a real commercial warehouse. Amazon pilot: sort, carry, load totes. $250K/unit, proven ROI.' },
      { icon: '🐕', title: 'Spot (Boston Dynamics)', description: 'The quadruped that proved robot-as-a-service works. 1000+ Spots deployed. Paved the way for Atlas commercialization.' },
      { icon: '📊', title: 'Commercial First', description: 'Agility Robotics signed the first multi-unit commercial humanoid deployment contract in history — with Amazon in 2023.' },
    ],
    metrics: [
      { label: 'Atlas DoF', value: '28' },
      { label: 'Digit Payload', value: '65 lb' },
      { label: 'Digit Speed', value: '3.5 mph' },
      { label: 'Spots Deployed', value: '1000+' },
    ],
  },

  // 7. CONTENT — rising stars
  {
    type: 'content',
    title: 'The Rising Stars',
    subtitle: 'Affordable, specialized, and AI-native challengers',
    cards: [
      { icon: '🧡', title: '1X NEO', description: 'Built for homes, not factories. Soft actuators safe near children and elderly. OpenAI-backed. Ships 2025.' },
      { icon: '🟡', title: 'Unitree G1', description: 'At $16K, the Tesla Model 3 of humanoids. 23 DoF, does backflips, ships today. Democratizing access.' },
      { icon: '🔵', title: 'Apptronik Apollo', description: 'NASA-pedigree engineering team. 55 lb payload, 4-hour runtime. Mercedes-Benz partnership for automotive.' },
      { icon: '🟢', title: 'Sanctuary Phoenix', description: '20 DoF hands rivaling human fingers. Trained via imitation learning. Focused on retail and logistics.' },
    ],
    metrics: [
      { label: 'G1 Price', value: '$16K' },
      { label: 'Apollo Payload', value: '55 lb' },
      { label: 'Phoenix Hand DoF', value: '20' },
      { label: 'NEO Target', value: 'Homes' },
    ],
  },

  // 8. DIAGRAM — humanoid robot architecture
  {
    type: 'diagram',
    mode: 'arch',
    title: 'Anatomy of a Modern Humanoid',
    subtitle: 'How perception, AI, and actuation work together',
    nodes: [
      { id: 'sensors', label: 'Sensors', sublabel: 'Cameras · LiDAR · IMU', col: 0, row: 1, color: 'cyan' },
      { id: 'perception', label: 'Perception', sublabel: 'Vision Transformer', col: 1, row: 0, color: 'blue' },
      { id: 'llm', label: 'Language Model', sublabel: 'Task Understanding', col: 1, row: 2, color: 'violet' },
      { id: 'policy', label: 'Motion Policy', sublabel: 'Neural Controller', col: 2, row: 1, color: 'emerald' },
      { id: 'actuators', label: 'Actuators', sublabel: '28–40 DoF Motors', col: 3, row: 1, color: 'amber' },
    ],
    edges: [
      { from: 'sensors', to: 'perception', label: 'raw frames' },
      { from: 'sensors', to: 'llm', label: 'audio / state' },
      { from: 'perception', to: 'policy', label: 'scene graph' },
      { from: 'llm', to: 'policy', label: 'task goal' },
      { from: 'policy', to: 'actuators', label: 'torque cmds' },
    ],
  },

  // 9. TIMELINE — key milestones
  {
    type: 'timeline',
    scrollable: true,
    title: 'The Road to Today',
    subtitle: 'Key breakthroughs that made the humanoid revolution possible',
    steps: [
      {
        number: 1,
        title: 'DARPA Robotics Challenge (2013)',
        subtitle: 'Boston Dynamics Atlas debuts — hydraulic, tethered, falls constantly. Proves bipedal locomotion is a solvable engineering problem.',
        time: '2013',
        output: 'Atlas prototype — 6 ft, 330 lb, hydraulic actuators',
      },
      {
        number: 2,
        title: 'Atlas Goes Viral (2016)',
        subtitle: 'The backflip video shocks the world. Public perception shifts permanently: robots are no longer just arms on factory floors.',
        time: '2016',
        output: 'Bipedal locomotion enters mainstream consciousness',
      },
      {
        number: 3,
        title: 'Tesla AI Day (2022)',
        subtitle: 'Elon Musk unveils Optimus. A human in a robot suit walks the stage — but the $20K target and factory ambition are real.',
        time: 'Sep 2022',
        output: 'Optimus announced — targets sub-$20K, mass production',
      },
      {
        number: 4,
        title: 'Figure AI & the Startup Era (2023)',
        subtitle: 'Figure raises $675M. Figure 01 walks within 12 months of founding. The VC-backed humanoid startup race officially begins.',
        time: '2023',
        output: 'Figure 01 walking demo — open-world manipulation',
      },
      {
        number: 5,
        title: 'Commercial Deployments Begin (2024)',
        subtitle: 'Agility Digit in Amazon warehouses. Figure 02 in BMW. Optimus Gen 2 in Tesla. The lab era ends — the industrial era begins.',
        time: '2024',
        output: '1000+ commercial humanoid units deployed globally',
      },
      {
        number: 6,
        title: 'The Scaling Era (2025)',
        subtitle: 'Unitree G1 at $16K. 1X NEO targets homes. Goldman Sachs: 1M+ units by 2030. The race shifts from "can it work?" to "how fast can we ship?"',
        time: '2025',
        output: 'Sub-$20K humanoids, home robots, mass production underway',
      },
    ],
  },

  // 10. STATS — capabilities
  {
    type: 'stats',
    title: 'Two Camps, One Goal',
    subtitle: 'Software-first vs hardware-first — both racing toward general-purpose labor',
    stats: [
      { value: '28–40', label: 'Degrees of Freedom' },
      { value: '4–16h', label: 'Battery Runtime' },
      { value: '55–176 lb', label: 'Payload Capacity' },
      { value: '3–5 mph', label: 'Walking Speed' },
    ],
    leftLabel: 'Software-First Teams',
    rightLabel: 'Hardware-First Teams',
    leftItems: [
      'Figure AI — OpenAI LLM integration, natural speech',
      'Tesla Optimus — FSD neural stack, end-to-end learning',
      'Sanctuary Phoenix — imitation learning, dexterous AI',
      '1X NEO — home safety AI, human-proximity design',
    ],
    rightItems: [
      'Boston Dynamics Atlas — maximum agility, 28 DoF',
      'Agility Digit — warehouse-proven, 65 lb payload',
      'Apptronik Apollo — NASA-grade reliability engineering',
      'Unitree G1 — maximum affordability at $16K',
    ],
    bottomLine: 'The winners will combine both — dexterous bodies with general-purpose AI minds',
  },

  // 11. FINAL
  {
    type: 'final',
    title: 'The Robots Are Coming',
    tagline: 'Not to replace us — to work alongside us.',
  },
];
