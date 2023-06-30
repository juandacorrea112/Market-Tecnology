import React, { useEffect, useState } from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import './PageSettings.css'

export const PageSettings = () => {

    const [settinginformation, setSettinginformation] = useState()

    useEffect(() => {
        setSettinginformation(0)
    }, [])

    function setPlaceholder(input) {
        let newPlaceholder = input.value;
        input.setAttribute("placeholder", newPlaceholder);
    }

    //funciones de seleccion para la configuracion de perfil de usuario
    function Changename() {
        setSettinginformation(0)
    }

    function Changenumber() {
        setSettinginformation(1)
    }

    function Changeprofile() {
        setSettinginformation(2)
    }

    function Changepassword() {
        setSettinginformation(3)
    }

    function Changeemail() {
        setSettinginformation(4)
    }

    function Changeupproduct() {
        setSettinginformation(5)
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
                        <div onClick={Changename} className="changeDates">
                            <h3>Complete names</h3>
                        </div>
                        <div onClick={Changenumber} className="changeDates">
                            <h3>Phone</h3>
                        </div>
                        <div onClick={Changeprofile} className="changeDates">
                            <h3>Profile Picture</h3>
                        </div>
                        <div onClick={Changepassword} className="changeDates">
                            <h3>Password</h3>
                        </div>
                        <div onClick={Changeemail} className="changeDates">
                            <h3>Email</h3>
                        </div>
                        <div onClick={Changeupproduct} className="changeDates">
                            <h3>Upload product</h3>
                        </div>
                    </div>
                </div>

                <div className="contPatherconfigure">
                    <div className="contTittleInfo">
                        <h2>Personal profile</h2>
                        <p>configure your personal data</p>
                    </div>

                    <div className="contDataUser">
                        {(settinginformation == 0) &&
                            <div className="conSubdata">
                                <h3>Basics:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="text" required id="placeholder-input" placeholder="User name" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="text" required id="placeholder-input" placeholder="Last name" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="email" required id="placeholder-input" placeholder="Email" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="password" required id="placeholder-input" placeholder="Password" onblur="setPlaceholder(this)" />
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                        {(settinginformation == 1) &&
                            <div className="conSubdata">
                                <h3>Contact:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="number" required id="placeholder-input" placeholder="Number" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' onChange={setPlaceholder} type="number" required id="placeholder-input" placeholder="Some other number" onblur="setPlaceholder(this)" />
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                        {(settinginformation == 2) &&
                            <div className='conSubdata'>
                                <h3>Picture profile:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        <button className='contenedor-btn-file'>
                                            <span class="material-symbols-outlined">add_a_photo</span>
                                            {/* attach image */}
                                            <label htmlFor="btn-file"></label>
                                            <input type="file" id='btn-file' />
                                        </button>
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        }

                        {(settinginformation == 3) &&
                            <div className="conSubdata">
                                <h3>Password:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        <input className='inputBoxdata' type="password" required id="placeholder-input" placeholder="password" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' type="password" required id="placeholder-input" placeholder="Confirm password" onblur="setPlaceholder(this)" />
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                        {(settinginformation == 4) &&
                            <div className="conSubdata">
                                <h3>Email:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        <input className='inputBoxdata' type="email" required id="placeholder-input" placeholder="Email" onblur="setPlaceholder(this)" />
                                        <input className='inputBoxdata' type="email" required id="placeholder-input" placeholder="Confirm email" onblur="setPlaceholder(this)" />
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                        {(settinginformation == 5) &&
                            <div className="conSubdata">
                                <h3>Upload product:</h3>
                                <div className="contBoxdatas">
                                    <form>
                                        
                                        <div className="contButtonS">
                                            <button>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
