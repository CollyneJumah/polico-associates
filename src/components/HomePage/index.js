const HomePage = () => {
    return (
       <div className="row">
           <div className="col-lg-7 col-md-6 col-sm-12">
               <h3 style={{color:'#17327e'}} >Polico Associate</h3>
               <p>
                   Your Complicance Partner
               </p>
           </div>

           <div className="col-lg-5 col-md-6 col-sm-12">
               <h3>Right Column for image</h3>
               <img 
                    src="https://res.cloudinary.com/dzasglfjm/images/f_auto,q_auto/v1618589501/Tax-Compliance-KRA_438da8a6/Tax-Compliance-KRA_438da8a6.jpg" 
                    alt=""
                    width="100%"
                    height="auto"
                    className="img-responsive img-fluid"
                    style={
                        {
                            borderRadius:'20px 100px',
                            padding:'20px',
                            objectFit:'cover'
                        }
                    
                    }
                    />
           </div>
       </div>
    )
}

export default HomePage