import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-4 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-4xl md:text-5xl font-cyber-heading text-cyber-green-400 mb-2">
                    Privacy Policy
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                    How we handle your information
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="cyber-border p-6 bg-cyber-dark/70 max-w-4xl mx-auto"
            >
                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-cyber-heading text-cyber-green-400 mb-4">
                            Data Collection
                        </h2>
                        <p>
                            We minimize data collection to ensure your privacy. The only information we collect is:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Contact form submissions</li>
                            <li>Anonymous usage statistics</li>
                            <li>Temporary data for tool operations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-cyber-heading text-cyber-green-400 mb-4">
                            Data Usage
                        </h2>
                        <p>
                            Any data processed through our tools is:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Never stored on our servers</li>
                            <li>Processed locally in your browser</li>
                            <li>Not shared with third parties</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-cyber-heading text-cyber-green-400 mb-4">
                            Security Practices
                        </h2>
                        <p>
                            As a cybersecurity education platform, we implement:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>End-to-end encryption for communications</li>
                            <li>Secure data handling practices</li>
                            <li>Regular security audits</li>
                        </ul>
                    </section>

                    <div className="mt-8 p-4 cyber-border bg-cyber-darker/50 flex items-center">
                        <Lock className="text-cyber-green-500 mr-4" size={24} />
                        <p className="text-sm">
                            Your privacy and security are our top priorities. All tools are designed
                            with security best practices in mind.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
