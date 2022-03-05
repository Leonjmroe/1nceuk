release: python manage.py migrate
release: python manage.py collectstatic --noinput
web: gunicorn --pythonpath backend server.wsgi --log-file -

