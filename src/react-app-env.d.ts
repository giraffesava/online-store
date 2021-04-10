declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
