import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/Gif';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {categories.map( category =>
                    <GifGrid
                        key={ category }
                        category={ category }/>
                    
                )}
            </ol>

        </>
    )
}
