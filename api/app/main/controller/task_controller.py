from flask import request
from flask_restx import Resource, marshal

from app.main.util.decorator import token_required
from ..util.dto import TaskDto
from app.main.service.auth_helper import Auth
from ..service.task_service import get_all_tasks, save_new_task, get_task_tasks, save_task_changes

from typing import Dict, Tuple

api = TaskDto.api
_task_get = TaskDto.task_get
_task_post = TaskDto.task_post


@api.route('/')
class TaskList(Resource):
    @api.doc('list_of_tasks_by_user')
    @token_required
    @api.marshal_list_with(_task_get, envelope='data')
    def get(self):
        """List all the tasks created or shared to the user"""
        user_data = Auth.get_logged_in_user(request)[0]['data']
        return get_all_tasks(data=user_data)

    @api.expect(_task_post, validate=True)
    @api.response(201, 'Task successfully created.')
    @api.doc('create new task')
    @token_required
    def post(self) -> Tuple[Dict[str, str], int]:
        """Creates a new Task """
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_new_task(data, user_id)


@api.route('/<task_id>')
@api.param('task_id', 'The task id')
@api.response(404, 'Task not found.')
class Task(Resource):
    @api.doc('get tasks of a task')
    @token_required
    @api.marshal_with(_task_get)
    def get(self, task_id):
        """get a task given its id"""

        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        task = get_task_tasks(task_id, user_id)
        if not task:
            api.abort(404)
        else:
            return task

    @api.expect(_task_post, validate=True)
    @api.response(201, 'Task successfully updated.')
    @api.doc('update task')
    @token_required
    def put(self, task_id) -> Tuple[Dict[str, str], int]:
        """Updates a Task """
        data = request.json
        user_id = Auth.get_logged_in_user(request)[0]['data']['user_id']
        return save_task_changes(task_id, data, user_id)
