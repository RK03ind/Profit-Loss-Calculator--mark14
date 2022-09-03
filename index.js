document.querySelector("main button").addEventListener("click", () => {
  let initialPrice = parseInt(document.querySelector("#initial").value);
  let quantity = parseInt(document.querySelector("#quantity").value);
  let finalPrice = parseInt(document.querySelector("#final").value);

  if (quantity === 0) {
    return setMessage("Quantity of stocks cannot be zero.");
  }

  if (initialPrice === finalPrice) {
    return setMessage("There was no profit or loss");
  }

  if (initialPrice > finalPrice) {
    document.body.style.backgroundColor = "rgb(255 50 50)";
    let loss = (initialPrice - finalPrice) * quantity;
    setMessage(
      `The loss is ${loss} and the loss % is ${
        (loss / (initialPrice * quantity)) * 100
      }`
    );
  } else {
    document.body.style.backgroundColor = "green";
    let profit = (finalPrice - initialPrice) * quantity;
    setMessage(
      `The profit is ${profit} and the profit % is ${
        (profit / (initialPrice * quantity)) * 100
      }`
    );
  }
});

const setMessage = (msg) => {
  document.querySelector("main span").innerText = msg;
};
