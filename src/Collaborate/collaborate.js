import React,{useEffect} from 'react'
import child1 from '../assets/child1.jpg'
import child2 from '../assets/ChildTwo.png'
import child3 from '../assets/ChildThree.jpg'
import child4 from '../assets/ChildFour.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './collaborate.css'
import {FaArrowRight} from 'react-icons/fa'

const Collaborate = () => {
  
  useEffect(() =>{
    AOS.init({duration:2000})
  },[]);

  return (
    <div className='container'>
        <div className='content'>
            <div className='content_heading'>
                    <h2>Let's Collaborate</h2>
            </div>

            <div className='child1' data-aos="fade-up">
                 <div className='child1_content'>
                        <div className='child1_text'>
                            <h1>AI + RPA is what we do</h1>
                            <h2>Future-Proof your business. 
                                Drive efficiency, profitability and deliver 
                                on customer experience</h2>
                        </div>
                        <div className='child1_image'>
                            <img src={child1} alt=''/>
                        </div>
                 </div>
            </div>
            <div className='child1_link' data-aos="fade-up">
              <h3>AI + RPA Automation<FaArrowRight/></h3>
            </div>

            <div className='child2' data-aos="fade-up">
                 <div className='child2_content'>
                        <div className='child2_text'>
                            <h1>Make Bolder Choices</h1>
                            <h2>Digital focused strategies to 
                              realize market-changing ideas</h2>
                        </div>
                        <div className='child2_image'>
                            <img src={child2} alt=''/>
                        </div>
                 </div>
            
            </div>
            <div className='child2_link' data-aos="fade-up">
              <h3>Build Better Apps<FaArrowRight/></h3>
            </div>

            <div className='child3' data-aos="fade-up">
                 <div className='child3_content'>
                        <div className='child3_text'>
                            <h1>Innovate with Speed</h1>
                            <h2>Create higher quality software, deliver
                               on customer expectations and business goals</h2>
                        </div>
                        <div className='child3_image'>
                            <img src={child3} alt=''/>
                        </div>
                 </div>
            </div>
            <div className='child3_link' data-aos="fade-up">
              <h3>DevOps<FaArrowRight/></h3>
            </div>

            <div className='child4' data-aos="fade-up">
                 <div className='child4_content'>
                        <div className='child4_text'>
                            <h1>Embrace Cloud</h1>
                            <h2>With Cloud-First accelerate
                               innovation and optimize performance</h2>
                        </div>
                        <div className='child4_image'>
                            <img src={child4} alt=''/>
                        </div>
                 </div>
            </div>
            <div className='child4_link' data-aos="fade-up">
              <h3>Cloud Services<FaArrowRight/></h3>
            </div>
            <button className='Button'>Get in touch</button>

        </div>
    </div>
  )
}

export default Collaborate
