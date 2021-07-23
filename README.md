# Movie task

😍 Be sure to write comments, including and any assumptions
🧐 We’re most interested to see problem solving and your approach
😇 Keep it simple, keep it DRY, but don’t over complicate or over engineer
🤓 We've added some files and styles to give you a head start - but feel free to blaze your own trail if you prefer
😎 Your time is precious. If you aren’t able to complete all steps, or if you use third party components to speed things up - no worries! Just detail what you’ve prioritised

## Instructions:

1. Break the HTML into multiple components. Don't go to far here - there is no reusability requirement. Just think about distinct purposes.

2. Retrieve the data from the provided json files (in `./public`). We've added stub api code in `./api`.

3. Order the listed movies by popularity (most popular first - **popularity** property).

4. Show the movie poster image (use the **poster_path** property - eg: https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg)

5. Implement genres names in movie card (same style as popularity/rating), comma separate with an 'and' for last if 2 or more - eg `Genres: genreA, genreB and genreC`

6. List out the genres that are present the movie data set

7. Using the genre list added above, add a multiple genres input (checkboxes). Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected, listed movies must have both 'Action' and 'Drama' genres.

8. Add a _minimum_ rating (**vote_average** property) filter with a range between 0 and 10, increments of 0.5 and a default set to 3.

9. Ensure the rating and genre filters work together.

10. Add a filter reset button.
