import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from 'react-icons/fi';
import { SectionHeader, Card, Input, TextArea, Button } from '@/components/ui';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: <FiMail className="w-5 h-5" />, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: <FiMapPin className="w-5 h-5" />, label: 'Location', value: 'Available Worldwide', href: undefined },
  { icon: <FiPhone className="w-5 h-5" />, label: 'Phone', value: 'Available on request', href: undefined },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {contactInfo.map((info) => (
              <Card key={info.label} hover={false}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-text-muted">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-text-primary hover:text-primary transition-colors truncate block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-text-primary truncate">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card hover={false}>
              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <FiCheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Name"
                      placeholder="John Doe"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="What's this about?"
                    error={errors.subject?.message}
                    {...register('subject')}
                  />
                  <TextArea
                    label="Message"
                    placeholder="Tell me about your project..."
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
