import emailloader from './img/appimg/newemailloader.gif';
const Emailsent = () => {
    return ( 

        <section className="pt-1 mt-1 m-auto" id="emailcheckscreen">
            <div className="container col-lg-6">


                <div className="px-4 my-5 justify-content-center text-center pt-1">

                    <div className="text-start">
                    <img src={emailloader} className="img-fluid" alt="emailloader" width="250"/>
                        <h1 className="text-white display-1 mb-4 mt-lg-4 mt-3 col-lg-10">Go, check your mail! </h1>
                        <p style={{color:"#a1a1a1"}} className="mb-2 col-lg-9">We've sent you a mail. Check your inbox and spam folders. Mail might take a while to deliver depending on your internet connection strength </p>
                        

                        <div className="input-group mb-3">
                        
                        
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark bg-dark text-white py-3 px-4 px-lg-5 mt-3" id="resendmail" type="button">Resend me the  mail</button>
                        </div>
                        </div>
                        


                    </div>
                    <div className="col-12 text-start mt-3 mx-2">
                    <pre style={{color:"#a1a1a1"}} id="msg"></pre>
                    </div>
                    
                </div>

            </div>
        </section>
        
     );
}
 
export default Emailsent;