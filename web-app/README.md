# AI Plant Disease Detector - Web App

A comprehensive web application for detecting plant diseases using AI/ML technology.

## Features

✅ **User Authentication**
- Secure registration and login
- JWT-based authentication
- User profile management

✅ **Image Upload & Analysis**
- Upload plant images for disease detection
- Real-time AI analysis
- Confidence scoring

✅ **Disease Database**
- Comprehensive disease information
- Symptoms, treatments, and prevention methods
- Severity classification

✅ **Prediction History**
- Track all previous predictions
- View analysis results
- History management

✅ **Dashboard**
- Statistics and analytics
- Prediction trends
- Quick access to features

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- React Router for navigation
- Zustand for state management
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- Multer for file uploads
- Express Validator for input validation

### Database
- MongoDB
- Collections: Users, Predictions, Diseases

## Installation

### Prerequisites
- Node.js 16+
- MongoDB

### Setup

1. **Clone and navigate to the project**
```bash
cd web-app
```

2. **Install dependencies**
```bash
npm install
cd server && npm install
cd ../client && npm install
```

3. **Setup environment variables**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and other configs
```

4. **Start the development servers**
```bash
cd ..
npm run dev
```

This will start both frontend (port 3000) and backend (port 5000).

## Project Structure

```
web-app/
├── server/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   └── server.ts        # Main server file
│   ├── dist/                # Compiled JavaScript
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Zustand stores
│   │   └── main.tsx         # Entry point
│   ├── public/              # Static assets
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Predictions
- `GET /api/predictions/:userId` - Get user predictions
- `POST /api/predictions` - Create new prediction
- `GET /api/predictions/detail/:id` - Get prediction details

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Diseases
- `GET /api/diseases` - Get all diseases
- `GET /api/diseases/:id` - Get disease details
- `POST /api/diseases` - Create disease (admin)

## Development

### Run in development mode
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Run tests
```bash
cd server && npm test
```

## Contributing

Contributions are welcome! Please follow the existing code structure and style.

## License

MIT
