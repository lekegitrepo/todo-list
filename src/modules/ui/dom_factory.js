export class DOMFactory {
  constructor(){}

  createFormWithInput(...formContents){
    const form = document.createElement('form');
    formContents.forEach((tag) => {
      form.appendChild(tag)
    })
    return form;
  }

  addClassToElement(element, attr){
    return element.classList.add(attr)
  }

  addIdToElement(element, value){
    return element.setAttribute('id', value);
  }
}
