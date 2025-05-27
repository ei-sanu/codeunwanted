import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
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
                    Terms of Use
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                    Please read these terms carefully
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
                            Educational Purpose
                        </h2>
                        <p>
                            CodeUnwanted is an educational platform designed for learning and practicing cybersecurity concepts.
                            All tools and resources provided are intended for educational and learning purposes only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-cyber-heading text-cyber-green-400 mb-4">
                            Acceptable Use
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You agree to use this platform for legitimate educational purposes only</li>
                            <li>You will not use the tools for any malicious or harmful activities</li>
                            <li>You understand that cybersecurity knowledge comes with responsibility</li>
                            <li>You will not attempt to compromise or damage the platform or other systems</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-cyber-heading text-cyber-green-400 mb-4">
                            Disclaimer
                        </h2>
                        <p>
                            The tools and information provided are for educational purposes only.
                            We are not responsible for any misuse or damage caused by the application
                            of these tools and techniques outside of authorized testing environments.
                        </p>
                    </section>

                    <div className="mt-8 p-4 cyber-border bg-cyber-darker/50 flex items-center">
                        <Shield className="text-cyber-green-500 mr-4" size={24} />
                        <p className="text-sm">
                            By using CodeUnwanted, you acknowledge that you will only apply the knowledge
                            gained here in legal and ethical ways.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
