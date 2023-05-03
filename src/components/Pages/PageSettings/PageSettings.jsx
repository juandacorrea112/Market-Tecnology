import React from 'react'
import './PageSettings.css'

export const PageSettings = () => {
    return (
        <div className='bodySettings'>


            <div class="containerSettings">
                <div id="logoSettings">
                    <h1 className='logoSettings'>hulu</h1>
                    <div class="CTASettings">
                        <h1>Update</h1>
                    </div>
                </div>

                <div className='leftboxSettings'>
                    <div className='navSettings'>
                        <a href="#" class="activeSettings">
                            <i class="fa fa-user"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-credit-card"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-tv"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-tasks"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-cog"></i>
                        </a>
                    </div>
                </div>

                <div class="rightboxSettings">
                    <div class="profileSettings">
                        <h1 className='h1Settings'>Personal Info</h1>
                        <h2 className='h2Settings'>Full Name</h2>
                        <p className='pSettings'>Hassnain Haider <button className='Settingsbtn'>update</button></p>
                        <h2 className='h2Settings'>Birthday</h2>
                        <p className='pSettings'>January 5</p>
                        <h2 className='h2Settings'>Gender</h2>
                        <p className='pSettings'>Male</p>
                        <h2 className='h2Settings'>Email</h2>
                        <p className='pSettings'>example@example.com <button className='Settingsbtn'>update</button></p>
                        <h2 className='h2Settings'>Password</h2>
                        <p className='pSettings'>******** <button className='Settingsbtn'>Change</button></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
