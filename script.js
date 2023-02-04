class Input {
  requared = false;
  _type = 'text';
  constructor(name, label){
    this.name = name;
    this.label = label
  }
  get type(){
    return this._type;
  }
  set type(t){
    if(['email', 'text', 'password', 'submit'].includes(t)){
      this._type;
    }else{
      throw new Error(`Input ${t} type doesn't exist`)
    }
  }
}
class Button{
  constructor(label){
    super('', label);
    this.type = 'submit';
  }
}
// implementação

// email

let email = new Input('email', 'Digite seu email');
email.type = 'email'
email.requared = true;

// senha
let senha = new Input('senha', 'Digite sua senha');
senha.type = 'password';

// button
let button = new Input('Enviar'); 