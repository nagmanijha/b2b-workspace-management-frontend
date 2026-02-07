import { ArrowLeft, Search, HelpCircle, Book, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const HelpCenter = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-primary/5 pb-20 pt-16">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Application
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                        How can we help?
                    </h1>
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                        <Input
                            className="pl-12 h-12 text-lg bg-background shadow-sm"
                            placeholder="Search for answers..."
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <FileText className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>Documentation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Detailed guides and API references for developers.
                            </p>
                            <Button variant="link" className="p-0 h-auto font-semibold">
                                Browse Docs &rarr;
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <Book className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>Tutorials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Step-by-step videos and articles to get you started.
                            </p>
                            <Button variant="link" className="p-0 h-auto font-semibold">
                                Start Learning &rarr;
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <MessageCircle className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>Community</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Join our community forum to ask questions and share ideas.
                            </p>
                            <Button variant="link" className="p-0 h-auto font-semibold">
                                Join Discussion &rarr;
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {[
                            { q: "How do I create a new workspace?", a: "Navigate to the dashboard and click the 'Create Workspace' button in the top right corner." },
                            { q: "Can I invite external members?", a: "Yes, you can invite anyone by email from the Members page within your workspace." },
                            { q: "How do I change my password?", a: "Go to Account Settings > Security to update your password." },
                            { q: "Where can I see my billing history?", a: "Billing history is available under Workspace Settings > Billing." },
                        ].map((faq, index) => (
                            <div key={index} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center pb-20">
                    <p className="text-muted-foreground mb-4">Still need help?</p>
                    <Button size="lg">Contact Support</Button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
