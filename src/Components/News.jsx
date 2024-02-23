import { useState } from 'react'
import '../Components/News.css'
import NewsItem from './NewsItem'
import { useEffect } from 'react'

const News = ({category,country}) => {

  const [articles,setArticles] = useState([])
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=VITE_API_KEY`;
    fetch(url).then(response => response.json()).then(data => {
      setArticles(data.articles);
    });
  },[category])

  return (
    <div>
        <hr />
        <marquee class="heading-text" scrollamount="5" direction="left" width="100%">
        Stay Informed 24/7 with Our Comprehensive Coverage: Breaking News, In-Depth Analysis, and Exclusive Reports, All at Your Fingertips on NewsHive.com - Your Trusted Source for Reliable Journalism!
        </marquee>
        <hr />
        {articles && (
        <div class="news-articles">
          {articles.map((news,i)=>{
            if(news.urlToImage){
              return <NewsItem key={i} title={news.title} description={news.description} src={news.urlToImage} url={news.url} published={news.publishedAt} />; 
            }
            return null
          })}
        </div>
        )}
    </div>
  )
}

export default News
