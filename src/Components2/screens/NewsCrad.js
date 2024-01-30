// NewsCard.js
import React, { useState } from 'react';

export const NewsCard = ({ title, content, onClick }) => {
    return (
        <div className="news-card" onClick={onClick}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};


const dummy = 'Id velit sit laboris non in esse enim esse elit.Id ea laboris eiusmod exercitation do cupidatat ut cillum dolore nisi ullamco.Ad voluptate ad magna consectetur.Veniam ullamco veniam nisi dolor ex nisi sit ex cupidatat minim id est ut est.Cupidatat esse sunt excepteur labore anim in duis.Proident nulla proident sit laboris in enim qui dolore.'


const newsData = [
    { id: 1, title: 'News 1', content: dummy },
    { id: 2, title: 'News 2', content: dummy },
    { id: 3, title: 'News 3', content: dummy },
    { id: 4, title: 'News 4', content: dummy },
    { id: 5, title: 'News 5', content: dummy },
    { id: 6, title: 'News 6', content: dummy },
    { id: 7, title: 'News 7', content: dummy },
    { id: 8, title: 'News 8', content: dummy },
    { id: 9, title: 'News 9', content: dummy },
    { id: 10, title: 'News 10', content: dummy },
    { id: 11, title: 'News 11', content: dummy },
    { id: 12, title: 'News 12', content: dummy },
    { id: 13, title: 'News 13', content: dummy },
    { id: 14, title: 'News 14', content: dummy },
    { id: 15, title: 'News 15', content: dummy },
    { id: 16, title: 'News 16', content: dummy },
];

const NEWS = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const handleNewsClick = (news) => {
        setSelectedNews(news);
    };

    return (
        <div className="app">
            {newsData.map((news) => (
                <NewsCard
                    key={news.id}
                    title={news.title}
                    content={news.content}
                    onClick={() => handleNewsClick(news)}
                />
            ))}

            {selectedNews && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{selectedNews.title}</h2>
                        <div className='popup-content_Image'>
                            <img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' alt='NEWSImage' />
                            <p>{selectedNews.content}</p>
                        </div>
                        <p className='close_button' onClick={() => setSelectedNews(null)}>&times;</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NEWS;