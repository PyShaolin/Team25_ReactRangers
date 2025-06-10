// Scheme Retrieval APIs
GET /api/schemes - List all schemes with pagination
GET /api/schemes/location - Get schemes by geographic criteria
GET /api/schemes/offline-bundle - Get schemes bundle for offline storage
GET /api/schemes/{id}/pdf - Generate PDF for a specific scheme

// Geographic Data APIs
GET /api/locations - Get hierarchical location data
GET /api/locations/nearby - Get schemes near coordinates
GET /api/locations/density - Get scheme density by region