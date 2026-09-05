export const MOCK_SENSOR_DATA = {
  status: "success",
  mode: "DEMO_MODE",
  timestamp: new Date().toISOString(),
  readings: {
    ph: 7.2,
    ph_unit: "pH",
    ph_status: "Normal",
    tds: 320,
    tds_unit: "ppm",
    tds_status: "Monitoring",
    turbidity: 2.8,
    turbidity_unit: "NTU",
    turbidity_status: "Normal"
  },
  meta: {
    controller: "ESP32 (Simulated)",
    location_context: "Mining-Affected Rural Area #01"
  }
};

export const MOCK_CHART_DATA = {
  "1H": [
    { time: "10:00", ph: 7.18, tds: 318, turbidity: 2.7 },
    { time: "10:15", ph: 7.21, tds: 321, turbidity: 2.8 },
    { time: "10:30", ph: 7.19, tds: 319, turbidity: 2.6 },
    { time: "10:45", ph: 7.24, tds: 324, turbidity: 2.9 },
    { time: "11:00", ph: 7.20, tds: 320, turbidity: 2.8 }
  ],
  "6H": [
    { time: "05:00", ph: 7.10, tds: 310, turbidity: 2.5 },
    { time: "06:00", ph: 7.15, tds: 315, turbidity: 2.7 },
    { time: "07:00", ph: 7.25, tds: 330, turbidity: 3.1 },
    { time: "08:00", ph: 7.22, tds: 325, turbidity: 2.9 },
    { time: "09:00", ph: 7.18, tds: 318, turbidity: 2.6 },
    { time: "10:00", ph: 7.20, tds: 320, turbidity: 2.8 }
  ],
  "24H": [
    { time: "00:00", ph: 7.05, tds: 305, turbidity: 2.4 },
    { time: "04:00", ph: 7.12, tds: 312, turbidity: 2.6 },
    { time: "08:00", ph: 7.30, tds: 335, turbidity: 3.2 },
    { time: "12:00", ph: 7.25, tds: 328, turbidity: 3.0 },
    { time: "16:00", ph: 7.18, tds: 319, turbidity: 2.7 },
    { time: "20:00", ph: 7.20, tds: 320, turbidity: 2.8 }
  ],
  "7D": [
    { time: "Mon", ph: 7.12, tds: 310, turbidity: 2.5 },
    { time: "Tue", ph: 7.28, tds: 340, turbidity: 3.4 },
    { time: "Wed", ph: 7.20, tds: 325, turbidity: 2.8 },
    { time: "Thu", ph: 7.15, tds: 318, turbidity: 2.6 },
    { time: "Fri", ph: 7.32, tds: 345, turbidity: 3.6 },
    { time: "Sat", ph: 7.22, tds: 322, turbidity: 2.9 },
    { time: "Sun", ph: 7.20, tds: 320, turbidity: 2.8 }
  ]
};

export const MOCK_SYSTEM_HEALTH = [
  { id: "esp32", name: "ESP32 Controller", layer: "Control Layer", state: "Connected", health: "100%", color: "emerald", icon: "Cpu" },
  { id: "ph_sensor", name: "pH Sensor", layer: "Sensing Layer", state: "Active", health: "Operational", color: "emerald", icon: "Activity" },
  { id: "tds_sensor", name: "TDS Sensor", layer: "Sensing Layer", state: "Active", health: "Operational", color: "emerald", icon: "Zap" },
  { id: "turbidity_sensor", name: "Turbidity Sensor", layer: "Sensing Layer", state: "Active", health: "Operational", color: "emerald", icon: "Eye" },
  { id: "dc_pump", name: "DC Water Pump", layer: "Actuation Layer", state: "Standby", health: "Ready", color: "cyan", icon: "RotateCw" },
  { id: "relay", name: "Control Relay Switch", layer: "Actuation Layer", state: "Ready", health: "Operational", color: "emerald", icon: "ToggleRight" },
  { id: "sediment_filter", name: "Sediment Filter Stage", layer: "Treatment Layer", state: "In Service", "health": "Good", color: "emerald", icon: "Filter" },
  { id: "carbon_filter", name: "Activated Carbon Filter", layer: "Treatment Layer", state: "In Service", "health": "Good", color: "emerald", icon: "ShieldCheck" },
  { id: "solar_panel", name: "Solar Power Module", layer: "Power Layer", state: "Generating", health: "Available", color: "emerald", icon: "Sun" },
  { id: "battery", name: "Backup Battery Storage", layer: "Power Layer", state: "Backup Ready", health: "Standby", color: "cyan", icon: "BatteryCharging" }
];

export const MOCK_ALERTS = [
  {
    id: "ALT-104",
    timestamp: "15 minutes ago",
    title: "Post-Treatment Quality Verification Passed",
    severity: "INFO",
    message: "Water parameters after sediment & carbon filter check meet safety baseline.",
    source: "ESP32 Verification Routine"
  },
  {
    id: "ALT-103",
    timestamp: "2 hours ago",
    title: "Elevated Turbidity Detected",
    severity: "WARNING",
    message: "Turbidity rose to 3.4 NTU. Adaptive purification pathway adjusted to dual-filter mode.",
    source: "AI Water-Risk Module"
  },
  {
    id: "ALT-102",
    timestamp: "5 hours ago",
    title: "Solar Battery Backup Active",
    severity: "INFO",
    message: "System operating seamlessly on solar battery storage in off-grid mode.",
    source: "Power Management Unit"
  },
  {
    id: "ALT-101",
    timestamp: "14 hours ago",
    title: "Treatment Verification Re-treatment Triggered",
    severity: "CRITICAL",
    message: "Initial post-treatment verification failed turbidity tolerance; automated re-treatment relay engaged.",
    source: "Relay Actuator / ESP32"
  }
];

export const SYSTEM_STAGES = [
  {
    id: 1,
    title: "Water Source Intake",
    short: "Raw Water",
    category: "Source",
    icon: "Droplets",
    description: "Raw ground or surface water intake from rural or mining-affected zone containing potential suspended solids, heavy metal traces, or mineral variance."
  },
  {
    id: 2,
    title: "Sensing Layer",
    short: "pH / TDS / Turbidity Sensors",
    category: "Sensing",
    icon: "Activity",
    description: "Continuously measures fundamental water quality metrics: pH (acidity/alkalinity), TDS (total dissolved solids), and Turbidity (clarity/suspended particles)."
  },
  {
    id: 3,
    title: "ESP32 Controller",
    short: "ESP32 Central MCU",
    category: "Control",
    icon: "Cpu",
    description: "Acts as the central embedded controller. Collects analog/digital sensor signals, manages actuation timings, and coordinates data pipeline."
  },
  {
    id: 4,
    title: "AI Risk Assessment",
    short: "Mining-Aware AI Risk",
    category: "AI & Decision",
    icon: "BrainCircuit",
    description: "Analyzes multi-parameter sensor readings alongside mining-related context to classify risk level (LOW/MEDIUM/HIGH) and select appropriate treatment protocol."
  },
  {
    id: 5,
    title: "Purification Selection",
    short: "Adaptive Logic",
    category: "AI & Decision",
    icon: "Sliders",
    description: "Dynamically configures active filtration paths based on assessed risk level instead of applying a rigid, one-size-fits-all treatment process."
  },
  {
    id: 6,
    title: "DC Pump + Relay",
    short: "Pump & Relay Actuation",
    category: "Actuation",
    icon: "ToggleRight",
    description: "ESP32 switches relays to activate the DC water pump, precisely regulating flow volume and pressure through chosen treatment stages."
  },
  {
    id: 7,
    title: "Sediment Filter",
    short: "Physical Filtration",
    category: "Treatment",
    icon: "Filter",
    description: "First-stage treatment module designed to trap larger particulate matter, silt, rust, and coarse suspended solids from mining runoff."
  },
  {
    id: 8,
    title: "Activated Carbon Filter",
    short: "Adsorption Filter",
    category: "Treatment",
    icon: "ShieldCheck",
    description: "Second-stage treatment module using high surface area carbon media to reduce organic compounds, chlorine, odors, and dissolved micro-contaminants."
  },
  {
    id: 9,
    title: "Post-Treatment Verification",
    short: "Quality Check",
    category: "Verification",
    icon: "CheckCircle2",
    description: "Secondary inline sensor array verifies whether treated output meets established safety baselines before opening supply valve."
  },
  {
    id: 10,
    title: "Safe Water / Re-Treatment",
    short: "Delivery or Loop",
    category: "Output",
    icon: "CheckCheck",
    description: "If verification passes, water is routed for community supply. If parameters remain unsafe, automated re-treatment loop is initiated."
  }
];
