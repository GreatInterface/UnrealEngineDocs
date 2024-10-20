interface navItem{
    id: string | number;
    text: string;
    desc?: string;
    link: string;
    icon?: string;
}

const CPP: navItem[] = [
    {
        id: 1,
        text: "css奇思妙想",
        link: "http://chokcoco.github.io/magicCss/html/index.html",
        icon: "https://www.91sotu.com/logo.png",
        desc: "CSS3 奇思妙想，使用 CSS3 在单个标签内实现各类图形。",
    },
];

const UnrealEngine: navItem[] = [
    {
        id: 1,
        text: "css奇思妙想",
        link: "http://chokcoco.github.io/magicCss/html/index.html",
        icon: "https://www.91sotu.com/logo.png",
        desc: "CSS3 奇思妙想，使用 CSS3 在单个标签内实现各类图形。",
    },

    {
        id: 2,
        text: "Core",
        desc: "Runtime/Core",
        link: "/UnrealEngine/Core/",
        icon: "",
    },

    {
        id: 3,
        text: "Lyra",
        desc: "官方演示项目",
        link: "/UnrealEngine/Lyra/",
        icon: "",
    },

];

export { CPP, UnrealEngine };
