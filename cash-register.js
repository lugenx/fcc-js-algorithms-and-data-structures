function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let sumOfCid = cid.reduce((total, item) => total + item[1], 0);

  if (changeDue === sumOfCid) {
    return { status: "CLOSED", change: [...cid] };
  }
  //console.log("changeDue is: " + changeDue);

  let arr = cid.reverse();

  //console.log(arr);
  //console.log("sum " + sumOfCid);

  let curr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  //adding currencies and number of bills to the arr:
  for (let i = 0; i < arr.length; i++) {
    arr[i][2] = curr[i];
    arr[i][3] = Math.round(arr[i][1] / curr[i]);
  }

  let remainder = changeDue;

  let result = [];
  //let obj = {};
  for (let elem of arr) {
    //obj[elem[0]] = 0;

    let newArr = [elem[0], 0];
    result.push(newArr);
    while (remainder.toFixed(2) >= elem[2] && elem[3] > 0) {
      remainder -= elem[2];
      elem[3] -= 1;
      //obj[elem[0]] += elem[2];
      newArr[1] += elem[2];
    }
  }
  let totalAvailibleToGive = result.reduce((total, item) => total + item[1], 0);

  if (totalAvailibleToGive < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: [...result.filter((item) => item[1] > 0)] };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
