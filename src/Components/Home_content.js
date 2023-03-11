import React from 'react'
import video from '../assests/video/tour.mp4'
const Home_content = () => {
  return (
    <div className='flex justify-centre h-screen items-center absolute top-0 left-0'>
        <div className='w-1/2'>
            Left content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad asperiores debitis, illo velit, quia officiis atque quos unde dolor, reiciendis nostrum maxime. Repellendus rem, hic quam perferendis quasi officia harum nam odit fugit qui modi quae adipisci at placeat beatae deserunt quis explicabo ea. Voluptate fugit possimus consequatur! Adipisci nisi harum ex repellendus est sunt quam reprehenderit molestiae, laborum excepturi odit fuga minima tenetur culpa eos non aspernatur labore. Doloribus voluptatum laborum facere dolore ipsum repellat unde sed consequatur ullam! Dolorem voluptatum perspiciatis odit aut itaque? Ullam aspernatur temporibus sunt rem dicta harum maiores repudiandae, placeat commodi, voluptatibus explicabo recusandae similique tenetur minima unde ipsum iusto non, excepturi alias architecto? Quisquam cum nisi maxime alias tenetur similique soluta corporis beatae in facere, sed aperiam consequatur exercitationem iure molestias voluptates est officia atque corrupti nesciunt labore aut modi. Id, eligendi? Iure cupiditate animi est quas sunt eius a molestias maiores!
        </div>
        <div className='w-1/2'>
            <video src={video} autoplay loop className='bg-transparent'></video>
        </div>

    </div>
  )
}

export default Home_content