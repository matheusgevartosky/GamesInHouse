import React from "react";
import video from '../../../Assets/images/content.mp4'

const BackgroudVideo = () => {
    return (
        <div >
        <video
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: "-1",
                left:"50%",
                top:"50%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)"
            }}>
            <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}
export default BackgroudVideo;

