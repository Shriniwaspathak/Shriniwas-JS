import react, { createContext, useCallback,useState } from "react";
import axios, { Axios } from "axios";

export const myContext=createContext();

export const AppContext=({children})=>{
     const [meals, setMeals] = useState([]);
     const [categories, setCategories] = useState([]);
     const [randomMeals, setRandomMeals] = useState([]);

     const fetchHomePageMeals = useCallback((serchTerm)=>{
         axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchTerm}`).then(
             res=>{
                 console.log(res.data.meals);
                 setMeals(res.data.meals);

             }
         )

     },[])

     const fetchCategories=useCallback((serchTerm)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(
            res=>{
                console.log(res.data.categories);
                setMeals(res.data.categories);

            }
        )

    },[])

    return <myContext.Provider value={{fetchHomePageMeals,meals,fetchCategories,categories}}>{children}</myContext.Provider>;

};