// The Euclids Division Lemma is "a = bq + r"

function getHCF(x, y) {
  let a = parseInt(x);
  let b = parseInt(y);
  let q = parseInt(Math.floor(a / b));
  let r = parseInt(a - Math.floor(a / b) * b);

  console.log("\nSteps\n");
  // console.loging the euclids division lemma
  console.log(a, "=", b, "*", q, "+", r);

  while (r != 0) {
    let temporary_a = parseInt(b);
    let temporary_b = parseInt(a % b);
    q = parseInt(Math.floor(temporary_a / temporary_b));
    r = parseInt(
      temporary_a - Math.floor(temporary_a / temporary_b) * temporary_b
    );
    a = temporary_a;
    b = temporary_b;

    console.log(a, "=", b, "*", q, "+", r);
  }

  if (r === 0) {
    console.log("\nThe HCF is", b);
  }
}

// let x = parseInt(input("Please enter the first number - "));
// let y = parseInt(input("Please enter the second number - "));

getHCF(5432, 2612);
