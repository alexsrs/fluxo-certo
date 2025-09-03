// Script de teste para verificar se a API está funcionando
async function testAPI() {
  try {
    console.log('🧪 Testando API do Backend...\n');

    // Teste 1: Endpoint raiz
    console.log('1. Testando endpoint raiz...');
    const rootResponse = await fetch('http://localhost:3001');
    const rootData = await rootResponse.json();
    console.log('✅ Root endpoint:', rootData);

    // Teste 2: Health check
    console.log('\n2. Testando health check...');
    const healthResponse = await fetch('http://localhost:3001/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);

    // Teste 3: Listar leads (deve retornar array vazio)
    console.log('\n3. Testando GET /api/leads...');
    const leadsResponse = await fetch('http://localhost:3001/api/leads');
    const leadsData = await leadsResponse.json();
    console.log('✅ Leads endpoint:', leadsData);

    // Teste 4: Criar um lead de teste
    console.log('\n4. Testando POST /api/leads...');
    const newLead = {
      name: 'João Silva',
      email: 'joao@exemplo.com',
      phone: '(11) 99999-9999',
      company: 'Empresa Teste',
      message: 'Interessado em automação de vendas',
      source: 'landing_page',
    };

    const createResponse = await fetch('http://localhost:3001/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLead),
    });
    const createData = await createResponse.json();
    console.log('✅ Create lead:', createData);

    console.log(
      '\n🎉 Todos os testes passaram! API está funcionando corretamente.',
    );
  } catch (error) {
    console.error('❌ Erro nos testes:', error);
  }
}

// Executar testes
testAPI();
