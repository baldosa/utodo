from .. import db
import datetime


class Column(db.Model):
    """
    Column model
    """
    __tablename__ = 'column'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(500), unique=True, nullable=False)
    status = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(9), nullable=True)
    icon = db.Column(db.String(25), nullable=True)
    board_id = db.Column(db.Integer, db.ForeignKey('board.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    create_at = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f"<Column: {self.name}>"
