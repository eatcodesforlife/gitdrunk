import React, { useContext, useState, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 
const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ searchText, setSearchText ] = useState('a')
    const [ cocktails, setCocktails ] = useState([])


    const fetchData = useCallback(async() => {
        setIsLoading(true)
        try{
            const res = await fetch(`${url}${searchText}`)
            const data = await res.json()

            const {drinks} = data
            if(drinks){
                const alcoholicDrinks = drinks
                                        .filter((drink) => (
                                            drink.strAlcoholic.toLowerCase() === 'alcoholic'
                                        ))
                                        .map(({ idDrink, strDrink, strGlass, strDrinkThumb, strCategory }) => {
                                            return { 
                                                id: idDrink, 
                                                name: strDrink, 
                                                glass:strGlass, 
                                                image: strDrinkThumb,
                                                category: strCategory 
                                            }
                                        })               
                setCocktails(alcoholicDrinks)
            }else{
                setCocktails([])
            }
            setIsLoading(false)
        }
        catch(err){
            console.log(err)
            setIsLoading(false)
        } 
    }, [searchText])

    useEffect(() => {
        fetchData()
        
    }, [searchText, fetchData])
    
    return <AppContext.Provider
        value={{
            isLoading,
            cocktails,
            setSearchText
        }}>
        {children}
    </AppContext.Provider>
}


export { AppProvider, AppContext }


export const useGlobalContext = () => {
    return useContext(AppContext)
}

