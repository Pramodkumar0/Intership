import React from 'react'


const Popup = ({closeing}) => {
    const close=()=>{
        closeing(false)
    }
    
  return (

    <div className='popupbackground'>

        <div className='popupcontainer'>

            <button onClick={close} className='x'>X</button>

            <div className='title'><h3>Animal</h3>
            <div className='body'><p></p></div>

            <div className='footer'>
                <button>Next</button>
            </div>
            </div>

        </div>
    </div>
  )

}

export default Popup