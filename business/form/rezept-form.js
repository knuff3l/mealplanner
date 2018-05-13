addZutat = function () {
    let zutatHeaders = document.getElementsByClassName('zutaten-header');
    Array.prototype.forEach.call(zutatHeaders, header => header.classList.remove('d-none'));

    let zutatenHeaderRow = document.getElementById('zutaten');
    let countZutaten = zutatenHeaderRow.childElementCount;
    let rowZutat = document.createElement('div');
    let colMenge = createMengeField(countZutaten);
    let colZutat = createZutatField(countZutaten);
    let colRemove = document.createElement('div');

    rowZutat.className = 'row mb-1 zutat-item';

    colRemove.className = 'col';

    let removeButton = document.createElement('button');
    let removeIcon = document.createElement('i');

    removeIcon.className = 'fas fa-times-circle';
    removeButton.className = 'btn btn-outline-danger';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', () => {
        document.getElementById('zutaten')
                .removeChild(rowZutat);
        if (zutatenHeaderRow.childElementCount === 0) {
            Array.prototype.forEach.call(zutatHeaders, header => header.classList.add('d-none'));

        }
    });

    removeButton.appendChild(removeIcon);
    colRemove.appendChild(removeButton);

    rowZutat.appendChild(colMenge);
    rowZutat.appendChild(colZutat);
    rowZutat.appendChild(colRemove);

    zutatenHeaderRow.append(rowZutat);
};

createMengeField = function (countZutat) {
    let colMenge = document.createElement('div');
    colMenge.className = 'col-2';

    let inputMenge = document.createElement('input');

    inputMenge.name = 'zutaten[' + countZutat + '][menge]';
    // inputMenge.name='zutaten';
    inputMenge.setAttribute('placeholder', 'Menge hier');
    inputMenge.setAttribute('type', 'text');
    inputMenge.className = 'form-control';

    colMenge.appendChild(inputMenge);

    return colMenge;
};

createZutatField = function (countZutat) {

    let colZutat = document.createElement('div');
    colZutat.className = 'col-3';

    let inputZutat = document.createElement('input');

    inputZutat.name = 'zutaten[' + countZutat + '][zutat]';
    // inputZutat.name='zutaten';
    inputZutat.setAttribute('placeholder', 'Zutat hier');
    inputZutat.setAttribute('type', 'text');
    inputZutat.className = 'form-control';
    colZutat.appendChild(inputZutat);

    return colZutat;
};

addZubereitung = function () {

    let zubereitungHeaders = document.getElementsByClassName('zubereitung-header');
    Array.prototype.forEach.call(zubereitungHeaders, header => header.classList.remove('d-none'));

    let zubereitungHeaderRow = document.getElementById('zubereitung');
    let countZubereitung = zubereitungHeaderRow.childElementCount;
    let rowZubereitung = document.createElement('div');
    let colSchritt = createSchrittField(countZubereitung);
    let colBeschreibung = createBeschreibungField(countZubereitung);
    let colRemove = document.createElement('div');

    rowZubereitung.className = 'row mb-1 zubereitung-item';

    colRemove.className = 'col';

    let removeButton = document.createElement('button');
    let removeIcon = document.createElement('i');

    removeIcon.className = 'fas fa-times-circle';
    removeButton.className = 'btn btn-outline-danger';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', () => {
        document.getElementById('zubereitung')
                .removeChild(rowZubereitung);

        Array.prototype.forEach.call(document.getElementsByClassName('list-number'), (item, index) => {
            item.innerHTML = index + 1;
        });


        if (zubereitungHeaderRow.childElementCount === 0) {
            Array.prototype.forEach.call(zubereitungHeaders, header => header.classList.add('d-none'));

        }
    });

    removeButton.appendChild(removeIcon);
    colRemove.appendChild(removeButton);

    rowZubereitung.appendChild(colSchritt);
    rowZubereitung.appendChild(colBeschreibung);
    rowZubereitung.appendChild(colRemove);

    zubereitungHeaderRow.append(rowZubereitung);


};

createSchrittField = function (countZubereitung) {

    let colSchritt = document.createElement('div');
    colSchritt.className = 'col-1 text-center';

    let counterEl = document.createElement('h5');
    counterEl.className = 'form-control list-number';
    let text = document.createTextNode((countZubereitung + 1));
    counterEl.appendChild(text);
    colSchritt.appendChild(counterEl);

    return colSchritt;
};

createBeschreibungField = function (countZubereitung) {


    let colBeschreibung = document.createElement('div');
    colBeschreibung.className = 'col-7';

    let inputBeschreibung = document.createElement('input');

    inputBeschreibung.name = 'zubereitung[' + countZubereitung + ']';
    inputBeschreibung.setAttribute('placeholder', 'Beschreibung hier');
    inputBeschreibung.setAttribute('type', 'text');
    inputBeschreibung.className = 'form-control';
    colBeschreibung.appendChild(inputBeschreibung);

    return colBeschreibung;
};