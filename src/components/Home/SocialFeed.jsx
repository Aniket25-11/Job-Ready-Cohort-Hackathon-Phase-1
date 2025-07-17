import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      platform: "youtube",
      title: "How to Build a Personal Brand in 2025",
      url: "#",
      icon: <FaYoutube className="text-red-500" />,
    },
    {
      id: 2,
      platform: "twitter",
      title: "Just launched my new course on productivity!",
      url: "#",
      icon: <FaTwitter className="text-blue-400" />,
    },
    {
      id: 3,
      platform: "instagram",
      title: "Behind the scenes of my latest shoot 📸",
      url: "#",
      icon: <FaInstagram className="text-pink-500" />,
    },
  ];

  return (
    <div className="bg-[#0F172A] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Ankur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {post.icon}
                <span className="ml-2 font-medium">{post.platform}</span>
              </div>
              <p className="text-lg">{post.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;