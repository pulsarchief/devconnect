function Testimonials() {
    const testimonials = [
        { name: "John Doe", message: "This is an amazing project!" },
        { name: "Jane Smith", message: "I highly recommend this service." }
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold">What People Are Saying</h2>
            <div className="mt-6 space-y-4">
                {testimonials.map((test, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-300 rounded-md">
                        <p className="font-semibold">{test.name}</p>
                        <p className="text-gray-600">{test.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
