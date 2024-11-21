# Create and add content to start.sh
echo '#!/bin/bash
# Start the React frontend
cd frontend && npm start &
# Wait a bit for the frontend to start
sleep 5
# Start the Django backend
python manage.py runserver 0.0.0.0:8000' > start.sh

# Make the script executable
chmod +x start.sh