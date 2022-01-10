release: python manage.py migrate
web: gunicorn --pythonpath backend server.wsgi --log-file -
