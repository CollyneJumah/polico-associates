import RightContent from "./CenterContent"
import LeftContent from "./LeftContent"
import SocialMedia from "../SocialMedia"
const HomePage = () => {
    return (
       <div className="row">
           <LeftContent />
           <RightContent />
           
           <div className="col-lg-3 ">
               <SocialMedia />
           </div>
       </div>
    )
}

export default HomePage