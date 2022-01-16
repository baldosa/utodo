import uuid
import datetime

from app.main import db
from app.main.model.board import Board
from app.main.model.column import Column
from typing import Dict, Tuple


def save_new_board(data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    new_board = Board(
        name=data['name'],
        status=1,
        color=data['color'],
        icon=data['icon'],
        source='manual',
        user_id=user_id,
        create_at=datetime.datetime.utcnow()
    )
    save_changes(new_board)
    response_object = {
        'status': 'success',
        'message': 'Board created.'
    }
    return response_object, 201


def get_all_boards(data: Dict[str, str]) -> Tuple[Dict[str, str], int]:
    return Board.query.filter_by(user_id=data['user_id']).all()


def get_board_columns(board_id, user_id):

    board = Board.query.filter_by(id=board_id, user_id=user_id).first()
    return board


def save_board_changes(board_id, data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    board = Board.query.filter_by(id=board_id, user_id=user_id).first()
    board.name=data['name']
    board.status=1
    board.color=data['color']
    board.icon=data['icon']
    
    save_changes(board)
    response_object = {
        'status': 'success',
        'message': 'Board updated.'
    }
    return response_object, 201

def delete_board(board_id, user_id):
    board = Board.query.filter_by(id=board_id, user_id=user_id).first()
    board.status = 0

    save_changes(board)
    response_object = {
        'status': 'success',
        'message': 'Board updated.'
    }
    return response_object, 201

def save_changes(data: Board) -> None:
    db.session.add(data)
    db.session.commit()

