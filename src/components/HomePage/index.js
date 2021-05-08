const HomePage = () => {
    return (
       <div className="row">
           <div className="col-lg-4 col-md-6 col-sm-12 bg-success" >
               <h3 style={{color:'#17327e'}} >Polico Associate</h3>
               <p>
                   Your Complicance Partner
               </p>
               <img src="https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/173823938_300281701603090_7294814734384138303_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE15uS0wPC8DZQtHrxm7eLWKFOXuFAaSfIoU5e4UBpJ8vaWjS5ChaYMzC7_y8Pk2SmGsMzpqTcZXaFRnZuueZ0V&_nc_ohc=rzcFWqpzxYEAX-k6l1m&_nc_ht=scontent.fmba5-1.fna&oh=c70b5c8312262d3317182002185200f3&oe=60B759CD" 
                    alt="" 
                    width="100"
                    height="auto"
                    className="mx-auto d-block img-rounded img-responsive img-fluid"
                    />
           </div>

           <div className="col-lg-8 col-md-6 col-sm-12 bg-info" style={
               {
                   height:'calc(100vh - 93px)',
                   overflowY:'scroll',
                   position:'sticky',
                   top:'93px'
                }
               
               }>
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sint, unde repudiandae. Reprehenderit amet necessitatibus voluptatum 
                        unde iste vitae ullam a corporis 
                        laborum beatae, repudiandae sequi sint dolores consectetur sit molestiae!
                    </p>
           </div>
       </div>
    )
}

export default HomePage