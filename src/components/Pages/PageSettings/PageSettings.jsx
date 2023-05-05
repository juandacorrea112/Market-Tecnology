import React from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import './PageSettings.css'

export const PageSettings = () => {


    function setPlaceholder(input) {
        let newPlaceholder = input.value;
        input.setAttribute("placeholder", newPlaceholder);
      }
      


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
                    <div className="contDataUser">
                        <div className="conSubdata">
                            <h3>Basics:</h3>
                            <div className="contBoxdatas">
                                <input className='inputBoxdata' onChange={setPlaceholder} type="text" id="placeholder-input" placeholder="User name" onblur="setPlaceholder(this)"/>
                                <input className='inputBoxdata' onChange={setPlaceholder} type="text" id="placeholder-input" placeholder="Last name" onblur="setPlaceholder(this)"/>
                                <input className='inputBoxdata' onChange={setPlaceholder} type="email" id="placeholder-input" placeholder="Email" onblur="setPlaceholder(this)"/>
                                <input className='inputBoxdata' onChange={setPlaceholder} type="password" id="placeholder-input" placeholder="Password" onblur="setPlaceholder(this)"/>
                            </div>
                            <div className="contButtonS">
                                <button>Save</button>
                            </div>
                            


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
