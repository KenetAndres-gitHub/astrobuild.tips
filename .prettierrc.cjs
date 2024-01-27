module.export = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: "**/*astro",
            options: {
                parser: "astro"
            },
        },
    ],
};