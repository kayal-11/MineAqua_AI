"""
MineAqua AI Backend API
Smart India Hackathon 2026 - Problem Statement 26040

Flask server exposing prototype JSON endpoints for sensor telemetry, system health,
AI risk assessment, alerts, and adaptive purification status.
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import mock_data

app = Flask(__name__)
# Enable CORS for local Vite development frontend
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "name": "MineAqua AI REST API Server",
        "version": "1.0.0-prototype",
        "sih_problem_id": "26040",
        "status": "Online (Demo Mode)",
        "docs": "All endpoints serve simulated data for hardware testing and UI visualization."
    })

@app.route("/api/sensors", methods=["GET"])
def get_sensors():
    """GET current simulated telemetry for pH, TDS, Turbidity."""
    return jsonify(mock_data.get_current_sensor_telemetry())

@app.route("/api/sensors/history", methods=["GET"])
def get_sensors_history():
    """GET historical time-series telemetry data for charts."""
    hours = request.args.get("hours", default=24, type=int)
    return jsonify(mock_data.get_historical_sensor_data(hours=hours))

@app.route("/api/system-status", methods=["GET"])
def get_system_status():
    """GET current status of ESP32, sensors, pump, relay, filters, solar/battery."""
    return jsonify(mock_data.get_system_health())

@app.route("/api/alerts", methods=["GET"])
def get_alerts():
    """GET simulated event alerts list."""
    return jsonify(mock_data.get_alerts_list())

@app.route("/api/risk-assessment", methods=["GET", "POST"])
def risk_assessment():
    """
    GET or POST AI water risk assessment.
    Accepts optional JSON payload with ph, tds, turbidity, mining_context.
    """
    if request.method == "POST":
        data = request.get_json(silent=True) or {}
        ph = float(data.get("ph", 7.2))
        tds = float(data.get("tds", 320))
        turbidity = float(data.get("turbidity", 2.8))
        context = data.get("mining_context", "High Heavy Metals Risk")
    else:
        ph = float(request.args.get("ph", 7.2))
        tds = float(request.args.get("tds", 320))
        turbidity = float(request.args.get("turbidity", 2.8))
        context = request.args.get("mining_context", "High Heavy Metals Risk")

    return jsonify(mock_data.calculate_ai_risk(ph, tds, turbidity, context))

@app.route("/api/treatment-status", methods=["GET"])
def get_treatment_status():
    """GET status of adaptive treatment modules (Sediment Filter, Carbon Filter, Re-treatment)."""
    return jsonify({
        "status": "success",
        "mode": "DEMO_MODE",
        "active_pathway": [
            {"step": 1, "name": "Raw Water Intake", "status": "Active", "type": "Sensing"},
            {"step": 2, "name": "ESP32 + AI Risk Evaluation", "status": "Active", "type": "Control"},
            {"step": 3, "name": "DC Pump & Relay Engagement", "status": "Standby / Ready", "type": "Actuation"},
            {"step": 4, "name": "Sediment Filtration", "status": "Active", "type": "Treatment"},
            {"step": 5, "name": "Activated Carbon Treatment", "status": "Active", "type": "Treatment"},
            {"step": 6, "name": "Post-Treatment Sensor Check", "status": "Verified Safe", "type": "Verification"}
        ],
        "re_treatment_mode": "Auto Trigger on Verification Failure"
    })

if __name__ == "__main__":
    print("Starting MineAqua AI Backend API on http://127.0.0.1:5000...")
    app.run(host="127.0.0.1", port=5000, debug=True)
