import { handler } from './app';
import 'dotenv/config';

const port = process.env.PORT || 8085;
handler.listen(port, () => console.log(`Running on port ${port}`))


const projetos = {
    "1": {
        "period_id": "6279cdb5e0f4ed911268f1df",
        "title": "EducaOnça",
        "participants": "Giovanna Souto, Marília Barbosa e Rafaela Barros",
        "description": "Aplicação para auxiliar no ensino remoto de crianças ribeirinhas.",
        "video": "https://youtu.be/B-jJFzueha4",
        "github": "http://github.com/mariliabarbosa/educaonca"
    },
    "2": {
        "period_id": "6279cdb5e0f4ed911268f1df",
        "title": "Kayak da Onça",
        "participants": "ABIMAEL FERREIRA DE OLIVEIRA\nCARLOS EDUARDO NYLANDER BITENCOURT DIAS\nEDUARDO MAEDA DE OLIVEIRA ARAÚJO\nJOSÉ NONATO CUNHA DE OLIVEIRA JÚNIOR",
        "description": "Durante a visitação a Ilha das Onças foi verificado que a região possui mananciais em que pode ser explorado o turismo sustentável (ecoturismo) mas que é mal explorado tanto por falta de mais incentivos na região, além do pouco conhecimento por parte da população acerca desta atividade, logo é justificado a existência do projeto do Kayak da Onça para potencializar o ecoturismo e que se torne uma atividade 100 % rentável para a população e que possa ser mais divulgado a visitação na Ilha das Onças.",
        "video": "https://www.youtube.com/watch?v=BO_N630ibpM",
        "github": "https://github.com/Jose-Nonato/Kayake-da-Onca.git"
    },
    "3": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "BioTank",
        "participants": "THIAGO AUGUSTO SOUZA SILVA\nARTHUR KENJI ENOMOTO DE OLIVEIRA\nEDSON NEY DA PAIXAO FILHO\nIGOR HIROSHI MATSUMOTO\nVITORIA SUELY PANTOJA SILVA",
        "description": "BioTank e um projeto que visa fornecer um fonte de gás de cozinha limpa e sustentável para os habitantes da ilha das Onças.",
        "video": "https://youtu.be/y-9UC90_tr4",
        "github": "https://github.com/projeto-integrado-1/BioTank"
    },
    "4": {
        "period_id": "6279cdb5e0f4ed911268f1df",
        "title": "Hortas nas Onças",
        "participants": "Bernardo Gomes Brandão, Herminio Calvinho Bisneto, Marcos Gabriel França da Costa, Roberto Lucas Morais de Souza e Vitor Dias Flores",
        "description": "Um facilitador de plantio, fazendo com que o agricultor consiga ter maior controle sobre a colheita, incluindo: gestão, organização, manuseio e preparação.",
        "video": "https://www.youtube.com/watch?v=iHM5vM_xDNM",
        "github": "https://github.com/bernrdo/Hortas-nas-On-as"
    },
    "5": {
        "period_id": "6279cdb5e0f4ed911268f1df",
        "title": "Frequência Eletrônica",
        "participants": "Alvaro Augusto Pimentel, Enzo Eluan, Joao Paulo castro, Rannery Carlos, Reryson Farinha",
        "description": "A ideia do Projeto da Frequência Eletrônica é ajudar a escola Laurival Cunha. Temos em mente oferecer um software de controle dos alunos, ou seja, é um sistema de frequência que será de extrema importância para os professores e a direção da escola saberem como está o andamento dos alunos.",
        "video": "https://youtube.com/shorts/HR71deu3LY4?feature=share",
        "github": "https://github.com/frequenciaeletronica"
    },
    "6": {
        "period_id": "6279cdb5e0f4ed911268f1df",
        "title": "Seguronça",
        "participants": "Isaac Ponte, Kleyson Lucas, Nicolas Rocha, Paula Martins",
        "description": "O nosso projeto pretende orientar e educar as crianças utilizando um jogo educativo simples que tenha um foco nas regiões ribeirinhas (utilizando linguagem e interesses da região).",
        "video": "https://youtu.be/vumBiMJT1MA",
        "github": "https://github.com/nicolasrocha22/proj_integrado2"
    },
    "7": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "AMPará",
        "participants": "FABRICIO JOSÉ SOUSA SILVA\nJAIRO CESAR SANTOS DE JESUS JUNIOR\nWAGNER WENDELL SILVA RIBEIRO FILHO\nRICARDO RODRIGUES PEREIRA VIGLIANO\nJOAO VICTOR FONSECA DOS SANTOS\n",
        "description": "AMPará: Sonda multiparamétrica destinada a análise da qualidade da água na piscicultura. A sonda é capaz de medir os valores de temperatura, pH e totais de sólidos dissolvidos em água. Dessa forma, ajudando os piscicultores a mensurar a qualidade da sua criação\n",
        "video": "https://www.youtube.com/watch?v=BHsGbOiSFfY",
        "github": "https://github.com/wagnerfilh/AMPara"
    },
    "8": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "Beeduino ",
        "participants": "Victor Sabaa Srur do Nascimento Ximenes, Luis André Malcher Aires, Gleidson Augusto Alves Diniz, Vinícius Henrique Macedo de Andrade ",
        "description": "Um sistema de monitoramento de caixa de abelhas, com sensores climáticos e sistema de alarme visual e sonoro, para melhorar a eficiência na meliponicultura voltada a produção de mel.",
        "video": "https://youtu.be/c6UzMUg9nKY",
        "github": "https://github.com/V1ct0rSabaa/Projeto-Integrado-Beeduino"
    },
    "9": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "Composteira Inteligente",
        "participants": "Membros da Equipe:\nCaio Johnston\nLucas Borges\nLuiz Felipe Pina\nPedro Vitor Raiol\nVinicius Rayol",
        "description": "O projeto, Composteira Inteligente, consiste na criação de uma automação denominada AduboIn que será acoplada ao modelo existente de composteira, fornecendo informações úteis ao agricultor para uma produção.",
        "video": "https://youtu.be/0H5Z2REOJsA",
        "github": "https://github.com/Felp14/ComposteiraInteligente"
    },
    "10": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "Gelátil",
        "participants": "Arthur Queiroz, Arthur Sabino, Lucas Maués",
        "description": "Sistema de refrigeração com pastilhas peltier pensado para caroços de açaí. ",
        "video": "https://youtu.be/mUeHCneU09w",
        "github": "https://github.com/arthuurqueirozz/Gelatil"
    },
    "11": {
        "period_id": "6279cdbbe0f4ed911268f1e1",
        "title": "acAI",
        "participants": "Luis Filipe Félix de Almeida Souza",
        "description": "O projeto ACAI é uma proposta atual e independente de conexão com internet que tem a premissa de auxiliar diversos moradores das ilha das onças. Sua principal função e ser gestora dos ganhos do usuário podendo auxiliar na economia de gastos que podem vir a surgir",
        "video": "https://youtu.be/b2up6279cdb5e0f4ed911268f1dfe4yk",
        "github": "https://github.com/lff15/acAI"
    },
    "12": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "AutoDrops",
        "participants": "Fabio Neves, João Vitor Cardoso, Marco Aurélio, Newton Miranda, João Guilherme Beltrão",
        "description": "Um sistema de irrigação automatizado, para aqueles que não tem tempo de cuidar das suas plantinhas na varanda da casa.",
        "video": "https://youtu.be/Q-fDlpqaWDA",
        "github": "https://github.com/JoaoCardoso00/AutoDrops"
    },
    "13": {
        "period_id": "6279cd9ee0f4ed911268f1dc",
        "title": "SICFAA  (Sistema Inteligente de Captação, Filtragem e Armazenamento de água)",
        "participants": "Felipe Machado Dias Ramos, Letícia Keuffer Cavalleiro de Macedo, Pedro Benitah Sanchez de Melo, Vitor Gurjão Sampaio Pombo, Vítor Longhi Ramôa",
        "description": "Um sistema inteligente de captação, filtragem e armazenamento de água para ser utilizado por comunidades carentes em suas hortas.",
        "video": "https://youtu.be/pBfb3EABTm0",
        "github": "https://github.com/Pedro-Benitah/On-aaD-gua/wiki/On%C3%A7a-D%27%C3%A1gua"
    },
    "14": {
        "period_id": "6279cdbbe0f4ed911268f1e1",
        "title": "QiaQuiz",
        "participants": "Marcelo Calandrini Chaves\nMarcelo Saldanha Lima Filho\nMarcos Aguiar Parente\nMatheus Lopes da Silva\nOtávio Araújo da Silva",
        "description": "O projeto atende a escola EMEIF Prefeito Laurival Cunha localizada na  ilha das onças, no municipio de Barcarena no estado do Pará.  E possui como objetivo de estimular os alunos ao estudo por meio do uso de ferramentas tecnológicas aplicadas junto a metodologias de ensino, a fim de auxiliar a escola no seu grande papel de contribuir positivamente com a comunidade na formação de indivíduos. O protótipo desenvolvido pelo projeto possui o nome de QIAQUIZ pois seguindo as diretrizes propostas, ele contém a implementação de um recurso de inteligência artificial (IA) que agrega no formato de quiz., assim a solução é aplicado junto a uma metodologia ativa a Team Based Learning.(TBL).",
        "video": "https://www.youtube.com/watch?v=DRU8JZQchqQ",
        "github": "https://github.com/otavioaraujo08/QIA_Quiz"
    },
    "16": {
        "period_id": "6279cdbbe0f4ed911268f1e1",
        "title": "CM Analitycs",
        "participants": "Andre Akira, Danilo Castro, David Cabral, Oscar Borges e Tales Macedo",
        "description": "Sistema focado em gestão e organização de notas",
        "video": "https://youtu.be/Wb3Vzom0aHw",
        "github": "https://github.com/davidscabral02/CManalitycs.git"
    }
}
