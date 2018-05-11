addZutat = function () {
    let zutatHeaders = document.getElementsByClassName('zubereitung-header');
    Array.prototype.forEach.call(zutatHeaders,header => header.classList.remove('d-none'));

    let zutatenHeaderRow = document.getElementById('zutaten');
    let rowZutat=document.createElement('div');
    let colMenge=document.createElement('div');
    let colZutat=document.createElement('div');
    let colRemove=document.createElement('div');

    rowZutat.className='row mb-1';
    colMenge.className='col-2';
    colZutat.className='col-3';
    colRemove.className='col';

    let inputMenge= document.createElement('input');
    let inputZutat=document.createElement('input');
    let removeButton=document.createElement('button');
    let removeIcon=document.createElement('i');

    removeIcon.className='fas fa-times-circle';
    removeButton.className='btn btn-outline-danger';
    removeButton.setAttribute('type','button');
    removeButton.addEventListener('click',()=> {
        // removeZutat(rowZutat);
        document.getElementById('zutaten').removeChild(rowZutat);
    });

    inputMenge.setAttribute('placeholder','Menge hier');
    inputZutat.setAttribute('placeholder','Zutat hier');

    inputMenge.setAttribute('type','text');
    inputZutat.setAttribute('type','text');

    inputMenge.className='form-control';
    inputZutat.className='form-control';

    removeButton.appendChild(removeIcon);
    colRemove.appendChild(removeButton);
    colMenge.appendChild(inputMenge);
    colZutat.appendChild(inputZutat);

    rowZutat.appendChild(colMenge);
    rowZutat.appendChild(colZutat);
    rowZutat.appendChild(colRemove);

    zutatenHeaderRow.append(rowZutat);
};

removeZutat = function (rowZutat) {
    // console.log(rowZutat);
    // document.getElementById('zutaten').removeChild(rowZutat);

};
