import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="6lt2JfJdGSY" onClose={() => setOpen(false)} />
		<button className="play-btn popup-youtube border-0" onClick={()=> setOpen(true)} style={{backgroundColor:'transparent'}} ><i className="flaticon-play-button text-white" ></i></button>
    </React.Fragment>
  )
}
const VideoPopup2 = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="6lt2JfJdGSY" onClose={() => setOpen(false)} />
		<button className="site-button white btn-icon popup-youtube video" onClick={()=> setOpen(true)}  >Watch Video<i className="fa fa-angle-double-right" ></i></button>
    </React.Fragment>
  )
}
export{VideoPopup2};
export default VideoPopup;