<?php

/*************helper functions***************/

function clean($string) {

    return htmlentities($string);
}



function redirect($location) {

    return header("Location: {$location}");
}




function getprofile($token) {


    $curl = curl_init();
    
    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://backend.dotpedia.com.ng/public/api/profile?token=$token",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = curl_exec($curl);

    curl_close($curl);

    $resp = json_decode($response);

    

    $_SESSION['usrtoken'] =  $resp->msg->token;

    echo '    
    <script>
    location.href = "./";
    </script>
    
    ';


}



function validatemail($email, $devid) {


    $data = ["email" => $email,"device_id" => $devid];


    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://backend.dotpedia.com.ng/public/api/user-login',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS => $data
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);

    $res = json_decode($response);


    if(isset($res->status) && isset($res->msg))

    {

        $status = $res->status;
        $msg    = $res->msg;


        if($msg == 'activate device') {

            //display email screen
            echo '
            <script>
            $("#signuppage").hide();
            $("#emailcheckscreen").show();
            $("#loaderscreen").hide();
            </script>
            
            ';
    
        } else {

            if($msg == 'login successful') {

                $token = $res->userdetails->token;

                //display loader screen
                echo '
                <script>
                $("#emailcheckscreen").hide();
                $("#signuppage").hide();
                $("#loaderscreen").show();
                </script>
                
                ';

                getprofile($token);



            } else {


                echo '<span class="text-danger fa-fade fw-bold">Server error, call 911 💀...</span>';

            }

        }

    } else {

        echo '<span class="text-danger fa-fade fw-bold">Bad Network, call 911 💀...</span>';
    }



}




//validate user
if(isset($_POST['email']) && isset($_POST['deviceid'])) {

   
    $email = clean(escape($_POST['email']));
    $devid = clean(escape($_POST['deviceid']));

    validatemail($email, $devid);

}




//get book read list for homepage
function bookreadhomepage() { 

    $userid = $_SESSION['usrtoken'];

    $sql = "SELECT * FROM `bookread` WHERE `userid` = '$userid'";
    $res = query($sql);

    if(row_count($res) == '' || row_count($res) == null) {


        $display = <<< DELIMITER

                <section class="mt-3 pt-5">
                        <div class="container">

                                <div class="text-center justify-content-center">
                                    <h3 class="text-white mb-4 mt-lg-4 mt-3">Uh Oh! 🙁</h3>
                                    <small style="color:#a1a1a1" class="mb-4">You've not gotten any notes to read yet </small>
                                    <br/>
                                    <button class="btn mt-3 bg-btn text-white py-3 px-4">Browse our library</button>
                                </div>  
                        

                        </div>
                </section>


        DELIMITER;


        return $display;


    } else {

        $display = <<<DELIMITER

                <section class="mt-4">
                    <div class="container">

                    <div class="row">
                                            
                        <div class="col-6 text-start">
                        <p class="fw-bold">Your recent reads</p>
                        </div>
                        <div class="col-5 text-end m-auto mb-3">
                        <p style="color: #a1a1a1">See all</p>
                        </div>
                                
                    
                        
                    
                        <div class="col-4 mt-3 read">
                            <div class="card justify-content-center text-center m-auto">
                            <h2>📝</h2>
                                <a class="text-white text-decoration-none" target="_blank" href="./"> <b>Click here <br/> to view</b> </a>
                            </div>
                        </div>
            
                        <div class="col-8 mb-5 mt-3">
                            <h5 class="text-white mb-2 mt-2">MTE 206</h5>
                            <small class="text-muted">Instituiton: FUTA</small> <br/>
                            <small class="text-muted">Faculty: Engineering</small> <br/>
                            <small class="text-muted">Level: 200 level</small><br/>
                            <small class="text-muted">Uploaded by:  <a class="text-light text-decoration-none" target="_blank" href="./">  Greatnessabolade  </a></small>
                        </div>



                        
                        <div class="col-4 mt-3 read">
                            <div class="card justify-content-center text-center m-auto">
                            <h2>📝</h2>
                                <a class="text-white text-decoration-none" target="_blank" href="./"> <b>Click here <br/> to view</b> </a>
                            </div>
                        </div>
            
                        <div class="col-8 mb-5 mt-3">
                            <h5 class="text-white mb-2 mt-2">MTE 206</h5>
                            <small class="text-muted">Instituiton: FUTA</small> <br/>
                            <small class="text-muted">Faculty: Engineering</small> <br/>
                            <small class="text-muted">Level: 200 level</small><br/>
                            <small class="text-muted">Uploaded by:  <a class="text-light text-decoration-none" target="_blank" href="./">  Greatnessabolade  </a></small>
                        </div>



                        
                        <div class="col-4 mt-3 read">
                            <div class="card justify-content-center text-center m-auto">
                            <h2>📝</h2>
                                <a class="text-white text-decoration-none" target="_blank" href="./"> <b>Click here <br/> to view</b> </a>
                            </div>
                        </div>
            
                        <div class="col-8 mb-5 mt-3">
                            <h5 class="text-white mb-2 mt-2">MTE 206</h5>
                            <small class="text-muted">Instituiton: FUTA</small> <br/>
                            <small class="text-muted">Faculty: Engineering</small> <br/>
                            <small class="text-muted">Level: 200 level</small><br/>
                            <small class="text-muted">Uploaded by:  <a class="text-light text-decoration-none" target="_blank" href="./">  Greatnessabolade  </a></small>
                        </div>
            
                    </div>

                    

                    </div>
                </section>

        DELIMITER;

        return $display;

    }

}