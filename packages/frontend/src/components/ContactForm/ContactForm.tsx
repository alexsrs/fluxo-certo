import React, { useState } from 'react';
import Button from '../Button/Button';
import { api } from '../../services/api';
import './ContactForm.css';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  onClose,
  title = 'Agendar Demonstração Gratuita',
  subtitle = 'Preencha os dados abaixo e entraremos em contato em até 2 horas úteis',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Empresa é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await api.createLead({
        ...formData,
        status: 'NEW',
      });

      if (response) {
        setIsSuccess(true);
        onSubmit?.(formData);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose?.();
          setIsSuccess(false);
        }, 2000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setErrors({
        name: 'Erro ao enviar formulário. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="contact-form success">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h3>Obrigado!</h3>
          <p>Sua solicitação foi enviada com sucesso.</p>
          <p>Entraremos em contato em até 2 horas úteis.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="form-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            placeholder="Seu nome completo"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Corporativo *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            placeholder="seu.email@empresa.com"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">WhatsApp *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? 'error' : ''}
            placeholder="(11) 99999-9999"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="company">Empresa *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={errors.company ? 'error' : ''}
            placeholder="Nome da sua empresa"
          />
          {errors.company && (
            <span className="error-message">{errors.company}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Fale sobre seus principais desafios (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Descreva brevemente os processos que gostaria de automatizar..."
            rows={4}
          />
        </div>

        <div className="demo-benefits">
          <h3>O que você receberá na demonstração:</h3>
          <ul>
            <li>✓ Análise gratuita dos seus processos atuais</li>
            <li>✓ Proposta de automação sob medida</li>
            <li>✓ Sem compromisso ou taxas ocultas</li>
          </ul>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isLoading}
          style={{
            width: '100%',
            backgroundColor: '#fbbf24',
            border: 'none',
            padding: '16px',
            fontSize: '1.125rem',
          }}
        >
          {isLoading ? 'Enviando...' : 'Agendar Demonstração Gratuita'}
        </Button>

        <p className="form-disclaimer">
          Ao enviar este formulário, você concorda em receber comunicações
          comerciais por email e WhatsApp. Seus dados estão protegidos conforme
          a LGPD.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
