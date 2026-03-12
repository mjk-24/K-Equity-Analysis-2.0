import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [permission, setPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError(t('subscribe.invalidEmail'));
      return;
    }

    if (email && permission) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setEmail('');
          setPermission(false);
        }, 4000);
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-jpm-brown">
                      {t('subscribe.success')}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {t('subscribe.successDetail').replace('{email}', email)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-jpm-off-white text-jpm-teal rounded-full mb-2">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-jpm-brown">
                      {t('subscribe.title')}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-normal">
                      {t('subscribe.description')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder={t('subscribe.placeholder')}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        className={`w-full px-4 py-3 bg-zinc-50 border rounded-sm text-sm focus:ring-2 focus:ring-jpm-teal/20 outline-none transition-all ${
                          error ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 focus:border-jpm-teal'
                        }`}
                      />
                      {error && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider mt-1">
                          {error}
                        </p>
                      )}
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center mt-1">
                        <input
                          type="checkbox"
                          required
                          checked={permission}
                          onChange={(e) => setPermission(e.target.checked)}
                          className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-sm checked:bg-jpm-teal checked:border-jpm-teal transition-all"
                        />
                        <CheckCircle2 
                          size={12} 
                          className="absolute left-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                        />
                      </div>
                      <span className="text-xs text-zinc-500 leading-tight group-hover:text-zinc-700 transition-colors">
                        {t('subscribe.permission')}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!permission || !email}
                      className="w-full py-3 bg-jpm-teal text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-opacity-90 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-all"
                    >
                      {t('subscribe.submit')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
