"""
MineAqua AI - Prototype Mock Data & Simulation Engine
Smart India Hackathon 2026 - Problem Statement 26040

NOTE: All values returned by this module are simulated prototype data for UI demonstration
and hardware testing integration. Replace with live ESP32 telemetry in production.
"""

import time
import random
from datetime import datetime, timedelta

def get_current_sensor_telemetry():
    """Generates realistic current sensor readings."""
    return {
        "status": "success",
        "mode": "DEMO_MODE",
        "timestamp": datetime.now().isoformat(),
        "readings": {
            "ph": round(random.uniform(7.1, 7.4), 2),
            "ph_unit": "pH",
            "ph_status": "Normal",
            "tds": round(random.uniform(310, 335), 1),
            "tds_unit": "ppm",
            "tds_status": "Monitoring",
            "turbidity": round(random.uniform(2.4, 3.1), 2),
            "turbidity_unit": "NTU",
            "turbidity_status": "Normal"
        },
        "meta": {
            "controller": "ESP32 (Simulated)",
            "location_context": "Mining-Affected Rural Node #01"
        }
    }

def get_historical_sensor_data(hours=24):
    """Generates time-series data points for charts over 1H, 6H, 24H, or 7D."""
    now = datetime.now()
    points_count = 24 if hours <= 24 else 48
    interval_minutes = (hours * 60) // points_count
    
    data = []
    base_ph = 7.2
    base_tds = 320
    base_turb = 2.8

    for i in range(points_count, -1, -1):
        point_time = now - timedelta(minutes=i * interval_minutes)
        # Add slight realistic drift
        ph = round(base_ph + random.uniform(-0.35, 0.4), 2)
        tds = round(base_tds + random.uniform(-25, 30), 1)
        turb = round(base_turb + random.uniform(-0.6, 0.9), 2)
        
        data.append({
            "time": point_time.strftime("%H:%M" if hours <= 24 else "%b %d %H:%M"),
            "timestamp": point_time.isoformat(),
            "ph": ph,
            "tds": tds,
            "turbidity": turb,
            "is_anomaly": turb > 3.3 or ph < 6.8 or tds > 350
        })

    return {
        "status": "success",
        "mode": "DEMO_MODE",
        "range": f"{hours}H",
        "data": data
    }

def get_system_health():
    """Returns current simulated status of hardware components."""
    return {
        "status": "success",
        "mode": "DEMO_MODE",
        "components": [
            {"id": "esp32", "name": "ESP32 Controller", "layer": "Control Layer", "state": "Connected", "health": "100%", "color": "emerald"},
            {"id": "ph_sensor", "name": "pH Sensor", "layer": "Sensing Layer", "state": "Active", "health": "Operational", "color": "emerald"},
            {"id": "tds_sensor", "name": "TDS Sensor", "layer": "Sensing Layer", "state": "Active", "health": "Operational", "color": "emerald"},
            {"id": "turbidity_sensor", "name": "Turbidity Sensor", "layer": "Sensing Layer", "state": "Active", "health": "Operational", "color": "emerald"},
            {"id": "dc_pump", "name": "DC Water Pump", "layer": "Actuation Layer", "state": "Standby", "health": "Ready", "color": "cyan"},
            {"id": "relay", "name": "Control Relay Switch", "layer": "Actuation Layer", "state": "Ready", "health": "Operational", "color": "emerald"},
            {"id": "sediment_filter", "name": "Sediment Filter Stage", "layer": "Treatment Layer", "state": "In Service", "health": "Good", "color": "emerald"},
            {"id": "carbon_filter", "name": "Activated Carbon Filter", "layer": "Treatment Layer", "state": "In Service", "health": "Good", "color": "emerald"},
            {"id": "solar_panel", "name": "Solar Power Module", "layer": "Power Layer", "state": "Generating", "health": "Available", "color": "emerald"},
            {"id": "battery", "name": "Backup Battery Storage", "layer": "Power Layer", "state": "Backup Ready", "health": "Standby", "color": "cyan"}
        ],
        "solar_status": {
            "power_source": "Solar Panel + Battery",
            "battery_mode": "Normal Operation",
            "grid_dependency": "Zero (Off-Grid Capability)"
        }
    }

def calculate_ai_risk(ph=7.2, tds=320, turbidity=2.8, mining_context="High Heavy Metals Risk"):
    """
    Simulated AI risk assessment logic.
    Categorizes risk into LOW, MEDIUM, or HIGH and selects appropriate adaptive treatment.
    """
    risk_score = 0
    factors = []

    # pH factor
    if ph < 6.5 or ph > 8.5:
        risk_score += 35
        factors.append(f"pH out of optimal range ({ph})")
    elif ph < 6.8 or ph > 8.2:
        risk_score += 15
        factors.append(f"pH slight variation ({ph})")

    # TDS factor
    if tds > 500:
        risk_score += 40
        factors.append(f"High TDS level ({tds} ppm)")
    elif tds > 350:
        risk_score += 20
        factors.append(f"Elevated TDS level ({tds} ppm)")

    # Turbidity factor
    if turbidity > 5.0:
        risk_score += 35
        factors.append(f"High turbidity ({turbidity} NTU)")
    elif turbidity > 3.0:
        risk_score += 15
        factors.append(f"Moderate cloudiness/turbidity ({turbidity} NTU)")

    if mining_context:
        factors.append(f"Contextual factor: {mining_context}")

    # Determine risk tier
    if risk_score >= 50:
        level = "HIGH"
        color = "red"
        recommendation = "Sediment Filter + Activated Carbon + Secondary Re-treatment Loop required."
        treatment_path = ["Sediment Filter", "Activated Carbon Filter", "Re-treatment Loop"]
    elif risk_score >= 25:
        level = "MEDIUM"
        color = "amber"
        recommendation = "Standard dual-stage filtration (Sediment + Activated Carbon)."
        treatment_path = ["Sediment Filter", "Activated Carbon Filter"]
    else:
        level = "LOW"
        color = "emerald"
        recommendation = "Low risk detected. Primary sediment filtration & continuous verification."
        treatment_path = ["Sediment Filter", "Activated Carbon Filter (Safety Check)"]

    return {
        "status": "success",
        "mode": "DEMO_MODE",
        "timestamp": datetime.now().isoformat(),
        "input_parameters": {
            "ph": ph,
            "tds": tds,
            "turbidity": turbidity,
            "mining_context": mining_context
        },
        "assessment": {
            "risk_level": level,
            "risk_score": risk_score,
            "color": color,
            "contributing_factors": factors,
            "recommended_treatment": recommendation,
            "treatment_path": treatment_path,
            "post_treatment_verification_required": True,
            "disclaimer": "AI Assessment simulated for prototype demonstration. Final threshold calibration pending sensor hardware field deployment."
        }
    }

def get_alerts_list():
    """Simulated event alerts log."""
    return {
        "status": "success",
        "mode": "DEMO_MODE",
        "alerts": [
            {
                "id": "ALT-104",
                "timestamp": (datetime.now() - timedelta(minutes=15)).strftime("%Y-%m-%d %H:%M:%S"),
                "title": "Post-Treatment Quality Verification Passed",
                "severity": "INFO",
                "message": "Water parameters after sediment & carbon filter check meet safety baseline.",
                "source": "ESP32 Verification Routine"
            },
            {
                "id": "ALT-103",
                "timestamp": (datetime.now() - timedelta(hours=2)).strftime("%Y-%m-%d %H:%M:%S"),
                "title": "Elevated Turbidity Detected",
                "severity": "WARNING",
                "message": "Turbidity rose to 3.4 NTU. Adaptive purification pathway adjusted to dual-filter mode.",
                "source": "AI Water-Risk Module"
            },
            {
                "id": "ALT-102",
                "timestamp": (datetime.now() - timedelta(hours=5)).strftime("%Y-%m-%d %H:%M:%S"),
                "title": "Solar Battery Backup Active",
                "severity": "INFO",
                "message": "System operating seamlessly on solar battery storage in off-grid mode.",
                "source": "Power Management Unit"
            },
            {
                "id": "ALT-101",
                "timestamp": (datetime.now() - timedelta(hours=14)).strftime("%Y-%m-%d %H:%M:%S"),
                "title": "Treatment Verification Re-treatment Triggered",
                "severity": "CRITICAL",
                "message": "Initial post-treatment verification failed turbidity tolerance; automated re-treatment relay engaged.",
                "source": "Relay Actuator / ESP32"
            }
        ]
    }
