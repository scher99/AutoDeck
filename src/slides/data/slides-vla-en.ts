import type { SlideData } from '../../engine/types';

export const slidesVlaEN: SlideData[] = [
  // 1. TITLE
  {
    type: 'title',
    title: 'Vision-Language-Action Models',
    subtitle: 'The AI Stack That Sees, Thinks, and Acts',
    tagline: 'From pixels and language to real-world control.',
    badge: '2026 State of the Art',
  },

  // 2. QUOTE — the fundamental problem
  {
    type: 'quote',
    title: 'The Embodied AI Gap',
    question: 'Why can a model describe a dangerous lane merge perfectly — but not avoid it?',
    points: [
      '👁️  Perception alone has no causal model of consequences — it labels the world but cannot reason about futures',
      '🧠  Language models reason brilliantly in text, but have no grounding in 3D space, physics, or time',
      '🚗  Traditional autonomy stacks hard-code rules that shatter on edge cases — the long tail is infinite',
    ],
  },

  // 3. CONTENT — what VLAs are, 4 pillars + landmark metrics
  {
    type: 'content',
    title: 'What is a VLA Model?',
    subtitle: 'A single neural network that spans perception, reasoning, and control',
    cards: [
      {
        icon: '👁️',
        title: 'Vision Encoder',
        description: 'Tokenizes camera frames into spatial embeddings — understanding scenes, objects, and depth.',
      },
      {
        icon: '🧠',
        title: 'Language Backbone',
        description: 'A large language model interprets the visual tokens alongside text instructions and prior context.',
      },
      {
        icon: '⛓️',
        title: 'Chain-of-Thought Reasoning',
        description: 'The model narrates its decision logic before acting — enabling interpretability and causal grounding.',
      },
      {
        icon: '🎮',
        title: 'Action Decoder',
        description: 'Outputs continuous actions — steering, braking, waypoints, or robot joint torques — from the same model.',
      },
    ],
    metrics: [
      { label: 'Modalities unified', value: '3' },
      { label: 'Params (SOTA)', value: '32B' },
      { label: 'Driving scenarios', value: '∞ tail' },
      { label: 'End-to-end', value: '✓' },
    ],
  },

  // 4. TIMELINE — VLA lineage from RT-2 to Alpamayo 2 Super
  {
    type: 'timeline',
    scrollable: true,
    title: 'The VLA Evolution',
    subtitle: 'Five years from first experiments to production L4 autonomy',
    steps: [
      {
        number: 1,
        title: 'RT-2 (Google DeepMind, 2023)',
        subtitle: 'First large-scale VLA — fine-tuned PaLI-X on robot manipulation data. Showed language reasoning transfers to physical control.',
        time: '2023',
        output: 'Proof of concept: LLMs can directly output robot actions',
      },
      {
        number: 2,
        title: 'OpenVLA & Octo (2024)',
        subtitle: 'Open-source VLAs for robotic manipulation, trained on Open X-Embodiment dataset. Democratized VLA research beyond big labs.',
        time: '2024',
        output: '7B-parameter open models; cross-embodiment generalization',
      },
      {
        number: 3,
        title: 'π0 (Physical Intelligence, 2024)',
        subtitle: 'Flow-matching action head on a VLM backbone. Demonstrated dexterous real-world manipulation beyond simple pick-and-place.',
        time: '2024',
        output: 'Diffusion-based action heads + multi-task robot foundation models',
      },
      {
        number: 4,
        title: 'NVIDIA Alpamayo 1 & 1.5 (2025–2026)',
        subtitle: 'First VLA purpose-built for autonomous driving. 10B-parameter model with Chain-of-Causation reasoning, open-loop pretraining on real fleet data.',
        time: '2025–2026',
        output: '~400K downloads; AlpaSim closed-loop simulation stack; multi-camera support',
      },
      {
        number: 5,
        title: 'NVIDIA Alpamayo 2 Super (May 2026)',
        subtitle: '32B-parameter reasoning VLA — full-surround 360° perception, Meta-Actions, reasoning auto-labeling. Teacher model for L4 robotaxi deployment.',
        time: 'May 2026',
        output: 'COMPUTEX Best Choice Award; distillable to DRIVE AGX Thor in-vehicle compute',
      },
    ],
  },

  // 5. DIAGRAM — VLA architecture (arch mode)
  {
    type: 'diagram',
    mode: 'arch',
    title: 'VLA Architecture',
    subtitle: 'How vision, language, and actions are unified in one forward pass',
    nodes: [
      { id: 'cams',    label: 'Cameras',        sublabel: 'multi-view frames',    col: 0, row: 1, color: 'cyan' },
      { id: 'vision',  label: 'Vision Encoder', sublabel: 'spatial tokens',       col: 1, row: 1, color: 'blue' },
      { id: 'llm',     label: 'LLM Backbone',   sublabel: 'reasoning + language', col: 2, row: 1, color: 'violet' },
      { id: 'coc',     label: 'CoC Trace',       sublabel: 'chain-of-causation',   col: 2, row: 0, color: 'amber' },
      { id: 'action',  label: 'Action Decoder',  sublabel: 'waypoints + meta-acts',col: 3, row: 1, color: 'emerald' },
      { id: 'vehicle', label: 'Vehicle / Robot', sublabel: 'in-world execution',   col: 4, row: 1, color: 'slate' },
    ],
    edges: [
      { from: 'cams',   to: 'vision',  label: 'encode' },
      { from: 'vision', to: 'llm',     label: 'tokens' },
      { from: 'llm',    to: 'coc',     label: 'narrate' },
      { from: 'llm',    to: 'action',  label: 'decode' },
      { from: 'action', to: 'vehicle', label: 'control' },
    ],
  },

  // 6. COMPARISON — modular stack vs VLA end-to-end
  {
    type: 'comparison',
    title: 'Traditional Stack vs. VLA',
    left: {
      label: 'Modular Pipeline',
      color: 'red',
      items: [
        'Separate models per subtask (detect → track → plan → control)',
        'Hand-engineered interfaces between modules',
        'Errors compound across the pipeline silently',
        'Hard-coded rules break on unseen edge cases',
        'No natural language interface for human oversight',
        'Slow iteration: retrain each module independently',
      ],
    },
    right: {
      label: 'VLA End-to-End',
      color: 'green',
      items: [
        'Single model from pixels to actions — no hand-offs',
        'Trained jointly on all tasks: perception, reasoning, control',
        'Chain-of-Causation traces make decisions auditable',
        'Generalizes to long-tail via language + world knowledge',
        'Prompt-conditioned behavior: steer with natural language',
        'One training run; teacher–student distillation for deployment',
      ],
    },
    callout: 'VLAs don\'t just drive — they explain why.',
  },

  // 7. CONTENT — Alpamayo family (the three generations)
  {
    type: 'content',
    title: 'NVIDIA Alpamayo Family',
    subtitle: 'Open VLA models, simulation, and datasets for Level 4 autonomous vehicles',
    cards: [
      {
        icon: '🏔️',
        title: 'Alpamayo 1 / 1 Nano',
        description: '10B-parameter VLA. Front-camera perception, Chain-of-Causation (CoC) traces, trajectory generation. Open-loop trained on real fleet data. ~400K downloads.',
      },
      {
        icon: '🧭',
        title: 'Alpamayo 1.5 Nano',
        description: 'Reasoning upgrade: navigation guidance, prompt conditioning, flexible multi-camera support and configurable camera parameters. Released at GTC March 2026.',
      },
      {
        icon: '⚡',
        title: 'Alpamayo 2 Super',
        description: '32B parameters. Full 360° surround perception, Meta-Actions (yield/lane-change/stop), reasoning auto-labeling with 2D grounding. COMPUTEX 2026 Best Choice Award.',
      },
      {
        icon: '🔁',
        title: 'AlpaGym + AlpaSim',
        description: 'Open-source closed-loop RL framework. Models learn from simulated consequences — bridging the open-loop training / closed-loop deployment gap.',
      },
    ],
    metrics: [
      { label: 'Model family', value: 'Open' },
      { label: 'Max params', value: '32B' },
      { label: 'Downloads', value: '400K+' },
      { label: 'Target level', value: 'L4' },
    ],
  },

  // 8. CONTENT — compute + sensor requirements
  {
    type: 'content',
    title: 'What Alpamayo Needs to Run',
    subtitle: 'Hardware, sensors, and data inputs for inference and training',
    cards: [
      {
        icon: '🖥️',
        title: 'Compute (Inference)',
        description: 'NVIDIA GPU with ≥24 GB VRAM — RTX 3090 / 4090, A5000, A100, or H100. Model weights are 22 GB. Linux only (tested). Python 3.12 + uv.',
      },
      {
        icon: '⚡',
        title: 'Compute (Training / RL)',
        description: 'AlpaGym scales from a single GPU to multi-node H100 clusters. Requires cuDNN 9, NCCL 2.26, and Redis. DRIVE AGX Thor for in-vehicle deployment.',
      },
      {
        icon: '📷',
        title: 'Camera Inputs',
        description: 'Alpamayo 1/1.5: front-facing multi-camera video + egomotion history. Alpamayo 2 Super: full 360° surround — front, side, and rear cameras.',
      },
      {
        icon: '🗄️',
        title: 'Data & Conditioning',
        description: 'Physical AI AV Dataset (HuggingFace, gated). 1.5 adds navigation guidance + prompt conditioning. 2 Super adds CoC auto-labeling — no human annotation needed.',
      },
    ],
    metrics: [
      { label: 'Min VRAM',       value: '24 GB' },
      { label: 'Model weights',  value: '22 GB' },
      { label: 'Trajectory',     value: '6.4 s / 64 pts' },
      { label: 'Action rate',    value: '10 Hz' },
    ],
  },

  // 9. CODE — environment setup + inference
  {
    type: 'code',
    title: 'Setting Up Alpamayo',
    subtitle: 'From zero to first CoC reasoning trace in four steps',
    filename: 'terminal',
    language: 'bash',
    code: `# 1. Install uv (fast Python env manager)
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

# 2. Clone repo, create venv, install deps
git clone https://github.com/NVlabs/alpamayo && cd alpamayo
uv venv ar1_venv && source ar1_venv/bin/activate
uv sync --active

# 3. Authenticate with HuggingFace (model weights are gated)
huggingface-cli login   # paste token from hf.co/settings/tokens
# Request access: nvidia/Alpamayo-R1-10B + nvidia/PhysicalAI-Autonomous-Vehicles

# 4. Run inference (downloads 22 GB weights on first run)
python src/alpamayo_r1/test_inference.py`,
    highlights: [2, 6, 10, 14],
    output: [
      'Downloading model weights: nvidia/Alpamayo-R1-10B (22 GB)...',
      'Loading Cosmos-Reason backbone...',
      'Running inference on example clip...',
      'CoC trace: "Pedestrian stepping off curb at 11 o\'clock.',
      '           Vehicle ahead braking. Yield decision triggered."',
      'Predicted trajectory: 64 waypoints @ 10 Hz over 6.4s  ✓',
    ],
    outputCommand: 'python src/alpamayo_r1/test_inference.py',
  },

  // 10. DIAGRAM — Alpamayo 2 Super reasoning sequence
  {
    type: 'diagram',
    mode: 'sequence',
    title: 'Alpamayo 2 Super: Reasoning Flow',
    subtitle: 'From 360° sensor data to L4 driving decision in one model',
    nodes: [
      { id: 'surround', label: 'Surround\nCameras',     col: 0, row: 0, color: 'cyan' },
      { id: 'cosmos',   label: 'Cosmos\nBackbone',      col: 1, row: 0, color: 'violet' },
      { id: 'coc',      label: 'CoC\nReasoning',        col: 2, row: 0, color: 'amber' },
      { id: 'meta',     label: 'Meta-Action\nOutput',   col: 3, row: 0, color: 'blue' },
      { id: 'traj',     label: 'Trajectory\nPrediction',col: 3, row: 1, color: 'emerald' },
      { id: 'thor',     label: 'DRIVE AGX\nThor',       col: 4, row: 0, color: 'slate' },
    ],
    edges: [
      { from: 'surround', to: 'cosmos',  label: '360° tokens' },
      { from: 'cosmos',   to: 'coc',     label: 'narrate' },
      { from: 'coc',      to: 'meta',    label: 'decide' },
      { from: 'coc',      to: 'traj',    label: 'plan' },
      { from: 'meta',     to: 'thor',    label: 'deploy' },
      { from: 'traj',     to: 'thor',    label: 'deploy', dashed: true },
    ],
  },

  // 11. STATS — Alpamayo 2 Super numbers
  {
    type: 'stats',
    title: 'Alpamayo 2 Super — By the Numbers',
    stats: [
      { label: 'Parameters',          value: '32B' },
      { label: 'Scale vs prev. gen',  value: '3×' },
      { label: 'Downloads (family)',  value: '400K+' },
      { label: 'Annotation speedup',  value: 'months → days' },
    ],
    leftLabel: 'Alpamayo 1 / 1.5',
    rightLabel: 'Alpamayo 2 Super',
    leftItems: [
      '10B parameters (Nano)',
      'Front-camera focused',
      'Open-loop imitation learning',
      'Trajectory output only',
      'CoC traces — limited long-tail coverage',
    ],
    rightItems: [
      '32B parameters — frontier reasoning scale',
      'Full 360° surround perception',
      'AlpaGym closed-loop RL post-training',
      'Meta-Actions + trajectories + auto-labeling',
      'Improved CoC on rare, complex, long-tail scenarios',
    ],
    bottomLine: 'Teacher model → distilled for DRIVE AGX Thor in-vehicle deployment.',
  },

  // 12. CODE — AlpaGym reward definition
  {
    type: 'code',
    title: 'AlpaGym: Closed-Loop RL Reward',
    subtitle: 'Define driving rewards, then launch post-training on any Alpamayo checkpoint',
    filename: 'reward/progress_safety.yaml',
    language: 'yaml',
    code: `# AlpaGym reward — combine progress with safety penalties
terms:
  - kind: metric
    metric_name: progress
    scale: 1.0
  - kind: metric
    metric_name: collision_any
    scale: -10.0
  - kind: metric
    metric_name: offroad
    scale: -5.0`,
    highlights: [3, 6, 9],
    output: [
      'Launching AlpaGym with AlpaSim on 8×H100...',
      'Loaded checkpoint: alpamayo_r1_10b',
      'Rollout workers: 64 parallel scenes',
      'Episode 0   reward=0.82  collision=0  offroad=0',
      'Episode 100 reward=1.47  collision=0  offroad=0',
      'Episode 500 reward=2.31  collision=0  offroad=0 ✓',
    ],
    outputCommand: 'uv run -m alpagym_host.cli policy=alpamayo reward=progress_safety',
  },

  // 13. DIAGRAM — Full Alpamayo ecosystem
  {
    type: 'diagram',
    mode: 'arch',
    title: 'The Alpamayo Ecosystem',
    subtitle: 'From real-world fleet data to closed-loop training to L4 vehicle deployment',
    nodes: [
      { id: 'fleet',    label: 'Fleet Data',       sublabel: 'NuRec datasets',        col: 0, row: 1, color: 'cyan' },
      { id: 'dreams',   label: 'OmniDreams',       sublabel: 'scenario generation',   col: 1, row: 0, color: 'violet' },
      { id: 'alpasim',  label: 'AlpaSim',          sublabel: 'simulation stack',       col: 1, row: 1, color: 'blue' },
      { id: 'alpagym',  label: 'AlpaGym',          sublabel: 'closed-loop RL',         col: 2, row: 1, color: 'amber' },
      { id: 'model',    label: 'Alpamayo 2 Super', sublabel: '32B teacher model',      col: 3, row: 1, color: 'violet' },
      { id: 'distill',  label: 'Distilled Model',  sublabel: 'compact student',        col: 4, row: 0, color: 'emerald' },
      { id: 'thor',     label: 'DRIVE AGX Thor',   sublabel: 'in-vehicle compute',     col: 4, row: 1, color: 'slate' },
    ],
    edges: [
      { from: 'fleet',   to: 'alpasim',  label: 'reconstruct' },
      { from: 'dreams',  to: 'alpasim',  label: 'synthesize' },
      { from: 'alpasim', to: 'alpagym',  label: 'rollouts' },
      { from: 'alpagym', to: 'model',    label: 'RL fine-tune' },
      { from: 'model',   to: 'distill',  label: 'distill', dashed: true },
      { from: 'distill', to: 'thor',     label: 'deploy' },
      { from: 'model',   to: 'thor',     label: 'deploy', dashed: true },
    ],
  },

  // 14. FINAL
  {
    type: 'final',
    title: 'VLAs don\'t just drive.',
    tagline: 'They see the road. They reason about it. They explain every decision.',
  },
];
