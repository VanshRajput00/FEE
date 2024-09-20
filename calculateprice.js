const products = [{
        name: 'Boat Rockerz 255 Headphone',
        mrp: 1500,
        discount: {
            rate: 120,
            isPercentage: false
        }
    },
    {
        name: 'Legion Y540',
        mrp: 85000,
        discount: {
            rate: 12,
            isPercentage: true
        }
    },
    {
        name: 'Redgear Mouse',
        mrp: 750,
        discount: {
            rate: 5,
            isPercentage: true
        }
    },
];

function calculatePrice(products) {
    const result = products.map(product => {
        let discountAmount;
        if (product.discount.isPercentage) {
            discountAmount = (product.mrp * product.discount.rate) / 100;
        } else {
            discountAmount = product.discount.rate;
        }
        const finalPrice = product.mrp - discountAmount;
        return `The price of ${product.name} after discount is ${finalPrice}`;
    });

    return result;
}