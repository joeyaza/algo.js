const maxProfit = prices => {

    let minBuyPrice = prices[0],
        maxSellPrice = prices[1],
    	maxProfit = maxSellPrice - minBuyPrice,
    	changeBuyPrice = false;

    prices.forEach((price, index) => {

        if (changeBuyPrice) minBuyPrice = price;

        const sellPrice = prices[index + 1];

        if (minBuyPrice > sellPrice) changeBuyPrice = true;

        else {

            changeBuyPrice = false;

            const profit = sellPrice - minBuyPrice;

            if (profit > maxProfit) (maxProfit = profit), (maxSellPrice = sellPrice);

        }

    });

    return [minBuyPrice, maxSellPrice];

};

module.exports = maxProfit;
