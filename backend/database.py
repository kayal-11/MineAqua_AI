"""
MineAqua AI - PostgreSQL Database Connection & Setup Engine
Smart India Hackathon 2026 - Problem Statement 26040

- Reads DATABASE_URL exclusively from .env file via python-dotenv.
- Initializes Flask-SQLAlchemy with Flask app.
- Creates database tables using db.create_all().
- Logs clear success message on connection or error message if PostgreSQL is unavailable.
- Zero hardcoded credentials in Python source code.
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

_DB_INITIALIZED = False
db = None

try:
    from flask_sqlalchemy import SQLAlchemy
    db = SQLAlchemy()
except ImportError:
    db = None
    print("[PostgreSQL NOTICE] Flask-SQLAlchemy not installed in local environment. Running in Demo/Memory Fallback Mode.")

def init_db(app):
    """Initializes Flask-SQLAlchemy with PostgreSQL using DATABASE_URL from .env."""
    global _DB_INITIALIZED, db

    if db is None:
        _DB_INITIALIZED = False
        return

    # Read DATABASE_URL from .env without hardcoding any credentials in Python source code
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("[PostgreSQL ERROR] DATABASE_URL environment variable is missing in .env file.")
        print("[PostgreSQL NOTICE] System running with memory/demo fallback mode.")
        _DB_INITIALIZED = False
        return

    # Normalize legacy 'postgres://' schema to 'postgresql://'
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)

    app.config["SQLALCHEMY_DATABASE_URI"] = db_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    try:
        db.init_app(app)
        with app.app_context():
            # Create all database tables (User, SensorReading, RiskAssessment, PurificationRecord, Alert)
            db.create_all()
            _DB_INITIALIZED = True
            safe_target = db_url.split("@")[-1] if "@" in db_url else "configured host"
            print(f"[PostgreSQL SUCCESS] Connected to PostgreSQL database at ({safe_target}). Real-time ESP32 pipeline ready!")
    except Exception as e:
        _DB_INITIALIZED = False
        print(f"[PostgreSQL ERROR] Unable to connect to PostgreSQL database: {e}")
        print("[PostgreSQL NOTICE] System running with memory/demo fallback mode. Ensure PostgreSQL server is running and DATABASE_URL in .env is correct.")

def is_db_ready():
    """Returns True if PostgreSQL is successfully connected and tables are created."""
    return _DB_INITIALIZED
