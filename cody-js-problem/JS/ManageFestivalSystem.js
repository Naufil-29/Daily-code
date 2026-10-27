// You will be creating a Movie Festival Management System. Start by initializing the system with the provided data and creating the main function structure.

// Create a variable called festivalData with this exact initial data:


// Create a function called manageFestival that takes two parameters:

// actions (array of strings)
// data (array of objects)
// The function should:

// Process each action in the actions array in sequence
// Create an empty results array
// Create a switch statement with the following initial cases:
// listMovies: adds festivalData.movies to results array
// listVenues: adds festivalData.venues to results array
// listTickets: adds festivalData.tickets to the results array
// listScreenings: adds festivalData.screenings to the results array
// default: adds "Invalid action!" to results array
// Return the results array

const festivalData = {
	movies: [{
		id: 1,
		title: "Inception",
		director: "Christopher Nolan",
		year: 2010,
		mainGenre: "Sci-Fi",
		secondGenre: undefined,
		avgRating: 0,
		available: true
	},
    ],
	venues: [{
		id: 1,
		name: "Main Theater",
		capacity: 200,
	}],
	screenings: [{
		id: 1,
		movieId: 1,
		venueId: 1,
		date: '2023-10-29',
		time: '13:35:00',
		availableSeats: 200
	}],
	tickets: new Set()
};
// [ { screeningId: 2, quantity: 3 }, { screeningId: 2 }, {}, {}]



const data = [{ movieId: 1, venueId: 1, date: "2023-12-25", time: "19:00:00" }, {screeningId: 2, quantity: 5}, { screeningId: 2 }, {}]
const actions = [ "addScreening", "buyTicket", "cancelScreening"];

function manageFestival(actions, data) {
    let results = [];
    
    actions.forEach((action, index) => {
        const currentData = data[index];
        
        switch(action) {
            case "listMovies":
               // Write your code here
                results.push(festivalData.movies)
                break;

            case "listVenues":
               // Write your code here
                results.push(festivalData.venues)
                break;

            case "listTickets":
                // Write your code here
                results.push(festivalData.tickets)
                break;

            case "listScreenings":
                // Write your code here
                results.push(festivalData.screenings)
                break;

            case "addMovie":
                let movieObj = {
                    id : festivalData.movies.length + 1,
                    ...currentData,
                    averageRating: 0,
                    available: true
                }

                festivalData.movies.push(movieObj);
                results.push("Movie added successfully!");
                break;

            case "addVenue":
                let venueObj = { 
                    id : festivalData.venues.length + 1,
                    ...currentData,
                };

                festivalData.venues.push(venueObj);
                results.push("Venue added successfully!")
                break;

            case "addScreening":
                const movie = festivalData.movies.find(m => m.id === currentData.movieId);
                const venue = festivalData.venues.find(v => v.id === currentData.venueId);

                if(!movie || !venue){ 
                    results.push("Movie or venue not found!");
                    break;
                }

                const  existingScreenings = festivalData.screenings.find(s => 
                    s.venueId === currentData.venueId &&
                    s.movieId === currentData.movieId &&
                    s.time === currentData.time
                )

                if(existingScreenings){ 
                    results.push("Screening already exists at this time!");
                    break;
                }

                const screeningObj = { 
                    id: festivalData.screenings.length + 1,
                    ...currentData,
                    availableSeats: venue.capacity
                }

                festivalData.screenings.push(screeningObj);
                results.push("Screening added successfully!");

                break;

            case "buyTicket":

                const screening = festivalData.screenings.find(s => s.id === currentData.screeningId);

                if(!screening){ 
                    results.push("Screening not found!");
                    break;
                }

                if(currentData.quantity > screening.availableSeats){ 
                    results.push("Not enough seats available!");
                    break;
                }

                screening.availableSeats -= currentData.quantity;

                let currentQuantity = screening.availableSeats + currentData.quantity;

                for(let i = 0; i < currentData.quantity; i++){ 
                    let newTicket = `${currentData.screeningId}-${currentQuantity}`;
                    festivalData.tickets.add(newTicket);
                    currentQuantity--;
                };

                results.push("Tickets purchased successfully!");
                break;

                case "rateMovie":
                    const movieExist = festivalData.movies.find(m => m.id === currentData.movieId);

                    if(!movieExist){ 
                        results.push("Movie not found!");
                        break;
                    };

                    if(currentData.avgRating < 0 || currentData.avgRating > 5){ 
                        results.push("Invalid rating! Must be between 1 and 5");
                        break;
                    }

                    movieExist.avgRating = currentData.avgRating;
                    results.push("Rating added successfully!");
                    break;

                case "cancelScreening":
                const screeningIndex = festivalData.screenings.findIndex(s => 
                    s.id === currentData.screeningId
                );
                
                if (screeningIndex === -1) {
                    results.push("Screening not found!");
                    break;
                }
                
                // Remove screening
                festivalData.screenings.splice(screeningIndex, 1);
                
                // Remove related tickets
                const ticketsToRemove = Array.from(festivalData.tickets)
                    .filter(ticket => ticket.startsWith(`${currentData.screeningId}-`));
                    
                ticketsToRemove.forEach(ticket => {
                    festivalData.tickets.delete(ticket);
                });
                
                results.push("Screening cancelled successfully!");
                break;

            default:
                results.push("Invalid action!");
                break
        }
    });
    
    return results;
}

console.log(manageFestival(actions, data))



            