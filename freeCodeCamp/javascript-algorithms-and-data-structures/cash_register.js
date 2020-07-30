function checkCashRegister(price, cash, cid) {
    let toReturn = cash - price;
    let totalReturn = calculateChange(toReturn, cid);
  
    if (toReturn > totalCash(cid) ){
      return {status: 'INSUFFICIENT_FUNDS', change: []}
    } else if (toReturn == totalCash(cid)) {
      return {status: 'CLOSED', change: cid.reverse()}
    } else if (toReturn < totalCash(cid)) {
      if (totalReturn.total != 0){
        return {status: 'INSUFFICIENT_FUNDS', change: []}
      }
      return {status: 'OPEN', change: totalReturn.coins}
    }
  }
  
  function calculateChange(total, cid) {
      let newCid = [];
      let coinPosition = 0;
      cid = cid.reverse();
      let coins = {
          'ONE HUNDRED': 100,
          'TWENTY': 20,
          'TEN': 10,
          'FIVE': 5,
          'ONE': 1,
          'QUARTER': 0.25,
          'DIME': 0.1,
          'NICKEL': 0.05,
          'PENNY': 0.01
      };
      
      for (let i in coins) {
          let nextCoin = false;
          while (nextCoin === false && total >= coins[i]) {
              let nameOfCoin = i;
              let valueOfCoin = coins[i];
              let quantityOfCoins = Math.floor(total / valueOfCoin);
              let totalCoinAvailable = cid[coinPosition][1];
              if ((quantityOfCoins * valueOfCoin) > totalCoinAvailable) {
                quantityOfCoins = Math.floor(totalCoinAvailable / valueOfCoin);
                  nextCoin = true;
              }
  
              total -= (quantityOfCoins * valueOfCoin);
              total = parseFloat(total).toFixed(2);
              if (quantityOfCoins !== 0) {
                newCid.push([nameOfCoin, valueOfCoin * quantityOfCoins]);
              }
          }
          coinPosition++;
      }
  
      return {total: total, coins: newCid};
  }
  
  
  function totalCash(cid) {
    let total = 0;
    for (let i = 0; i < cid.length; i++) {
      total = total + cid[i][1];
    }
    return parseFloat(total).toFixed(2);
  }