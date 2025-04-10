
# Movie Explorer Application

## Summary Exercise (Lesson 22)

### Description
Build an interactive **Movie Explorer Application** using Angular. This project demonstrates modular architecture, custom SCSS styling, component separation, and the use of custom pipes.

### Objectives
- Practice component separation
- Implement custom pipes
- Utilize dynamic SCSS styling based on data
- Manage user interactions and navigation

### Data Model
Define a movie model with the following fields:
- `id`: Unique identifier for each movie
- `title`: Movie title
- `description`: Short description
- `posterImage`: URL to the movie poster
- `imdbLink`: IMDb page URL
- `durationMinutes`: Length of the movie in minutes
- `genre`: Genre(s) of the movie
- `rating`: Movie rating (0-5)

### Components
Your application should contain at least:
- **MovieListComponent**: Displays the full list of movies
- **MovieItemComponent**: Displays details for an individual movie

### Custom Pipe
Create a custom pipe to display movie durations in a human-friendly format (`2h 10m` instead of `130` minutes).

### Custom Styling
- Use SCSS to style movies dynamically based on genre or rating.
- Implement visual feedback to indicate a selected movie.

### User Interaction
- Clicking a movie item visually marks it as selected.
- Clicking on the movie poster or a dedicated link/button opens the IMDb page in a new tab.

---

## Mock Data (movies.json)

```json
[
  {
    "id": 1,
    "title": "Inception",
    "description": "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past crimes.",
    "posterImage": "https://m.media-amazon.com/images/I/51s+9xX7pqL._AC_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt1375666/",
    "durationMinutes": 148,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "The Shawshank Redemption",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    "posterImage": "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0111161/",
    "durationMinutes": 142,
    "genre": ["Drama"],
    "rating": 9.3
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "description": "When the menace known as the Joker wreaks havoc, Batman must accept one of the greatest psychological tests.",
    "posterImage": "https://m.media-amazon.com/images/I/51Cb-cT++eL._AC_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0468569/",
    "durationMinutes": 152,
    "genre": ["Action", "Crime", "Drama"],
    "rating": 9.0
  },
  {
    "id": 4,
    "title": "Forrest Gump",
    "description": "The life journey of Forrest Gump, a slow-witted yet kind-hearted man from Alabama.",
    "posterImage": "https://m.media-amazon.com/images/I/61+qfF2EviL._AC_SY679_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0109830/",
    "durationMinutes": 142,
    "genre": ["Drama", "Romance"],
    "rating": 8.8
  },
  {
    "id": 5,
    "title": "The Matrix",
    "description": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    "posterImage": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0133093/",
    "durationMinutes": 136,
    "genre": ["Action", "Sci-Fi"],
    "rating": 8.7
  },
  {
    "id": 6,
    "title": "Interstellar",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "posterImage": "https://m.media-amazon.com/images/I/71yP0kESQkL._AC_SY679_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0816692/",
    "durationMinutes": 169,
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "rating": 8.7
  },
  {
    "id": 7,
    "title": "The Godfather",
    "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    "posterImage": "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0068646/",
    "durationMinutes": 175,
    "genre": ["Crime", "Drama"],
    "rating": 9.2
  }
]
```
