import { MOCK_SENSOR_DATA, MOCK_CHART_DATA, MOCK_SYSTEM_HEALTH, MOCK_ALERTS } from '../data/mockData';

const BASE_URL = '/api';

export const fetchSensors = async () => {
  try {
    const res = await fetch(`${BASE_URL}/sensors`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    console.log('Backend API offline, using fallback client mock telemetry');
    return MOCK_SENSOR_DATA;
  }
};

export const fetchSensorHistory = async (hours = 24) => {
  try {
    const res = await fetch(`${BASE_URL}/sensors/history?hours=${hours}`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    const key = hours <= 1 ? "1H" : hours <= 6 ? "6H" : hours <= 24 ? "24H" : "7D";
    return {
      status: "success",
      mode: "DEMO_MODE",
      range: `${hours}H`,
      data: MOCK_CHART_DATA[key] || MOCK_CHART_DATA["24H"]
    };
  }
};

export const fetchSystemHealth = async () => {
  try {
    const res = await fetch(`${BASE_URL}/system-status`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return {
      status: "success",
      mode: "DEMO_MODE",
      components: MOCK_SYSTEM_HEALTH
    };
  }
};

export const fetchAlerts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/alerts`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return {
      status: "success",
      mode: "DEMO_MODE",
      alerts: MOCK_ALERTS
    };
  }
};

export const runAiAssessment = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/risk-assessment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    // Client side fallback calculation
    const { ph = 7.2, tds = 320, turbidity = 2.8, mining_context = "High Heavy Metals Risk" } = payload || {};
    let score = 0;
    const factors = [];
    if (ph < 6.5 || ph > 8.5) { score += 35; factors.push(`pH out of optimal baseline (${ph})`); }
    if (tds > 350) { score += 25; factors.push(`Elevated total dissolved solids (${tds} ppm)`); }
    if (turbidity > 3.0) { score += 25; factors.push(`Moderate turbidity (${turbidity} NTU)`); }
    if (mining_context) factors.push(`Mining Risk Factor: ${mining_context}`);

    let level = "LOW";
    let color = "emerald";
    let rec = "Standard sediment filtration & continuous verification.";
    let path = ["Sediment Filter", "Activated Carbon Filter (Safety Check)"];

    if (score >= 50) {
      level = "HIGH";
      color = "red";
      rec = "Sediment Filter + Activated Carbon + Secondary Re-treatment Loop required.";
      path = ["Sediment Filter", "Activated Carbon Filter", "Re-treatment Loop"];
    } else if (score >= 25) {
      level = "MEDIUM";
      color = "amber";
      rec = "Standard dual-stage adaptive filtration (Sediment + Carbon Filter).";
      path = ["Sediment Filter", "Activated Carbon Filter"];
    }

    return {
      status: "success",
      mode: "DEMO_MODE",
      timestamp: new Date().toISOString(),
      assessment: {
        risk_level: level,
        risk_score: score,
        color: color,
        contributing_factors: factors,
        recommended_treatment: rec,
        treatment_path: path,
        post_treatment_verification_required: true,
        disclaimer: "Simulated prototype AI risk assessment logic for SIH demo."
      }
    };
  }
};
