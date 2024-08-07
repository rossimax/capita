/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.liquid"],
    theme: {
        extend: {
            backgroundImage: {
                "gray-grid":
                    "url('https://cdn.shopify.com/s/files/1/0231/7366/0752/files/SFONDO.jpg?v=1722958903')",
            },
            backgroundSize: {
                "s-gray-grid": "720px",
            },
        },
    },
    plugins: [],
};
