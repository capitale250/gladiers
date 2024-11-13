import React from 'react';

const getThumbnail = (url) => {
  const videoId = url.split('v=')[1];
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

export const CardComponent = () => {
  const videos = [
    {
      title: "Innovative Video 1",
      link: "https://www.youtube.com/watch?v=EvZmDJAdFcA"
    },
    {
      title: "Innovative Video 2",
      link: "https://www.youtube.com/watch?v=5pi6m98Xq5M"
    },
    {
      title: "Innovative Video 3",
      link: "https://www.youtube.com/watch?v=Gw_4GUIvvUE"
    },
    {
      title: "Innovative Video 4",
      link: "https://www.youtube.com/watch?v=eX_j-DBb9t4"
    },
    {
        title: "Innovative Video 5",
        link: "https://www.youtube.com/watch?v=W8hE8H1Sx9c"
      }

  ];

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'lightblue',
    textAlign: 'center',
    padding: '10px 0',
    opacity: '0',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    transform: 'translateY(20px)'
  };

  const containerHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  };

  return (
    <div className="container">
        <div className="section-title text-center">
          <h2>Our Videos</h2>
        </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {videos.map((video, index) => (
        <div 
          key={index} 
          style={cardStyle}
          onMouseOver={e => {
            e.currentTarget.style.transform = containerHoverStyle.transform;
            e.currentTarget.style.boxShadow = containerHoverStyle.boxShadow;
            e.currentTarget.querySelector('.overlay').style.opacity = '1';
            e.currentTarget.querySelector('.overlay').style.transform = 'translateY(0)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            e.currentTarget.querySelector('.overlay').style.opacity = '0';
            e.currentTarget.querySelector('.overlay').style.transform = 'translateY(20px)';
          }}
        >
          <a href={video.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={getThumbnail(video.link)} alt={video.title} style={{ width: '100%', height: 'auto' }} />
            <div className="overlay" style={overlayStyle}>
              <h3>{video.title}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardComponent;
