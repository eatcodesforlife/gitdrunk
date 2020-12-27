import React from 'react'
import { Link } from 'react-router-dom'

const CocktailInfo = ({name, glass, instructions, recipe, image, category}) => {
    const ingredient = recipe.filter((re) => re !== null)
    return (
        <section className='section cocktail-section'>            
            <h2 className='section-title'>{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                <p>
                    <span className="drink-data">
                        name :
                    </span>
                    {name}
                </p>
                <p>
                    <span className="drink-data">
                        category :
                    </span>
                    {category}
                </p>
                <p>
                    <span className="drink-data">
                        glass :
                    </span>
                    {glass}
                </p>
                <p>
                    <span className="drink-data">
                        ingredient :
                    </span>
                    {
                        ingredient.map( (re, index) => {
                                if( re === ingredient[ingredient.length - 1]){
                                    return <span key={index}>
                                     {re}.
                                    </span> 
                                }
                                return <span key={index}>
                                     {re}, 
                                </span> 
                            })   
                    }
                </p>
                <p>
                    <span className="drink-data">
                        instructions :
                    </span>
                    {instructions}
                </p>
                </div>
            </div>
            <Link to='/' className='btn btn-primary'>
                home
            </Link>
        </section>
    )
}

export default CocktailInfo
