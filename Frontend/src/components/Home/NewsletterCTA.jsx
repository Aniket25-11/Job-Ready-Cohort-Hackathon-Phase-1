const NewsletterCTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#6C63FF] to-[#8B84FF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Warikoo Tribe</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Get exclusive content, course discounts, and early access to new projects.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 w-full"
          />
          <button
            type="submit"
            className="bg-white text-[#6C63FF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterCTA;