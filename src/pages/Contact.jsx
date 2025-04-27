function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-lg h-32"
                />
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
