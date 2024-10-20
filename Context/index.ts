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
        text: "Template",
        link: "/UnrealEngineDocs/Context/C++/Template",
        icon: "",
        desc: "模板",
    },
];

const UnrealEngine: navItem[] = [
    {
        id: 1,
        text: "Core",
        desc: "Runtime/Core",
        link: "/UnrealEngineDocs/Context/UnrealEngine/Core/",
        icon: "",
    },

    {
        id: 2,
        text: "Lyra",
        desc: "官方演示项目",
        link: "/UnrealEngineDocs/Context/UnrealEngine/Lyra/",
        icon: "",
    },

];

export { CPP, UnrealEngine };
