(() => {
    // ================================================
    const arr = ["html", "head", "meta", "title", "script", "style", "body", "div", "header", "main", "footer", "section", "aside", "h2", "p", "ul", "li", "span", "svg", "br", "use", "img"];
    // Визначити загальну кількість елементів у DOM-дереві.
    const tagsArray = document.getElementsByTagName('*');
    console.group("1. Визначити загальну кількість елементів у DOM-дереві.");
    console.log(`Total number of tags in the DOM: ${tagsArray.length}`);
    console.groupEnd()


    // Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.
    const objElements = [];

    console.group("2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.");
    arr.forEach((tag) => {

        let value = document.getElementsByTagName(`${tag}`);

        if (value.length !== 0) {
            objElements.push({ tag: tag, amountElements: value.length, })
        }
    })
    console.groupEnd();

    //Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.
    const objAscendingOrder = [];
    let total = 0;

    [...arr].sort((a, b) => a.length - b.length).forEach((tag) => {

        let value = document.getElementsByTagName(`${tag}`);
        if (value.length !== 0) {
            objAscendingOrder.push({
                tag: tag,
                amountElements: value.length,
                tagWordsLength
                    : tag.length
            })
            total += value.length;
        }
    })


    console.group("3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.");
    console.table(objAscendingOrder);
    console.log(`totalElements: ${total} => ${tagsArray.length}`);
    console.groupEnd()

})();

