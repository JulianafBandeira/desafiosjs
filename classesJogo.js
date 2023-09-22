class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'usou um ataque';
      }
  
      return `O ${this.tipo} atacou usando ${ataque}`;
    }
  }
  
  const mago = new Heroi('Gandalf', 200, 'mago');
  const guerreiro = new Heroi('Conan', 35, 'guerreiro');
  
  console.log(mago.atacar());    
  console.log(guerreiro.atacar()); 