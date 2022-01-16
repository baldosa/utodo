from flask_restx import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')
    user = api.model('user', {
        'email': fields.String(required=True, description='user email address'),
        'username': fields.String(required=True, description='user username'),
        'password': fields.String(required=True, description='user password'),
        'public_id': fields.String(description='user Identifier'),
        'name': fields.String(description='user name')
    })



class AuthDto:
    api = Namespace('auth', description='authentication related operations')
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True, description='The email address'),
        'password': fields.String(required=True, description='The user password '),
    })


class ColumnDto:
    api = Namespace('column', description='column related operations')
    column_post = api.model('column_post', {
        'name': fields.String(required=True, description='board name'),
        'status': fields.Integer(required=True, description='is active?'),
        'color': fields.String(required=False, description='hex color code'),
        'icon': fields.String(required=False, description='fa icon'),
        
    })

    column_get = api.model('column_get', {
        'id': fields.Integer(required=True, description='board id'),
        'name': fields.String(required=True, description='board name'),
        'status': fields.Integer(required=True, description='is active?'),
        'color': fields.String(required=False, description='hex color code'),
        'icon': fields.String(required=False, description='fa icon'),
        'source': fields.String(required=True, description='manual/external service'),
        'create_at': fields.DateTime(required=True, description='date of creation'),
    })


class BoardDto:
    api = Namespace('board', description='board related operations')
    board_post = api.model('board_post', {
        'name': fields.String(required=True, description='board name'),
        'status': fields.Integer(required=True, description='is active?'),
        'color': fields.String(required=False, description='hex color code'),
        'icon': fields.String(required=False, description='fa icon')
    })

    board_get = api.model('board_get', {
        'id': fields.Integer(required=True, description='board id'),
        'name': fields.String(required=True, description='board name'),
        'status': fields.Integer(required=True, description='is active?'),
        'color': fields.String(required=False, description='hex color code'),
        'icon': fields.String(required=False, description='fa icon'),
        'source': fields.String(required=True, description='manual/external service'),
        'user_id': fields.Integer(required=True, description='user id'),
        'create_at': fields.DateTime(required=True, description='date of creation'),
    })

    board_id = api.model('board_id', {
        'id': fields.Integer(required=True, description='board id'),
        'name': fields.String(required=True, description='board name'),
        'status': fields.Integer(required=True, description='is active?'),
        'color': fields.String(required=False, description='hex color code'),
        'icon': fields.String(required=False, description='fa icon'),
        'source': fields.String(required=True, description='manual/external service'),
        'user_id': fields.Integer(required=True, description='user id'),
        'create_at': fields.DateTime(required=True, description='date of creation'),
        'columns': fields.Nested(ColumnDto.column_get),
    })


class TaskDto:
    api = Namespace('task', description='task related operations')
    task_post = api.model('task_post', {
        'task': fields.String(required=True, description='task'),
        'due_date': fields.DateTime(required=True, description='due date'),
        'color': fields.String(required=True, description='task color'),
        'icon': fields.String(required=True, description='task icon'),
        'column_id': fields.Integer(required=True, description='column id'),

    })

    task_get = api.model('task_get', {
        'id': fields.Integer(required=True, description='task id'),
        'task': fields.String(required=True, description='task'),
        'due_date': fields.DateTime(required=True, description='due date'),
        'color': fields.String(required=True, description='task color'),
        'icon': fields.String(required=True, description='task icon'),
        'is_deleted': fields.Boolean(required=True, description='is deleted?'),
        'user_id': fields.Integer(required=True, description='user id'),
        'column_id': fields.Integer(required=True, description='column id'),
        'create_at': fields.DateTime(required=True, description='creation date'),
    })
