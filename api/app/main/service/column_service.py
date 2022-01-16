import uuid
import datetime

from app.main import db
from app.main.model.column import Column
from typing import Dict, Tuple


def save_new_column(board_id, data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    new_column = Column(
        name=data['name'],
        status=1,
        color=data['color'],
        icon=data['icon'],
        user_id=user_id,
        board_id=board_id,
        create_at=datetime.datetime.utcnow()
    )
    save_changes(new_column)
    response_object = {
        'status': 'success',
        'message': 'Column created.'
    }
    return response_object, 201


def get_all_columns(data: Dict[str, str]) -> Tuple[Dict[str, str], int]:
    return Column.query.filter_by(user_id=data['user_id']).all()


def get_column_columns(column_id, user_id):

    column = Column.query.filter_by(id=column_id, user_id=user_id).first()
    return column


def save_column_changes(column_id, data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    column = Column.query.filter_by(id=column_id, user_id=user_id).first()
    column.name=data['name']
    column.status=1
    column.color=data['color']
    column.icon=data['icon']
    
    save_changes(column)
    response_object = {
        'status': 'success',
        'message': 'Column updated.'
    }
    return response_object, 201


def delete_column(column_id, user_id):
    board = Column.query.filter_by(id=column_id, user_id=user_id).first()
    board.status = 0

    save_changes(board)
    response_object = {
        'status': 'success',
        'message': 'Column deleted.'
    }
    return response_object, 201


def save_changes(data: Column) -> None:
    db.session.add(data)
    db.session.commit()

