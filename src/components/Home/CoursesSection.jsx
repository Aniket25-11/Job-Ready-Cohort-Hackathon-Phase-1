const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Startup Mastery",
      price: "₹4,999",
      description: "From idea to unicorn - A complete guide.",
      tag: "BESTSELLER",
    },
    {
      id: 2,
      title: "Productivity Hacks",
      price: "₹2,499",
      description: "2X your output with science-backed methods.",
      tag: "NEW",
    },
    {
      id: 3,
      title: "Personal Branding",
      price: "₹3,999",
      description: "Build authority in your niche.",
    },
  ];

  return (
    <div className="bg-[#0F172A] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
          FEATURED COURSES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition group"
            >
              {course.tag && (
                <span className="inline-block bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white text-xs px-3 py-1 rounded-full mb-4">
                  {course.tag}
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-white/70 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">{course.price}</span>
                <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;