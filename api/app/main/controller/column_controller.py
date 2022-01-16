from flask import request
from flask_restx import Resource, marshal

from app.main.util.decorator import token_required
from ..util.dto import ColumnDto
from app.main.service.auth_helper import Auth
from ..service.column_service import get_all_columns, get_column_columns, save_column_changes, delete_column

from typing import Dict, Tuple

api = ColumnDto.api
_column_get = ColumnDto.column_get
_column_post = ColumnDto.column_post


@api.route('/')
class ColumnList(Resource):
    @api.doc('list_of_columns_by_user')
    @token_required
    @api.marshal_list_with(_column_get, envelope='data')
    def get(self):
        """List all the columns created or shared to the user"""
        user_data = Auth.get_logged_in_user(request)[0]['data']
        return get_all_columns(data=user_data)


@api.route('/<column_id>')
@api.param('column_id', 'The column id')
@api.response(404, 'Column not found.')
class Column(Resource):
    @api.doc('get columns of a column')
    @token_required
    @api.marshal_with(_column_get)
    def get(self, column_id):
        """get a column given its id"""

        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        column = get_column_columns(column_id, user_id)
        if not column:
            api.abort(404)
        else:
            return column

    @api.expect(_column_post, validate=True)
    @api.response(201, 'Column successfully updated.')
    @api.doc('update column')
    @token_required
    def put(self, column_id) -> Tuple[Dict[str, str], int]:
        """Updates a Column """
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_column_changes(column_id, data, user_id)

    @api.response(201, 'Column deleted.')
    @api.doc('deletes a column')
    @token_required
    def delete(self, column_id) -> Tuple[Dict[str, str], int]:
        """Delete a column"""
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return delete_column(column_id, user_id)

    # @api.expect(_new_column, validate=True)
    @api.response(201, 'Task successfully created.')
    @api.doc('creates a task in a column')
    @token_required
    def post(self, board_id) -> Tuple[Dict[str, str], int]:
        """Creates a task in a column"""
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        # return save_new_column(board_id, data, user_id)
