import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RFQForm from "../components/RFQForm";

export default function PostRFQ() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Post a Request for Quote
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Tell us what you need, and verified suppliers will quote you within 24 hours.
                    </p>
                </div>

                <RFQForm />

            </main>

            <Footer />
        </div>
    );
}
