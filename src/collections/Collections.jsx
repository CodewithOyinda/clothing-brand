import React from 'react'
import lady from './img/Lady.png'
import ImgOne from './img/Image-1.jpeg'
import ImgTwo from './img/Image-2.jpeg'
import ImgThree from './img/Image-3.webp'
import ImgFour from './img/Image-4.jpeg'
import ImgFive from './img/Image-5.jpeg'
import ImgSix from './img/Image-6.jpeg'
import ImgSeven from './img/Image-7.jpeg'
import ImgEight from './img/Image-8.webp'
import ImgNine from './img/Image-9.webp'
import ImgTen from './img/Image-10.webp'
import ImgEleven from './img/Image-11.jpeg'
import ImgTwelve from './img/Image-12.jpeg'
import ImgThirteen from './img/Image-13.jpeg'
import ImgFourteen from './img/Image 14.jpg'
import ImgFIfteen from './img/Image-15.jpeg'
import ImgSixteen from './img/Image-17.jpeg'
import ImgEighteen from './img/Image-18.jpeg'
import ImgNineteen from './img/Image-19.jpeg'
import ImgTwenty from './img/Image-20.jpeg'
import ImgTwentyone from './img/Image-21.webp'
import arrow from './img/kindpng_129879.png'
import '../collections/Collections.css'
import {BiSearch} from 'react-icons/bi';
import { Nav } from '../nav/Nav'
import BottomNav from '../bottomNav/BottomNav'
// import flame from './img/flame.png'

const Collections = () => {
  return (
    <div>
      <Nav/>
        <div className='about-brand'>
          <div className='details'>
          {/* <img src={flame} alt='flame' style={{width:'20px', height:'20px'}}/> */}
        <div className='details-flex'><h4>Absolutely Hot Collections</h4></div>
        <div className='arrow-details'><h1>The Best Place To Find And Buy Amazing <span className='exclusive-text'>Products</span></h1><img src={arrow} alt='arrow-spiral' className='arrow' style={{width:'50px', height:'70px', paddingTop:'20px', paddingBottom:'-21px'}}/></div>
        <h3>Welcome to our clothing store, where fashion meets style!</h3>
        <h3>Our mission is to provide you with the latest trends and styles that will keep</h3>
        <h3>you looking and feeling your best.</h3>
        <div className='btn'>
            <button className='explore'>Explore Now</button><button className='request'>Request A Demo</button>
        </div>
        </div>
        <div className='lady'>
            <img src={lady} alt='lady' style={{width:'500px', height:'550px'}}/>
        </div>
        </div>
       
        <div className='search'>
          <div className='arrow-flex'><h1 style={{fontSize:'50px'}}> <span className='exclusive-text'> Exclusive</span> Products</h1><img src={arrow} alt='arrow-spiral' style={{width:'50px', height:'50px'}}/></div>
          <h4>Search for the latest articles and find amazing products to buy from our huge collection</h4>
          <div className='category'>
          <BiSearch style={{position:'absolute', marginTop:'20px', width:'40px', color:'grey'}}/>
          <input type='text' placeholder='Search Products by Category' className='search-input' />
          <button className='explore-now'>Explore Now</button>
          </div>
        </div>
        <div className='images'>
          <div className='section-1'>
           <div>
            <img src={ImgOne} alt='imgone' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Long Sleeve Jacket</h3>
            <h4>women</h4></div>
            <button>$150</button>
            </div>
           </div>
           <div>
           <img src={ImgTwo} alt='imgtwo' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Jacket with wollen hat</h3>
            <h4>women</h4></div>
            <button>$65</button>
            </div>
           </div>
           <div>
           <img src={ImgThree} alt='imgthree' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Compact fashion t-shirt</h3>
            <h4>women</h4></div>
            <button>$55.99</button>
            </div>
           </div>
          </div>
          <div className='section-2'>
          <div>
            <img src={ImgFour} alt='imgfour' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
             <div><h3>Blue Jins</h3>
            <h4>women</h4></div>
            <button>$50</button>
            </div>
           </div>
           <div>
           <img src={ImgFive} alt='imgfive' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
             <div><h3>Skirts with full setup</h3>
            <h4>women</h4></div>
            <button>$695</button>
            </div>
           </div>
           <div>
           <img src={ImgSix} alt='imgsix' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
             <div><h3>Yellow Hoody</h3>
            <h4>women</h4></div>
            <button>$180</button>
            </div>
           </div>
          </div>
          <div className='section-3'>
          <div>
            <img src={ImgSeven} alt='imgseven' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
             <div><h3>Black t-shirt for women</h3>
            <h4>women</h4></div>
            <button>$20</button>
            </div>
           </div>
           <div>
           <img src={ImgEight} alt='imgeight' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Gown with Red velvet</h3>
            <h4>women</h4></div>
            <button>$350</button>
            </div>
           </div>
           <div>
           <img src={ImgNine} alt='imgnine' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Pink Beauty</h3>
            <h4>women</h4></div>
            <button>$150</button>
            </div>
           </div>
          </div>
          <div className='section-4'>
          <div>
            <img src={ImgTen} alt='imgten' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Jean's stylish Jacket</h3>
            <h4>women</h4></div>
            <button>$245</button>
            </div>
           </div>
           <div>
           <img src={ImgEleven} alt='imgeleven' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Jamdani Saree</h3>
            <h4>women</h4></div>
            <button>$800</button>
            </div>
           </div>
           <div>
           <img src={ImgTwelve} alt='imgtwelve' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Black Jacket</h3>
            <h4>men</h4></div>
            <button>$140</button>
            </div>
           </div>
          </div>
          <div className='section-5'>
          <div>
            <img src={ImgThirteen} alt='imgthirteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Black top with jeans</h3>
            <h4>women</h4></div>
            <button>$120</button>
            </div>
           </div>
           <div>
           <img src={ImgFourteen} alt='imgfourteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Clothes with bag</h3>
            <h4>kids</h4></div>
            <button>$50</button>
            </div>
           </div>
           <div>
           <img src={ImgFIfteen} alt='imgfifteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
           <div className='price'>
            <div><h3>Stylish jeans in lightblue</h3>
            <h4>women</h4></div>
            <button>$100</button>
            </div>
           </div>
          </div>
          <div className='section-6'>
          <div>
            <img src={ImgSixteen} alt='imgsixteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Unkown horizon</h3>
            <h4>men</h4></div>
            <button>$350</button>
            </div>
           </div>
           <div>
           <img src={ImgEighteen} alt='imgeighteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Light tops</h3>
            <h4>women</h4></div>
            <button>$150</button>
            </div>
           </div>
           <div>
           <img src={ImgNineteen} alt='imgnineteen' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Khakhi jeans</h3>
            <h4>women</h4></div>
            <button>$190</button>
            </div>
           </div>
          </div>
          <div className='section-7'>
          <div>
            <img src={ImgTwenty} alt='imgtwenty' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Black full sleeve</h3>
            <h4>women</h4></div>
            <button>$170</button>
            </div>
           </div>
           <div>
           <img src={ImgTwentyone} alt='imgtwentyone' style={{width:'350px', height:'410px', borderRadius:'0.3rem'}}/>
            <div className='price'>
            <div><h3>Formal for men</h3>
            <h4>women</h4></div>
            <button>$490</button>
            </div>
           </div>
          </div>
          <BottomNav/>
        </div>
    </div>
  )
}

export default Collections