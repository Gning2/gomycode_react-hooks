import React, {useState} from 'react'
import MovieCard from './MovieCard';
import  'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import '../style/Style.css'

function MovieList() {
  const [movies,setMovies] = useState([
    {
      id: 1,
      title: 'Blacklight',
      description: "Travis Block, un agent du FBI, doit faire taire un autre agent qui souhaite révéler à la presse les méthodes du Bureau...",
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTYN6jyzEliSo4XqDEvFpE3nya3FRkT9DtQ&usqp=CAU',
      rating: 3.5
    },
    {
      id: 2,
      title: "Hunter's Player",
      description: 'Tueur à gages solitaire et implacable, Lucas reçoit pour nouvelle mission de tuer Ella, une jeune fille dont les parents...',
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUcJYa6Pfi5kuYtTlu6fXd8BsSPmEczF2rQ&usqp=CAU",
      rating: 1.5
    },
    {
      id: 3,
      title: 'The women king',
      description: 'Dans les années 1800, un groupe de guerrières entièrement féminines protège le royaume africain...',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVNIouhOh4V3kMdgM284YxAmaIVRw6lX66w&usqp=CAU',
      rating: 4.5
    },
    {
      id: 4,
      title: 'Black panther : WAKANDA FOREVER',
      description: "La reine Ramonda, Shuri, M'Baku, Okoye et la Dora Milaje se battent pour protéger leur nation...",
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNWktcUgYwv8CNJ7_VKN5Go2--4ydf4StOQ&usqp=CAU',
      rating: 5
    },
    {
      id: 5,
      title: 'Quantumania',
      description: 'Les super-héros et partenaires Scott Lang et Hope Van Dyne, alias Ant-Man et la Guêpe, vont vivre de nouvelles aventures...',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2boC9KdQjaEXoPjR_YgzRNvysWoIvKYvoA&usqp=CAU',
      rating: 2.6
    },
    {
      id: 6,
      title: 'Scream 6',
      description: 'Les survivants des derniers meurtres de Ghostface, les sœurs Carpenter et les jumeaux Meeks, quittent Woodsboro...',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UnS2byPiuAwjjOBHRcCEZzdGywR3ggQDPw&usqp=CAU',
      rating: 3.4
    },
    {
      id: 7,
      title: 'La vie scolaire',
      description: "Samia, une jeune CPE, débarque d'Ardèche pour un poste dans un établissement scolaire réputé difficile à Saint Denis...",
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgOw0inp836Q7fnZn5CNTeIbCCAqZHFmvkw&usqp=CAU',
      rating: 5
    }
    ,
    {
      id: 8,
      title: 'Banlieusards',
      description: "Trois frères issus d'une banlieue sensible de la région parisienne. Soulaymaan, élève avocat à Paris, réussit brillamment ses études...",
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKozU7DeIr_nTgtFqY_pUZ7e5QlRNUpIK8w&usqp=CAU',
      rating: 4.5
    }
  ]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('');

  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearchRating = (event) => {
    setSearchRating(event.target.value);
  };
// Ajout d'un nouveau film
  const [formData, setFormData] = useState({ title: "", description: "", posterURL: "", rating: "" });
  const handleAddMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      id: movies.length + 1,
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL,
      rating: formData.rating
    };
    setMovies([...movies, newMovie]);
    setFormData({ title: "", description: "", posterURL: "", rating: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMovie(event);
  };
//Filtre
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    movie.rating >= searchRating
  );
  return (
    <div>
      <Navbar />
      <div id="movie-add" className='container'>
        <h5>Création de nouveau film</h5>
        <form onSubmit={handleSubmit}>
          <div className="d-flex mb-3">
            <div className="form-group col-4">
              <label htmlFor="title">Titre:</label>
              <input className='form-control' type="text" id="title" required value={formData.title} onChange={(event) => setFormData({...formData, title: event.target.value})} />
            </div>
            <div className="form-group desc col-6">
              <label htmlFor="description">Description:</label>
              <input className='form-control' type="text" id="description" required value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})} />
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="form-group col-6">
              <label htmlFor="posterURL">Poster URL:</label>
              <input className='form-control' type="text" id="posterURL" required value={formData.posterURL} onChange={(event) => setFormData({...formData, posterURL: event.target.value})} />
            </div>
            <div className="form-group ratingdiv col-4">
              <label htmlFor="rating">Note:</label>
              <input className='form-control' type="number" id="rating" required value={formData.rating} onChange={(event) => setFormData({...formData, rating: event.target.value})} />
            </div>
          </div>
          <button className='btn btn-success' type="submit">Ajouter</button>
        </form>
      </div>
      <div className='d-flex container justify-content-between mt-4 '>
        <div className="filterTitle">
          <h5>Filtres</h5>
        </div>
      <div className="filters d-flex">
        <input
          type="text"
          placeholder="Rechercher par titre"
          value={searchTitle}
          onChange={handleSearchTitle}
          className='form-control'
        />
        <input
          type="number"
          placeholder="Note minimale"
          value={searchRating}
          onChange={handleSearchRating}
          className='form-control mx-4'
        />
      </div>
    </div>
      <div className="d-flex justify-content-evenly flex-wrap mt-4 mb-3">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieList