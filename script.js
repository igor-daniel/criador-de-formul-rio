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
// implementação

// email

let email = new Input('email', 'Digite seu email');