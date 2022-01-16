from flask import request
from flask_restx import Resource, marshal

from app.main.util.decorator import token_required
from ..util.dto import BoardDto, ColumnDto
from app.main.service.auth_helper import Auth
from ..service.board_service import delete_board, get_all_boards, save_new_board, get_board_columns, save_board_changes, delete_board
from ..service.column_service import save_new_column

from typing import Dict, Tuple

api = BoardDto.api
_board_get = BoardDto.board_get
_board_post = BoardDto.board_post
_board_id = BoardDto.board_id
_new_column = ColumnDto.column_post

@api.route('/')
class BoardList(Resource):
    @api.doc('list_of_boards_by_user')
    @token_required
    @api.marshal_list_with(_board_get, envelope='data')
    def get(self):
        """List all the boards created or shared by the user"""
        user_data = Auth.get_logged_in_user(request)[0]['data']
        return get_all_boards(data=user_data)

    @api.expect(_board_post, validate=True)
    @api.response(201, 'Board successfully created.')
    @api.doc('create new board')
    @token_required
    def post(self) -> Tuple[Dict[str, str], int]:
        """Creates a new Board """
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_new_board(data, user_id)


@api.route('/<board_id>')
@api.param('board_id', 'The board id')
@api.response(404, 'Board not found.')
class Board(Resource):
    @api.doc('get columns of a board')
    @token_required
    @api.marshal_with(_board_id)
    def get(self, board_id):
        """get a board given its id"""

        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        board = get_board_columns(board_id, user_id)
        if not board:
            api.abort(404)
        else:
            return board

    @api.expect(_board_post, validate=True)
    @api.response(201, 'Board successfully updated.')
    @api.doc('update board')
    @token_required
    def put(self, board_id) -> Tuple[Dict[str, str], int]:
        """Updates a Board """
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_board_changes(board_id, data, user_id)


    @api.expect(_new_column, validate=True)
    @api.response(201, 'Column successfully created.')
    @api.doc('creates a column in a board')
    @token_required
    def post(self, board_id) -> Tuple[Dict[str, str], int]:
        """Creates a column in a board"""
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_new_column(board_id, data, user_id)

    @api.response(201, 'Board successfully deleted.')
    @api.doc('deletes a board')
    @token_required
    def delete(self, board_id) -> Tuple[Dict[str, str], int]:
        """Delete a board"""
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return delete_board(board_id, user_id)
