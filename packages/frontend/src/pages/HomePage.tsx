import React from 'react';
import { Header, Footer, Button } from '../components';

const HomePage: React.FC = () => {
  const handleCTAClick = () => {
    // TODO: Implementar lógica de agendamento/contato
    console.log('CTA clicado - abrir modal de contato');
  };

  return (
    <div className="homepage">
      <Header onCTAClick={handleCTAClick} />

      <main>
        {/* Seção Hero */}
        <section
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
        <section style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
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
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
