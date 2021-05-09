import Footer from "./Footer"

const LeftContent = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12" >
            <img src="https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/173823938_300281701603090_7294814734384138303_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE15uS0wPC8DZQtHrxm7eLWKFOXuFAaSfIoU5e4UBpJ8vaWjS5ChaYMzC7_y8Pk2SmGsMzpqTcZXaFRnZuueZ0V&_nc_ohc=rzcFWqpzxYEAX-k6l1m&_nc_ht=scontent.fmba5-1.fna&oh=c70b5c8312262d3317182002185200f3&oe=60B759CD" 
                alt="" 
                width="100"
                height="auto"
                className="mx-auto d-block img-rounded img-responsive img-fluid"
                />
            <h3 style={{color:'#17327e', textTransform:"uppercase"}} className="text-center" >Polico Associate</h3>
            <p className="text-center text-danger">
                <em>Your Complicance Partner</em>
            </p>
            <hr />

            <Footer />
        </div>
    )
}

export default LeftContent