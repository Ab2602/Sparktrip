import React from 'react'

function AddGuest(props) {
   
return (
    <div  className='modelbgAddGuest'>
        <div  onMouseOver={() =>props.handleAddGest(true)} onMouseLeave={()=>props.handleAddGuest(false)} className='modelcontainerAddGuest'>
            <div  className='modeldataAddGuest'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae debitis deserunt commodi architecto dolorem numquam pariatur eligendi quam accusantium obcaecati ea dolorum! Quo saepe, hic deleniti cupiditate quis necessitatibus fugit magnam eos aut rerum officia minus consectetur maxime. Repellat excepturi quod, necessitatibus corrupti placeat adipisci, cum non aliquam facere nulla mollitia ipsum error temporibus! Rem modi a eos dignissimos, necessitatibus aliquam commodi placeat nesciunt, odio nam aliquid obcaecati nihil aspernatur! Modi quidem provident officia aut nulla nesciunt qui omnis dicta reprehenderit, harum hic dolorum est necessitatibus magnam nostrum debitis minima quos ab culpa iure quibusdam voluptatem al
            </div>
        </div>
      
    </div>
  )
}

export default AddGuest
