import '../Components/NewsItem.css'
import image from '../assets/logo.png'
const NewsItem = ({title, description, src, url, published}) => {

    const dateString = published;
    const dateObject = new Date(dateString);
    const dayOfWeek = dateObject.getDay();
    const dayOfWeekString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayOfWeek];
    const day = dayOfWeekString

  return (
    <div>
        <div>
        <div className="card mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth:"370px"}}>
            <img src={src?src:image} style={{height:"210px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,150)}</h5>
                <p className="card-text">{description.slice(0,100)}....</p>
                <div class="card-bottom">
                <a href={url} className="btn btn-primary">
                    Read More
                </a>
                <p class="day">{day}</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewsItem

