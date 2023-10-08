export const catalog_data_array = [
    {
        type: 'ITEM',
        id: '#Tea',
        presentAtAllLocations: true,
        itemData: {
            name: 'Tea',
            description: 'Hot Leaf Juice',
            categoryId: '#Beverages',
            taxIds: [
                '#SalesTax'
            ],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#Tea_Mug',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#Tea',
                        name: 'Mug',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                            amount: BigInt(150),
                            currency: 'USD'
                        }
                    }
                }
            ]
        }
    },
    {
        type: 'ITEM',
        id: '#Coffee',
        presentAtAllLocations: true,
        itemData: {
            name: 'Coffee',
            description: 'Hot Bean Juice',
            categoryId: '#Beverages',
            taxIds: [
                '#SalesTax'
            ],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#Coffee_Regular',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#Coffee',
                        name: 'Regular',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                            amount: BigInt(250),
                            currency: 'USD'
                        }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#Coffee_Large',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#Coffee',
                        name: 'Large',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                            amount: BigInt(350),
                            currency: 'USD'
                        }
                    }
                }
            ]
        }
    },
    {
        type: 'CATEGORY',
        id: '#Beverages',
        presentAtAllLocations: true,
        categoryData: {
            name: 'Beverages'
        }
    },
    {
        type: 'TAX',
        id: '#SalesTax',
        presentAtAllLocations: true,
        taxData: {
            name: 'Sales Tax',
            calculationPhase: 'TAX_SUBTOTAL_PHASE',
            inclusionType: 'ADDITIVE',
            percentage: '5.0',
            appliesToCustomAmounts: true,
            enabled: true
        }
    },
    { type: 'ITEM', id: '#Juice', presentAtAllLocations: true, itemData: { name: 'Juice', description: 'Fruit Extract', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Juice_Glass', presentAtAllLocations: true, itemVariationData: { itemId: '#Juice', name: 'Glass', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(100), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Soda', presentAtAllLocations: true, itemData: { name: 'Soda', description: 'Carbonated Drink', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Soda_Can', presentAtAllLocations: true, itemVariationData: { itemId: '#Soda', name: 'Can', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(120), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Water', presentAtAllLocations: true, itemData: { name: 'Water', description: 'Natural Spring', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Water_Bottle', presentAtAllLocations: true, itemVariationData: { itemId: '#Water', name: 'Bottle', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(80), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Milk', presentAtAllLocations: true, itemData: { name: 'Milk', description: 'Dairy Beverage', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Milk_Bottle', presentAtAllLocations: true, itemVariationData: { itemId: '#Milk', name: 'Bottle', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(140), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Lemonade', presentAtAllLocations: true, itemData: { name: 'Lemonade', description: 'Citrus Drink', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Lemonade_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Lemonade', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(130), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Smoothie', presentAtAllLocations: true, itemData: { name: 'Smoothie', description: 'Blended Fruits', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Smoothie_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Smoothie', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(170), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Latte', presentAtAllLocations: true, itemData: { name: 'Latte', description: 'Espresso with Milk', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Latte_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Latte', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(220), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Cappuccino', presentAtAllLocations: true, itemData: { name: 'Cappuccino', description: 'Espresso with Foam', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Cappuccino_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Cappuccino', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(210), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Espresso', presentAtAllLocations: true, itemData: { name: 'Espresso', description: 'Concentrated Coffee', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Espresso_Shot', presentAtAllLocations: true, itemVariationData: { itemId: '#Espresso', name: 'Shot', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(180), currency: 'USD' } } }] } },
    { type: 'ITEM', id: '#Mocha', presentAtAllLocations: true, itemData: { name: 'Mocha', description: 'Chocolate Espresso', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Mocha_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Mocha', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(230), currency: 'USD' } } }] } },
    {
        type: 'CATEGORY',
        id: '#Electronics',
        presentAtAllLocations: true,
        categoryData: {
            name: 'Electronics'
        }
    },
    {
        type: 'ITEM',
        id: '#Television',
        presentAtAllLocations: true,
        itemData: {
            name: 'Television',
            description: 'A nice big television',
            categoryId: '#Electronics',
            taxIds: [
                '#SalesTax'
            ],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#4K_Television',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#Television',
                        name: '4k Television',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                            amount: BigInt(500),
                            currency: 'USD'
                        }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#8K_Television',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#Television',
                        name: '8K Television',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                            amount: BigInt(1000),
                            currency: 'USD'
                        }
                    }
                }
            ]
        }
    }, {
        type: 'CATEGORY',
        id: '#MusicalInstruments',
        presentAtAllLocations: true,
        categoryData: {
            name: 'Musical Instruments'
        }
    },
    {
        type: 'ITEM',
        id: '#AudioEquipment',
        presentAtAllLocations: true,
        itemData: {
            name: 'Audio Equipment',
            description: 'Equipment for Sound',
            categoryId: '#Electronics',
            taxIds: ['#SalesTax'],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#AudioEquipment_Speakers',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#AudioEquipment',
                        name: 'Speakers',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(800), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#AudioEquipment_SoundSystems',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#AudioEquipment',
                        name: 'Sound Systems',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(1500), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#AudioEquipment_Amplifiers',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#AudioEquipment',
                        name: 'Amplifiers',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(1200), currency: 'USD' }
                    }
                }
            ]
        }
    },
    {
        type: 'ITEM',
        id: '#MusicEquipment',
        presentAtAllLocations: true,
        itemData: {
            name: 'Music Equipment',
            description: 'Equipment for Musicians',
            categoryId: '#MusicalInstruments',
            taxIds: ['#SalesTax'],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#MusicEquipment_Guitar',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MusicEquipment',
                        name: 'Guitar',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(500), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#MusicEquipment_Drums',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MusicEquipment',
                        name: 'Drums',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(700), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#MusicEquipment_Keyboard',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MusicEquipment',
                        name: 'Keyboard',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(600), currency: 'USD' }
                    }
                }
            ]
        }
    },
    {
        type: 'CATEGORY',
        id: '#Clothing',
        presentAtAllLocations: true,
        categoryData: {
            name: 'Clothing'
        }
    },
    {
        type: 'ITEM',
        id: '#MensClothing',
        presentAtAllLocations: true,
        itemData: {
            name: 'Mens Clothing',
            description: 'Apparel for Men',
            categoryId: '#Clothing',
            taxIds: ['#SalesTax'],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#MensClothing_Small',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MensClothing',
                        name: 'Small',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(500), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#MensClothing_Medium',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MensClothing',
                        name: 'Medium',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(550), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#MensClothing_Large',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#MensClothing',
                        name: 'Large',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(600), currency: 'USD' }
                    }
                }
            ]
        }
    },
    {
        type: 'ITEM',
        id: '#WomensClothing',
        presentAtAllLocations: true,
        itemData: {
            name: 'Womens Clothing',
            description: 'Apparel for Women',
            categoryId: '#Clothing',
            taxIds: ['#SalesTax'],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#WomensClothing_Small',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#WomensClothing',
                        name: 'Small',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(500), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#WomensClothing_Medium',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#WomensClothing',
                        name: 'Medium',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(550), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#WomensClothing_Large',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#WomensClothing',
                        name: 'Large',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(600), currency: 'USD' }
                    }
                }
            ]
        }
    },
    {
        type: 'ITEM',
        id: '#NonBinaryClothing',
        presentAtAllLocations: true,
        itemData: {
            name: 'Non-Binary Clothing',
            description: 'Apparel for Non-Binary Individuals',
            categoryId: '#Clothing',
            taxIds: ['#SalesTax'],
            variations: [
                {
                    type: 'ITEM_VARIATION',
                    id: '#NonBinaryClothing_Small',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#NonBinaryClothing',
                        name: 'Small',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(500), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#NonBinaryClothing_Medium',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#NonBinaryClothing',
                        name: 'Medium',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(550), currency: 'USD' }
                    }
                },
                {
                    type: 'ITEM_VARIATION',
                    id: '#NonBinaryClothing_Large',
                    presentAtAllLocations: true,
                    itemVariationData: {
                        itemId: '#NonBinaryClothing',
                        name: 'Large',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: { amount: BigInt(600), currency: 'USD' }
                    }
                }
            ]
        }
    }
]

