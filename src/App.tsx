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
import Navbar from "./components/molecules/Navbar";

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
      title: "Gomu Gomu",
      tags: [
        "Python",
        "Django",
        // "TypeScript",
        "React Native",
        "Tesseract OCR",
        "Docker",
        "Selenium",
        "Beautiful Soup",
        "Gemini",
      ],
      short_description:
        "GomuGomuu is an organization building a connected ecosystem around the One Piece universe. Key projects include Merry, a Django API with card recognition, olop-price-scraping for tracking OPTCG exchange rates, and nomi-nomi, a React Native app for card identification and deck building. GomuGomuu encourages collaboration to grow and improve its projects.",
      description:
        "GomuGomuu is an organization focused on building projects around the One Piece universe, creating a connected ecosystem. It includes key projects like *Merry*, a Django-based API backend that now also incorporates the functionalities of *ope-ope* for card recognition, *olop-price-scraping*, a service for tracking OPTCG exchange rates, and *nomi-nomi*, a React Native app for One Piece card identification and deck building. GomuGomuu promotes collaboration and welcomes contributions to grow and enhance its projects.",
      is_highlighted: true,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/gomu-gomu.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Gomu Gomu",
      tags: [
        "Python",
        "Django",
        // "TypeScript",
        "React Native",
        "Tesseract OCR",
        "Docker",
        "Selenium",
        "Beautiful Soup",
        "Gemini",
      ],
      short_description:
        "GomuGomuu is an organization building a connected ecosystem around the One Piece universe. Key projects include Merry, a Django API with card recognition, olop-price-scraping for tracking OPTCG exchange rates, and nomi-nomi, a React Native app for card identification and deck building. GomuGomuu encourages collaboration to grow and improve its projects.",
      description:
        "GomuGomuu is an organization focused on building projects around the One Piece universe, creating a connected ecosystem. It includes key projects like *Merry*, a Django-based API backend that now also incorporates the functionalities of *ope-ope* for card recognition, *olop-price-scraping*, a service for tracking OPTCG exchange rates, and *nomi-nomi*, a React Native app for One Piece card identification and deck building. GomuGomuu promotes collaboration and welcomes contributions to grow and enhance its projects.",
      is_highlighted: true,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/gomu-gomu.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Gomu Gomu",
      tags: [
        "Python",
        "Django",
        // "TypeScript",
        "React Native",
        "Tesseract OCR",
        "Docker",
        "Selenium",
        "Beautiful Soup",
        "Gemini",
      ],
      short_description:
        "GomuGomuu is an organization building a connected ecosystem around the One Piece universe. Key projects include Merry, a Django API with card recognition, olop-price-scraping for tracking OPTCG exchange rates, and nomi-nomi, a React Native app for card identification and deck building. GomuGomuu encourages collaboration to grow and improve its projects.",
      description:
        "GomuGomuu is an organization focused on building projects around the One Piece universe, creating a connected ecosystem. It includes key projects like *Merry*, a Django-based API backend that now also incorporates the functionalities of *ope-ope* for card recognition, *olop-price-scraping*, a service for tracking OPTCG exchange rates, and *nomi-nomi*, a React Native app for One Piece card identification and deck building. GomuGomuu promotes collaboration and welcomes contributions to grow and enhance its projects.",
      is_highlighted: true,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/gomu-gomu.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Gomu Gomu",
      tags: [
        "Python",
        "Django",
        // "TypeScript",
        "React Native",
        "Tesseract OCR",
        "Docker",
        "Selenium",
        "Beautiful Soup",
        "Gemini",
      ],
      short_description:
        "GomuGomuu is an organization building a connected ecosystem around the One Piece universe. Key projects include Merry, a Django API with card recognition, olop-price-scraping for tracking OPTCG exchange rates, and nomi-nomi, a React Native app for card identification and deck building. GomuGomuu encourages collaboration to grow and improve its projects.",
      description:
        "GomuGomuu is an organization focused on building projects around the One Piece universe, creating a connected ecosystem. It includes key projects like *Merry*, a Django-based API backend that now also incorporates the functionalities of *ope-ope* for card recognition, *olop-price-scraping*, a service for tracking OPTCG exchange rates, and *nomi-nomi*, a React Native app for One Piece card identification and deck building. GomuGomuu promotes collaboration and welcomes contributions to grow and enhance its projects.",
      is_highlighted: true,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/gomu-gomu.png",
      more_info_link: "http://localhost:5173/",
    },

    // Normais
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Nomi Nomi",
      tags: ["React Native", "TypeScript", "Expo"],
      short_description:
        "Nomi-Nomi is a React Native app that interfaces with Merry’s backend, enabling users to identify One Piece cards via photo recognition. It offers detailed card info, vault management, and deck-building features, providing a seamless experience for card recognition, exploration, and deck management.",
      description:
        "Nomi-Nomi is a React Native app that serves as an interface for the backend of Merry. It allows users to quickly identify One Piece cards by taking a photo, with the image processing handled by the backend. The app provides detailed card information and also enables users to build their own vault of cards and test deck builds. It connects seamlessly to the Merry server, offering a smooth experience for card recognition, exploration, and deck management.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/nomi-nomi.png",
      more_info_link: "http://localhost:5173/",
    },
    {
      title: "Portfolio",
      tags: ["React", "TypeScript", "Tailwind"],
      short_description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      description:
        "My personal portfolio project built with React and TypeScript, using Tailwind CSS for styling. To practice my skills and showcase my projects.",
      is_highlighted: false,
      image_url:
        "https://vstahelin.github.io/cms-portfolio/images/react-tailwind-css-logo-post.png",
      more_info_link: "http://localhost:5173/",
    },
  ];

  return (
    <Router>
      <PageTracking />
      <div className="App">
        <Navbar />
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
