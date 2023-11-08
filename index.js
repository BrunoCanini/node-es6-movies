const arrayObj = [
    {
        title: "Interstellar",
        year: 2014,
        genre: "fantascienza",
        rating: 10,
        type: "movie"
    },
    {
        title: "Il signore degli anelli",
        year: 1995,
        genre: "fantascienza",
        rating: 9,
        type: "movie"
    },
    {
        title: "Blade",
        year: 1998,
        genre: "avventura",
        rating: 8,
        type: "movie"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "fantasy",
        rating: 8,
        type: "tv",
        season: 4
    },
    {
        title: "Lupin",
        year: 2021,
        genre: "avventura",
        rating: 7,
        type: "tv",
        season: 2
    }

]

// console.log(arrayObj);

// creazione classi ---------------------------------------------------------------------------------------------------------------------------

class Movie {
    
    constructor (title, year, genre, rating, type){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
    toString() {
        return `${this.title} è un ${this.type} di genere ${this.genre}.E' stato rilasciata nel ${this.year} ed ha un voto di ${this.rating}.`
    }
}

// const film = new Movie("titolo", 2000, "avventura", 8, "movie");
// console.log(film.toString());

class TvSeries extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons;
    }
    toString() {
        return `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons}. Ha un voto di ${this.rating}.`
    }
}

// const prova = new TvSeries("titolo", 2000, "avventura", 8, "movie", 2);
// console.log(prova.toString());

// mappiamo l array per definire le istanze--------------------------------------------------------------------------------------------------
const arrayMap = arrayObj.map(function(i){
    // console.log(i);
    if(i.type == "movie"){
        return new Movie (i.title, i.year, i.genre, i.rating, i.type);
    } else if (i.type == "tv"){
        return new TvSeries (i.title, i.year, i.genre, i.rating, i.type, i.season);
    }
})

console.log(arrayMap);

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere ------------------------------------------

function mediaVoti(array, genre){
    let arrayFiltrato = array.filter((el)=> el.genre === genre );
    // console.log(arrayFiltrato);

    counter = 0;

    for (let i = 0; i < arreyFiltrato.length; i++) {
        const element = arreyFiltrato[i];
        counter += element.rating
    }

    counterFinale = counter / arreyFiltrato.length;
    // console.log(counter);
    console.log(counterFinale);

    return counterFinale
}

// mediaVoti(arrayObj, "fantascienza")

// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano -------------------------------------

function generiFilm(array){

    const arrayGeneri = [] ;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!arrayGeneri.includes(element.genre)){
            arrayGeneri.push(element.genre)
        }
    }

    console.log(arrayGeneri)
    return arrayGeneri
}

generiFilm(arrayObj);

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.

// function filterGenre(array, genre){

//     const arrayFiltrato = array.filter((el)=> {
//         if (el.genre == genre){
//             return true;
//         } else {
//             return false;
//         }
//     })

//     console.log(arrayFiltrato)

// }

// filterGenre(arrayObj, "fantascienza");

function genreFilter(genre) {
    const videoDescription = [];
    arrayMap.forEach(e => {
        if (e.genre === genre) {
            videoDescription.push(e.toString());
        }
    })
    return console.log(videoDescription);
}

genreFilter("fantascienza");
