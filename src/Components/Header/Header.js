import React from 'react';
import '../Header/Header.css'

const Header = () => {
    const playerInfo = [
        {
        name: 'Marcelo Vieira',
        country: 'Brazil',
        position: 'LB',
        image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591076775/Players/1200810642.jpg.0_oczjoi.webp"
                },
    {
        name: 'Cristiano Ronaldo ',
        country: 'Portugal',
        position: 'LW',
        image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591076833/Players/download_nqqqbw.jpg"
        },
     {
            name: 'Sergio Ramos',
            country: 'Spain',
            position: 'CB',
         image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591154092/Players/reamos_xymwfq.jpg"
        },
        {
            name: 'Kaka',
            country: 'Brazil',
            position: 'CAM',
            image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591154078/Players/KakaThumb_oswlxs.jpg"
        },
        {
            name: 'David Beckham',
            country: 'England',
            position: 'CAM',
            image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591154085/Players/BECKHAMThumb_8_gqfr1w.jpg"
        },
        {
            name: 'James Rodriguez',
            country: 'Colombia',
            position: 'CAM',
            image: "https://res.cloudinary.com/dtokbgxpi/image/upload/v1591154072/Players/james_nzjq0o.jpg"
        }     
]
    return (

        <div style={{display:'inline-block'}}>
       
            {
                playerInfo.map((item, index) => (
                    <div style= {{ display: 'inline-block' }}>
                        <div className='wrapper'>
                            <div className='playerimage' style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize:'cover' }}>
                    </div>
                    <div className='information'>
                         <h2>{item.name} </h2>
                          <h4>{item.country} </h4>
                        <div key={item.position} className='position'>{item.position} </div>
         
                            </div>
                           
                        </div>
                        <div className='details' >
                        </div>
                       
                    </div>
                    )
                )
            }
        </div>
 
            )
}
export default Header;
