# The Simple Split - MVP
## Sobre o Projeto
**The Simple Split** é uma plataforma que aborda a gestão de despesas entre grupos e a democratização do acesso a micro-recebíveis entre pessoas físicas (P2P). O projeto transforma dívidas sociais em ativos financeiros negociáveis, com foco em simplicidade, transparência e confiança. Este produto, focado no consumidor final (B2C), foi concebido para atuar em sinergia com a infraestrutura da Qi Tech, uma Sociedade de Crédito Direto (SCD) autorizada pelo Banco Central.
### Proposta de Valor e Inovação
O valor fundamental do The Simple Split reside em:
- **Resolução de Fricção Social**: Eliminando a ambiguidade e o desconforto que o dinheiro causa em relações pessoais, automatizando a divisão e a compensação de dívidas.
- **Democratização de Micro-Recebíveis**: Viabilizando a negociação de títulos de crédito de baixo valor, que seriam inviáveis em modelos tradicionais, por meio de uma plataforma digital e escalável.
- **Aproveitamento da Infraestrutura Qi Tech**: Alavancando a autorização regulatória e a tecnologia de BaaS (Banking as a Service) da Qi Tech para formalizar e securitizar as transações, garantindo segurança e conformidade.
### Arquitetura
- **Frontend**: Flutter (iOS/Android/Web)
- **Backend**: Python Flask com SQLAlchemy
- **Banco de Dados**: SQLite (para facilidade de desenvolvimento e implantação no MVP)
- **Autenticação**: JWT tokens
- **API**: RESTful com CORS habilitado
## Características Principais
### Interface e Design
A interface minimalista, inspirada no design da Apple, busca proporcionar uma experiência de usuário intuitiva e fluida. A navegação limpa e objetiva é central para a proposta de valor, garantindo clareza e transparência nas informações financeiras.
### Gestão de Grupos
Permite a criação de grupos para diferentes ocasiões. Ao registrar despesas, o aplicativo divide automaticamente o valor entre os membros. Um sistema de logs automáticos otimiza as dívidas, consolidando transações para reduzir o número de pagamentos necessários.
### Carteira Digital
Funciona como o núcleo financeiro da plataforma, permitindo:
- Inserção e manutenção de saldo.
- Pagamentos internos e transferências entre usuários.
- Histórico completo de transações.
Esta funcionalidade é integralmente sustentada pela infraestrutura de BaaS da Qi Tech, garantindo a segurança das transações.
### Marketplace de Recebíveis
O diferencial central do projeto, onde usuários podem negociar títulos de dívidas.
- **Venda de Títulos**: Usuários com dívidas a receber podem vendê-las com desconto por liquidez imediata.
- **Compra Anônima**: Compradores adquirem títulos anonimamente, mitigando o constrangimento em negociações diretas.
- **Segurança**: A custódia e a transferência do direito creditório são garantidas pela infraestrutura da Qi Tech.
### Sistema de Score Dinâmico
Um sistema de pontuação (0-10) baseado no histórico de pagamentos dos usuários.
- **Reputação Financeira**: O score aumenta com pagamentos pontuais e diminui com atrasos, servindo como indicador de confiabilidade para as transações no *marketplace*.
### Insights Automáticos
O aplicativo fornece informações contextuais e úteis para os usuários:
- Alertas de pagamentos pendentes.
- Resumos financeiros para acompanhamento de gastos.
- Notificações sobre a otimização automática de dívidas.
## Tecnologias Utilizadas
### Backend
- **Flask**: Framework web em Python.
- **SQLAlchemy**: ORM para o banco de dados.
- **Flask-JWT-Extended**: Gerenciamento de autenticação com JWT.
- **SQLite**: Banco de dados para o MVP.
- **Flask-CORS**: Gerenciamento de CORS para comunicação com o frontend.
### Frontend
- **Flutter**: Framework de UI multiplataforma.
- **Provider**: Gerenciamento de estado.
- **Go Router**: Gerenciamento de navegação.
- **HTTP**: Comunicação com a API.
- **Shared Preferences**: Armazenamento local de dados simples.
## Como Rodar o Projeto
### Pré-requisitos
- **Python 3.8+** ([Download](https://www.python.org/downloads/))
- **Flutter SDK 3.10+** ([Guia de instalação](https://docs.flutter.dev/get-started/install))
- **Git**
### 1. Como rodar e Testar
```bash
# Clone o repositório
git clone https://github.com/ceciliagalvaoo/qi-test.git
cd qi-test
# Crie e ative o ambiente virtual Python
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/Mac
source .venv/bin/activate
# Navegue para o backend e instale as dependências
cd simple_split_backend
pip install -r requirements.txt
# Execute o servidor Flask
python run.py
# Navegue para o frontend e instale as dependências
cd simple_split_frontend
flutter pub get
# Execute o app Flutter na web
flutter run -d web-server --web-port=8081
cd simple_split_backend
python test_backend.py