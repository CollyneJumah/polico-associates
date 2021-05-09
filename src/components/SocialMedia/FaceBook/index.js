import { FacebookProvider, EmbeddedPost } from 'react-facebook';

const FaceBook = () =>{
    return (
        <>
            <FacebookProvider appId="1018554205221144">
                <EmbeddedPost href="http://www.facebook.com" width="500" />
            </FacebookProvider>
        </>
    )
}

export default FaceBook