import React from 'react';
import './Feed.css';
import Umesh from './umesh.png'
import Computer from './computer.png';
import { Button  } from '@material-ui/core';
import Man from './man.png';
// import DateRangeIcon from '@material-ui/icons/DateRange';


function Feed() {
    return (
      
        <div className='feed' >
            <div className='feed_header'>
                <h2> Home</h2>
                <h5>0 Tweets</h5>

            </div>
            <div className='cover'>
                <img className="cover_img" src={Computer} />

                <img src={Umesh} className='profile_img' />
                <div className='last_cover'>
                    <div className='profile_text'>
                        <h2>Umesh</h2>
                        <h4>@Umesh13375512</h4>
                        <h4>Joined February 2021</h4>
                        <h4>0 Following
                            0 Followers</h4>
                    </div>
                    <div className='cover_line'>
                        <h3>Tweets</h3>
                        <h3>Tweets&replies</h3>
                        <h3>Media</h3>
                        <h3>Likes</h3>
                    </div>
                </div>
                {/* <div className='follow'>
                    <h2>Who to follow</h2>
                </div> */}
                <div className='last--div'>
        <h2>Who to follow</h2>
        <hr></hr>
        <div className='feed2'>
          <div className='feedbar'>
             <img className='img' src={Man}/>
             <div className="text-content">
            <h4> Santosh  </h4>
            <p> @santosh mandal</p>
          </div>
              </div>
          
        
            <div className="button-follow ">
            <Button className='follow' variant="outlined" color="primary">
              Follow
            </Button>
          </div>
          
        </div>
        <hr></hr>
        <div className='feed2'>
          <div className='feedbar'>
             <img className='img' src={Computer}/>
             <div className="text-content">
            <h4> Umesh Shakya </h4>
            <p> @umeshshakya</p>
          </div>
              </div>
          
        
            <div className="button-follow ">
            <Button className='follow' variant="outlined" color="primary">
              Follow
            </Button>
          </div>
          
        </div>
       <hr></hr>
       
      </div>
      

            </div>
            
        </div>
        


    )
}

export default Feed

