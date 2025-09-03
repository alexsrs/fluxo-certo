import React, { useState } from 'react';
import { Header, Footer, Button, ContactModal } from '../components';
import type { ContactFormData } from '../components';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: ContactFormData) => {
    console.log('Lead capturado:', data);
    // Modal will close automatically after success
  };

  return (
    <div className="homepage">
      <Header onCTAClick={handleCTAClick} />

      <main>
        {/* Seção Hero */}
        <section
          id="inicio"
          className="hero"
          style={{
            padding: '120px 20px 80px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                marginBottom: '24px',
                lineHeight: '1.2',
              }}
            >
              Transforme Processos Manuais em{' '}
              <span style={{ color: '#fbbf24' }}>Fluxos Automatizados</span>
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                marginBottom: '40px',
                opacity: '0.9',
                lineHeight: '1.6',
              }}
            >
              Libere sua equipe para focar no que realmente importa.
              Automatizamos vendas, marketing e processos operacionais para
              empresas que querem crescer de forma escalável.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={handleCTAClick}
                style={{ backgroundColor: '#fbbf24', border: 'none' }}
              >
                Agendar Demonstração Gratuita
              </Button>
              <Button
                variant="outline"
                size="large"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Ver Casos de Sucesso
              </Button>
            </div>
          </div>
        </section>

        {/* Seção Problemas/Soluções */}
        <section
          id="solucoes"
          style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '60px',
                color: '#1f2937',
              }}
            >
              Pare de Perder Tempo com Tarefas Repetitivas
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              <div
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <h3 style={{ color: '#dc2626', marginBottom: '16px' }}>
                  ❌ Antes
                </h3>
                <p>
                  Processos manuais lentos, erros humanos, leads perdidos,
                  equipe sobrecarregada
                </p>
              </div>
              <div
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <h3 style={{ color: '#059669', marginBottom: '16px' }}>
                  ✅ Depois
                </h3>
                <p>
                  Fluxos automatizados, zero erros, leads qualificados, equipe
                  focada em vendas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios/Funcionalidades */}
        <section
          id="beneficios"
          style={{ padding: '80px 20px', backgroundColor: 'white' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                  color: '#1f2937',
                }}
              >
                Automatizações que Impulsionam Resultados
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Descubra como nossas soluções transformam processos complexos em
                fluxos simples e eficientes
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '40px',
              }}
            >
              <div
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    fontSize: '24px',
                  }}
                >
                  🚀
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#1f2937',
                  }}
                >
                  Captação de Leads Automatizada
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  Qualifique leads automaticamente, envie follow-ups
                  personalizados e nunca perca uma oportunidade de negócio.
                </p>
                <ul style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  <li>✓ Formulários inteligentes</li>
                  <li>✓ Qualificação automática</li>
                  <li>✓ Distribuição por território</li>
                </ul>
              </div>

              <div
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#dcfce7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    fontSize: '24px',
                  }}
                >
                  💬
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#1f2937',
                  }}
                >
                  WhatsApp Business Integrado
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  Conecte-se com seus clientes onde eles estão. Automação
                  completa para atendimento e vendas via WhatsApp.
                </p>
                <ul style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  <li>✓ Mensagens automáticas</li>
                  <li>✓ Chatbots inteligentes</li>
                  <li>✓ Integração com CRM</li>
                </ul>
              </div>

              <div
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#fef3c7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    fontSize: '24px',
                  }}
                >
                  📊
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#1f2937',
                  }}
                >
                  Relatórios e Analytics
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  Dashboards em tempo real para acompanhar performance, ROI e
                  identificar oportunidades de otimização.
                </p>
                <ul style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  <li>✓ Métricas em tempo real</li>
                  <li>✓ Relatórios personalizados</li>
                  <li>✓ Alertas automáticos</li>
                </ul>
              </div>

              <div
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#e0e7ff',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    fontSize: '24px',
                  }}
                >
                  🔗
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#1f2937',
                  }}
                >
                  Integrações Poderosas
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  Conecte suas ferramentas favoritas: CRM, e-mail marketing,
                  sistemas de gestão e muito mais.
                </p>
                <ul style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  <li>✓ 500+ integrações</li>
                  <li>✓ APIs personalizadas</li>
                  <li>✓ Sincronização em tempo real</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Prova Social (Depoimentos) */}
        <section
          id="depoimentos"
          style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                  color: '#1f2937',
                }}
              >
                Resultados que Falam por Si
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Veja como empresas como a sua transformaram seus processos e
                multiplicaram seus resultados
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '32px',
                marginBottom: '60px',
              }}
            >
              <div
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '16px' }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p
                    style={{
                      fontStyle: 'italic',
                      color: '#374151',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    &quot;Aumentamos nossa taxa de conversão de leads em 340%
                    nos primeiros 3 meses. A automação nos permitiu focar no que
                    realmente importa: fechar negócios.&quot;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '12px',
                    }}
                  >
                    MC
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', margin: '0' }}>
                      Maria Clara
                    </p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        margin: '0',
                      }}
                    >
                      Diretora de Vendas, TechCorp
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '16px' }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p
                    style={{
                      fontStyle: 'italic',
                      color: '#374151',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    &quot;Economizamos 25 horas por semana em processos manuais.
                    Nossa equipe agora pode se dedicar 100% ao relacionamento
                    com clientes.&quot;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '12px',
                    }}
                  >
                    RS
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', margin: '0' }}>
                      Ricardo Silva
                    </p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        margin: '0',
                      }}
                    >
                      CEO, InnovaBiz
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '16px' }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p
                    style={{
                      fontStyle: 'italic',
                      color: '#374151',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                    }}
                  >
                    &quot;ROI de 450% no primeiro ano. As automações pagaram o
                    investimento em apenas 2 meses e continuam gerando
                    valor.&quot;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#f59e0b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '12px',
                    }}
                  >
                    AP
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', margin: '0' }}>Ana Paula</p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        margin: '0',
                      }}
                    >
                      COO, Digital Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Métricas de Resultados */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                textAlign: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#3b82f6',
                    marginBottom: '8px',
                  }}
                >
                  340%
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>
                  Aumento médio na conversão de leads
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#10b981',
                    marginBottom: '8px',
                  }}
                >
                  25h
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>
                  Horas economizadas por semana
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#f59e0b',
                    marginBottom: '8px',
                  }}
                >
                  450%
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>
                  ROI médio no primeiro ano
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '8px',
                  }}
                >
                  2
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>
                  Meses para payback do investimento
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de FAQ */}
        <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                  color: '#1f2937',
                }}
              >
                Perguntas Frequentes
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                }}
              >
                Tire suas principais dúvidas sobre nossas automações
              </p>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <details
                style={{
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    outline: 'none',
                  }}
                >
                  Quanto tempo leva para implementar as automações?
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                  }}
                >
                  A maioria dos projetos é implementada entre 2-4 semanas,
                  dependendo da complexidade. Começamos sempre com os fluxos de
                  maior impacto para você ver resultados rapidamente.
                </p>
              </details>

              <details
                style={{
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    outline: 'none',
                  }}
                >
                  As automações funcionam com nossas ferramentas atuais?
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                  }}
                >
                  Sim! Trabalhamos com mais de 500 integrações nativas,
                  incluindo CRMs, sistemas de gestão, e-mail marketing, WhatsApp
                  e muito mais. Se não tiver integração pronta, criamos uma
                  personalizada.
                </p>
              </details>

              <details
                style={{
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    outline: 'none',
                  }}
                >
                  Qual o investimento necessário?
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                  }}
                >
                  O investimento varia conforme o escopo do projeto, mas nossos
                  clientes costumam ter retorno total em 2-3 meses. Oferecemos
                  uma consultoria gratuita para apresentar uma proposta
                  personalizada.
                </p>
              </details>

              <details
                style={{
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    outline: 'none',
                  }}
                >
                  E se precisarmos de suporte ou ajustes?
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                  }}
                >
                  Oferecemos suporte completo e treinamento para sua equipe.
                  Além disso, as automações podem ser ajustadas facilmente
                  conforme seu negócio evolui.
                </p>
              </details>

              <details
                style={{
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    outline: 'none',
                  }}
                >
                  Como garantem a segurança dos nossos dados?
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                  }}
                >
                  Seguimos os mais altos padrões de segurança, incluindo
                  criptografia de dados, conformidade com LGPD e auditorias
                  regulares. Seus dados ficam sempre seguros e sob seu controle.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section
          id="contato"
          style={{
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '24px',
                lineHeight: '1.2',
              }}
            >
              Pronto para Transformar Seus Processos?
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                marginBottom: '40px',
                opacity: '0.9',
                lineHeight: '1.6',
              }}
            >
              Agende uma demonstração gratuita e descubra como automatizar seus
              processos pode multiplicar seus resultados em poucos meses.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={handleCTAClick}
                style={{
                  backgroundColor: '#fbbf24',
                  border: 'none',
                  padding: '16px 32px',
                  fontSize: '1.125rem',
                }}
              >
                Agendar Demonstração Gratuita
              </Button>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                opacity: '0.8',
              }}
            >
              <span>✓ Sem compromisso</span>
              <span>✓ Demonstração personalizada</span>
              <span>✓ Análise gratuita dos seus processos</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal de contato */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default HomePage;
