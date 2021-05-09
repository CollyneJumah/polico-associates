import { TwitterTimelineEmbed } from "react-twitter-embed"

const Twitter = () => {
    return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Policoassociate"
        options={{height: 400}}
        />
    )
}

export default Twitter