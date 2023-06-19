import os.path, os
import django_heroku
from pathlib import Path
import os
from dotenv import load_dotenv
import dj_database_url


load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.environ.get('DJANGO_HEROKU_SECRET_KEY')
DEBUG = True 
ALLOWED_HOSTS = ['*']

CORS_ALLOW_ALL_ORIGINS = True

X_FRAME_OPTIONS = 'ALLOW-FROM https://www.youtube.com'


# # # Production code -------
# SECURE_SSL_REDIRECT = True
# SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# # Check if the app is running in production
# IS_PROD = os.environ.get('IS_PROD', False)

# # If the app is running in production, enable HTTPS redirect
# if IS_PROD:
#     SECURE_SSL_REDIRECT = True
#     SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'apps.accounts',
    'apps.items',
    'apps.purchase',
    'apps.mail',
    'djoser',
    'storages',
    'corsheaders',
    # 'csp',
] 


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'csp.middleware.CSPMiddleware',
]


DJOSER = {
    "USER_ID_FIELD": "username"
}


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
       # 'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
       # 'rest_framework.permissions.IsAuthenticated',
    ]
}


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'../frontend/build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# Local DB
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}




DJANGO_ENV = os.getenv('DJANGO_ENV')

if DJANGO_ENV == 'production':
    DATABASES = {
        'default': dj_database_url.config(default=os.environ.get('JAWSDB_URL'))
    }
    DATABASES['default']['ENGINE'] = 'django.db.backends.mysql'
    DEFAULT_FILE_STORAGE = 'backend.apps.items.ItemStorage'
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
    DEFAULT_FILE_STORAGE = 'backend.apps.items.ItemDevStorage'



WSGI_APPLICATION = 'server.wsgi.application'
ROOT_URLCONF = 'server.urls'


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST')
EMAIL_USE_TLS = True #False
EMAIL_PORT = 587 #465
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')




# CSP_FRAME_SRC = ("'self'", "'unsafe-inline'", "https://youtube.com")
# CSP_SCRIPT_SRC = ("'self'", "'unsafe-inline'", "https://youtube.com")



django_heroku.settings(locals())

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, '../frontend/build/static')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ---- AWS -----

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
AWS_S3_CUSTOM_DOMAIN = os.environ.get('AWS_S3_CUSTOM_DOMAIN')                                 
AWS_DEFAULT_ACL = os.environ.get('AWS_DEFAULT_ACL')     

DEFAULT_FILE_STORAGE = 'backend.apps.items.storages.ItemStorage'

MEDIA_URL = '/mediafiles/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'mediafiles')

