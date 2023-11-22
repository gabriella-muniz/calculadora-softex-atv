const Banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
  
    buscarSaldo() {
      return this.saldo;
    },
  
    deposito(valor) {
      this.saldo += valor;
      return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
    },
  
    saque(valor) {
      if (valor > this.saldo) {
        return "Saldo insuficiente para saque.";
      }
      this.saldo -= valor;
      return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
    },
  
    numeroConta() {
      return this.conta;
    },
  };
  
 
  
  