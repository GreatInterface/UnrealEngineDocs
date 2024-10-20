import { defineConfig } from 'vitepress'
import { nav } from "./Config/nav.ts";
import { sidebar } from "./Config/sidebar.ts";
import socialLinks from "./Config/link.ts"
import algolia from "./algolia";

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: "/UnrealEngineDocs",

  title: "Kyro Unreal Engine Blog",
  description: "VitePress",
  themeConfig: {

    //支持md格式2到6级标题
    outline: {
      label: "目录",
      level: [2,6]
    },

    //为了支持两边栏
    //sidebar: false, //关闭三边栏中的侧边栏
    aside: "left",  //设置右边侧边栏在左侧显示

    nav,
    sidebar,
    algolia,
    socialLinks,
    //socialLinks: [
    //
   // ],

    //底部配置
    footer: {
      copyright:"Copyright @ 2024-Present by Kyro"
    }
  }

})
