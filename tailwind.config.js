module.exports = {
    content: ['./{pages, components, layouts, plugins}/**/*.{vue,js,ts}', './components/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light"]
    }
}