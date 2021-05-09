import RightContent from "./CenterContent"
import LeftContent from "./LeftContent"
import SocialMedia from "../SocialMedia"
const HomePage = () => {
    return (
       <div className="row">
           <LeftContent />
           <RightContent />
           
           <div className="mx-auto col-lg-3 col-md-6 col-sm-12">
               <SocialMedia />
           </div>
       </div>
    )
}

export default HomePage