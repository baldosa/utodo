from .. import db
import datetime


class Board(db.Model):
    """
    Board model
    """
    __tablename__ = 'board'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(500), nullable=False)
    status = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(9), nullable=True)
    icon = db.Column(db.String(25), nullable=True)
    source = db.Column(db.String(25), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    create_at = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f"<Name: {self.name}>"
