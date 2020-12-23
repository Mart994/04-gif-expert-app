import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory'
import { Gif } from './componentes/Gif'

export const GiftExpertApp = () => {

    // const categorias = ['One Punch Man', 'Grand Pretender', 'Dr Stone'];
    const [categories, setCategorias] = useState(['One Punch Man'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>
            <ol>
                {categories.map( category=>
                    <Gif 
                        key={ category }
                        category={ category }/>
                    
                )}
            </ol>

        </>
    )
}
