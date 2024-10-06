declare module "*.svg?inline" {
  const content: string;
  const defaultContent: string;
  export { content as default, defaultContent };
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.bmp" {
  const value: string;
  export default value;
}

declare module "*.tiff" {
  const value: string;
  export default value;
}
