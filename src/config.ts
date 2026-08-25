import type {
    SiteConfig,
    ProfileConfig,
    LabConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "MaxLeton",
    subTitle: "取悦自己，方为生存之道",

    backgroundImage: {
        enabled: false, // If backgroundImage is not enabled, this will be used as the background color
        url: "assets/background.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },

    mirrorSite: {
        enabled: false,
        url: "maxleton.top",
        region: "CN"
    },

    favicon: "/avatar.jpg"
}

export const profileConfig: ProfileConfig = {
    avatar: "/avatar.jpg",
    name: "MaxLeton",
    description: "取悦自己，方为生存之道",
    introPage: "https://blog.maxleton.top",
    links: [
        /* -------------------------------- Icon -------------------------------- */
        // Visit https://icones.js.org/ for icon codes
        // You will need to install the corresponding icon set if it's not already included
        // `pnpm add @iconify-json/<icon-set-name>`
        // Then add icon to defineConfig.integrationsin.icon in astro.config.mjs
        // You can also use local svg icons end with .svg, relative to the src directory
        // eg. `icon: "assets/icons/github.svg"`
        /* -------------------------------- Color -------------------------------- */
        // The colors a best to be clearly visible in both light and dark environments 
        // If color is not set, it will use the icon's default color
        {
          name: "博客",
          url: "https://blog.maxleton.top",
          icon: "fa6-solid:tree", 
          color: "#0dbc79",
        },
        {
            name: "GitHub",
            url: "https://github.com/maxleton-cyber",
            icon: "fa6-brands:github",
            color: "#888",
        },
        {
            name: "邮箱",
            url: "mailto:pwjcode5133@gmail.com",
            icon: "fa6-solid:envelope",
            color: "#43a4d1ff"
        },
    ]
}

export const labConfig : LabConfig = []
