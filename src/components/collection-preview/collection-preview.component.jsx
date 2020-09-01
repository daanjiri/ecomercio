import React from 'react';
import './collection-preview.styles.scss';
//import  CollectionItem from '../collection-item/collection-item.component';
import Slider from '../slider/slider.component';

const CollectionPreview=({title, items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <Slider items={items}/>
        </div>
    )
}

/*<div className='preview'>
{items
.map(({id, ...otherItemProps})=>(
    < CollectionItem key= {id} {...otherItemProps}/>
))}    
</div>*/

export default CollectionPreview;