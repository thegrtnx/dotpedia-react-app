import welcomesvg from './img/appimg/padi.png';

const Signup = () => {
    return ( 

        <section className="pt-1 mt-1 m-auto">
            <div className="container col-lg-6">
                <div className="px-4 my-5 justify-content-center text-center pt-1">
                    <div className="text-start">
                        <img src={welcomesvg} alt="DotPedia" className="img-fluid" width="90"/>
                        <h1 className="text-white display-1 mb-4 mt-lg-4 mt-3 col-lg-10">Padii mi, aowfar?</h1>
                        <p style={{color: "#a1a1a1"}} className="mb-2 col-lg-9">No need to remember a passwords or pin. We'll use your email address to perform the magic in seconds! 🚀</p>
                        <form method="post" enctype="application/x-www-form-urlencoded">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control form-control bg-white py-3 px-4 px-lg-5 mt-3" placeholder="Your email address over here" aria-label="Your email address over here" aria-describedby="basic-addon2"/>
                                <button className="btn text-white mt-2 bg-btn w-100 py-3 signupbtnn" type="button">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-12 text-start mt-3 mx-2">
                        <pre style={{color:"#a1a1a1"}} id="msg"></pre>
                    </div>

                </div>
            </div>

        </section>
     );
}
 
export default Signup;