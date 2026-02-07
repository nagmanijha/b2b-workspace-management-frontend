import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const TermsOfService = () => {
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
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
                        <p className="text-lg text-muted-foreground">Effective Date: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="prose prose-blue max-w-none dark:prose-invert">
                        <p className="lead text-xl text-muted-foreground">
                            Welcome to Sync. By accessing or using our services, you agree to be bound by these terms.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h3>
                        <p className="text-muted-foreground mb-4">
                            By accessing or using our app, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h3>
                        <p className="text-muted-foreground mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Sync's website for personal, non-commercial transitory viewing only.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h3>
                        <p className="text-muted-foreground mb-4">
                            The materials on Sync's website are provided on an 'as is' basis. Sync makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h3>
                        <p className="text-muted-foreground mb-4">
                            In no event shall Sync or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sync's website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
