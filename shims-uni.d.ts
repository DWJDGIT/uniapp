/// <reference types='@dcloudio/types' />
import "vue";

declare module "@vue/runtime-core" {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {}
}
// declare module "*.svg";
// declare module "*.png";
// declare module "*.jpg";
// declare module "*.jpeg";
// declare module "*.gif";
// declare module "*.bmp";
// declare module "*.tiff";
