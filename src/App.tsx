import './App.scss';
import { FC, useEffect, useState } from 'react';
import circleY from './assets/cirY.png';
import circleB from './assets/cirB.png';
import circleR from './assets/cirR.png';

interface Props {
  food: number,
  shopping: number,
  movies: number,
}

const App: FC<Props> = ({ food, shopping, movies }: Props) => {

  const [progress, setProgress] = useState({
    food: 0,
    shopping: 0,
    movies: 0
  });

  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  function findRatios(totalSpent: number){
    let foodR = (food / totalSpent)*100;
    let shoppingR = (shopping / totalSpent)*100;
    let moviesR = (movies / totalSpent)*100;
    setProgress({ 
      food: foodR,
      shopping: shoppingR,
      movies: moviesR
    });
    setLoading(false);
  } 

  useEffect(() => {
    let totalSpent = food+shopping+movies;
    setTotalSpent(totalSpent);
    findRatios(totalSpent);
  // eslint-disable-next-line
  }, [])

  return loading ? <div>Loading...</div> : 
  <div className='d-flex justify-content-center'>
    <div className='card mt-5 shadow'>
      <div className='card-body'>
        <div className='row'>
          <div className='col text-white fs-6 mt-1'>Your total spend</div>
          <div className='col text-end position-relative text-white'><span className='border-bottom pb-1 border-2'>this week</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down ms-2" height={15} viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <div className='fs-6 text-white mt-3'>SAR<span className='ms-2 fs-2 fw-light'>{totalSpent}</span></div>
        <div className="progress mt-3">
          <div className="progress-bar color-food" role="progressbar" aria-label="Segment one" style={{ 'width': `${progress?.food}%` }} ></div>
          <div className="progress-bar color-shopping" role="progressbar" aria-label="Segment two" style={{ 'width': `${progress?.shopping}%` }} ></div>
          <div className="progress-bar color-movies" role="progressbar" aria-label="Segment three" style={{ 'width': `${progress?.movies}%` }}></div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 text-white'>
            <span className='circle-text fw-light'><span><img src={circleY} width={8} alt='' /></span> Food</span>
            <span className='circle-text fw-light ms-3'><span><img src={circleB} width={8} alt='' /></span> Shopping</span>
            <span className='circle-text fw-light ms-3'><span><img src={circleR} width={8} alt='' /></span> Movies</span>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default App;
