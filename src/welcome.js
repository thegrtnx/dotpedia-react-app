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
                            
                        </form>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Signup;