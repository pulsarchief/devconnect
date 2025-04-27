function About() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 underline">
                About DevConnect
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
                DevConnect is a platform built for developers, by developers.
                Whether you're looking to collaborate on projects, find study
                partners, or showcase your work, DevConnect provides the perfect
                space to grow your professional network and skills.
            </p>
            <div className="flex gap-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
                    Join Now
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default About;
