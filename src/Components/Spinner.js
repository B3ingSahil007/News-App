import React from 'react'
// import loading_1 from '../Image/Earth_Animated.gif'
// import loading_2 from './Fading_Wheel.gif'
// import loading_3 from './Internet.gif'
// import loading_4 from './Position.gif'

const Spinner = () => {
    return (
        <>
            <div className='text-center' style={{ marginTop: "2cm" }} >
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                </div>
                {/* <img src={loading_1} alt="Loading-1 . . ." /> */}
                {/* <img src={loading_2} alt="Loading-2 . . ." /> */}
                {/* <img src={loading_3} alt="Loading-3 . . ." /> */}
                {/* <img src={loading_4} alt="Loading-4 . . ." /> */}
            </div >
        </>
    )
}

export default Spinner
