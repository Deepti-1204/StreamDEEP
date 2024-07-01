import React, { useState } from 'react';
import './App.css';

const movies = [
  { id: 1, title: 'Queen Of Tears', description: 'The queen of department stores and the prince of supermarkets weather a marital crisis, until love miraculously begins to bloom again.', poster: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png', category: 'Romantic Comedy' },
  { id: 2, title: 'King The Land', description: 'Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who is known for her irresistible smile, which he cannot stand.', poster: 'https://i.mydramalist.com/wJAkqn_4c.jpg?v=1', category: 'Romantic Comedy' },
  { id: 3, title: 'True Beauty', description: 'Insecure about her appearance, a student uses make-up to conceal her blemishes. However, she soon befriends a boy who sees her for her true self.', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/True_Beauty_TV_series_poster.jpg/220px-True_Beauty_TV_series_poster.jpg', category: 'Romantic Comedy' },
  { id: 4, title: 'Vincenzo', description: 'During a visit to his motherland, a Korean-Italian mafia lawyer gives a conglomerate a taste of its own medicine with a side of justice', poster: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg', category: 'Drama' },
  { id: 5, title: 'Tomorrow', description: 'Made half-human and half-spirit by accident, a young man is employed by grim reapers to carry out special missions.', poster: 'https://m.media-amazon.com/images/M/MV5BZWU5YWI4MzAtNjUwYi00MmFhLWI4MzItOWE5OWZmMjAxMGZmXkEyXkFqcGdeQXVyNDg3OTE3MzU@._V1_.jpg', category: 'Drama' },
  { id: 6, title: 'Business Proposal', description: 'In disguise as her friend, Ha-ri shows up on a blind date to scare away her friends prospective suitor. However, plans go awry when he turns out to be Ha-ri CEO and he makes a proposal.', poster: 'https://upload.wikimedia.org/wikipedia/en/1/19/A_Business_Proposal.jpg', category: 'Romantic Comedy' },
  { id: 7, title: '18 Again', description: 'A 37-year-old Dae-young is on the verge of being divorced with Da-jung finds himself inside his 18-year-old body.', poster: 'https://i.mydramalist.com/xnNnq_4c.jpg?v=1', category: 'Romantic Comedy' },
  { id: 8, title: 'Strong Girl Bong-Soon', description: 'Bong-soon gets hired as a bodyguard to Min-hyuk, a video game company CEO. When she finds herself falling in love with her employer, she gets torn between him and her childhood crush, Guk-doo.', poster: 'https://m.media-amazon.com/images/M/MV5BZWUyYmMyMjktMmFjNC00ZGFiLThjODYtNjQ1MzQyODhmZmVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', category: 'Romantic Comedy' },
  { id: 9, title: 'Extraordinary Attorney Woo', description: 'Woo Young Woo is a young lawyer with Asperger syndrome. She boasts a high IQ, an impressive memory and a wonderfully creative thought process, but she struggles with everyday interactions.', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Strange_Lawyer_Woo_Young-woo.png/250px-Strange_Lawyer_Woo_Young-woo.png', category: 'Drama' },
  { id: 10, title: 'Descendants of the Sun', description: 'A soldier belonging to the South Korean Special Forces falls in love with a beautiful surgeon. However, their relationship is short-lived as their professions keep them apart.', poster: 'https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg', category: 'Drama' },
  { id: 11, title: 'Welcome to Waikiki', description: 'To fund their dream of making a movie, three clueless men open a guest house named Waikiki even though they do not know how to run it.', poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Laughter_in_Waikiki.jpg', category: 'Drama' },
  { id: 12, title: 'Hospital Playlist', description: 'Friends since undergrad school, five doctors remain close and share a love for music while working at the same hospital.', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Hospital_Playlist.jpg/220px-Hospital_Playlist.jpg', category: 'Drama' },
  { id: 13, title: 'Tale Of the Nine Tailed', description: 'Lee Yeon, a mythical creature, strives to protect humans from supernatural threats while searching for the reincarnation of his lost love. He soon crosses paths with a woman bent on exposing him.', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV7BetE95FZdYoG8IiHD6ODJ8BMjH5PQTyw&s', category: 'Action' },
  { id: 14, title: 'Sweet Home', description: 'As humans turn into savage monsters, one troubled teenager and his neighbours fight to survive and to hold onto their humanity', poster: 'https://m.media-amazon.com/images/M/MV5BNWNjMmQ4MzgtOWY2Ny00MTRhLWI3MmYtOWQ1NWJhMjk4MjQyXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_FMjpg_UX1000_.jpg', category: 'Action' },
  { id: 15, title: 'All Of Us Are Dead', description: 'Trapped students must escape their high school which has become ground zero for a zombie virus outbreak.', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/All_of_Us_Are_Dead.jpeg/250px-All_of_Us_Are_Dead.jpeg', category: 'Action' },
  { id: 16, title: 'Squid Game', description: 'Hundreds of cash-strapped contestants accept an invitation to compete in children games for a tempting prize, but the stakes are deadly.', poster: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', category: 'Action' },
  { id: 17, title: 'Vagabond', description: 'A stuntman involved in a tragic airplane crash ends up discovering a national corruption scandal in the process.', poster: 'https://upload.wikimedia.org/wikipedia/en/5/51/Vagabond_2019.jpg', category: 'Action' },
  { id: 18, title: 'D.P', description: 'A young private assignment to capture army deserters reveals the painful reality endured by enlistees during their compulsory calls of duty.', poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NjQyZDQtNmM1YS00MWQwLTk0MmYtNTc3N2ViNTEyNzk0XkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_.jpg', category: 'Action' },

];
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const renderMoviesByCategory = (category) => {
    return movies
      .filter(movie => movie.category === category && movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        </div>
      ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>StreamDEEP</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>
      <main>
        <section className="hero-section">
          <h2>Featured K-Drama</h2>
          <div className="hero-movie">
            <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQV1x6thEMSePxyVEhv1WK9qRhKahtLebAtnW9auYe3B-A-Zza3cwqeKyuSy4DSFr--y-8Q7lTJ3MUSTpDARGGPELg9-AA0RNmZEeHleK5cdmwuk9GbMSqjtyjOXIln-DRwewOc3LKC-ikzaxMUX89L-B.jpg?r=7b4" alt="Queen Of Tears" />
            <div className="hero-movie-info">
              <h3>Queen Of Tears</h3>
              <p>The series depicts the crisis and rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.</p>
            </div>
          </div>
        </section>
        <section className="movies-section">
          <h2>Romantic Comedy</h2>
          <div className="movie-row">
            {renderMoviesByCategory('Romantic Comedy')}
          </div>
        </section>
        <section className="movies-section">
          <h2>Drama</h2>
          <div className="movie-row">
            {renderMoviesByCategory('Drama')}
          </div>
        </section>
        <section className="movies-section">
          <h2>Action</h2>
          <div className="movie-row">
          {renderMoviesByCategory('Action')}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="footer-links">
          <br/>
          <a href="#">Contact Us</a>
        </div>
        <p>&copy; 2024 StreamDeep, Inc.</p>
      </footer>
    </div>
  );
}

export default App;
