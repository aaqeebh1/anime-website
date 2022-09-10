import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = ({topRated}) => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault();
        topRated();
        navigate('/anime')
      }
    return (
        <div>
            <h1>Lets render home first</h1>
            <a class="gridel-btn" href="javascript:void(0);" onClick={handleClick}>Top Anime</a>
            <a class="gridel-btn" href="javascript:void(0);">Latest Episodes</a>
            <a class="gridel-btn" href="javascript:void(0);">Top Movies</a>
            <a class="gridel-btn" href="javascript:void(0);">Latest Movies</a>
        </div>
    );
}

export default Home;
