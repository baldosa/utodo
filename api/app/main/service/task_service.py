import uuid
import datetime

from app.main import db
from app.main.model.task import Task
from typing import Dict, Tuple


def save_new_task(data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    new_task = Task(
        name=data['name'],
        status=1,
        color=data['color'],
        icon=data['icon'],
        source='manual',
        user_id=user_id,
        create_at=datetime.datetime.utcnow()
    )
    save_changes(new_task)
    response_object = {
        'status': 'success',
        'message': 'Task created.'
    }
    return response_object, 201


def get_all_tasks(data: Dict[str, str]) -> Tuple[Dict[str, str], int]:
    return Task.query.filter_by(user_id=data['user_id']).all()


def get_task_tasks(task_id, user_id):

    task = Task.query.filter_by(id=task_id, user_id=user_id).first()
    return task


def save_task_changes(task_id, data: Dict[str, str], user_id) -> Tuple[Dict[str, str], int]:
    task = Task.query.filter_by(id=task_id, user_id=user_id).first()
    task.name=data['name']
    task.status=1
    task.color=data['color']
    task.icon=data['icon']
    
    save_changes(task)
    response_object = {
        'status': 'success',
        'message': 'Task updated.'
    }
    return response_object, 201


def save_changes(data: Task) -> None:
    db.session.add(data)
    db.session.commit()

