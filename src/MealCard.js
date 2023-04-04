import React from 'react';

const MealCard = ({ meal }) => {
    console.log(meal);

    const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = meal;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="h-[300px]"><img className="w-full" src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between item-center">
                    <div>
                        <h2 className="card-title">{strMeal}</h2>
                        Catagory <div className="badge badge-primary"> :{strCategory}</div>
                    </div>
                    Origin <div className="badge badge-outline"> :{strArea}</div>
                </div>
                <p>{strInstructions.slice(0, 100)}...<span className="text-grey-5000 font-bold cursor-pointer">Read More</span>{" "}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;