import React, { useState, useEffect } from 'react';

export default function InstagramFeed({ accessToken }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
        );
        if (!response.ok) throw new Error('Failed to fetch media');
        const data = await response.json();
        setMedia(data.data);
      } catch (error) {
        console.error('Error fetching Instagram media:', error);
      }
    };

    fetchMedia();
  }, [accessToken]);

  return (
    <div>
      {media.length > 0 ? (
        <div>
          {media.map((item) => (
            <div key={item.id}>
              <img src={item.media_url} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div> 
      ) : (
        <p>No media found.</p>
      )}
    </div>
  );
}
