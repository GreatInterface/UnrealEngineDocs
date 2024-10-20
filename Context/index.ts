import type { navItem } from "./navItem";

const CPP: navItem[] = [
    {
        id: 1,
        text: "Template",
        link: "./C++/Template/index",
        icon: "",
        desc: "模板",
    },
];

const UnrealEngine: navItem[] = [
    {
        id: 1,
        text: "Core",
        desc: "Runtime/Core",
        link: "./UnrealEngine/Core/index",
        icon: "",
    },

    {
        id: 2,
        text: "Lyra",
        desc: "官方演示项目",
        link: "./UnrealEngine/Lyra/index",
        icon: "",
    },

];

export { CPP, UnrealEngine };
