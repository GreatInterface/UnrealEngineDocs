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
        text: "",
        desc: "",
        link: "",
        icon: "",
    },
];

const UnrealEngine: navItem[] = [
    {
        id: 1,
        text: "Lyra",
        desc: "官方演示项目",
        link: "./Unreal Engine/Lyra/",
        icon: "",
    },
    {
        id: 2,
        text: "Core",
        desc: "Runtime/Core",
        link: "./Unreal Engine/Core/",
        icon: "",
    },
];

export { CPP, UnrealEngine };
