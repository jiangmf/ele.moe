#!/home/nisja123/osugraphs/bin/python3.4
import sys, os

activator = '/home/nisja123/osugraphs/bin/activate_this.py'
with open(activator) as f:
    exec(f.read(), {'__file__': activator})

# Add a custom Python path.
sys.path.insert(0, "/home/nisja123/osugraphs/bin/python3.4")
sys.path.append("/home/nisja123/osugraphs")
# Switch to the directory of your project. (Optional.)
# os.chdir("/home/nisja123/osugraphs")

# Set the DJANGO_SETTINGS_MODULE environment variable.
os.environ['DJANGO_SETTINGS_MODULE'] = "osugraphs.settings"

from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")
