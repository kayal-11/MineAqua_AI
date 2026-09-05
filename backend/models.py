"""
MineAqua AI - PostgreSQL Database Models (SQLAlchemy)
Smart India Hackathon 2026 - Problem Statement 26040

Tables:
- User: Field operator & administrative users
- SensorReading: Real-time & historical ESP32 telemetry (pH, TDS, Turbidity, Pump, Relay, Solar, Battery)
- RiskAssessment: AI-evaluated water risk scores & adaptive purification recommendations
- PurificationRecord: Operational status of treatment modules (Sediment, Carbon, Re-treatment)
- Alert: Event alerts log triggered by telemetry threshold violations
"""

from datetime import datetime
from database import db

if db is not None:
    class User(db.Model):
        __tablename__ = 'users'

        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(100), nullable=False)
        email = db.Column(db.String(120), unique=True, nullable=False)
        role = db.Column(db.String(50), default="Field Operator")
        node = db.Column(db.String(100), default="Mining Zone Node #01")
        status = db.Column(db.String(50), default="Active")
        last_login = db.Column(db.DateTime, default=datetime.utcnow)
        created_at = db.Column(db.DateTime, default=datetime.utcnow)

        def to_dict(self):
            return {
                "id": self.id,
                "name": self.name,
                "email": self.email,
                "role": self.role,
                "node": self.node,
                "status": self.status,
                "last_login": self.last_login.strftime("%Y-%m-%d %I:%M %p") if self.last_login else None
            }

    class SensorReading(db.Model):
        __tablename__ = 'sensor_readings'

        id = db.Column(db.Integer, primary_key=True)
        device_id = db.Column(db.String(100), default="ESP32-NODE-01", index=True)
        ph = db.Column(db.Float, nullable=False)
        tds = db.Column(db.Float, nullable=False)
        turbidity = db.Column(db.Float, nullable=False)
        dc_pump = db.Column(db.String(50), default="Active")
        relay = db.Column(db.String(50), default="Engaged")
        solar_status = db.Column(db.String(100), default="Generating (18.4V)")
        battery_level = db.Column(db.String(50), default="95% (Charging)")
        created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)

        def to_dict(self):
            ph_status = "Normal" if (6.5 <= self.ph <= 8.5) else ("Critical" if self.ph < 6.0 or self.ph > 9.0 else "Warning")
            tds_status = "Normal" if self.tds <= 350 else ("High" if self.tds > 500 else "Monitoring")
            turb_status = "Normal" if self.turbidity <= 3.0 else ("High" if self.turbidity > 5.0 else "Elevated")

            return {
                "id": self.id,
                "device_id": self.device_id,
                "ph": round(self.ph, 2),
                "ph_status": ph_status,
                "tds": round(self.tds, 1),
                "tds_status": tds_status,
                "turbidity": round(self.turbidity, 2),
                "turbidity_status": turb_status,
                "dc_pump": self.dc_pump,
                "relay": self.relay,
                "solar_status": self.solar_status,
                "battery_level": self.battery_level,
                "timestamp": self.created_at.isoformat(),
                "time": self.created_at.strftime("%H:%M"),
                "dateTime": self.created_at.strftime("%Y-%m-%d %I:%M %p")
            }

    class RiskAssessment(db.Model):
        __tablename__ = 'risk_assessments'

        id = db.Column(db.Integer, primary_key=True)
        ph = db.Column(db.Float, nullable=False)
        tds = db.Column(db.Float, nullable=False)
        turbidity = db.Column(db.Float, nullable=False)
        risk_level = db.Column(db.String(20), nullable=False)
        risk_score = db.Column(db.Integer, nullable=False)
        recommended_treatment = db.Column(db.Text, nullable=False)
        treatment_path = db.Column(db.JSON, nullable=False)
        mining_context = db.Column(db.String(255), default="High Heavy Metals Risk")
        created_at = db.Column(db.DateTime, default=datetime.utcnow)

        def to_dict(self):
            return {
                "id": self.id,
                "ph": self.ph,
                "tds": self.tds,
                "turbidity": self.turbidity,
                "risk_level": self.risk_level,
                "risk_score": self.risk_score,
                "recommended_treatment": self.recommended_treatment,
                "treatment_path": self.treatment_path,
                "mining_context": self.mining_context,
                "created_at": self.created_at.isoformat()
            }

    class PurificationRecord(db.Model):
        __tablename__ = 'purification_records'

        id = db.Column(db.Integer, primary_key=True)
        step_number = db.Column(db.Integer, nullable=False)
        step_name = db.Column(db.String(100), nullable=False)
        status = db.Column(db.String(50), nullable=False)
        step_type = db.Column(db.String(50), nullable=False)
        updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

        def to_dict(self):
            return {
                "step": self.step_number,
                "name": self.step_name,
                "status": self.status,
                "type": self.step_type
            }

    class Alert(db.Model):
        __tablename__ = 'alerts'

        id = db.Column(db.Integer, primary_key=True)
        alert_code = db.Column(db.String(50), nullable=False, unique=True)
        title = db.Column(db.String(200), nullable=False)
        severity = db.Column(db.String(20), nullable=False)
        message = db.Column(db.Text, nullable=False)
        source = db.Column(db.String(100), default="ESP32 Controller")
        created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)

        def to_dict(self):
            return {
                "id": self.alert_code,
                "title": self.title,
                "severity": self.severity,
                "message": self.message,
                "source": self.source,
                "timestamp": self.created_at.strftime("%Y-%m-%d %H:%M:%S")
            }
else:
    User = None
    SensorReading = None
    RiskAssessment = None
    PurificationRecord = None
    Alert = None
