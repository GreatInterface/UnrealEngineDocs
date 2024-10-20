import { DefaultTheme } from "vitepress/dist/node";

export const nav: DefaultTheme.NavItem[] = [
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
];