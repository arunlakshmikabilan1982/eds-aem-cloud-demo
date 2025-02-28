import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  [...block.children].forEach((row) => {
    const colDiv = document.createElement('div');
    moveInstrumentation(rowDiv,colDiv);
    colDiv.setAttribute('class', 'col-md-4 col-sm-6 single-service-item');
    const iconClass = row.children[0].textContent;
    const content = row.children[1].textContent;

    colDiv.innerHTML = `
    <div class="single-service-icon"><i class="${iconClass}"></i></div>
    <p>${content}</p>
    `;

    console.log(iconClass);
    console.log(content);
    
    rowDiv.append(colDiv);

  });
  block.textContent = '';
  block.append(rowDiv);
  }