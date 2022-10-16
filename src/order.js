function takeOrder(orderNum,deliveryOrders){
  if(deliveryOrders.length <=2){
    deliveryOrders.push(orderNum)
  } else {
      return;
  }
}

function refundOrder(orderNum,deliveryOrders) {
  function find(element){
    if (element.orderNumber === orderNum){
      return true
    }
  }
  var indexFound = deliveryOrders.findIndex(find)
   deliveryOrders.splice(indexFound,1)
  return deliveryOrders
}


function listItems(order){
  //should list out different order items by name
  //get order name  --- order.item
  //get element from order array --orders1[i]

 let text = ""
 for( var i = 1; i < order.length; i++){
    text += ", "+ order[i].item
  }
    return order[0].item + text
}

var order1 = {
  orderNumber: 1234,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var order2 = {
  orderNumber: 2342,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = [order1, order2];

function searchOrder(deliveryOrders,item){
  // search deliveryOrder array for item name
  function match(orderEle){
    if (orderEle.item === item){
      return true
    }
  }
    var itemFound = deliveryOrders.findIndex(match)
    if(itemFound > -1){
      return true
    } else{
      return false
    }
  }
  // if match return true

console.log('test' , searchOrder(deliveryOrders,'burger'))

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}