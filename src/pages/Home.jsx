import Hero from "../components/Hero";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <div>
            <Hero />

            <section className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Welcome to DevConnect!
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Build your network, collaborate on amazing projects, and
                    learn from developers worldwide.
                </p>
            </section>

            <section className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Login</h3>
                        <Login />
                    </div>

                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Signup</h3>
                        <Signup />
                    </div>
                </div>
            </section>

            <section className="p-8 bg-gray-100">
                <h2 className="text-2xl font-bold text-center mb-6">
                    What Our Users Are Saying
                </h2>
                <Testimonials />
            </section>
        </div>
    );
}

export default Home;
