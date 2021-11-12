import React from "react";

const BackgroudVideo = () => {
    return (
        <div >
        <video
            autoPlay
            data-delay="200"
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
            src="https://akamai-webcdn.kgstatic.net/resources/elyon_web/images/video/elyon_about.mp4"
            type="video/mp4"
            alt="video"
        />
        </div>
    );
}
export default BackgroudVideo;