from flask_restx import Api
from flask import Blueprint

from .main.controller.user_controller import api as user_ns
from .main.controller.auth_controller import api as auth_ns
from .main.controller.board_controller import api as board_ns
from .main.controller.column_controller import api as column_ns
from .main.controller.task_controller import api as task_ns



blueprint = Blueprint('api', __name__)
authorizations = {
    'apikey': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization'
    }
}

api = Api(
    blueprint,
    title='uTODO API',
    version='1.0',
    description='Rest api for uTODO client',
    authorizations=authorizations,
    security='apikey'
)

api.add_namespace(user_ns, path='/user')
api.add_namespace(board_ns, path='/board')
api.add_namespace(column_ns, path='/column')
api.add_namespace(task_ns, path='/task')
api.add_namespace(auth_ns)
