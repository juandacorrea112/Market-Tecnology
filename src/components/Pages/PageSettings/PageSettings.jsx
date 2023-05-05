import React from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import './PageSettings.css'

export const PageSettings = () => {
    return (
        <div className='contPhaterS'>
            <div className="contBoxprofile">

                <div className="barInfoOptions">
                    <div className="contImgP">
                        <img src={girlProfile} alt="" />
                    </div>
                    <div className="contNameFull">
                        <h3>Name User</h3>
                    </div>
                    <div className="contOptionsS">
                        <div className="changeDates">
                            <h3>Full name</h3>
                        </div>
                        <div className="changeDates">
                            <h3>Phone</h3>
                        </div>
                        <div className="changeDates">
                            <h3>Profile Picture</h3>
                        </div>
                        <div className="changeDates">
                            <h3>Password</h3>
                        </div>
                        <div className="changeDates">
                            <h3>Email</h3>
                        </div>
                    </div>
                </div>
                
                <div className="contPatherconfigure">
                    <div className="contTittleInfo">
                        <h2>Personal profile</h2>
                        <p>configure your personal data</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
