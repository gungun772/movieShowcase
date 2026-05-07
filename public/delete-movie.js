// Function to delete a movie
async function deleteMovie() {
    const title = prompt("Enter the movie title to delete:").trim();
    if (!title) return alert("Please enter a movie title");

    try {
        const response = await fetch(`http://localhost:3000/delete-movie/${encodeURIComponent(title)}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert("Error: " + errorData.error);
        } else {
            const data = await response.json();
            alert(data.message);
            fetchMovies(); // Refresh the movie list after deletion
        }
    } catch (error) {
        console.error("Error deleting movie:", error);
        alert("Error deleting movie. Please try again.");
    }
}

// Fetch and display the list of movies
async function fetchMovies() {
    try {
        const response = await fetch("http://localhost:3000/addition");
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const movies = await response.json();
        document.getElementById("movies-list").innerHTML = movies.map(movie =>
            `<li class="movie">
                <strong>${movie.title}</strong> (${movie.year}) - ${movie.genre} - 
                Directed by ${movie.director} - Rating: ${movie.rating}/10
                <p>${movie.description}</p>
            </li>`
        ).join("");
    } catch (error) {
        console.error("Error fetching movies:", error);
        alert("Error fetching movies. Please try again later.");
    }
}

// Make sure the event listener is attached to the button
document.getElementById("deleteMovieButton").addEventListener("click", function() {
    deleteMovie();  // Call the deleteMovie function when button is clicked
});

// Fetch and display movies when the page loads
fetchMovies();
