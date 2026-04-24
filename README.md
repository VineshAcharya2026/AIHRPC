
# AIHRPC Portal Setup Instructions

## Backend Setup (FastAPI)
1. Ensure Python 3.8+ is installed.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:8000`. Documentation at `/docs`.

## Frontend Setup (React + Vite)
1. This is a standard Vite project.
2. Run development server:
   ```bash
   npm run dev
   ```
3. The frontend is configured to communicate with the backend at `localhost:8000`.

## Production Deployment
- Set `JWT_SECRET` and `GMAIL_APP_PASSWORD` environment variables.
- Use a production-grade WSGI/ASGI server like Gunicorn with Uvicorn workers.
- Change `ADMIN_EMAIL` to your official address in `main.py`.
