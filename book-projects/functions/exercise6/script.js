/* Crea una función llamada factura(productos, cantidades, precios) que recibe
tres arrays del mismo tamaño con los siguientes contenidos:
1. productos: nombres de productos.
2. cantidades: números enteros indicando cantidad.
3. precios: números con decimales indicando el precio de cada producto.
La función debe recorrer cada producto y calcular el precio total según su cantidad
y precio. Se debe mostrar ese precio total de cada producto y al final del programa
se debe mostrar el precio.*/


const bill = (products,quantities,prices) => {
    let ticket = 'BILL\n---------------\n';
    let total_prices = 0;
    
    for(i=0;i<products.length;i++){
      ticket = ticket + products[i] + ': ' + quantities[i] + '-->' + prices[i] + '\n';
      total_prices = total_prices + (quantities[i] * prices[i]);
    }
    ticket = ticket + '\n----------------\n' + 'Total: ' + total_prices; 
    return ticket;
  }
  
  const totalTicket = bill(['Breed','Eggs','Flour'],[1,6,2],[1.2,0.2,0.8]);
  console.log(totalTicket);