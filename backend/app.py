"""
MineAqua AI Backend API
Smart India Hackathon 2026 - Problem Statement 26040

Flask server exposing JSON endpoints for sensor telemetry, system health,
AI risk assessment, alerts, adaptive purification status, and real-time ESP32 hardware & PostgreSQL database integration.
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
from database import init_db, is_db_ready
import models
import mock_data

app = Flask(__name__)
# Enable CORS for local Vite development frontend
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize PostgreSQL Database (via Flask-SQLAlchemy & DATABASE_URL in .env)
init_db(app)

@app.route("/", methods=["GET"])
def index():
    is_live = mock_data.is_hardware_connected()
    db_status = is_db_ready()
    return jsonify({
        "name": "MineAqua AI REST API Server",
        "version": "1.1.0-postgresql-ready",
        "sih_problem_id": "26040",
        "status": "Online (LIVE MODE — ESP32 Connected)" if is_live else "Online (DEMO MODE — Simulated Hardware)",
        "mode": "LIVE_MODE" if is_live else "DEMO_MODE",
        "is_hardware_connected": is_live,
        "database_connected": db_status,
        "database_engine": "PostgreSQL (Flask-SQLAlchemy)" if db_status else "Memory / Demo Fallback",
        "docs": "POST /api/sensors/ingest to push real ESP32 telemetry data into PostgreSQL."
    })

@app.route("/api/sensors", methods=["GET"])
def get_sensors():
    """GET current telemetry for pH, TDS, Turbidity (Live from PostgreSQL/stream if ESP32 connected, Demo otherwise)."""
    return jsonify(mock_data.get_current_sensor_telemetry())

@app.route("/api/sensors/ingest", methods=["POST"])
def ingest_telemetry():
    """
    ========================================================================================
    ESP32 HARDWARE PERSISTENCE ENDPOINT
    ESP32 + Sensors → POST /api/sensors/ingest → Flask API → PostgreSQL DB → Real-Time Dashboard
    
    Accepts JSON payload:
    {
        "ph": 7.25,
        "tds": 320.0,
        "turbidity": 2.4,
        "dc_pump": "Active",
        "relay": "Engaged",
        "solar_status": "Generating (18.5V)",
        "battery_level": "94%",
        "device_id": "ESP32-NODE-01"
    }
    ========================================================================================
    """
    data = request.get_json(silent=True) or {}
    result = mock_data.ingest_esp32_telemetry(data)
    return jsonify(result), 200

@app.route("/api/hardware/status", methods=["GET"])
def get_hardware_status():
    """GET current ESP32 connection state & PostgreSQL status."""
    is_live = mock_data.is_hardware_connected()
    return jsonify({
        "status": "success",
        "is_connected": is_live,
        "db_connected": is_db_ready(),
        "mode": "LIVE_MODE" if is_live else "DEMO_MODE",
        "message": "Physical ESP32 hardware & PostgreSQL streaming live telemetry" if is_live else "DEMO MODE — Hardware not connected"
    })

@app.route("/api/hardware/toggle", methods=["POST"])
def toggle_hardware_mode():
    """POST endpoint to manually toggle or simulate ESP32 live connection for testing."""
    data = request.get_json(silent=True) or {}
    force_live = data.get("is_live", None)
    
    if force_live is None:
        current = mock_data.is_hardware_connected()
        new_state = mock_data.set_hardware_mode(not current)
    else:
        new_state = mock_data.set_hardware_mode(bool(force_live))

    return jsonify({
        "status": "success",
        "is_connected": new_state,
        "db_connected": is_db_ready(),
        "mode": "LIVE_MODE" if new_state else "DEMO_MODE",
        "message": f"Hardware state toggled to {'LIVE_MODE' if new_state else 'DEMO_MODE'}"
    })

@app.route("/api/sensors/history", methods=["GET"])
def get_sensors_history():
    """GET historical time-series telemetry data from PostgreSQL or simulation."""
    hours = request.args.get("hours", default=24, type=int)
    return jsonify(mock_data.get_historical_sensor_data(hours=hours))

@app.route("/api/system-status", methods=["GET"])
def get_system_status():
    """GET current status of ESP32, sensors, pump, relay, filters, solar/battery."""
    return jsonify(mock_data.get_system_health())

@app.route("/api/alerts", methods=["GET"])
def get_alerts():
    """GET event alerts list from PostgreSQL or simulation."""
    return jsonify(mock_data.get_alerts_list())

@app.route("/api/risk-assessment", methods=["GET", "POST"])
def risk_assessment():
    """
    GET or POST AI water risk assessment.
    Accepts optional JSON payload with ph, tds, turbidity, mining_context.
    """
    if request.method == "POST":
        data = request.get_json(silent=True) or {}
        ph = float(data["ph"]) if "ph" in data else None
        tds = float(data["tds"]) if "tds" in data else None
        turbidity = float(data["turbidity"]) if "turbidity" in data else None
        context = data.get("mining_context", "High Heavy Metals Risk")
    else:
        ph = float(request.args["ph"]) if "ph" in request.args else None
        tds = float(request.args["tds"]) if "tds" in request.args else None
        turbidity = float(request.args["turbidity"]) if "turbidity" in request.args else None
        context = request.args.get("mining_context", "High Heavy Metals Risk")

    return jsonify(mock_data.calculate_ai_risk(ph, tds, turbidity, context))

@app.route("/api/treatment-status", methods=["GET"])
def get_treatment_status():
    """GET status of adaptive treatment modules."""
    is_live = mock_data.is_hardware_connected()
    return jsonify({
        "status": "success",
        "mode": "LIVE_MODE" if is_live else "DEMO_MODE",
        "is_live": is_live,
        "db_connected": is_db_ready(),
        "active_pathway": [
            {"step": 1, "name": "Raw Water Intake", "status": "Active", "type": "Sensing"},
            {"step": 2, "name": "ESP32 + AI Risk Evaluation", "status": "Active", "type": "Control"},
            {"step": 3, "name": "DC Pump & Relay Engagement", "status": "Engaged" if is_live else "Standby / Ready", "type": "Actuation"},
            {"step": 4, "name": "Sediment Filtration", "status": "Active", "type": "Treatment"},
            {"step": 5, "name": "Activated Carbon Treatment", "status": "Active", "type": "Treatment"},
            {"step": 6, "name": "Post-Treatment Sensor Check", "status": "Verified Safe", "type": "Verification"}
        ],
        "re_treatment_mode": "Auto Trigger on Verification Failure"
    })

if __name__ == "__main__":
    print("Starting MineAqua AI PostgreSQL-Integrated Backend API on http://127.0.0.1:5000...")
    app.run(host="127.0.0.1", port=5000, debug=True)
