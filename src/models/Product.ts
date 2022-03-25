type products = {
    title: string,
    price: number,
}

const data: products[] = [
    {title: 'camisolas', price: 38.50},
    {title: 'Vestidos', price: 95.80},
    {title: 'Calças', price: 42.30},
    {title: 'Bermudas', price: 15.90},
    {title: 'Saias', price: 18.20},
]

export const Products = {
    getAll: (): products[] => {
        return data;
    },
    getPriceAfter: (price: number): products[] => {
        return data.filter(item => item.price >= price)

    }
}