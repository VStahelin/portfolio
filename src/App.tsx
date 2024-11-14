import React, { useContext, useEffect, useMemo } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/molecules/Footer";
import Loading from "./components/molecules/Loading";
import { DataContext } from "./context/DataAPIContext";
import { BaseUrlContext } from "./context/GlobalValues";
import ProjectPage from "./components/pages/ProjectsPage";
import NewNavbar from "./components/molecules/NewNavbar";

type ContactType = {
  email: string;
  linkedin: string;
  github: string;
};

type AboutMeType = {
  contact: ContactType;
};

type PortfolioType = {
  about_me: AboutMeType;
};

const PageTracking: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-PBLYVGYSD9");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const BaseUrl = useContext(BaseUrlContext); // Fixed typo
  const context = useContext(DataContext);

  const cachedData = useMemo(() => {
    if (!context || context.loading) return null;
    if (context.error) return null;

    const portfolio: PortfolioType = context.portfolio as PortfolioType; // Fixed typo

    const about_me = portfolio?.about_me;
    const contact = about_me?.contact;
    return { about_me, contact };
  }, [context?.loading, context?.error, context?.portfolio]);

  useEffect(() => {
    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const elementType = target.tagName.toLowerCase();
      const elementId = target.id || "id-null";
      const elementClass =
        typeof target.className === "string" ? target.className : "";
      const elementText = target.innerText || "text-null";

      ReactGA.event({
        category: "User Interaction",
        action: `Click on ${elementType}`,
        label: `ID: ${elementId}, Class: ${elementClass}, Text: ${elementText}`,
      });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  if (!cachedData) {
    return <Loading />;
  }

  const { contact } = cachedData;

  if (!contact) {
    return <div>Informations not found</div>;
  }

  const { email, linkedin, github } = contact;
  const projectData = [
    {
      title: "AI Chatbot",
      tags: ["React", "Node", "AI"],
      short_description:
        "Um chatbot de IA que usa React e Node.js para entender e responder a perguntas dos usuários, fornecer informações e realizar tarefas simples. Ele usa um modelo de linguagem natural para gerar respostas naturais e envolventes.",
      description:
        "Este chatbot representa um exemplo de como a inteligência artificial está transformando a forma como interagimos com a tecnologia. Sua capacidade de entender e responder a perguntas, fornecer informações relevantes e realizar tarefas simples demonstra o potencial da IA para melhorar a experiência do usuário. O chatbot foi desenvolvido com uma arquitetura robusta, utilizando React para a interface do usuário, Node.js para o backend e um modelo de linguagem natural de última geração para processamento de linguagem natural. Essa combinação garante um sistema eficaz e eficiente, capaz de gerar respostas naturais e envolventes em uma variedade de cenários. A capacidade de entender e responder a perguntas complexas, fornecer informações precisas e realizar tarefas simples coloca o chatbot como uma ferramenta poderosa para diversos fins, como atendimento ao cliente, suporte técnico e automação de tarefas.",
      is_highlighted: true,
      image_url: "https://picsum.photos/seed/AIChatbot/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio Website",
      tags: ["React", "Tailwind", "TypeScript"],
      short_description:
        "Um site de portfólio pessoal, criado com React, Tailwind CSS e TypeScript. O site mostra minhas habilidades, experiência e projetos de forma atraente e responsiva. Ele também inclui um blog para compartilhar minhas ideias e reflexões sobre desenvolvimento web.",
      description:
        "Este site de portfólio foi desenvolvido com o objetivo de apresentar minhas habilidades e projetos de forma profissional e atraente. A escolha de tecnologias como React, Tailwind CSS e TypeScript permitiu a construção de um site moderno, responsivo e de fácil navegação. React, uma biblioteca JavaScript popular, garante uma interface do usuário interativa e dinâmica. Tailwind CSS, um framework de estilo utilitário, proporciona um design limpo e consistente. TypeScript, uma linguagem de programação que adiciona tipagem estática ao JavaScript, torna o código mais seguro e confiável. A inclusão de um blog no site permite que eu compartilhe meus conhecimentos, ideias e reflexões sobre desenvolvimento web com a comunidade online, contribuindo para o meu desenvolvimento profissional e para a construção de uma identidade online sólida. O site é um reflexo da minha paixão pela área e da minha busca constante por aprimoramento profissional.",
      is_highlighted: true,
      image_url: "https://picsum.photos/seed/PortfolioWebsite/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "E-commerce Platform",
      tags: ["React", "Node", "Tailwind"],
      short_description:
        "Uma plataforma de comércio eletrônico completa e responsiva, construída com React, Node.js e Tailwind CSS. Ela inclui recursos como carrinho de compras, checkout seguro, gerenciamento de produtos e pedidos. O design limpo e intuitivo facilita a navegação e a realização de compras.",
      description:
        "A plataforma de comércio eletrônico foi desenvolvida com foco em oferecer uma experiência de compra online completa e intuitiva. A escolha de tecnologias como React, Node.js e Tailwind CSS permitiu a criação de um sistema robusto e eficiente, capaz de atender às necessidades de uma ampla gama de empresas. React, uma biblioteca JavaScript popular, garante uma interface do usuário moderna e responsiva, enquanto Node.js fornece um backend escalável e de alto desempenho. Tailwind CSS, um framework de estilo utilitário, proporciona um design elegante e consistente. A plataforma oferece recursos essenciais como carrinho de compras, checkout seguro, gerenciamento de produtos e pedidos, proporcionando aos usuários uma experiência de compra fluida e segura. O design limpo e intuitivo facilita a navegação, permitindo que os usuários encontrem os produtos desejados com facilidade e realizem compras com segurança. A plataforma é uma solução completa para empresas que desejam expandir suas operações online e alcançar um público maior.",
      is_highlighted: true,
      image_url: "https://picsum.photos/seed/EcommercePlatform/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Task Management App",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "Um aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, construído com React, TypeScript e Tailwind CSS. O aplicativo permite organizar tarefas em listas, definir prioridades, adicionar lembretes e acompanhar o progresso. A interface amigável e intuitiva facilita a organização e a gestão do trabalho.",
      description:
        "Este aplicativo de gerenciamento de tarefas foi desenvolvido com o objetivo de ajudar os usuários a organizar suas tarefas, aumentar a produtividade e alcançar seus objetivos. A escolha de tecnologias como React, TypeScript e Tailwind CSS garantiu a criação de um aplicativo moderno, intuitivo e de fácil utilização. React, uma biblioteca JavaScript popular, fornece uma interface do usuário responsiva e interativa. TypeScript, uma linguagem de programação que adiciona tipagem estática ao JavaScript, torna o código mais seguro e confiável. Tailwind CSS, um framework de estilo utilitário, proporciona um design moderno e consistente. O aplicativo oferece recursos como listas de tarefas, organização por prioridades, adição de lembretes e acompanhamento do progresso, facilitando o gerenciamento de tarefas e a organização do trabalho. O recurso de arrastar e soltar permite que os usuários reordenem as tarefas de forma rápida e eficiente. A interface amigável torna o aplicativo fácil de usar para todos, independentemente do nível de experiência.",
      is_highlighted: true,
      image_url: "https://picsum.photos/seed/TaskManagementApp/200",
      more_info_link: "http://localhost:5173/",
    },

    // Normais
    {
      title: "Weather Dashboard",
      tags: ["React", "API", "TypeScript"],
      short_description:
        "Um painel meteorológico que usa uma API meteorológica para exibir previsões do tempo em tempo real. O painel inclui informações como temperatura, condições climáticas, umidade, velocidade do vento e previsões para os próximos dias. A interface simples e organizada facilita a visualização das informações do tempo.",
      description:
        "O painel meteorológico foi desenvolvido para fornecer previsões do tempo precisas e atualizadas, tornando-se uma ferramenta valiosa para quem precisa estar ciente das condições climáticas.  A escolha de React para a interface do usuário, TypeScript para a tipagem de código e uma API meteorológica confiável garante um sistema preciso e eficiente. O painel exibe informações relevantes como temperatura, condições climáticas, umidade, velocidade do vento e previsões para os próximos dias. O design simples e organizado da interface facilita a visualização das informações do tempo, tornando a experiência do usuário mais agradável e intuitiva. A capacidade de fornecer informações do tempo em tempo real torna o painel uma ferramenta útil para diversas situações, como planejamento de atividades ao ar livre, viagens e até mesmo para tomar decisões sobre o vestuário.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/WeatherDashboard/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Recipe Finder",
      tags: ["React", "API", "Tailwind"],
      short_description:
        "Um aplicativo para encontrar receitas com base nos ingredientes que você possui. O aplicativo usa uma API de receitas para buscar receitas correspondentes e exibir os resultados de forma organizada. Ele permite filtrar as receitas por tipo de prato, tempo de preparo, ingredientes e outras preferências.",
      description:
        "Este aplicativo foi desenvolvido para revolucionar a forma como encontramos receitas. A utilização de React para a interface do usuário, Tailwind CSS para o estilo e uma API de receitas garante uma experiência de usuário moderna e eficiente.  O aplicativo permite que os usuários insiram os ingredientes que possuem e busquem receitas correspondentes, tornando o processo de cozinhar mais fácil e divertido. A interface amigável permite que os usuários filtrem as receitas por tipo de prato, tempo de preparo, ingredientes e outras preferências, proporcionando uma experiência personalizada. O aplicativo é uma solução ideal para quem busca inspiração na cozinha, deseja economizar tempo ou simplesmente explorar novas receitas.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/RecipeFinder/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Budget Tracker",
      tags: ["React", "Node"],
      short_description:
        "Uma ferramenta de orçamento para gerenciar suas despesas. O aplicativo permite registrar suas receitas e despesas, categorizá-las e visualizar gráficos de seus gastos. Ele também oferece recursos para definir metas de orçamento e acompanhar o progresso.",
      description:
        "O aplicativo de controle de orçamento foi desenvolvido para ajudar os usuários a gerenciar suas finanças de forma eficiente e alcançar seus objetivos financeiros. A escolha de React para a interface do usuário e Node.js para o backend garante um sistema estável e eficiente.  O aplicativo permite que os usuários registrem suas receitas e despesas, categorizem seus gastos e visualizem gráficos para entender seus padrões de gastos. Além disso, o aplicativo oferece recursos para definir metas de orçamento personalizadas e acompanhar o progresso em direção a essas metas. Essa funcionalidade fornece aos usuários uma visão clara de seus gastos e os ajuda a tomar decisões financeiras mais informadas.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/BudgetTracker/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Social Media Clone",
      tags: ["React", "Tailwind"],
      short_description:
        "Um clone simples de uma plataforma de mídia social popular. O aplicativo permite criar um perfil, postar atualizações, seguir outros usuários e interagir com o conteúdo. O design é inspirado na plataforma original e oferece uma experiência de usuário semelhante.",
      description:
        "Este clone de mídia social foi desenvolvido para fins educacionais e de aprendizado, proporcionando uma oportunidade para entender a arquitetura e as funcionalidades de uma plataforma de mídia social.  A escolha de React para a interface do usuário e Tailwind CSS para o estilo garantiu uma experiência de usuário moderna e responsiva.  O clone permite que os usuários criem perfis, postem atualizações, sigam outros usuários, curtam e comentem em postagens, replicando as funcionalidades básicas de uma plataforma de mídia social. O design é inspirado na plataforma original, oferecendo uma experiência de usuário semelhante, mas em um ambiente simplificado. O clone serve como um exemplo de como construir uma plataforma de mídia social simples utilizando tecnologias web.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/SocialMediaClone/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Photo Gallery",
      tags: ["React", "Tailwind", "API"],
      short_description:
        "Um aplicativo para exibir fotos de uma API externa. O aplicativo permite navegar por uma coleção de fotos, visualizar imagens em alta resolução e salvar suas favoritas. O design atraente e a interface amigável facilitam a navegação e a exploração das fotos.",
      description:
        "A galeria de fotos foi desenvolvida para oferecer uma experiência de visualização de fotos organizada e intuitiva. A utilização de React para a interface do usuário, Tailwind CSS para o estilo e uma API de fotos garante um sistema moderno e eficiente.  A galeria permite que os usuários naveguem por uma coleção de fotos, visualizem imagens em alta resolução e salvem suas favoritas. O design atraente e a interface amigável facilitam a navegação e a exploração das fotos. A capacidade de exibir imagens em alta resolução proporciona uma experiência visual envolvente. O aplicativo é uma solução ideal para quem busca um meio de exibir e compartilhar fotos de forma organizada e esteticamente agradável.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/PhotoGallery/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Markdown Editor",
      tags: ["React", "TypeScript"],
      short_description:
        "Um editor de Markdown construído com React e TypeScript. O editor permite escrever e editar texto em Markdown, visualizar o resultado em tempo real e exportar o conteúdo em diferentes formatos. O editor é simples e intuitivo, ideal para escrever documentos técnicos e notas.",
      description:
        "Este editor de Markdown foi desenvolvido para simplificar o processo de escrita e edição de texto em Markdown, tornando-o uma ferramenta essencial para desenvolvedores, escritores e estudantes. A utilização de React para a interface do usuário e TypeScript para a tipagem de código garante um sistema estável e eficiente.  O editor permite que os usuários escrevam e editem texto em Markdown, visualizem o resultado em tempo real e exportem o conteúdo em diferentes formatos, como HTML, PDF e Markdown. A interface simples e intuitiva torna o editor fácil de usar para todos, independentemente do nível de experiência. O editor é uma ferramenta ideal para escrever documentos técnicos, notas, artigos e outros conteúdos em Markdown.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/MarkdownEditor/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Habit Tracker",
      tags: ["React", "Node"],
      short_description:
        "Um aplicativo para rastrear hábitos diários e metas. O aplicativo permite adicionar hábitos, definir metas, registrar seu progresso e visualizar estatísticas. Ele também oferece recursos para definir lembretes, receber notificações e acompanhar seus hábitos ao longo do tempo.",
      description:
        "O aplicativo de acompanhamento de hábitos foi desenvolvido para ajudar os usuários a desenvolver hábitos positivos, alcançar seus objetivos e construir uma vida mais saudável e produtiva. A escolha de React para a interface do usuário e Node.js para o backend garante um sistema estável e eficiente. O aplicativo permite que os usuários adicionem hábitos, definam metas, registrem seu progresso e visualizem estatísticas para acompanhar sua evolução. Ele também oferece recursos para definir lembretes personalizados, receber notificações para manter o foco e acompanhar seus hábitos ao longo do tempo, proporcionando aos usuários o suporte e a motivação necessários para alcançar seus objetivos. A capacidade de visualizar estatísticas e acompanhar o progresso fornece aos usuários uma visão clara de seus hábitos e os motiva a manter o foco.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/HabitTracker/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Expense Tracker",
      tags: ["React", "TypeScript", "Node"],
      short_description:
        "Um aplicativo para gerenciar despesas pessoais e orçamento. O aplicativo permite registrar suas despesas, categorizá-las, definir limites de orçamento e visualizar gráficos de seus gastos. Ele também oferece recursos para exportar dados, definir lembretes e acompanhar seu orçamento ao longo do tempo.",
      description:
        "O aplicativo de controle de gastos foi desenvolvido para ajudar os usuários a gerenciar suas finanças de forma eficiente e alcançar seus objetivos financeiros. A utilização de React para a interface do usuário, TypeScript para a tipagem de código e Node.js para o backend garante um sistema estável, eficiente e de fácil utilização.  O aplicativo permite que os usuários registrem suas despesas, categorizem seus gastos, definam limites de orçamento e visualizem gráficos para entender seus padrões de gastos. Ele também oferece recursos para exportar dados, definir lembretes e acompanhar seu orçamento ao longo do tempo, proporcionando aos usuários o controle necessário para gerenciar suas finanças e alcançar seus objetivos financeiros.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/ExpenseTracker/200",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Fitness Tracker",
      tags: ["React", "API", "TypeScript"],
      short_description:
        "Um aplicativo para rastrear objetivos e exercícios de condicionamento físico. O aplicativo permite registrar treinos, definir metas, acompanhar o progresso e visualizar estatísticas. Ele também oferece recursos para integrar dados de dispositivos vestíveis, definir lembretes e encontrar novos exercícios.",
      description:
        "O aplicativo de rastreamento de condicionamento físico foi desenvolvido para ajudar os usuários a alcançar seus objetivos de saúde e fitness, proporcionando uma experiência personalizada e motivadora. A escolha de React para a interface do usuário, TypeScript para a tipagem de código e uma API de fitness para integrar dados de dispositivos vestíveis garante um sistema estável, eficiente e de fácil utilização. O aplicativo permite que os usuários registrem seus treinos, definam metas, acompanhem o progresso e visualizem estatísticas para acompanhar sua evolução. Ele também oferece recursos para integrar dados de dispositivos vestíveis, definir lembretes personalizados e encontrar novos exercícios, tornando o aplicativo uma ferramenta completa para quem busca alcançar seus objetivos de saúde e fitness.",
      is_highlighted: false,
      image_url: "https://picsum.photos/seed/FitnessTracker/200",
      more_info_link: "http://localhost:5173/",
    },
  ];

  return (
    <Router>
      <PageTracking />
      <div className="App">
        <NewNavbar />
        <Routes>
          <Route
            path={`${BaseUrl}/`}
            element={
              context ? (
                <HomePage portfolio={context.portfolio} /> // Fixed typo
              ) : (
                <Loading />
              )
            }
          />
          <Route path={`${BaseUrl}/about`} element={<AboutPage />} />
          <Route
            path={`${BaseUrl}/projects`}
            element={<ProjectPage data={projectData} />}
          />
          <Route path="*" element={<Navigate to={`${BaseUrl}/`} replace />} />
        </Routes>
        <Footer github={github} linkedin={linkedin} email={email} />
      </div>
    </Router>
  );
};

export default App;
