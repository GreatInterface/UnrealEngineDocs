import { defineConfig } from 'vitepress'
//import { SetSidebar } from '/utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: "/UnrealEngineDocs",

  title: "Welcome to Kyro Unreal Engine Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //支持md格式2到6级标题
    outline: {
      label: "目录",
      level: [2,6]
    },

    nav: [
      { text: '杂项', link: '/' },

      {text: 'C++', items: [
          { text:'Template', link: '/markdown-examples'}
        ] },

      { text: 'Unreal Engine',
        items: [
          { text: 'Lyra', items:[
              {text: 'Interaction', link: '/markdown-examples'}
            ]}
        ] }
    ],

    //为了支持两边栏
    sidebar: false, //关闭三边栏中的侧边栏
    aside: "left",  //设置右边侧边栏在左侧显示

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // 支持自动化sidebar
    // sidebar:{
    //   "/Context/Unreal Engine" : SetSidebar("/Context/Unreal Engine"),
    //
    // },

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
   // ],

    //底部配置
    footer: {
      copyright:"Kyro @ 2024-Present"
    }
  }

})
