import Services from "../../Services"

const RightContent = () => {
    return (
        <div className="col-lg-6" style={
            {
                height:'calc(100vh - 93px)',
                overflowY:'scroll',
                position:'sticky',
                top:'93px'
             }
            
            }>
           
           <Services />
        </div>
    )
}

export default RightContent