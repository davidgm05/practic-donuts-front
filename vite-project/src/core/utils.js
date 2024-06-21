export const color = [
    "#FFB3BA",
    "#FFDFBA",
    "#FFFFBA",
    "#BAFFC9",
    "#BAE!FF",
    "#E1BAFF"
]

export const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * color.length)
    return color[randomColor]
}