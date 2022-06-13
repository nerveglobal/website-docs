module.exports = {
  title: "Nerve",
  tagline: "Documentation and Guides",
  url: "https://docs.nerveglobal.com", 
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.png",
  organizationName: "Nerve", // Usually your GitHub org/user name.
  projectName: "Nerve-docs", // Usually your repo name.
  themeConfig: {
    image: "img/twitter_card_bg.jpg",
    prism: {
      additionalLanguages: ["solidity"],
    },
    algolia: {
      apiKey: '2ac53dfaeacfaeb998a18749f27c802c',
      indexName: 'v1-docs',
      appId: 'SWS8RIBCP2',
    },
    navbar: {
      title: "Nerve Docs",
      logo: {
        alt: "Nerve",
        src: "img/uni_dark_icon.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          //// Optional
          position: "left",
          dropdownActiveClassDisabled: true,
          docsPluginId: "default",
          className: "persistent",
        },
         {
          to: "/protocol/glossary/cryptocurreny",
          label: "Glossary",
          position: "left",
          className: "V1_active",
        },
        {
          to: "/sdk/token-economy/abstract",
          label: "Token Economy",
          position: "left",
          className: "V1_active",
        },
        {
          to: "/sdk/automated-market-maker",
          label: "AMM",
          position: "left",
          className: "V1_active",
        },
        {
          to: "/sdk/subgraphs/Subgraph%20data",
          label: "Supbgraph",
          position: "left",
          className: "V1_active",
        },
        {
          href: "https://github.com/nerveglobal",
          label: "GitHub",
          position: "right",
          className: "persistent",
        },
        {
          href: "https://www.nerveglobal.com",
          label: "Home",
          position: "right",
          className: "persistent",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "#dev-chat",
              href: "https://discord.gg/SGmrgRq9f4",
            }
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Nerve Subgraph",
              href: "https://github.com/nerveglobal/subgraph",
            },
            {
              label: "Deployment addresses",
              href: "https://github.com/nerveglobal/contract",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://nerveglobal.com",
            },
            {
              label: "Brand Assets",
              href: "https://github.com/nerveglobal/brand-assets",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/SGmrgRq9f4",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/@nerveglobal_",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/nerveglobal/",
            },
            {
              label: "Telegram",
              href: "https://t.me/nerveglobal/",
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "\u{263D}",

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "\u{263C}",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "protocol",
          routeBasePath: "protocol/",
          sidebarPath: require.resolve("./sidebars.js"),
          includeCurrentVersion: false,
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "SDK",
        path: "sdk",
        routeBasePath: "sdk/",
        sidebarPath: require.resolve("./sdkSidebars.js"),
        includeCurrentVersion: false,
      },
    ],
  ],
};
