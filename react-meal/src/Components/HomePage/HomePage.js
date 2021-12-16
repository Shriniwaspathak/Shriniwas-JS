import React, { useState, useContext, useCallback } from 'react';
import './homepage.scss'
import { myContext } from '../Context/Context';

const HomePage = () => {
    const [serchTerm, setSearchTerm] = useState('');

    const { fetchHomePageMeals, meals } = useContext(myContext);

    const fetchMeal = useCallback(() => {
        fetchHomePageMeals(serchTerm);
    }, [serchTerm, fetchHomePageMeals]);

    return (
        <div className='Home'>
            <div className='Home-search'>
                <input type='text' placeholder='Type a meal name...' value={serchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={fetchMeal}>Serach Meal</button>
            </div>
            <div
                className='Home-grid'>
                {meals ? (
                    meals.map((meal) => {
                        <div className='Home-meal' key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt='#' />
                            <h4>{meal.strMeal}</h4>
                        </div>
                        console.log(meal.strMeal);
                    })
                ) : (
                    <h2>No Melas Found....-:)</h2>
                )}</div>
        </div>
    );
};

export default HomePage;
