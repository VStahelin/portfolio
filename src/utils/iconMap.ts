/* eslint-disable no-unused-vars */
import { IconLibraryList } from "../components/atoms/Icon";

enum ProgrammingIconMap {
  React = "React",
  Node = "NodeJs",
  Python = "Python",
  JavaScript = "Js",
  Api = "Api",
  TypeScript = "Typescript",
  HTML = "Html5",
  CSS = "Css3",
  Java = "Java",
  PHP = "Php",
  Ruby = "Ruby",
  C = "C",
  CPlusPlus = "Cplusplus",
  CSharp = "Csharp",
  Go = "Golang",
  Rust = "Rust",
  Swift = "Swift",
  Kotlin = "BrandKotlin",
  Docker = "Docker",
  Kubernetes = "Kubernetes",
  MongoDB = "Mongodb",
  MySQL = "Mysql",
  PostgreSQL = "LogoPostgresql",
  GraphQL = "GraphQl",
  AWS = "Aws",
  Azure = "Microsoftazure",
  Firebase = "Fire",
  Git = "GitAlt",
  GitHub = "Github",
  GitLab = "Gitlab",
  Linux = "Linux",
  Windows = "Windows",
  VSCode = "Code",
  Bash = "Terminal",
  Markdown = "Markdown",
  Django = "Django",
  Iot = "CloudNetwork",
  MQTT = "Mqtt",
  Flutter = "Flutter",
  Vue = "VueJs",
  Angular = "Angular",
  TailwindCSS = "Tailwindcss",
  Bootstrap = "Bootstrap",
  Webpack = "Webpack",
  Gulp = "Gulp",
  Vite = "Vite",
  Babel = "Babel",
  ESLint = "Eslint",
  Prettier = "Prettier",
  WebAssembly = "Wasm",
  Scala = "Scala",
  Haskell = "Haskell",
  Figma = "Figma",
  Sketch = "Sketch",
  AdobeXD = "Adobexd",
  Illustrator = "Adobeillustrator",
  Photoshop = "Adobephotoshop",
  Blender = "Blender",
  Unity = "Unity",
  UnrealEngine = "Unrealengine",
  Electron = "Electron",
  NextJS = "NextjsFill",
  Svelte = "Svelte",
  ThreeJS = "BrandThreejs",
  Netlify = "Netlify",
  Vercel = "Vercel",
  CircleCI = "Circleci",
  TravisCI = "Travisci",
  Cloudflare = "Cloudflare",
  AzureDevOps = "Azuredevops",
  Prometheus = "Prometheus",
  Grafana = "Grafana",
  OpenStack = "Openstack",
  Pulumi = "Pulumi",
  NotFound = "Error404",
}

type IconLibraryType =
  (typeof ProgrammingIconMap)[keyof typeof ProgrammingIconMap];
type IconLibraryListType =
  (typeof IconLibraryList)[keyof typeof IconLibraryList];

interface IconMapping {
  iconName: IconLibraryType;
  library: IconLibraryListType;
}

export const getIconMapping = (iconKey: string): IconMapping => {
  switch (iconKey.toLowerCase()) {
    case "react":
      return {
        iconName: ProgrammingIconMap.React,
        library: IconLibraryList.FontAwesome,
      };
    case "node":
      return {
        iconName: ProgrammingIconMap.Node,
        library: IconLibraryList.FontAwesome,
      };
    case "python":
      return {
        iconName: ProgrammingIconMap.Python,
        library: IconLibraryList.FontAwesome,
      };
    case "javascript":
      return {
        iconName: ProgrammingIconMap.JavaScript,
        library: IconLibraryList.FontAwesome,
      };
    case "typescript":
      return {
        iconName: ProgrammingIconMap.TypeScript,
        library: IconLibraryList.SiIcons,
      };
    case "html":
    case "html5":
    case "html4":
      return {
        iconName: ProgrammingIconMap.HTML,
        library: IconLibraryList.FontAwesome,
      };
    case "css":
      return {
        iconName: ProgrammingIconMap.CSS,
        library: IconLibraryList.FontAwesome,
      };
    case "java":
      return {
        iconName: ProgrammingIconMap.Java,
        library: IconLibraryList.FontAwesome,
      };
    case "php":
      return {
        iconName: ProgrammingIconMap.PHP,
        library: IconLibraryList.FontAwesome,
      };
    case "ruby":
      return {
        iconName: ProgrammingIconMap.Ruby,
        library: IconLibraryList.DiIcons,
      };
    case "c":
      return {
        iconName: ProgrammingIconMap.C,
        library: IconLibraryList.SiIcons,
      };
    case "c++":
    case "cpp":
      return {
        iconName: ProgrammingIconMap.CPlusPlus,
        library: IconLibraryList.SiIcons,
      };
    case "c#":
    case "csharp":
      return {
        iconName: ProgrammingIconMap.CSharp,
        library: IconLibraryList.SiIcons,
      };
    case "go":
      return {
        iconName: ProgrammingIconMap.Go,
        library: IconLibraryList.Fa6Icons,
      };
    case "rust":
      return {
        iconName: ProgrammingIconMap.Rust,
        library: IconLibraryList.FontAwesome,
      };
    case "swift":
      return {
        iconName: ProgrammingIconMap.Swift,
        library: IconLibraryList.FontAwesome,
      };
    case "kotlin":
      return {
        iconName: ProgrammingIconMap.Kotlin,
        library: IconLibraryList.TbIcons,
      };
    case "docker":
      return {
        iconName: ProgrammingIconMap.Docker,
        library: IconLibraryList.FontAwesome,
      };
    case "kubernetes":
      return {
        iconName: ProgrammingIconMap.Kubernetes,
        library: IconLibraryList.SiIcons,
      };
    case "mongodb":
      return {
        iconName: ProgrammingIconMap.MongoDB,
        library: IconLibraryList.SiIcons,
      };
    case "mysql":
      return {
        iconName: ProgrammingIconMap.MySQL,
        library: IconLibraryList.GrIcons,
      };
    case "postgresql":
      return {
        iconName: ProgrammingIconMap.PostgreSQL,
        library: IconLibraryList.BiIcons,
      };
    case "graphql":
      return {
        iconName: ProgrammingIconMap.GraphQL,
        library: IconLibraryList.GrIcons,
      };
    case "aws":
    case "amazon web services":
    case "amazonwebservices":
    case "aws_services":
    case "aws services":
      return {
        iconName: ProgrammingIconMap.AWS,
        library: IconLibraryList.FontAwesome,
      };
    case "azure":
      return {
        iconName: ProgrammingIconMap.Azure,
        library: IconLibraryList.SiIcons,
      };
    case "firebase":
      return {
        iconName: ProgrammingIconMap.Firebase,
        library: IconLibraryList.FontAwesome,
      };
    case "git":
      return {
        iconName: ProgrammingIconMap.Git,
        library: IconLibraryList.FontAwesome,
      };
    case "github":
      return {
        iconName: ProgrammingIconMap.GitHub,
        library: IconLibraryList.FontAwesome,
      };
    case "gitlab":
      return {
        iconName: ProgrammingIconMap.GitLab,
        library: IconLibraryList.FontAwesome,
      };
    case "linux":
      return {
        iconName: ProgrammingIconMap.Linux,
        library: IconLibraryList.FontAwesome,
      };
    case "windows":
      return {
        iconName: ProgrammingIconMap.Windows,
        library: IconLibraryList.FontAwesome,
      };
    case "vscode":
      return {
        iconName: ProgrammingIconMap.VSCode,
        library: IconLibraryList.FontAwesome,
      };
    case "bash":
      return {
        iconName: ProgrammingIconMap.Bash,
        library: IconLibraryList.FontAwesome,
      };
    case "markdown":
      return {
        iconName: ProgrammingIconMap.Markdown,
        library: IconLibraryList.FontAwesome,
      };
    case "api":
    case "rest api":
    case "restapi":
    case "api_rest":
    case "api-rest":
      return {
        iconName: ProgrammingIconMap.Api,
        library: IconLibraryList.TbIcons,
      };
    case "django":
    case "django rest framework":
    case "djangorestframework":
    case "django-rest-framework":
    case "django_rest_framework":
      return {
        iconName: ProgrammingIconMap.Django,
        library: IconLibraryList.DiIcons,
      };
    case "iot":
      return {
        iconName: ProgrammingIconMap.Iot,
        library: IconLibraryList.TbIcons,
      };
    case "mqtt":
      return {
        iconName: ProgrammingIconMap.MQTT,
        library: IconLibraryList.SiIcons,
      };
    case "flutter":
      return {
        iconName: ProgrammingIconMap.Flutter,
        library: IconLibraryList.SiIcons,
      };
    case "vue":
    case "vuejs":
      return {
        iconName: ProgrammingIconMap.Vue,
        library: IconLibraryList.SiIcons,
      };
    case "angular":
      return {
        iconName: ProgrammingIconMap.Angular,
        library: IconLibraryList.SiIcons,
      };
    case "tailwind":
    case "tailwindcss":
      return {
        iconName: ProgrammingIconMap.TailwindCSS,
        library: IconLibraryList.SiIcons,
      };
    case "bootstrap":
      return {
        iconName: ProgrammingIconMap.Bootstrap,
        library: IconLibraryList.SiIcons,
      };
    case "webpack":
      return {
        iconName: ProgrammingIconMap.Webpack,
        library: IconLibraryList.SiIcons,
      };
    case "gulp":
      return {
        iconName: ProgrammingIconMap.Gulp,
        library: IconLibraryList.Fa6Icons,
      };
    case "vite":
      return {
        iconName: ProgrammingIconMap.Vite,
        library: IconLibraryList.SiIcons,
      };
    case "babel":
      return {
        iconName: ProgrammingIconMap.Babel,
        library: IconLibraryList.SiIcons,
      };
    case "eslint":
      return {
        iconName: ProgrammingIconMap.ESLint,
        library: IconLibraryList.SiIcons,
      };
    case "prettier":
      return {
        iconName: ProgrammingIconMap.Prettier,
        library: IconLibraryList.SiIcons,
      };
    case "wasm":
    case "webassembly":
      return {
        iconName: ProgrammingIconMap.WebAssembly,
        library: IconLibraryList.SiIcons,
      };
    case "scala":
      return {
        iconName: ProgrammingIconMap.Scala,
        library: IconLibraryList.SiIcons,
      };
    case "haskell":
      return {
        iconName: ProgrammingIconMap.Haskell,
        library: IconLibraryList.SiIcons,
      };
    case "figma":
      return {
        iconName: ProgrammingIconMap.Figma,
        library: IconLibraryList.SiIcons,
      };
    case "sketch":
      return {
        iconName: ProgrammingIconMap.Sketch,
        library: IconLibraryList.SiIcons,
      };
    case "adobexd":
      return {
        iconName: ProgrammingIconMap.AdobeXD,
        library: IconLibraryList.SiIcons,
      };
    case "illustrator":
      return {
        iconName: ProgrammingIconMap.Illustrator,
        library: IconLibraryList.SiIcons,
      };
    case "photoshop":
      return {
        iconName: ProgrammingIconMap.Photoshop,
        library: IconLibraryList.SiIcons,
      };
    case "blender":
      return {
        iconName: ProgrammingIconMap.Blender,
        library: IconLibraryList.SiIcons,
      };
    case "unity":
      return {
        iconName: ProgrammingIconMap.Unity,
        library: IconLibraryList.SiIcons,
      };
    case "unrealengine":
      return {
        iconName: ProgrammingIconMap.UnrealEngine,
        library: IconLibraryList.SiIcons,
      };
    case "electron":
      return {
        iconName: ProgrammingIconMap.Electron,
        library: IconLibraryList.SiIcons,
      };
    case "nextjs":
      return {
        iconName: ProgrammingIconMap.NextJS,
        library: IconLibraryList.RiIcons,
      };
    case "svelte":
      return {
        iconName: ProgrammingIconMap.Svelte,
        library: IconLibraryList.SiIcons,
      };
    case "threejs":
      return {
        iconName: ProgrammingIconMap.ThreeJS,
        library: IconLibraryList.TbIcons,
      };
    case "netlify":
      return {
        iconName: ProgrammingIconMap.Netlify,
        library: IconLibraryList.SiIcons,
      };
    case "vercel":
      return {
        iconName: ProgrammingIconMap.Vercel,
        library: IconLibraryList.SiIcons,
      };
    case "circleci":
      return {
        iconName: ProgrammingIconMap.CircleCI,
        library: IconLibraryList.SiIcons,
      };
    case "travisci":
      return {
        iconName: ProgrammingIconMap.TravisCI,
        library: IconLibraryList.SiIcons,
      };
    case "cloudflare":
      return {
        iconName: ProgrammingIconMap.Cloudflare,
        library: IconLibraryList.SiIcons,
      };
    case "azuredevops":
      return {
        iconName: ProgrammingIconMap.AzureDevOps,
        library: IconLibraryList.SiIcons,
      };
    case "prometheus":
      return {
        iconName: ProgrammingIconMap.Prometheus,
        library: IconLibraryList.SiIcons,
      };
    case "grafana":
      return {
        iconName: ProgrammingIconMap.Grafana,
        library: IconLibraryList.SiIcons,
      };
    case "openstack":
      return {
        iconName: ProgrammingIconMap.OpenStack,
        library: IconLibraryList.SiIcons,
      };
    case "pulumi":
      return {
        iconName: ProgrammingIconMap.Pulumi,
        library: IconLibraryList.SiIcons,
      };
    default:
      return {
        iconName: ProgrammingIconMap.NotFound,
        library: IconLibraryList.TbIcons,
      };
  }
};
