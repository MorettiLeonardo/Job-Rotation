function fibonacci(numero) {
    let a = 0
    let b = 1
    let proximo = 0
  
    while (proximo < numero) {
      proximo = a + b
      a = b
      b = proximo
    }
  
    if (proximo === numero) {
      return numero + ' pertence à sequência de Fibonacci'
    } else {
      return numero + ' não pertence à sequência de Fibonacci'
    }
  }
  
  console.log(fibonacci(10))
  console.log(fibonacci(20))