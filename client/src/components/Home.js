import React from 'react';

function Home(){

    return(
        <div id="home-img-div"style={{width:"900px", height:"950px", margin:"20px"}}>
        <video class="about-page__factory-video" poster="https://media.everlane.com/image/upload/v1/static/product-page-videos-spinner.gif" loop="" autoplay="" playsinline="" width="1600px">
            <source src="https://res.cloudinary.com/everlane/video/upload/c_scale,q_auto,w_1800/v1560384023/Factory_Wide_pmvovx.mp4" type="video/mp4"/>
                <p>Your browser does not support video.
                    <a href="https://res.cloudinary.com/everlane/video/upload/c_scale,q_auto,w_1800/v1560384023/Factory_Wide_pmvovx.mp4">Download the video</a>.</p>
        </video>
        
        </div>
    )

}

export default Home

