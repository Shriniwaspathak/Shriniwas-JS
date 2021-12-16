import React, { useContext, useEffect } from 'react'
import { myContext } from '../Context/Context';

const Catogeries = () => {

    const { fetchCategories, categories } = useContext(myContext);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <div className='catogeries'>
            {categories.map((category) => (
                <div key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt='#' />
                    <h4>{category.strCategory}</h4>
                </div>

            ))}

        </div>
    );
};
export default Catogeries;
