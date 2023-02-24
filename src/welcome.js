import { useState } from "react";

import welcomesvg from './img/appimg/padi.png';
import getUserDeviceId from './userauth/userdeviceid';
import Emailsent from './userauth/emailsent';


const Signup = () => {

    const [useremail, setEmail] = useState('');
    const [deviceId, setDeviceId] = useState(getUserDeviceId);
    const [isPending, setIsPending] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const [emailScreen, setEmailScreen] = useState(false);


    const message = 'We dey setup your account...⚡';

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const userVerify = { 

            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: useremail, device_id: deviceId })
        
        };

        setIsPending(true);
        setErrorMessage('');

        fetch('https://backend.dotpedia.com.ng/public/api/user-login', userVerify)
        .then(response => response.json())
        .then(data => {
            if(data.msg === 'activate device') {

                setEmailScreen(true);
                console.log("activating");

            } else {

                if(data.msg === 'login successful') {

                    //setEmailScreen(true);
                    console.log("login successful");
                }
            }
        })

        .catch(error => {
            setIsPending(false);
            setErrorMessage('Abeg, re-submit or call 911 💀🤧...');
        });
        

    }


    //login screen
    return ( 

        <section className="pt-1 mt-1 m-auto">

            { !emailScreen &&  
                <div className="container col-lg-6">
                    <div className="px-4 my-5 justify-content-center text-center pt-1">
                        <div className="text-start">
                            <img src={welcomesvg} alt="DotPedia" className="img-fluid" width="90"/>
                            <h1 className="text-white display-1 mb-4 mt-lg-4 mt-3 col-lg-10">Padii mi, aowfar?</h1>
                            <p style={{color: "#a1a1a1"}} className="mb-2 col-lg-9">No need to remember a passwords or pin. We'll use your email address to perform the magic in seconds! 🚀</p>
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" value={useremail} onChange={(e) => setEmail(e.target.value)} className="form-control form-control bg-white py-3 px-4 px-lg-5 mt-3"
                                    placeholder="Your email address over here" required/>
                                    <input type="text" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} className="form-control form-control bg-white py-3 px-4 px-lg-5 mt-3"
                                    placeholder="Your email address over here" hidden required/>
                                    <button className="btn text-white mt-2 bg-btn w-100 py-3 signupbtnn">Submit</button>
                                </div>
                            </form>
                        </div>

                    
                        <div className="col-12 text-start mt-3 mx-2">
                            { isPending &&  <pre className="text-success" id="msg">{message}</pre>}
                            { errorMessage && <pre className="text-danger" id="msg">{errorMessage}</pre>}
                        </div>
                    
                    </div>
                </div>
            }

            <div>
                { emailScreen && <Emailsent/>}
                
            </div>
        </section>
       
     );
}
 
export default Signup;