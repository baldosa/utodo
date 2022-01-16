from sqlalchemy.sql import func
from .. import db

class TaskTags(db.Model):
    __tablename__ = 'task_tags'

    id = db.Column('id', db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    tag_id = db.Column(db.Integer, db.ForeignKey('tag.id'))
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())

    tag = db.relationship('Tag', backref="memberships")
    task = db.relationship('Task', backref="memberships")


class Tag(db.Model):
    """
    Tag model
    """
    __tablename__ = 'tag'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(500), nullable=False)
    color = db.Column(db.String(9), nullable=True)
    is_deleted = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    board_id = db.Column(db.Integer, db.ForeignKey('board.id')) 
    create_at = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return self.task

