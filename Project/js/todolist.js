(function () {
	let btnAdd = document.querySelector('.btn__form');
	let btnRemove = document.querySelectorAll('.btn');
	let inp = document.querySelectorAll('check');
	let list = document.querySelector('.task');

	let input;

	let activeList = [

		{
			id: '1',
			label: 'ggg'
		},
		{
			id: '2',
			label: 'htt'
		},
		{
			id: '3',
			label: 'jhg'
		}

		// Записываем новый обьект из инпута по клику на кнопку!!
	];

	let doneList = [
		{
			id: '1',
			label: 'ggj'
		},
		{
			id: '2',
			label: 'hty'
		},
		{
			id: '3',
			label: 'jht'
		}

		// Вырезаем обьект из активЛиста по чеку и вставляем сюда
	];

	// Вместо вывода html тасков, родить их из двух переменных
	// использовать createElement,  использовать map для forEach , потом insert  в html
	// пок нопки делит удалять и из массива



	// Обработка кнопок

	// нужно найти родителя кнопки удаления и удалить из Html
	// и Удалить заачу из массива
	btnAdd.addEventListener('click', () => {
		input = document.querySelector('.input').value;
		// console.log(input);

		let valInp = input;
		activeList.push(valInp);
		console.log(activeList);
		inp.value = '';

		// list.innerHTML = JSON.stringify(activeList);

		let newTask = `
			<label class="task__inner">
				<input class="check" type="checkbox" name="" /><span></span><span class="text">${valInp}</span>
			</label>
			<div class="task__delete">
				<button class="btn"><img src="img/delete.svg" alt="" /></button>
			</div>
		`;

		list.innerHTML = newTask;
	});

	btnRemove.forEach((btnRemove) => {
		btnRemove.addEventListener('click', () => {
			btnRemove.parentNode.parentElement.remove();
		});
	})


}());