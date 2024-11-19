// controllers/distanceController.js
import fetch from 'node-fetch';

export const getDistance = async (req, res) => {
    const { origins, destinations } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Use your actual API key

    if (!origins || !destinations) {
        return res.status(400).json({ error: 'Destinations is required.' });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
            const result = {
                distance: data.rows[0].elements[0].distance.text,
                duration: data.rows[0].elements[0].duration.text,
            };
            res.json(result);
        } else {
            res.status(400).json({ error: 'Could not calculate distance. Please check the address.' });
        }
    } catch (error) {
        console.error("Error fetching data from Google API:", error);
        next(error); // Pass the error to the error handler middleware
    }
};

// New getAutocomplete function for Google Places Autocomplete
export const getAutocomplete = async (req, res) => {
    const { input } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!input) {
        return res.status(400).json({ error: 'Input is required for autocomplete.' });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "OK") {
            // Extract relevant autocomplete predictions and return them
            const predictions = data.predictions.map((prediction) => ({
                description: prediction.description,
                place_id: prediction.place_id,
            }));
            res.json({ predictions });
        } else {
            res.status(400).json({ error: 'Could not fetch autocomplete suggestions. Please try again.' });
        }
    } catch (error) {
        console.error("Error fetching data from Google API:", error);
        next(error); // Pass the error to the error handler middleware
    }
};