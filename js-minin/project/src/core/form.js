export class Form {
  constructor(form, controls) {
    this.container = form
    this.controls = controls
  }

  value(){
    const value = {}

    Object.keys(this.controls).forEach(control =>{
      value[control] = this.form[control].value
    })

    return value
  }
}
