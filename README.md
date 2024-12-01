
# Backend for Personal Portfolio Website

This repository contains the backend for my personal portfolio website. The backend provides APIs for contact form submissions, distance calculations, and autocomplete suggestions.

## Features

- **Contact Form API**: Stores messages from the contact form in MongoDB.
- **Distance Calculator**: Fetches distances using Google Maps Distance Matrix API.
- **Autocomplete Suggestions**: Fetches address suggestions using Google Places API.

## Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- dotenv for environment variable management

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <backend-repo-url>
   cd <backend-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Contact API
- **POST** `/api/contact`: Saves contact form data to MongoDB.

### Distance API
- **GET** `/api/location/distance`: Fetches distance between two locations.
  - **Params**: `origins`, `destinations`

### Autocomplete API
- **GET** `/api/location/autocomplete`: Fetches address suggestions.
  - **Params**: `input`

## Folder Structure

- `routes`: Defines API endpoints.
- `controllers`: Contains logic for handling API requests.
- `models`: Defines the MongoDB schema for the contact form.

## License

This project is licensed under the MIT License.
