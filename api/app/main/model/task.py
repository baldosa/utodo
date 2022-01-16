from .. import db
# from app.main.model.tag import task_tag
import datetime


class Task(db.Model):
    """
    Task model
    """
    __tablename__ = 'task'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    task = db.Column(db.String(500), nullable=False)
    due_date = db.Column(db.DateTime, nullable=False)
    color = db.Column(db.String(9), nullable=True)
    icon = db.Column(db.String(25), nullable=True)
    is_deleted = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    column_id = db.Column(db.Integer, db.ForeignKey('column.id'))
    create_at = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f"<Task: {self.task}>"
