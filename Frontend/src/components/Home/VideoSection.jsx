const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "How to Build a Personal Brand in 2025",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "1.2M",
    },
    {
      id: 2,
      title: "The Psychology of Money | Ankur Warikoo",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "890K",
    },
    {
      id: 3,
      title: "Morning Routines of Successful Entrepreneurs",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      views: "1.5M",
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
          LATEST VIDEOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-sm">{video.views} views</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#6C63FF] transition">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;