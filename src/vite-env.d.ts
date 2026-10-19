/// <reference types="vite/client" />

declare module "*.csv" {
    const url: string;
    export default url;
}

declare module "*.ipynb" {
    const url: string;
    export default url;
}
