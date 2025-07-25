import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaYoutube, FaPlay } from 'react-icons/fa';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const LatestContent = () => {
  const sectionRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

//   Keep this keeps Private 
  const API_KEY = 'AIzaSyCpjX8OLx1277DkVEg4s6dp7Noqs9asAnA';
  const PLAYLIST_ID = 'UURzYN32xtBf3Yxsx5BvJWJw';

 // Mock Data available at the bottom of the YT API code !


//   This code is using Youtube API 

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         // Step 1: Get playlist items
//         const playlistRes = await fetch(
//           `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
//         );
//         const playlistData = await playlistRes.json();

//         const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId).join(',');

//         // Step 2: Get video stats and duration
//         const statsRes = await fetch(
//           `https://youtube.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${API_KEY}`
//         );
//         const statsData = await statsRes.json();

//         // Combine snippet and stats
//         const combined = playlistData.items.map(item => {
//           const id = item.snippet.resourceId.videoId;
//           const stat = statsData.items.find(v => v.id === id);

//           const formatDuration = (iso) => {
//             const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
//             if (!match) return '0:00';
//             const [, h, m = '0', s = '0'] = match;
//             return h ? `${h}:${m.padStart(2, '0')}:${s.padStart(2, '0')}` : `${m}:${s.padStart(2, '0')}`;
//           };

//           return {
//             id,
//             title: item.snippet.title,
//             thumbnail: item.snippet.thumbnails.high.url,
//             url: `https://www.youtube.com/watch?v=${id}`,
//             views: stat?.statistics?.viewCount
//               ? `${parseInt(stat.statistics.viewCount).toLocaleString()} views`
//               : 'N/A',
//             duration: stat?.contentDetails?.duration
//               ? formatDuration(stat.contentDetails.duration)
//               : 'N/A',
//           };
//         });

//         setVideos(combined);
//       } catch (err) {
//         console.error('Failed to fetch YouTube data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);




// Mock Data for Yt videos :- 
//   Mock data - Replace with actual YouTube API fetch


  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setVideos([
        {
          id: '1',
          title: 'How to Build a Personal Brand in 2025',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
          views: '1.2M views',
          duration: '12:34'
        },
        {
          id: '2',
          title: 'The Psychology of Money | Ankur Warikoo',
          thumbnail: 'https://i.ytimg.com/vi/abc123/maxresdefault.jpg',
          url: 'https://youtube.com/watch?v=abc123',
          views: '890K views',
          duration: '18:45'
        },
        {
          id: '3',
          title: 'Morning Routines of Successful Entrepreneurs',
          thumbnail: 'https://i.ytimg.com/vi/xyz456/maxresdefault.jpg',
          url: 'https://youtube.com/watch?v=xyz456',
          views: '1.5M views',
          duration: '15:20'
        },
        {
          id: '4',
          title: 'Startup Funding Explained Simply',
          thumbnail: 'https://i.ytimg.com/vi/def789/maxresdefault.jpg',
          url: 'https://youtube.com/watch?v=def789',
          views: '750K views',
          duration: '22:10'
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (loading) return;
    const cards = gsap.utils.toArray('.video-card');
    cards.forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
    });
  }, [loading]);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
            Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh insights on entrepreneurship, productivity and personal growth
          </p>
        </div>

        {/* Video Grid */}
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6C63FF]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#6C63FF] p-4 rounded-full text-white transform scale-90 group-hover:scale-110 transition-transform">
                      <FaPlay className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaYoutube className="text-red-600 mr-2" />
                      {video.views}
                    </span>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#6C63FF] hover:text-[#FF6B6B] transition-colors flex items-center"
                    >
                      Watch Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@warikoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#6C63FF] hover:bg-[#FF6B6B] transition-all duration-300 transform hover:scale-105"
          >
            View All Videos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestContent;
