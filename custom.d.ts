declare module "*.svg?inline" {
  const content: string;
  const defaultContent: string;
  export { content as default, defaultContent };
}

declare module "*.svg" {
  const content: string;
  export default content;
}
