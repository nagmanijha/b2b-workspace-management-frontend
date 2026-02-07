import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="pl-0 hover:pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
                        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="prose prose-blue max-w-none dark:prose-invert">
                        <p className="lead text-xl text-muted-foreground">
                            At Sync, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h3>
                        <p className="text-muted-foreground mb-4">
                            We collect information you provide directly to us when you create an account, update your profile, or use our services. This may include your name, email address, and workspace content.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>
                        <p className="text-muted-foreground mb-4">
                            We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to protect our users.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h3>
                        <p className="text-muted-foreground mb-4">
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h3>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about this Privacy Policy, please contact us at support@sync.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
