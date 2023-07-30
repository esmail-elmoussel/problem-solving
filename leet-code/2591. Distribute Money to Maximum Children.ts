// Problem Link: https://leetcode.com/problems/distribute-money-to-maximum-children/

function distMoney(money: number, children: number): number {
  if (money < children) {
    return -1;
  }

  let moneyLeft = money - children * 8;

  if (!moneyLeft) {
    return children;
  }

  if (moneyLeft > 0) {
    return children - 1;
  }

  if (moneyLeft === -4) {
    return children - 2;
  }

  return children - Math.ceil(-moneyLeft / 7);
}

console.log(distMoney(20, 3));
