import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Github, Linkedin, Send, Check, Copy, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Informe seu nome.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Informe o assunto.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Escreva sua mensagem.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem muito curta (mínimo 10 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Este é um site estático (sem backend), então o envio real acontece
    // abrindo o cliente de e-mail do visitante com os campos já preenchidos.
    const mailBody = `Nome: ${formData.name}\nE-mail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#2563eb', '#60a5fa', '#e2e8f0'],
        disableForReducedMotion: true,
      });
    }, 500);
  };

  return (
    <Section id="contato">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            07 / CONTATO
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Contato
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Entre em contato pelo e-mail ou através dos canais abaixo.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Box */}
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  E-mail Direto
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Profiles */}
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-neutral-900 dark:text-white">LinkedIn</span>
                </div>
                <span className="text-neutral-400 font-mono text-[11px]">in/luiz-filipe-linhares</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <span className="font-medium text-neutral-900 dark:text-white">GitHub</span>
                </div>
                <span className="text-neutral-400 font-mono text-[11px]">@LuizFilipeLinhares</span>
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              {isSubmitted ? (
                <div className="p-5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Seu cliente de e-mail foi aberto</span>
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                    Finalize o envio por lá. Se preferir, copie o e-mail acima e escreva diretamente.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2"
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Seu nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Nome ou Empresa"
                        className="w-full px-3 py-2 rounded-md text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-0.5">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        Seu e-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="nome@exemplo.com"
                        className="w-full px-3 py-2 rounded-md text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Ex: Oportunidade em Engenharia de Software"
                      className="w-full px-3 py-2 rounded-md text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Escreva sua mensagem ou proposta..."
                      className="w-full px-3 py-2 rounded-md text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Abrindo e-mail...</span>
                      ) : (
                        <>
                          <span>Enviar mensagem</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
