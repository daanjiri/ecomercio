import React from 'react';
import './slider.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import {ReactComponent as ArrowNext} from '../../assets/arrowNext.svg';
import {ReactComponent as ArrowPrev} from '../../assets/arrowPrev.svg';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.myRef= React.createRef();
    }

    handleNext = () =>{
      const collectionLen = this.myRef.current.children.length;
      const sizeItem = this.myRef.current.children[0].scrollWidth;
      const slider = this.myRef.current
      console.log(sizeItem*collectionLen)
      

      console.log(slider.scrollLeft,'1next')
    
      if(slider.scrollLeft>=((sizeItem*collectionLen)-slider.offsetWidth)){
        console.log(slider.scrollLeft,'2next')
        slider.scrollLeft = 0;
      }else{
        slider.scrollLeft += slider.scrollWidth/collectionLen;
      }
      console.log(slider.scrollLeft,'3next');
    } 

    handlePrev = () => {
     
      const collectionLen = this.myRef.current.children.length;
      const slider = this.myRef.current
      console.log(slider.scrollWidth,'width')
      console.log(slider.scrollWidth/collectionLen)
      if(slider.scrollLeft<=0){
        console.log(slider.scrollLeft,'1prev')
        slider.scrollLeft = slider.scrollWidth;
        console.log(slider.scrollLeft,'2prev')
      }else{
        slider.scrollLeft -= slider.scrollWidth/collectionLen;
        console.log(slider.scrollLeft,'3prev')
      }

    }

    render(){
    const {items} = this.props;
        return(
            <div className='slider'>

              <ArrowPrev className='arrow' onClick={this.handlePrev}/>

                <div className={`slider-images`} ref={this.myRef}>
                    {items.map((item)=>(<CollectionItem key={item.id} item={item}/>))}
                </div>

              <ArrowNext className='arrow' onClick={this.handleNext}/>

            </div>
            
        )
    }
} 
   
//{items.map(({id,...otherItemProps})=>(<CollectionItem key={id} {...otherItemProps}/>))}

export default Slider;

// 'transform':`translateX(-${this.state.index*(100/items.length)}%)`