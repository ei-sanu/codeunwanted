import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "9c4dbdf0-8c38-47a5-aab1-9e3b06b196db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
    }
  };

  return (
    <div className="pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-cyber-heading text-cyber-green-400 mb-2">
          {t('contact.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          {t('contact.subtitle')}
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="cyber-border p-6 bg-cyber-dark/70"
        >
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2 font-cyber">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Your Name'
                required
                className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2 font-cyber">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='yourmail@gmail.com'
                required
                className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2 font-cyber">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Type your message here...'
                required
                rows={5}
                className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="cyber-button w-full flex items-center justify-center"
            >
              <Send size={16} className="mr-2" />
              {t('contact.send')}
            </button>

            {result && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-cyber-green-400"
              >
                {result}
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="cyber-border p-4 bg-cyber-dark/50">
            <div className="flex items-center mb-2">
              <MessageSquare className="text-cyber-green-500 mr-2" size={20} />
              <h3 className="text-lg font-cyber-heading text-cyber-green-400">
                Direct Contact
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Email: someshranjanbiswal13678@gmail.com
            </p>
          </div>

          <div className="cyber-border p-4 bg-cyber-dark/50">
            <div className="flex items-center mb-2">
              <MessageSquare className="text-cyber-green-500 mr-2" size={20} />
              <h3 className="text-lg font-cyber-heading text-cyber-green-400">
                Support
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              <a href="https://www.somesh.social/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-green-400 transition-colors">somesh.social</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
