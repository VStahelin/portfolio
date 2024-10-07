import { AboutMe } from "@interfaces/interfaces";
import React from "react";
import background from "@assets/images/waves.png";
import StackCard from "@molecules/StackCard";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const iconListTest = [
  "react",
  "node",
  "django",
  "python",
  "javascript",
  "typescript",
  "html",
  "css",
  "java",
  "php",
  "ruby",
  "c",
  "c++",
  "c#",
  "go",
  "rust",
  "swift",
  "kotlin",
  "docker",
  "kubernetes",
  "mongodb",
  "mysql",
  "postgresql",
  "graphql",
  "aws",
  "azure",
  "firebase",
  "git",
  "github",
  "gitlab",
  "linux",
  "windows",
  "vscode",
  "bash",
  "markdown",
  "api",
  "scala",
  "haskell",
  "figma",
  "sketch",
  "adobexd",
  "illustrator",
  "photoshop",
  "blender",
  "unity",
  "unrealengine",
  "electron",
  "nextjs",
  "svelte",
  "threejs",
  "netlify",
  "vercel",
  "circleci",
  "travisci",
  "cloudflare",
  "azuredevops",
  "prometheus",
  "grafana",
  "openstack",
  "pulumi",
  "notfound",
];

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  return (
    <div className="relative flex min-h-screen justify-center items-center bg-tertiary">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      <div className="relative max-w-7xl px-8">
        <div className="relative">
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-left pb-8">
              About Me
            </h2>
            <p className="text-xl text-white">{about_data?.summary}</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 text-center pt-12">
              Skills-Sets
            </h1>
            <div className="flex justify-center mb-5">
              <div className="flex flex-wrap justify-center gap-4">
                {/* <StackCard
                  icon="python"
                  title="Python"
                  experience="6 years"
                  progress={90}
                  projectLink="https://github.com/GomuGomuu/merry"
                /> */}
                {iconListTest.map((stack, index) => (
                  <StackCard
                    key={index}
                    icon={stack}
                    title={stack}
                    experience={`${Math.floor(Math.random() * 10)} years`} // to test
                    progress={Math.floor(Math.random() * 100)} // to test
                    projectLink={"https://github.com/Vstahelin"} // to test
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
