from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.models.database import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app, origins=app.config["ALLOWED_ORIGINS"].split(","))

    db.init_app(app)

    from app.controllers.test_connection_controller import test_connection_bp
    app.register_blueprint(test_connection_bp, url_prefix="/api")

    return app
