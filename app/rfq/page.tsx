import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RFQForm from "../components/RFQForm";

export default function PostRFQ() {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />

            <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Post a Request for Quote
                    </h1>
                    <p className="mt-4 text-lg text-slate-400">
                        Tell us what you need, and verified suppliers will quote you within 24 hours.
                    </p>
                </div>

                <RFQForm />

            </main>

            <Footer />
        </div>
    );
}
