export const randomColor = (currentColor) => {
    const colorList = [
        "#ECF2FF",
        "#E3DFFD",
        "#E5D1FA",
        "#FFF4D2",
        "#D61355",
        "#F94A29",
        "#FCE22A",
        "#30E3DF",
        "#ECF9FF",
        "#FFFBEB",
        "#FFE7CC",
        "#F8CBA6",
        "#698269",
        "#B99B6B",
        "#F1DBBF",
        "#AA5656",
    ];

    const currentIndex = colorList.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * colorList.length);
    }

    return colorList[newIndex];
};
