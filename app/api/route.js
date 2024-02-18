import { NextResponse } from "next/server";

export const GET = async req => {
	const url = new URL(req.url)
	let genre = url.searchParams.get("genre");
	let actor = url.searchParams.get("actor");
	let services = url.searchParams.get("services");
	let minYear = url.searchParams.get("minYear");
	let title = url.searchParams.get("title");
	let id = url.searchParams.get("id");
	genre ? genre = genre.split("|") : genre = false;
	actor ? actor = actor.split("|") : actor = false;
	services ? services = services.split("|") : services = false;
	minYear ? minYear = minYear.split("|") : minYear = false;
	let movies = [
		{
			id: 1,
			title: "The Fablemans",
			cast: ["Michelle Williams", "Paul Dano", "Seth Rogen", "Gabriel LaBelle"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus"],
			genres: ["documentary", "drama", "comedy"],
			tags: ["Documentary", "Drama", "Comedy"],
			year: 2022,
			img: "https://i.ibb.co/b1h3nXX/The-Fablemans.webp",
			imdb_rating: "7.5",
			link: "/films/1"
		},
		{
			id: 2,
			title: "West Side Story",
			cast: ["Ansel Elgort", "Rachel Zegler", "Ariana DeBose", "David Alvarez"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Disney Plus"],
			genres: ["comedy", "musical", "romance", "drama"],
			tags: ["Musical", "Drama", "Comedy"],
			year: 2021,
			img: "https://i.ibb.co/Vpsr2kP/west-side-story.jpg",
			imdb_rating: "7.1",
			link: "/films/2"
		},
		{
			id: 3,
			title: "Ready Player One",
			cast: ["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn", "Lena Waithe"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video", "Netflix"],
			genres: ["sci-fi", "action", "adventure", "drama"],
			tags: ["Sci-fi", "Action", "Adventure"],
			year: 2018,
			img: "https://i.ibb.co/nQxXzZh/Ready-player-one.jpg",
			imdb_rating: "7.4",
			link: "/films/3"
		},
		{
			id: 4,
			title: "The BFG",
			cast: ["Mark Rylance", "Ruby Barnhill", "Penelope Wilton", "Jemaine Clement"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video"],
			genres: ["animation", "kids", "adventure", "action", "fantasy"],
			tags: ["Animation", "Kids", "Adventure"],
			year: 2016,
			img: "https://i.ibb.co/DYjQ7Zp/the-bfg.jpg",
			imdb_rating: "6.3",
			link: "/films/4"
		},
		{
			id: 5,
			title: "The Adventures of Tintin",
			cast: ["Jamie Bell", "Andy Serkis", "Daniel Craig", "Nick Frost"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video", "Netflix"],
			genres: ["animation", "mystery", "adventure", "action", "kids"],
			tags: ["Mystery", "Kids", "Adventure"],
			year: 2011,
			img: "https://i.ibb.co/dk3FPBS/the-adventures-of-tintin.jpg",
			imdb_rating: "7.3",
			link: "/films/5"
		},
		{
			id: 6,
			title: "The Terminal",
			cast: ["Tom Hanks", "Catherine Zeta-Jones", "Stanley Tucci", "Chi McBride"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video"],
			genres: ["comedy", "drama", "romance"],
			tags: ["Comedy", "Drama", "Romance"],
			year: 2004,
			similar_to: ["Flight", "The Secret Life of Walter Mitty", "Wild"],
			img: "https://i.ibb.co/n8Vj73Q/The-Terminal.webp",
			imdb_rating: "7.4",
			link: "/films/6"
		}, 
		{
			id: 7,
			title: "Catch Me If You Can",
			cast: ["Tom Hanks", "Leonardo DiCaprio", "Christopher Walken", "Martin Sheen"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video", "Netflix"],
			genres: ["comedy", "drama", "romance", "adventure", "action"],
			tags: ["Comedy", "Drama", "Action"],
			year: 2002,
			img: "https://i.ibb.co/G0tvxjZ/Catch-me-if-you-can.jpg",
			imdb_rating: "8.1",
			link: "/films/7"
		},
		{
			id: 8,
			title: "Minority Report",
			cast: ["Tom Cruise", "Max von Sydow", "Samantha Morton", "Steve Harris"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video"],
			genres: ["action", "drama", "romance", "sci-fi"],
			tags: ["Sci-fi", "Drama", "Action"],
			year: 2002,
			img: "https://i.ibb.co/HgV9Y5m/minority-report.jpg",
			imdb_rating: "7.6",
			link: "/films/8"
		},
		{
			id: 9,
			title: "E.T. the Extra-Terrestrial",
			cast: ["Henry Thomas", "Peter Coyote", "Robert MacNaughton", "Drew Barrymore"],
			watch_options: ["Youtube", "Canal Plus", "Apple TV", "Amazon Prime Video"],
			genres: ["action", "drama", "adventure", "sci-fi"],
			tags: ["Sci-fi", "Drama", "Action"],
			year: 1982,
			img: "https://i.ibb.co/64G990W/61-E5-F6-R2-KL-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "7.9",
			link: "/films/9"
		},
		{
			id: 10,
			title: "The Shawshank Redemption",
			cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["drama", "crime"],
			tags: ["Prison", "Friendship", "Redemption"],
			year: 1994,
			img: "https://i.ibb.co/YLLgV3D/The-Shawshank-Redemption.jpg",
			imdb_rating: "9.3",
			link: "/films/10"
		},
		{
			id: 11,
			title: "The Godfather",
			cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["crime", "drama"],
			tags: ["Mafia", "Family", "Power"],
			year: 1972,
			img: "https://i.ibb.co/F4Hbfyp/The-Godfather.jpg",
			imdb_rating: "9.2",
			link: "/films/11"
		},
		{
			id: 12,
			title: "The Dark Knight",
			cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["action", "crime", "drama"],
			tags: ["Superhero", "Vigilante", "Psychological"],
			year: 2008,
			img: "https://i.ibb.co/LkhQGGM/The-Dark-Knight.jpg",
			imdb_rating: "9.0",
			link: "/films/12"
		},
		{
			id: 13,
			title: "The Godfather Part II",
			cast: ["Al Pacino", "Robert De Niro", "Robert Duvall", "Diane Keaton"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["crime", "drama"],
			tags: ["Mafia", "Family", "Power"],
			year: 1974,
			img: "https://i.ibb.co/859t8dT/The-Godfather-Part-II.jpg",
			imdb_rating: "9.0",
			link: "/films/13"
		},
		{
			id: 14,
			title: "12 Angry Men",
			cast: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam", "John Fiedler"],
			watch_options: ["Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["drama"],
			tags: ["Courtroom", "Jury", "Justice"],
			year: 1957,
			img: "https://i.ibb.co/z7nsNYs/12-Angry-Men.jpg",
			imdb_rating: "9.0",
			link: "/films/14"
		},
		{
			id: 15,
			title: "Schindler's List",
			cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["biography", "drama", "history"],
			tags: ["Holocaust", "WWII", "True Story"],
			year: 1993,
			img: "https://i.ibb.co/sqMVfk9/Schindlers-List.jpg",
			imdb_rating: "9.0",
			link: "/films/15"
		},
		{
			id: 16,
			title: "The Lord of the Rings: The Return of the King",
			cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Liv Tyler"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["action", "adventure", "drama"],
			tags: ["Fantasy", "Epic", "Quest"],
			year: 2003,
			img: "https://i.ibb.co/TrjXqsK/The-Lord-of-the-Rings-The-Return-of-the-King.jpg",
			imdb_rating: "9.0",
			link: "/films/16"
		},
		{
			id: 17,
			title: "Pulp Fiction",
			cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD", "Netflix"],
			genres: ["crime", "drama"],
			tags: ["Violence", "Nonlinear Narrative", "Cult Film"],
			year: 1994,
			img: "https://i.ibb.co/BPnyfd4/Pulp-Fiction.jpg",
			imdb_rating: "8.9",
			link: "/films/17"
		},
		{
			id: 18,
			title: "The Lord of the Rings: The Fellowship of the Ring",
			cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV"],
			genres: ["action", "adventure", "drama"],
			tags: ["Fantasy", "Epic", "Ring"],
			year: 2001,
			img: "https://i.ibb.co/WskFz03/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
			imdb_rating: "8.9",
			link: "/films/18"
		},
		{
			id: 19,
			title: "The Good, the Bad and the Ugly",
			cast: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach", "Aldo Giuffrè"],
			watch_options: ["Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["western"],
			tags: ["Spaghetti Western", "Treasure Hunt", "Civil War"],
			year: 1966,
			img: "https://i.ibb.co/Hqs49gf/The-Good-the-Bad-and-the-Ugly.jpg",
			imdb_rating: "8.8",
			link: "/films/19"
		},
		{
			id: 20,
			title: "Forrest Gump",
			cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD", "Netflix"],
			genres: ["drama", "romance"],
			tags: ["Inspiring", "Life Journey", "Love"],
			year: 1994,
			img: "https://i.ibb.co/8cQr3zj/Forrest-Gump.jpg",
			imdb_rating: "8.8",
			link: "/films/20"
		},
		{
			id: 21,
			title: "Fight Club",
			cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD", "Disney Plus", "Netflix"],
			genres: ["drama"],
			tags: ["Mind-bending", "Anarchy", "Identity Crisis"],
			year: 1999,
			img: "https://i.ibb.co/C0ZcQxt/Fight-Club.jpg",
			imdb_rating: "8.8",
			link: "/films/21"
		},
		{
			id: 22,
			title: "The Lord of the Rings: The Two Towers",
			cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Liv Tyler"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["action", "adventure", "drama"],
			tags: ["Fantasy", "Epic", "Quest"],
			year: 2002,
			img: "https://i.ibb.co/yhNbkZX/The-Lord-of-the-Rings-The-Two-Towers.jpg",
			imdb_rating: "8.8",
			link: "/films/22"
		},
		{
			id: 23,
			title: "Inception",
			cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD"],
			genres: ["action", "adventure", "sci-fi"],
			tags: ["Dreams", "Reality-Bending", "Heist"],
			year: 2010,
			img: "https://i.ibb.co/ByYqchW/Inception.jpg",
			imdb_rating: "8.8",
			link: "/films/23"
		},
		{
			id: 24,
			title: "Star Wars: Episode V - The Empire Strikes Back",
			cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD", "Disney Plus"],
			genres: ["action", "adventure", "fantasy"],
			tags: ["Space Opera", "Rebellion", "Family"],
			year: 1980,
			img: "https://i.ibb.co/MVM42H1/Star-Wars-Episode-V-The-Empire-Strikes-Back.jpg",
			imdb_rating: "8.7",
			link: "/films/24"
		},
		{
			id: 25,
			title: "The Matrix",
			cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD", "Netflix"],
			genres: ["action", "sci-fi"],
			tags: ["Virtual Reality", "Mind-bending", "Rebellion"],
			year: 1999,
			img: "https://i.ibb.co/BwMQbRZ/The-Matrix.png",
			imdb_rating: "8.7",
			link: "/films/25"
		},
		{
			id: 26,
			title: "GoodFellas",
			cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["biography", "crime", "drama"],
			tags: ["Mafia", "True Story", "Crime Life"],
			year: 1990,
			img: "https://i.ibb.co/HHxGYQz/Good-Fellas.jpg",
			imdb_rating: "8.7",
			link: "/films/26"
		},
		{
			id: 27,
			title: "One Flew Over the Cuckoo's Nest",
			cast: ["Jack Nicholson", "Louise Fletcher", "Will Sampson", "Michael Berryman"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["drama"],
			tags: ["Mental Institution", "Rebellion", "Freedom"],
			year: 1975,
			img: "https://i.ibb.co/0yyynyG/il-570x-N-2429447703-663m.jpg",
			imdb_rating: "8.7",
			link: "/films/27"
		},
		{
			id: 28,
			title: "Seven",
			cast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey", "Gwyneth Paltrow"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["crime", "drama", "mystery"],
			tags: ["Serial Killer", "Detective", "Seven Deadly Sins"],
			year: 1995,
			img: "https://i.ibb.co/VtDBnKK/Seven.jpg",
			imdb_rating: "8.6",
			link: "/films/28"
		},
		{
			id: 29,
			title: "It's a Wonderful Life",
			cast: ["James Stewart", "Donna Reed", "Lionel Barrymore", "Thomas Mitchell"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal Plus", "Canal VOD", "Plex"],
			genres: ["drama", "family", "fantasy"],
			tags: ["Christmas", "Angel", "Life Reflection"],
			year: 1946,
			img: "https://i.ibb.co/PZxfV7R/Its-a-wonderfull-life.webp",
			imdb_rating: "8.6",
			link: "/films/29"
		},
		{
			id: 30,
			title: "Seven Samurai",
			cast: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima", "Yukiko Shimazaki"],
			watch_options: ["Apple TV", "Canal VOD"],
			genres: ["action", "adventure", "drama"],
			tags: ["Samurai", "Epic", "Ronin"],
			year: 1954,
			img: "https://i.ibb.co/ZGCVbJJ/Seven-Samurai.jpg",
			imdb_rating: "8.6",
			link: "/films/30"
		},
		{
			id: 31,
			title: "Ted",
			cast: ["Mark Wahlberg", "Mila Kunis", "Seth MacFarlane", "Joel McHale"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["comedy", "drama"],
			tags: ["Comedy", "Drama", "American"],
			year: 2012,
			img: "https://i.ibb.co/RQXxdX3/61-Cmzn-Rciv-L.jpg",
			imdb_rating: "6.9",
			link: "/films/31"
		},
		{
			id: 32,
			title: "Ted 2",
			cast: ["Mark Wahlberg", "Seth MacFarlane", "Amanda Seyfried", "Jessica Barth"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["comedy"],
			tags: ["Comedy", "Drama", "American"],
			year: 2015,
			img: "https://i.ibb.co/RQ9R4QH/14396138-max.jpg",
			imdb_rating: "6.3",
			link: "/films/32"
		},
		{
			id: 33,
			title: "27 Dresses",
			cast: ["Katherine Heigl", "James Marsden", "Malin Akerman", "Brian Kerwin"],
			watch_options: ["Apple TV", "Youtube", "Amazon Prime Video", "Canal VOD"],
			genres: ["comedy", "romance", "drama"],
			tags: ["Comedy", "Romance", "Drama"],
			year: 2008,
			img: "https://i.ibb.co/VBpV4T1/14307748-max.jpg",
			imdb_rating: "6.1",
			link: "/films/33"
		},
		{
			id: 34,
			title: "The Hangover",
			cast: ["Zach Galifianakis", "Bradley Cooper", "Justin Bartha", "Ed Helms"],
			watch_options: ["Netflix", "Amazon Prime Video", "Youtube", "Apple TV", "Canal VOD"],
			genres: ["comedy", "drama", "adventure"],
			tags: ["Comedy", "Drama", "Adventure"],
			year: 2009,
			img: "https://i.ibb.co/LZ633Lm/the-hangover-movie-poster-essencejac-kowski.jpg",
			imdb_rating: "7.7",
			link: "/films/34"
		},
		{
			id: 35,
			title: "The Hangover Part II",
			cast: ["Bradley Cooper", "Zach Galifianakis", "Ed Helms", "Justin Bartha"],
			watch_options: ["Netflix", "Amazon Prime Video", "Canal VOD"],
			genres: ["comedy", "adventure", "action"],
			tags: ["Comedy", "Adventure", "Action"],
			year: 2011,
			img: "https://i.ibb.co/JHyFMVP/14224511-max.jpg",
			imdb_rating: "6.5",
			link: "/films/35"
		},
		{
			id: 36,
			title: "The Devil Wears Prada",
			cast: ["Anne Hathaway", "Meryl Streep", "Adrian Grenier", "Emily Blunt"],
			watch_options: ["Disney Plus", "Amazon Prime Video", "Canal VOD", "Apple TV", "Youtube", "Canal VOD"],
			genres: ["comedy", "drama"],
			tags: ["Comedy", "Drama", "Power"],
			year: 2006,
			img: "https://i.ibb.co/v3FT83S/s-l1200.jpg",
			imdb_rating: "6.9",
			link: "/films/36"
		},
		{
			id: 37,
			title: "Bridget Jones's Diary",
			cast: ["Renée Zellweger", "Colin Firth", "Hugh Grant", "Gemma Jones"],
			watch_options: ["Netflix", "Amazon Prime Video", "Canal VOD", "Youtube", "Apple TV"],
			genres: ["comedy", "drama", "romance"],
			tags: ["Comedy", "Drama", "Romance"],
			year: 2001,
			img: "https://i.ibb.co/GkyV9w6/61-Us-FZ9-Cia-L-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "6.8",
			link: "/films/37"
		},
		{
			id: 38,
			title: "Bridget Jones: The Edge of Reason",
			cast: ["Renée Zellweger", "Colin Firth", "Hugh Grant", "Gemma Jones"],
			watch_options: ["Netflix", "Canal VOD", "Youtube", "Apple TV"],
			genres: ["comedy", "drama", "romance"],
			tags: ["Comedy", "Drama", "Romance"],
			year: 2004,
			img: "https://i.ibb.co/jJ3K0bb/51-KF4m188l-L-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "6",
			link: "/films/38"
		},
		{
			id: 39,
			title: "Horrible Bosses",
			cast: ["Jason Bateman", "Charlie Day", "Jason Sudeikis", "Steve Wiebe"],
			watch_options: ["Amazon Prime Video", "Canal VOD", "Youtube", "Apple TV"],
			genres: ["comedy", "crime", "action", "adventure"],
			tags: ["Comedy", "Crime", "Action"],
			year: 2011,
			img: "https://i.ibb.co/QD9m9ph/4-OTkcs1-Ux-N60f-Jigyec-Yun-Etz-LY.jpg",
			imdb_rating: "6.9",
			link: "/films/39"
		},
		{
			id: 40,
			title: "Horrible Bosses 2",
			cast: ["Jason Bateman", "Jason Sudeikis", "Charlie Day", "Jennifer Aniston"],
			watch_options: ["Amazon Prime Video", "Canal VOD", "Youtube", "Apple TV"],
			genres: ["comedy", "crime", "action", "adventure"],
			tags: ["Comedy", "Crime", "Action"],
			year: 2014,
			img: "https://i.ibb.co/h9JgBtL/image.jpg",
			imdb_rating: "6.3",
			link: "/films/40"
		},
		{
			id: 41,
			title: "Pitch Perfect",
			cast: ["Anna Kendrick", "Brittany Snow", "Rebel Wilson", "Anna Camp"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV"],
			genres: ["comedy", "music", "romance"],
			tags: ["Comedy", "Music", "Romance"],
			year: 2012,
			img: "https://i.ibb.co/m5fCVPR/pitch-perfect-movie-tie-in.jpg",
			imdb_rating: "7.1",
			link: "/films/41"
		},
		{
			id: 42,
			title: "Bridesmaids",
			cast: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne", "Terry Crews"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video", "Canal Plus"],
			genres: ["comedy", "action", "romance"],
			tags: ["Comedy", "Action", "Romance"],
			year: 2011,
			img: "https://i.ibb.co/jbHjHDw/71tc-Rx-PDnj-L-AC-UF894-1000-QL80.jpg",
			imdb_rating: "6.8",
			link: "/films/42"
		},
		{
			id: 43,
			title: "When Harry Met Sally",
			cast: ["Billy Crystal", "Meg Ryan", "Carrie Fisher", "Bruno Kirby"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video"],
			genres: ["comedy", "drama", "romance"],
			tags: ["Comedy", "Drama", "Romance"],
			year: 1989,
			img: "https://i.ibb.co/HFTJKLr/71-Qk-O5-1-S5-L-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "7.7",
			link: "/films/43"
		},
		{
			id: 44,
			title: "White Chicks",
			cast: ["Marlon Wayans", "Shawn Wayans", "Busy Philipps", "Maitland Ward"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video", "Netflix"],
			genres: ["comedy", "crime", "mystery"],
			tags: ["Comedy", "Crime", "Mystery"],
			year: 2004,
			img: "https://i.ibb.co/SdKT9KM/51h3e-X6-OVh-L-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "5.8",
			link: "/films/44"
		},
		{
			id: 45,
			title: "Cool Runnings",
			cast: ["John Candy", "Leon", "Doug E. Doug", "Rawle D. Lewis"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video", "Disney Plus"],
			genres: ["adventure", "comedy", "family"],
			tags: ["Adventure", "Comedy", "Family"],
			year: 1993,
			img: "https://i.ibb.co/SJhm6Qf/81-L4-bdk-Ev-L-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "7",
			link: "/films/45"
		},
		{
			id: 46,
			title: "Yes Man",
			cast: ["Jim Carrey", "Zooey Deschanel", "Bradley Cooper", "John Michael Higgins"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video"],
			genres: ["comedy", "romance", "drama"],
			tags: ["Comedy", "Romance", "Drama"],
			year: 2008,
			img: "https://i.ibb.co/TYYcFhc/14519854-max.jpg",
			imdb_rating: "6.8",
			link: "/films/46"
		},
		{
			id: 47,
			title: "What Women Want",
			cast: ["Mel Gibson", "Helen Hunt", "Marisa Tomei", "Alan Alda"],
			watch_options: ["Canal VOD", "Youtube", "Apple TV", "Amazon Prime Video"],
			genres: ["comedy", "fantasy", "romance"],
			tags: ["Comedy", "Fantasy", "Romance"],
			year: 2000,
			img: "https://i.ibb.co/ScC4BkK/A1-MEM2nh-Zt-L-AC-UF1000-1000-QL80.jpg[",
			imdb_rating: "6.4",
			link: "/films/47"
		},
		{
			id: 48,
			title: "Flodder",
			cast: ["Nelly Frijda", "Huub Stapel", "René van 't Hof", "Tatjana Simic"],
			watch_options: ["Amazon"],
			genres: ["action", "comedy", "drama"],
			tags: ["Action", "Comedy", "Drama"],
			year: 1986,
			img: "https://i.ibb.co/44bzF3r/rb-QX4kpoyj3-Xj3-Km4f-Pm-WO7edst.jpg",
			imdb_rating: "6.6",
			link: "/films/48"
		},
		{
			id: 49,
			title: "Spy",
			cast: ["Melissa McCarthy", "Rose Byrne", "Jude Law", "Jason Statham"],
			watch_options: ["Youtube", "Amazon Prime Video", "Apple TV", "Canal VOD", "Disney Plus"],
			genres: ["action", "comedy", "adventure", "crime"],
			tags: ["Action", "Comedy", "Adventure"],
			year: 2015,
			img: "https://i.ibb.co/5ngGVh9/816-Gdb-OBy-BL-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "7",
			link: "/films/49"
		},
		{
			id: 50,
			title: "Tammy",
			cast: ["Melissa McCarthy", "Susan Sarandon", "Kathy Bates", "Allison Janney"],
			watch_options: ["Amazon Prime Video", "Apple TV", "Canal VOD"],
			genres: ["comedy", "romance", "road"],
			tags: ["Comedy", "Romance", "Road"],
			year: 2014,
			img: "https://i.ibb.co/Yj4bqBQ/51-i-W6ct-YPL-AC-UF1000-1000-QL80.jpg",
			imdb_rating: "4.9",
			link: "/films/50"
		},
		{
			id: 51,
			title: "The Family Plan",
			cast: ["Mark Wahlberg", "Michelle Monaghan", "Ciarán Hinds", "Zoe Colletti"],
			watch_options: ["Apple TV"],
			genres: ["comedy", "action", "adventure", "crime", "drama"],
			tags: ["Comedy", "Action", "Adventure"],
			year: 2023,
			img: "https://i.ibb.co/mB6XCVK/images-q-tbn-ANd9-Gc-Tf-H3frc-DD2-Kej1-XGI8dk-CGk1-SZpw-Pb-QDm-Udtgplaj-OVYa-Qkz6l.jpg",
			imdb_rating: "6.3",
			link: "/films/51"
		},
		{
			id: 52,
			title: "Oppenheimer",
			cast: ["Cilian Murphey", "Emily Blunt", "Robert Downey Jr.", "Matt Damon"],
			watch_options: ["Apple TV", "Youtube", "Canal Plus", "Amazon Prime Video", "Canal VOD"],
			genres: ["biography", "drama", "history", "thriller"],
			tags: ["Biography", "Drama", "History"],
			year: 2023,
			img: "https://i.ibb.co/MVWxgpt/Fv-UVt3h-Xg-AAx-P1-H-format-jpg-name-900x900.jpg",
			imdb_rating: "8.4",
			link: "/films/52"
		},
		{
			id: 53,
			title: "The Dictator",
			cast: ["Sacha Baron Cohen", "Anna Faris", "Booby Lee", "Megan Fox"],
			watch_options: ["Apple TV", "Youtube", "Canal Plus", "Amazon Prime Video", "Canal VOD"],
			genres: ["comedy", "drama", "adventure"],
			tags: ["Comedy", "Drama", "Adventure"],
			year: 2012,
			img: "https://i.ibb.co/qxcZcYf/The-Dictator-US.jpg",
			imdb_rating: "6.4",
			link: "/films/53"
		},
		{
			id: 54,
			title: "The Trial of the Chicago 7",
			cast: ["Sacha Baron Cohen", "Eddie Redmayne", "Jeremy Strong", "Yahya Abdul-Mateen II"],
			watch_options: ["Netflix"],
			genres: ["history", "drama", "adventure", "thriller"],
			tags: ["Historical", "Drama", "Thriller"],
			year: 2020,
			img: "https://i.ibb.co/HH0kNdM/50896934.jpg",
			imdb_rating: "7.7",
			link: "/films/54"
		},
		{
			id: 55,
			title: "Lift",
			cast: ["Úrsula Corberó", "Kevin Hart", "Gugu Mbatha-Raw", "Sam Worthington"],
			watch_options: ["Netflix"],
			genres: ["action", "comedy", "crime"],
			tags: ["Action", "Comedy", "Crime"],
			year: 2024,
			img: "https://i.ibb.co/Xz3jCmv/MV5-BMWQ1-Nz-Vi-MTQt-Mj-Vh-Ny00-Yz-A0-LTg2-Mz-Yt-Zj-Uy-OWNi-NDI2-Mzhl-Xk-Ey-Xk-Fqc-Gde-QXVy-MDM2-NDM.jpg",
			imdb_rating: "5.4",
			link: "/films/55"
		},
		{
			id: 56,
			title: "Joker",
			cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
			watch_options: ["Apple TV", "Amazon Prime Video", "Canal VOD"],
			genres: ["horror", "thriller", "drama"],
			tags: ["Horror", "Thriller", "Drama"],
			year: 2019,
			img: "https://i.ibb.co/YjmHWt1/220px-Joker-2019-film-poster.jpg",
			imdb_rating: "8.4",
			link: "/films/56"
		},
		{
			id: 57,
			title: "Napoleon",
			cast: ["Joaquin Phoenix", "Vanessa Kirby", "Edouard", "Anna Mawn"],
			watch_options: ["Apple TV"],
			genres: ["history", "adventure", "action", "biography"],
			tags: ["History", "Thriller", "Drama"],
			year: 2023,
			img: "https://i.ibb.co/58KHk1y/99clzx8izw.jpg",
			imdb_rating: "6.5",
			link: "/films/57"
		},
		{
			id: 58,
			title: "Interstellar",
			cast: ["Ellen Burstyn", "Matthew McConaughey", "Mackenzie Foy", "John Lithgow"],
			watch_options: ["Youtube", "Apple TV", "Canal VOD", "Amazon Prime Video"],
			genres: ["sci-fi", "adventure", "drama"],
			tags: ["Adventure", "Sci-fi", "Space"],
			year: 2014,
			img: "https://i.ibb.co/7NLq7Gw/image.png",
			imdb_rating: "8.7",
			link: "/films/58"
		},
		{
			id: 59,
			title: "The Wolf of Wall Street",
			cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey"],
			watch_options: ["Youtube", "Apple TV", "Canal VOD", "Amazon Prime Video"],
			genres: ["biography", "comedy", "crime"],
			tags: ["Biography", "Comedy", "Crime"],
			year: 2013,
			img: "https://i.ibb.co/Jq9r3jV/image.png",
			imdb_rating: "8.2",
			link: "/films/59"
		},
		{
			id: 60,
			title: "Once Upon a Time ... in Holywood",
			cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie", "Emile Hirsch"],
			watch_options: ["Youtube", "Apple TV", "Canal VOD", "Amazon Prime Video", "Netflix"],
			genres: ["comedy", "drama"],
			tags: ["Comedy", "Drama", "60's"],
			year: 2019,
			img: "https://i.ibb.co/z7MYH9r/image.png",
			imdb_rating: "7.6",
			link: "/films/60"
		},
		{
			id: 61,
			title: "Freelance",
			cast: ["John Cena", "Alison Brie", "Juan Pablo Raba", "Christian Slater"],
			watch_options: ["Amazon Prime Video"],
			genres: ["comedy", "drama", "action"],
			tags: ["Action", "Comedy", "Drama"],
			year: 2023,
			img: "https://i.ibb.co/D4vMPmQ/s-l1600.jpg",
			imdb_rating: "5.5",
			link: "/films/61"
		},
		{
			id: 62,
			title: "Bullet Train",
			cast: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson", "Brian Tyree Henry"],
			watch_options: ["Amazon Prime Video", "Youtube", "Apple TV", "Canal VOD"],
			genres: ["comedy", "drama", "action", "thriller"],
			tags: ["Action", "Comedy", "Thriller"],
			year: 2022,
			img: "https://i.ibb.co/Gkx3Y6w/image.png",
			imdb_rating: "7.3",
			link: "/films/62"
		},
		{
			id: 63,
			title: "Role Play",
			cast: ["Kaley Cuoco", "David Oyelowo", "Bill Nighy", "Connie Nielsen"],
			watch_options: ["Amazon Prime Video", "Canal Plus"],
			genres: ["comedy", "drama", "action", "romance"],
			tags: ["Action", "Comedy", "Romance"],
			year: 2023,
			img: "https://i.ibb.co/p4BhKsC/image.png",
			imdb_rating: "5.5",
			link: "/films/63"
		};
		{
			id: 64,
			title: "War Dogs",
			cast: ["Miles Teller", "Jonah Hill", "Steve Lantz", "Gregg Weiner"],
			watch_options: ["Amazon Prime Video", "Canal VOD", "Apple TV", "Youtube"],
			genres: ["biography", "drama", "crime"],
			tags: ["Biography", "Comedy", "Crime"],
			year: 2016,
			img: "https://i.ibb.co/rfctPfy/image.png",
			imdb_rating: "7.1",
			link: "/films/64"
		}
	];
	let filteredArray = [];
	if (genre) {
		for (let i = 0; i < genre.length; i++) {
			for (let j = 0; j < movies.length; j++) {
				for (let k = 0; k < movies[j].genres.length; k++) {
					if (genre[i] == movies[j].genres[k]) {
						filteredArray.push(movies[j]);
					}
				}
			}
		}
	} else {
		filteredArray = movies;
	}
	let filteredArrayTwo = [];
	if (actor) {
		for (let i = 0; i < actor.length; i++) {
			for (let j = 0; j < filteredArray.length; j++) {
				for (let k = 0; k < filteredArray[j].cast.length; k++) {
					if (actor[i] == filteredArray[j].cast[k]) {
						filteredArrayTwo.push(filteredArray[j]);
					}
				}
			}
		}
	} else {
		filteredArrayTwo = filteredArray;
	}
	let filteredArrayThree = [];
	if (services) {
		for (let i = 0; i < services.length; i++) {
			for (let j = 0; j < filteredArrayTwo.length; j++) {
				for (let k = 0; k < filteredArrayTwo[j].watch_options.length; k++) {
					if (services[i] == filteredArrayTwo[j].watch_options[k]) {
						filteredArrayThree.push(filteredArrayTwo[j]);
					}
				}
			}
		}
	} else {
		filteredArrayThree = filteredArrayTwo;
	}
	let filteredArrayFour = [];
	if (minYear) {
		for (let i = 0; i < filteredArrayThree.length; i++) {
			if (filteredArrayThree[i].year > minYear) {
				filteredArrayFour.push(filteredArrayThree[i]);
			}
		}
	} else {
		filteredArrayFour = filteredArrayThree;
	}
	let filteredArrayFive = [];
	if (title) {
		for (let i = 0; i < filteredArrayFour.length; i++) {
			if (filteredArrayFour[i].title.toLowerCase() == title.toLowerCase()) {
				filteredArrayFive.push(filteredArrayFour[i]);
			}
		}
	} else {
		filteredArrayFive = filteredArrayFour;
	}
	let filteredArraySix = [];
	if (id) {
		for (let i = 0; i < filteredArrayFive.length; i++) {
			if (filteredArrayFive[i].id == id) {
				filteredArraySix.push(filteredArrayFive[i]);
			}
		}
	} else {
		filteredArraySix = filteredArrayFive;
	}
	return (NextResponse.json(filteredArraySix));
};
