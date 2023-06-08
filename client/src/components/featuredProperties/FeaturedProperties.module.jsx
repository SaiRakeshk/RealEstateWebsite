import React from 'react'
import { useEffect} from 'react'
import {useState} from 'react'
import {request} from '../../util/fetchAPI'
import img from '../../assets/estate3.jpg'
import person from '../../assets/persin.jpg'
import {Link} from 'react-routuer-dom'
import {FaBed,FaSquareFull} from 'react-icons/fa'
import classes from './FeaturedProperties.module.css'
const FeaturedProperties =()=>{
    const [featuredProperties,setFeaturedProperties]=useState([])
    useEffect(()=>{
        const fetchFeatured =async()=> {
            try{
            const data = await request('/property/find/featured','GET')
            setFeaturedProperties(data)
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchFeatured()
    },[])
    return(
        <div className={classes.container}>
        <div className={classes.wrapper}>
        <div className={classes.titles}>
        <h5>Properties you may like</h5>
        <h2>Our Featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
            {feturedProperties?.map((property)=>{
                <div key={property.id} className={classes.featuredProperty}>
                    <Link to={' /propertyDetail/${property._id}'} className={classes.imgContainer}>
                        <img src={img} alt=""/>
                    </Link>
                    <div className={classes.details}>
                        <div className={classes.priceAndOwner}>
                            <span className={classes.price}>₹{property?.price}</span>
                            <img src={person} className={classes.owner}/>
                        </div>
                        <div className={classes.moreDetails}>
                            <span>{property?.beds}beds<FaBed className={classes.icon}/></span>
                            <span>{property?.sqmeters}sqare meters<FaSquarereFull className={classes.icon}/></span>
                            
                            </div>               
                                 </div>
                </div>
            })}
        </div>
        </div>
        
        
        </div>
        
    )
}
export default FeaturedProperties