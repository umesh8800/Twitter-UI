import React from 'react';
import './Rightbar.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Man from './man.png';
import Cmputer from './computer.png';


function Rightbar() {

  return (
    <div className='rightbar'>
      <div className='rightbar_input'>
        <SearchIcon className='rightbar_searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='rightbar_container'>
        <h2>You might like</h2>
        <hr></hr>
        <div className='rightbar_suggetion'>
          <div> <Avatar >U</Avatar></div>
          <div className="text-content">
            <h4> Umesh Shakya </h4>
            <p> @umeshshakya</p>
          </div>


          <div className="button-follow ">
            <Button className='follow' variant="outlined" color="primary">
              Follow
            </Button>
          </div>

        </div>
        <hr></hr>
        <div className='rightbar_suggetion'>
          <div> <Avatar>A</Avatar></div>
          <div className="text-content">
            <h4> AmarpalShakya </h4>
            <p> @amarpal</p>
          </div>


          <div className="button-follow ">
            <Button className='follow' variant="outlined" color="primary">
              Follow
            </Button>
          </div>


        </div>
        <hr></hr>
        <div className='rightbar_suggetion'>
          <div> <Avatar>D</Avatar></div>
          <div className="text-content">
            <h4> Deepak Patel </h4>
            <p> @deepak</p>
          </div>


          <div className="button-follow ">
            <Button className='follow' variant="outlined" color="primary">
              Follow
            </Button>
          </div>


        </div>
        <hr></hr>
        <div className='right'>
          <div> <h4 style={{ color: "blue" }}>Show more</h4> </div>

        </div>

      </div>
      <div className='rightbar_container'>
        <h2>What’s happening</h2>
        <hr></hr>
        <div className='text_parts'>
          <h5 className='h5'>Covid-19.Live</h5>
          <div className='text_part'>
            <h4 className='h4'>Kannada actor Sanchari Vijay <br /> dies aged 37, according to<br /> Apollo Hospitals</h4>

            <img className='man' src={Man} />

          </div>



        </div>
        <hr></hr>
        <div className='text_parts'>
          <h5 className='h5'>Trending</h5>
          <div className='text_pa'>
          <h4 className='h4'>#NBE_Postpone_FMGE</h4>
          <h4 className='h4'>298k Tweets</h4>
          </div>

        </div>
        <hr></hr>
        <div className='text_parts'>
          <h5 className='h5'>Trending India</h5>
          <div className='text_part'>
          <h4 className='h4'>A top Chinese scientist at <br/> Wuhan lab speaks out</h4>

            <img className='man' src={Cmputer} />

          </div>



        </div>




      </div>
    </div>
  )
}

export default Rightbar
