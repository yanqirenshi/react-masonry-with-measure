export default function ensure (options) {
    const item_class = 'grid-item';
    const template = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        // original parameter. TODO: これ使ってる？
        itemClass: item_class,
    };

    if (!options)
        return template;

    return {...template, ...options};
}
