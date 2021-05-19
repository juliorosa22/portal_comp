
//{nome:'Estrutura de dados',ano:3,periodo:1,desc:'Ementa...'}
var disciplinas=[
    //3 ano
    {nome:['Estrutura de Dados',''],ano:3,periodo:1,desc:'EMENTA: INTRODUÇÃO A ALGORITMOS: Introdução a Algoritmos: definições, recursividade, complexidade, notação O e Omega, análise de algoritmos, pior caso, melhor caso e caso médio; Exercícios. LISTAS: Listas Lineares: definições, alocação sequencial, listas, pilhas e filas em alocação seqüencial; Alocação dinâmica, listas simplesmente encadeada, listas duplamente encadeadas e listas circulares em alocação dinâmica; Implementação. ÁRVORES: Árvores: definições e representações, árvores binárias, percursos em árvores binárias, árvores com costura, implementação computacional de árvores n-árias e binárias; Árvores Binárias de Buscas: Conceitos básicos, algoritmos e estrutura de dados; Árvores Balanceadas: Conceitos de balanceamento, Árvores AVL, árvores B; Implementação. LISTAS DE PRIORIDADES: Listas de Prioridade: Introdução, opções de implementação; Heap: definição, estrutura de dados, inserção, remoção; Aplicação: HeapSort; Implementação. TABELA DE DISPERSÃO: Tabela de Dispersão: princípios de funcionamento, funções de dispersão, tratamento de colisões; tabela de dimensão dinâmica; Implementação. GRAFOS: Fundamentos: Definição, conceitos básicos; Representação e Implementação: matriz de adjacência, matriz de incidência, lista de adjacência, operações básicas, implementação computacional; Aplicações; Implementação.'},
    {nome:['Fenômenos de Transporte',''],ano:3,periodo:1,desc:'EMENTA: TRANSPORTE DE QUANTIDADE DE MOVIMENTO:- A viscosidade e os mecanismos de transporte de quantidade de movimento; Perfis de velocidade em escoamento laminar permanente e isotérmico; Equações de governo para sistemas isotérmicos. TRANSPORTE DE ENERGIA E MASSA:- Condutividade térmica e os mecanismos de transporte de energia; Perfis de temperatura em sólidos e em escoamento laminar; Equações de governo para sistemas não isotérmicos em regimes permanente e transiente; Difusividade e os mecanismos de transporte de massa; Perfis de concentração em sólidos e em escoamento laminar.'},
    {nome:['Laboratório de Programação I',''],ano:3,periodo:1,desc:'EMENTA: INTRODUÇÃO: O Curso; Programação Orientada a Objetos; Revisão de C. CONCEITOS DE ORIENTAÇÃO A OBJETO: Objetos; Aspectos da orientação a objeto; Diferenças de paradigmas. ORIENTAÇÃO A OBJETO EM C++: Declaração de Classes; Declaração de Objetos; Métodos; Acesso a Métodos; Herança; Declaração de Construtores e Destrutores; Estudo Dirigido I - Lista; Estudo Dirigido II - Pilha. UTILIZAÇÃO DA MEMÓRIA EM C++: Áreas da memória; Alocação de memória em C++. OUTROS CONCEITOS DE OO E SUAS IMPLEMENTAÇÕES EM C++: Herança Múltipla; Membros Estáticos; O Ponteiro This; Funções Friend; Funções Inline; Polimorfismo. SOBRECARGA DE OPERADORES: Sobrecarga de operadores; Estudo dirigido – Números Fracionários. ENTRADA E SAÍDA: Fluxos; Sobrecarga dos Operadores de Inserção e Extração; Acesso a Arquivos. POLIMORFISMO E MODELOS: Modelos; Exceções. BIBLIOTECA PADRÃO DE MODELOS (STL): STL; Prática da biblioteca.'},
    {nome:['Matemática Discreta',''],ano:3,periodo:1,desc:'EMENTA: CONJUTOS E RELAÇÕES BINÁRIAS: Conjuntos; Relações Binárias; Operações sobre Relações; Relações de compatibilidade e equivalência. GRAFOS E ÁRVORES: Grafos; Alcançabilidade; Homomorfismo; Planaridade e Coloração; Árvores; Tipos de árvores. ESTRUTURAS ALGÉBRICAS: Estruturas Algébricas; Grupos; Homomorfismo; Grupo Quociente; Subgrupos; Anéis; Anéis de polinômios; Corpos. RETICULADOS E ÁLGEBRA BOOLEANA: Reticulados; Reticulados Distributivos, Álgebra Booleana, Anéis Booleanos.'},
    {nome:['Organização de Computadores',''],ano:3,periodo:1,desc:'EMENTA: INTRODUÇÃO: Histórico; Bases de numeração; Representação numérica de inteiros; Representação de números de ponto flutuante. ORGANIZAÇÃO DE SISTEMAS COMPUTACIONAIS: Processadores; Memória; Memória Secundária Comunicação e Entrada e Saída. LÓGICA DIGITAL: Portas Lógicas; Projeto de Bancos de Memória; CPUs e Barramentos CPUs comerciais; Barramentos comerciais. MICROARQUITETURA: Estudo de Caso de Microarquitetura; Implementação da Microarquitetura apresentada. CONJUNTO DE INSTRUÇÕES: Visão Geral; Pipeline; Memória Virtual.'},
    {nome:['Princípios de Telecomunicações',''],ano:3,periodo:1,desc:'EMENTA: INTRODUÇÃO À TRANSMISSÃO DE INFORMAÇÕES: Introdução; Arquitetura de comunicações em camadas; Comunicação ponto-a-ponto; Conceitos Básicos de Transmissão de Informações; Capacidade de Informação dos Sistemas. RESPOSTA DE FREQUÊNCIA DE SISTEMAS LINEARES: Revisão de Séries de Fourier; Transformada de Fourier e suas propriedades; Sinais e Sistemas Lineares; Resposta de Sistemas Lineares; Impulso, Resposta ao Impulso e Convolução; Aplicações. TÉCNICAS ANALÓGICAS DE MODULAÇÃO: Envoltória complexa e representação espaço sinal; Modulação AM, SSB e FM; Ruído térmico; Desempenho de Sistemas Analógicos na presença de ruído térmico: AM, SSB, FM; Aplicações. SISTEMAS DE COMUNICAÇÃO DIGITAIS: Teorema da Amostragem; Quantização e ruído de quantização; PCM; Modulação Delta e PCM Diferencial; Multiplexação e TDM; Aplicações. TÉCNICAS DIGITAIS DE MODULAÇÃO: Modulações Digitais: OOK, FSK, PSK; Detecção de Sinais Binários Multinível QAM e PSK-M; Demodulação coerente. DESEMPENHO DE TÉCNICAS DE TRANSMISSÃO DIGITAIS EM CANAIS AWGN: Desempenho das modulações ASK, PSK, FSK e QAM; Probabilidade de erro, eficiência espectral; Aplicações. TRANSMISSÃO EM CANAIS LIMITADOS EM BANDA: IES, Filtro de Nyquist; Projeto de filtros de transmissão e recepção para cancelamento da IES, Raiz de cosseno levantado; Noções de equalização.'},
    {nome:['Sistemas Digitais',''],ano:3,periodo:1,desc:'EMENTA: INTRODUÇÃO A SISTEMAS DIGITAIS: Introdução à Eletrônica Digital; Famílias Lógicas; Representação Numérica em Sistemas Digitais. ÁLGEBRA BOOLEANA: Álgebra Booleana; Mapas de Karnaugh. CIRCUITOS COMBINACIONAIS CLÁSSICOS: Portas Lógicas; Somadores; Comparadores; Multiplexadores; Decodificadores; Codificador de prioridade; Buffers de 3 estados; Drivers em Coletor Aberto. CIRCUITOS SEQUENCIAIS: Latches e Flip-flops; Máquinas Sequenciais Síncronas; Circuitos Sequenciais Clássicos; TÓPICOS ADICIONAIS: Componentes de Memória em Sistemas Digitais; Introdução a Arquitetura de Computadores.'},
    {nome:['Análise e Projeto de Sistemas I',''],ano:3,periodo:2,desc:'EMENTA: PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE: Conceitos; Processo de Desenvolvimento de Software; Processo de Engenharia de Requisitos. CONCEITOS DE ORIENTAÇÃO A OBJETOS: Abstração; Classes; Objetos; Mensagens; Encapsulamento; Herança; Polimorfismo. MODELO DE CASOS DE USO: Conceitos; Diagrama de Casos de Uso; Descrição de Casos de Uso; Modelagem de Casos de Uso. MODELO DE CLASSES DE ANÁLISE: Conceitos; Diagrama de Classes; Modelagem de Classes de Análise. PROJETO DE INTERFACE COM O USUÁRIO: Conceitos de Engenharia de Usabilidade; Princípios de Projeto de Interface com o Usuário; Etapas do Projeto de Modelagem de Interação.'},
    {nome:['Banco de Dados I',''],ano:3,periodo:2,desc:'EMENTA: INTRODUÇÃO: Conceitos Básicos; Arquitetura De SGBD. PROJETO DE BANCOS DE DADOS: Modelo De Entidades E Relacionamentos; Modelo Orientado a Objetos; Modelo Relacional; Trabalho Prático. LINGUAGENS DE BANCO DE DADOS: Álgebra Relacional; SQL ; SQL XML; Trabalho Prático.'},
    {nome:['Laboratório de Programação II',''],ano:3,periodo:2,desc:'EMENTA: INTRODUÇÃO: Introdução à Orientação a Objetos; Arquitetura de uma aplicação escrita em java; Tipos primitivos e comandos de seleção e repetição. CLASSES EM JAVA: Tipos Compostos; Classes e Objetos; Principais APIs; Herança; Classes Abstratas e Interface. RECURSOS ADICIONAIS: Integração com Banco de Dados; Programação distribuída; Manipulação de arquivos; Desenvolvimento de Interfaces gráficas. PYTHON: Introdução; Programação com o paradigma de orientação a objetos; Programação com Threads; Integração com Banco de Dados; Programação Distribuída.'},
    {nome:['Inteligência Artificial',''],ano:3,periodo:2,desc:'EMENTA: INTRODUÇÃO: Introdução à Inteligência Artificial; Agentes Inteligentes. MÉTODOS DE RESOLUÇÃO DE PROBLEMAS: Busca em Espaço de Estados; Buscas Cegas; Buscas Heurísticas; Buscas Competitivas. COMPUTAÇÃO EVOLUCIONÁRIA: Introdução à Computação Evolucionária; Algoritmos Genéticos; Exemplo de Aplicação. CONHECIMENTO E RACIOCÍNIO: Representação do Conhecimento; Sistemas Especialistas; Conhecimento Incerto e Raciocínio; Sistemas de Inferência Nebulosa. APRENDIZADO DE MÁQUINA: Introdução ao Aprendizado de Máquina; Preparação de Dados; Técnicas e Algoritmos. REDES NEURAIS: Introdução às redes neurais; Algoritmos Backpropagation; Redes Profundas. SEMINÁRIOS: Seminário de IA.'},
    {nome:['Lógica Matemática',''],ano:3,periodo:2,desc:'EMENTA: LÓGICA PROPOSICIONAL: Sintaxe e Semântica da Lógica Proposicional, Indução Lógica, Dedução Lógica, Corretude e Completude, Resolução. LÓGICA DE PREDICADO: Sintaxe da Lógica de Predicados; Semântica da Lógica de Predicados; Dedução na Lógica de Predicados; Resolução na Lógica de Predicados. PROGRAMAÇÃO EM LÓGICA: Implementação de Programas / PROLOG; Resolução – SLD; Resolução - SLD usando Listas.'},
    {nome:['Projeto e Análise de Algoritmos',''],ano:3,periodo:2,desc:'EMENTA: INTRODUÇÃO A ALGORITMOS: Problemas e instâncias; Algoritmos e sua definição; Especificação de algoritmos; Critérios de análise; Correção de algoritmos; Limitações. ANÁLISE DE ALGORTIMOS: Desempenho de Algoritmos; Notação Assintótica: O(.), Omega(.) e Teta(.); Operações em notação Assintótica; Complexidade de pior caso; Recursividade na solução de problemas; Comparação de implementações recursivas e iterativas de um mesmo algoritmo; Algoritmo Polinomiais; Algoritmo pseudo-polinomiais. TÉCNICAS DE PROJETO DE ALGORITMOS: Princípio de indução; Divisão e conquista; Algoritmos gulosos; Programação dinâmica; Percursos e buscas em grafos: Busca em Largura e em Profundidade. APLICAÇÕES: Algoritmos gulosos: exemplos; Dividir para conquistar: exemplos; Programação dinâmica: exemplos; Buscas em grafos: exemplos; Outros exemplos. TEORIA DA COMPLEXIDADE: Problemas de decisão; Introdução à NP-Completeza; Classes P, NP, NP-Completo; Redução Polinominal. FLUXO EM REDES: Definição do problema; Algoritmo de Ford e Fulkerson; Teorema de Corte Mínimo e Fluxo Máximo; Complexidade.'},
    {nome:['Redes de Computadores I',''],ano:3,periodo:2,desc:'EMENTA: INTRODUÇÃO: Evolução dos Sistemas de Computação e Tipos de Redes de Computadores; Parâmetros de Comparação entre redes e Comutação; Tipos de redes. TOPOLOGIAS DE REDES: Linhas de Comunicação e Ligação ao Meio Físico. ARQUITETURAS DE REDES DE COMPUTADORES: O Modelo OSI; Arquitetura TCP/IP; Arquitetura IEEE; Comparação entre os Modelos OSI, TCP/IP e IEEE. CAMADA DE APLICAÇÃO: Camada de Aplicação; Modelo Cliente-Servidor e P2P; Interface de Sockets; Programas aplicativos da arquitetura TCP/IP. CAMADA DE TRANSPORTE: Conceitos da camada de transporte; Protocolo UDP; Protocolo TCP. CAMADA DE REDE: Conceitos da camada de rede Endereçamento e Tipos de serviço; Roteamento. A CAMADA DE REDE NA INTERNET - O PROTOCOLO IP: Endereço IP; Datagrama IP; SubRedes IP; CIDR; Resolução de endereços IP; Protocolo ICMP; IPv6. ROTEAMENTO IP: Conceitos de roteamento IP; Protocolos Interiores; Protocolos Exteriores. LABORATÓRIO DE REDES: Laboratório de Aplicação; Laboratório de programação de redes; Laboratório de redes.'},

    //4 ano
    {nome:'Análise e Projeto de Sistemas II',ano:4,periodo:1,desc:'EMENTA: MODELAGEM DE INTERAÇÕES: Modelagem de Interações. PADRÕES ARQUITETURAIS: Modelagem Arquitetural; Padrões Arquiteturais. PADRÕES DE PROJETO DE SOFTWARE ORIENTADO A OBJETOS: Projeto Orientado a Objetos; Padrões de Projeto. VERIFICAÇÃO E VALIDAÇÃO DE SOFTWARE: Verificação e Validação; Projeto de Casos de Teste de Unidade; Projeto de Casos de Teste de Sistema e Aceitação.'},
    {nome:'Banco de Dados II',ano:4,periodo:1,desc:'EMENTA: BANCO DE DADOS: Projeto Físico de Bancos de Dados; Processamento e Otimização de Consultas; Arquiteturas de Bancos de Dados; Banco de dados e a Web.'},
    {nome:'Laboratório de Programação III',ano:4,periodo:1,desc:'EMENTA: INTRODUÇÃO. HTML: Introdução; Formato e tags; Formulário. CSS: Introdução; Seletor, Propriedade e Valor; Tipos de vínculos. JAVASCRIPT: Introdução; Sintaxe e estrutura da linguagem; Framework Javascript. SERVLET E JSP: Introdução; Servlet; JSP; MVC. APLICATIVOS NATIVOS ANDROID: Introdução; Componentes; Activity; Service; Broadcast Receiver; Content Provider. APLICATIVOS HÍBRIDOS: Introdução; Componentes; Eventos; Componente View; APIs Nativas; Integração.'},
    {nome:'Linguagens Formais e Autônomos',ano:4,periodo:1,desc:'EMENTA: INTRODUÇÃO: Conceitos Básicos; Hierarquia de Chomsky. LINGUAGENS REGULARES: Gramáticas Regulares; Autômatos Finitos; Pumping Lemma; Expressões Regulares. LINGUAGENS LIVRES DE CONTEXTO: Gramáticas Livres De Contexto; Formas Normais; Autômato De Pilha. MÁQUINAS DE TURING: Máquinas de Turing; Máquinas De Turing Com Fita Limitada; Complexidade.'},
    {nome:'Microprocessadores',ano:4,periodo:1,desc:'EMENTA: HISTÓRICO: Fatos históricos. ARQUITETURAS X86 DE 16 E 32 BITS: BARRAMENTOS, REGISTRADORES, SEGMENTAÇÃO EM MODO REAL, ORGANIZAÇÃO DE UM PROCESSADOR x86, Assembler, Compilação c, programação avançada de pilha.ARQUITETURAS de um computador co processador X86: evolução das arquiteturas, mmx, memória cache. decodificação de i/o de 8, 16 e 32 bits: barramentos de interface, interfaceamento de i/o. Interrupções: Sistema de Interrupções e Exceções X86, Interfaceamento com interrupções. sistemas operacionais multitarefa: Arquitetura X86 Voltada à Multitarefa, Segmentação e Paginação, Conceitos Básicos: API, Proteção, Driver, etc, Interrupções e Exceções em Modo Protegido, Plug and Play. componentes periféricos: Temporizador e Relógio Permanente, porta paralela, Porta Serial RS, BT e UART, Barramento PCI, Barramento Usb, experimento de laboratório.'},
    {nome:'Redes de Computadores II',ano:4,periodo:1,desc:'EMENTA: CAMADA DE ENLACE: Delimitação de Quadros; Detecção e Correção de Erros; Controle e Detecção de Erros no Enlace; Controle de Fluxo no Enlace; Tipos de Serviços; Protocolos da camada de enlace. PROTOCOLOS DE ACESSO AO MEIO: Acesso Baseado em Contenção: ALOHA, CSMA e suas variações. Acesso Ordenado sem Contenção: Polling; Slot; Inserção de Retardo; Passagem de Permissão; protocolos com Reserva. PADRÕES IEEE 802 PARA REDES LOCAIS: IEEE 802.3; IEEE 802.5; IEEE 802.11. INTERLIGAÇÃO DE REDES LOCAIS: Equipamentos de rede; LANs Virtuais; Protocolos de bridging e switching; MPLS: Evolução da comutação IP; MPLS; Vantagens e desvantagens. CAMADA FÍSICA: Interface física de transmissão. MEIOS FÍSICOS DE TRANSMISSÃO: Meio de Transmissão; Instalação Física e Cabeamento Estruturado. LABORATÓRIO DE REDES LOCAIS: Laboratório de equipamentos de rede local; Laboratório de VLANs; Laboratório de comunicações seriais; Laboratório de cabeamento estruturado.'},
    {nome:'Sistemas Operacionais',ano:4,periodo:1,desc:'EMENTA: INTRODUÇÃO: Estrutura de um sistema computacional; Conceito e História; Estrutura de um sistema operacional. PROCESSOS: 1. Introdução a processos, Estados de um Processo; Descrição e Controle de Processos; Operações com processos; Comunicação entre processos. THREADS: Introdução a threads; Threads de usuário e de kernel; Modelos de multithreading. ESCALONAMENTO DE CPU: Conceitos básicos; Algoritmos de Escalonamento; Escalonamento em Multiprocessadores; Escalonamento de Tempo Real; Avaliação de algoritmos. SINCRONIZAÇÃO DE PROCESSOS: Princípios de Concorrência; Exclusão Mútua; Semáforos; Monitores; Problema de Escritores e Leitores; Dealock (Impasse); Problema do Jantar de Filósofos. GERENCIAMENTO DE MEMÓRIA E MEMÓRIA VIRTUAL: Fundamentos; Alocação contígua de memória; Paginação; Segmentação; Paginação sob demanda; Algoritmos de substituição de páginas; Alocação de quadros e thrashing. SISTEMAS DE ARQUIVOS: Conceitos básicos; Métodos de acesso; Estrutura de diretório; Proteção; Estrutura do sistema de arquivos; Métodos de alocação; Gerência de espaço livre.'},
    {nome:'Administração',ano:4,periodo:2,desc:'EMENTA: A Evolução da Gestão; Administração da Produção; Administração e Marketing; Gestão de Pessoas; Gestão da Qualidade Total.'},
    {nome:'Direito',ano:4,periodo:2,desc:'EMENTA: Teoria Geral do Estado; Elementos Introdutórios do Direito; Direito Constitucional; Direito Civil; Direito Penal Militar; Direito Administrativo.'},
    {nome:'Noções Básicas de Economia',ano:4,periodo:2,desc:'EMENTA: Introdução; Matemática Financeira; Métodos de Avaliação de Projetos de Investimento.'},
    {nome:'Projeto de Redes IP',ano:4,periodo:2,desc:'EMENTA: Introdução às Redes Genéricas de Comunicações: Conceitos Básicos, Comunicações Analógicas e Digitais, Redes de Computadores; Especificação e Análise do Projeto de Redes de Telecomunicações: Levantamento de Informações de Situação, Elementos de ligação entre negócios empresariais e tecnologias da informação, Projeção de Cenários Futuros para Arquiteturas de TI, Definição de critérios de implantação; Rede Local: Sistema de Cabeamento Estruturado, Acesso WI-FI, Salas de Telecomunicações e Sala de Equipamentos, Data Center, Redes de Acesso; Telefonia sobre IP: Introdução à Rede Pública de Telefonia; Introdução aos Sistemas de Telefonia sobre IP; Projeto de Rede de Telefonia sobre IP; Vídeo sobre IP: Sinais de Vídeo Analógico, Introdução aos Sistemas de Vídeo sobre IP, Projeto de Rede de Vídeo sobre IP.'},
    {nome:'Tecnologia e Sociedade',ano:4,periodo:2,desc:'EMENTA: O ESTADO E A SOCIEDADE: O estado e as instituições sociais, O Estado as relações políticas e econômicas e os movimentos sociais, O capitalismo. A sociedade industrial; A Tecnologia e o Emprego: A revolução industrial e o trabalho, A revolução científica, A tecnologia e o emprego. A nova divisão do trabalho; Desenvolvimento Científico e Tecnológico: Pesquisa, desenvolvimento e engenharia, Transferência de tecnologia para os paises em desenvolvimento, O sistema de ciência e tecnologia de uma nação moderna. Inovação.'},

    //5ano
    {nome:'Computação Gráfica',ano:5,periodo:1,desc:'EMENTA: GEOMETRIA: Introdução: Aplicações, Áreas Correlatas e Paradigma dos quatro universos; Álgebra Linear: Produto Interno, Norma, Transformações Lineares e Espaço Euclidiano; Geometria Projetiva: Transformações Afins, Coordenadas Homogêneas, Transformações Projetivas, Espaço Projetivo, Rotações e Composição de Transformações. MODELAGEM GEOMÉTRICA: Objetos Gráficos Planares: Definição, Objetos Parametrizados, Objetos Implícitos, Representação de Curvas e Regiões e Rasterização; Objetos Gráficos Espaciais: Superfícies Paramétricas, Superfícies Implícitas, Superfícies Poliedras, Codificação e Superfícies Poliedrais, Objetos Volumétricos e Representação de Objetos Volumétricos. VISUALIZAÇÃO: Câmera Virtual: Espaços de Referência e Operações de Visualização; Modelos Locais de Iluminação: Superfícies Difusas e Especulares e Modelo de Reflexão de Phong; Visualização de Objetos Poliedrais: Colorização Constante, Colorização de Gouraud, Colorização de Phong e Cálculo de Superfícies Visíveis; Visualização de Objetos Implícitos: Traçado de Raios.'},
    {nome:'Linguagens de Programação',ano:5,periodo:1,desc:'EMENTA: INTRODUÇÃO: Conceitos E Paradigmas; sintaxe e semântica; processadores de linguagens. TIPOS: valores e tipos; tipos primitivos; tipos compostos; tipos recursivos; sistemas de tipos; expressões. ARMAZENAMENTO E CONTROLE: variáveis e atualização; atributos das variáveis; comandos; expressões com efeitos colaterais. ABSTRAÇÃO: Tipos De Abstração; Parâmetros; Avaliação de Parâmetros. ENCAPSULAMENTO: Tipos Abstratos; Objetos E Classes; Relação entre OO e Processos de Desenvolvimento. SISTEMAS DE TIPO: Sobrecarga; Polimorfismo; Inferência De Tipos; Herança. PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO: Imperativo; Orientado a Objetos; Funcional; Lógico.'},
    {nome:'Multimídia',ano:5,periodo:1,desc:'EMENTA: INTRODUÇÃO: Aplicações; Princípios Básicos de Sinais Digitais. VÍDEO DIGITAL: Varredura e display; Colorimetria / Espaços de Cores; Vídeo Digital; Sistema Visual Humano; Codificação de Imagens; Codificação de Vídeo; Medidas de Qualidade / Desempenho. ÁUDIO DIGITAL: Fundamentos de Compressão de Aúdio; Codificação de Áudio. TRANSPORTE: Sintaxe; Camada de transporte. TRANSMISSÃO DE MÍDIAS: Vídeo sobre IP; Erros de Transmissão; Streaming; Protocolos e Padrões Utilizados para Transmissão Multimídia.'},
    {nome:'Segurança da Informação',ano:5,periodo:1,desc:'EMENTA: CRIPTOLOGIA CLÁSSICA - CRIPTOGRAFIA E CRIPTOANÁLISE: Conceitos Básicos; Criptografia, Criptologia e Criptanálise; Parâmetros de Segurança da Informação; Sistemas Clássicos- Criptografia e Criptoanálise: Monoalfabéticos, Polialfabéticos, Permutação, Substituição Múltipla, Esteganografia. TÉCNICAS CRIPTOGRÁFICAS COMPUTACIONAIS: Criptografia de Chave Simétrica: Cifras de Bloco; DES; 3-DES; AES; Outras Cifras; Criptografia de Chave Pública: Conceitos; Assinatura Digital; RSA; El Gamal; Gerenciamento de Chaves: Tamanho de Chaves; Geração, Armazenamento e Transferência; Tipos e Modos de Algoritmos: Funções de Condensação (Hash); Autenticação de Mensagens; Blockchain. DEFESA CIBERNÉTICA: Guerra Cibernética: Conceitos;Histórico; Normas; Informação na Internet: Vulnerabilidades e Ameaças; Tipos de Invasores; Padrões de Segurança Vigentes; Ataque Cibernético: Tipos de Ataque; Firewall; Filtragem de Pacotes; Serviços de Proxy; DMZ. PROTEÇÃO E INVASÃO DE REDES: Ferramentas de Reconhecimento: Varredura de Redes (Nmap); comandos (netstat, nslookup, tracerout, ping); Ferramentas de defesa : Firewalls (IPTables); sistema de Detecç~co de Intrusão (Snort) ; Teste de Invasão (PenTest): Conceitos, Técnicas (Injeção de SQL, buffer overflow, XSS); ferramentas; Negação de Serviço. SISTEMAS DE GESTÃO E SEGURANÇA DA INFORMAÇÃO: Conceitos; Implementação; Normas de Segurança; Família de Normas da ISO 27000.'},
    {nome:'Sistemas de Informações',ano:5,periodo:1,desc:'EMENTA: INTRODUÇÃO A SISTEMAS DE INFORMAÇÃO: Introdução. SISTEMAS CORPORATIVOS: Enterprise Resouce Planning – ERP; Customer Relationship Management – CRM; Gestão Eletrônica de Documentos – GED; Comércio Eletrônico; Gestão de conhecimento; Computação Móvel e Ubíqua. GOVERNANÇA DE TI: Alinhamento Estratégico, Governança Corporativa e Governança de TI; ITIL; COBIT.'},
    {nome:'Sistemas Distribuídos',ano:5,periodo:1,desc:'EMENTA: INTRODUÇÃO: Características dos Sistemas Distribuídos; Metas dos Sistemas Distribuídos; Tipos de Sistemas Distribuídos. ARQUITETURAS DE SISTEMAS DISTRIBUÍDOS: Estilos arquitetônicos; Arquiteturas de sistemas; Arquiteturas e middleware. PROCESSOS EM SISTEMAS DISTRIBUÍDOS: Threads; Virtualização; Clientes; Servidores; Migração de código. COMUNICAÇÃO EM SISTEMAS DISTRIBUÍDOS: Comunicação entre Processos; Chamada remota de procedimento – RPC; Comunicação orientada a mensagem; MPI. NOMEAÇÃO: Nomeação simples; Nomeação estruturada. SINCRONIZAÇÃO: Sincronização de relógios; Relógios lógicos; Exclusão mútua; Algoritmos de eleição. CONSISTÊNCIA E REPLICAÇÃO: Modelos de consistência; Gerenciamento de réplicas; Protocolos de consistência. TOLERÂNCIA A FALHAS: Conceitos básicos; Resiliência de processo; Comunicação confiável cliente-servidor e de grupo; Comprometimento (commit) distribuído; Recuperação.'},
    {nome:'Laboratório de Sistemas Embarcados',ano:5,periodo:1,desc:'EMENTA: INTRODUÇÃO AOS SISTEMAS EMBARCADOS: Histórico; Aplicações; Propriedades. ESTRUTURA GERAL DE SISTEMAS EMBARCADOS: Fluxo de Dados e de Controle; Interface de Entrada; Interface de Saída. MICROCONTROLADORES - ARQUITETURA ARM: Núcleo de 32 bits (ARM Cortex M4); Conjunto de Instruções; MPU. PROJETO DE SISTEMA EMBARCADO: Projeto de Sistema Embarcado; Metodologia e Ferramentas de Projeto; Implementação de Projeto.'},
    {nome:'Projeto de Fim de Curso',ano:5,periodo:1,desc:'EMENTA: Desenvolvimento de um projeto completo de engenharia, em todas as suas etapas, sob orientação do professor, com tema correlacionado à especialidade do aluno, que visa consolidar os conhecimentos adquiridos e desenvolver a integração entre alunos de diferentes especialidades.'},
    {nome:'Compiladores',ano:5,periodo:2,desc:'EMENTA: INTRODUÇÃO: conceitos; estruturação do compilador. ANALISE LÉXICA: análise léxica. ANALISE SINTÁTICA : conceitos básicos; método lr(1) simples; método lr(1) canonico; método lr(1) l.a.; geradores de analisadores sintáticos. CHECAGEM SEMANTICA: linguagens sem escopo local; linguagens com escopo local; linguagens orientadas a objeto; gramáticas de atributos. GERAÇAO DE CÓDIGO: estruturas de memória em tempo de execução; estruturas de memória em tempo de execução para linguagens orientadas a objeto; código intermediário; implementação da geração de código. OTIMIZAÇÃO DE CÓDIGO: otimização dependente de máquina; otimização independente de máquina.'},
    {nome:'Empreendedorismo',ano:5,periodo:2,desc:'EMENTA: STARTUP: DESENVOLVER O PRODUTO OU O CLIENTE?: O Lean Startup; Canvas do modelo de negócio; Planejamento estratégico usando a estratégia do Oceano Azul. PROPRIEDADE INTELECTUAL: Conceitos básicos; Processo de obtenção; Aspectos legais. TRABALHOS EM GRUPO: Criação de startups; Apresentação para investidores.'},
    {nome:'Robótica',ano:5,periodo:2,desc:' EMENTA: INTRODUÇÃO: Desenvolvimento Histórico dos Sistemas de Robótica; Conceitos de Mecânica de Manipuladores; Conceitos de Planejamento e Controle de Trajetória; Conceitos de Percepção Sensorial e Inteligência para Sistemas Robóticos. CINEMÁTICA DE MANIPULADORES ROBÓTICOS: O Problema Cinemático Direto; O Problema Cinemático Inverso. DINÂMICA DE MANIPULADORES ROBÓTICOS: Formulação de Lagrange-Euler; Formação de Newton-Euler; Equações Generalizadas de DAlembert para o Movimento. PLANEJAMENTO DE TRAJETÓRIAS DE MANIPULADORES: Conceitos Gerais de Planejamento de Trajetórias; Trajetórias de Interpolação de Juntas; Planejamento de Caminhos para um Manipulador Cartesiano. CONTROLE DE MANIPULADORES ROBÓTICOS: Introdução aos Servomecanismos e Elementos de Mecatrônica; Técnica do Torque Computado; Controle Adaptativo. PERCEPÇÃO SENSORIAL: Sensores de Proximidade e de Contato; Sensores de Força e de Torque. VISÃO DE MÁQUINA: Aquisição de Imagens e Pré-processamento; Segmentação e Descrição; Reconhecimento e Interpretação. TÉCNICAS DE IA PARA ROBÓTICA: Aplicações de meta-heurísticas para sistemas robóticos; Aplicações de Redes Neurais e Lógica Fuzzy para Sistemas Robóticos.'},
    {nome:'Simulação e Análise de Desempenho',ano:5,periodo:2,desc:'EMENTA: VARIÁVEIS ALEATÓRIAS: Variáveis Aleatórias Discretas; Distribuições discretas; Variáveis Aleatórias Contínuas; Distribuição Normal. VARIÁVEIS ALEATÓRIAS BIDIMENSIONAIS: Variáveis Aleatórias Bidimensionais; Distribuições marginais; Variáveis Aleatórias Independentes; Covariância e Correlação. INFERÊNCIA: Dados Amostrais; Amostra Aleatória; Estimação Pontual de Parâmetros; Estimação por intervalo; Teste de Hipóteses. MODELOS DE REGRESSÃO E CORRELAÇÃO: Regressão Linear Simples; Propriedades; Intervalo de Confiança; Teste de Hipóteses; Adequação do Modelo; Correlação. INTRODUÇÃO AOS PROCESSOS ESTOCÁSTICOS: Introdução aos Processos Estocásticos e Processo de Poisson. CADEIAS DE MARKOV: Cadeias de Markov em Tempo Discreto; Cadeias de Markov em Tempo Contínuo; Processo de Nascimento e Morte. TEORIA DAS FILAS: Introdução; A Fila M/M/1; Demais Filas Markovianas; Rede de Filas; Filas Não-Markovianas; Filas de Prioridade. TÉCNICAS DE SIMULAÇÃO DE SISTEMAS: Motivação, Abordagens e Estrutura Básica; Geração de números pseudo-aleatórios; Geração de variáveis aleatórias; Coleta de dados; Construção e Validação do modelo; Análise dos dados de saída; Linguagem de Simulação. ESTUDO DE CASOS: Simulação e Modelagem.'},
    {nome:'Teoria da Computação',ano:5,periodo:2,desc:'EMENTA: LÓGICA PROPOSICIONAL: Panorama da área de Teoria da Computação; Revisão de máquina de Turing; Tese de Turing Church. COMPUTABILIDADE: Máquina de Turing Universal; Linguagens Recursivas e Recursivamente Enumeráveis; Problema da Parada; Teorema de Rice; PCP e Outros problemas não decidíveis . INTRATABILIDADE: Classes de Complexidade; Teorema de Cook-Levin; Problemas NP – Completos; PSPACE – Completude. LÓGICA E COMPLEXIDADE: Lógicas de Segunda Ordem; Teorema de Fagin; Lógica e Representabilidade.'},
    {nome:'Projeto de Fim de Curso',ano:5,periodo:2,desc:'EMENTA: Desenvolvimento de um projeto completo de engenharia, em todas as suas etapas, sob orientação do professor, com tema correlacionado à especialidade do aluno, que visa consolidar os conhecimentos adquiridos e desenvolver a integração entre alunos de diferentes especialidades.'},
];
