(function () {
	let btnAdd = document.querySelector('.btn__form');
	let btnRemove = document.querySelectorAll('.btn');
	let checkbox = document.querySelectorAll('check');
	let list = document.querySelector('.task__list');
	let listDone = document.querySelector('.task__listDone');

	let input = document.querySelector('.input');
	let inputValue;

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

	window.onload = () => {
		activeList.forEach((element) => {

			let newTask = `
				<div class="task">
					<label class="task__inner">
						<input class="check" type="checkbox" name="" /><span></span><span class="text">${element.label}</span>
					</label>
					<div class="task__delete">
						<button class="btn"><img src="img/delete.svg" alt="" /></button>
					</div>
				</div>
			`;

			list.innerHTML += newTask;
		});

		doneList.forEach((element) => {

			let newTask = `
				<div class="task done">
					<label class="task__inner">
						<input class="check" type="checkbox" name="" checked /><span></span><span class="text">${element.label}</span>
					</label>
					<div class="task__delete">
						<button class="btn"><img src="img/delete.svg" alt="" /></button>
					</div>
				</div>
			`;

			listDone.innerHTML += newTask;
		});

		btnRemove = document.querySelectorAll('.btn');
		del(btnRemove);

	};

	input.addEventListener('change', () => {
		inputValue = input.value;
	});

	btnAdd.addEventListener('click', () => {

		let index = activeList.length + 1 + '';
		let task = { id: index, label: inputValue };
		activeList.push(task);

		list.innerHTML = '';
		activeList.forEach((element) => {

			let newTask = `
				<div class="task">
					<label class="task__inner">
						<input class="check" type="checkbox" name="" /><span></span><span class="text">${element.label}</span>
					</label>
					<div class="task__delete">
						<button class="btn"><img src="img/delete.svg" alt="" /></button>
					</div>
				</div>
			`;


			list.innerHTML += newTask;
		});
		input.value = '';

		btnRemove = document.querySelectorAll('.btn');
		del(btnRemove);
	});

	let del = (btn) => {
		btn.forEach((btn) => {
			btn.onclick = () => {
				let label = btn.parentNode.previousElementSibling.children[2].textContent;
				btn.parentNode.parentNode.remove();

				let replaceArray = (array) => {
					let index = array.findIndex(isElement);
					array.splice(index, 1);
					return array;

					function isElement(element, e) {
						return element.label == label;
					}
				}
				// list.remove(task);

				replaceArray(activeList);
				replaceArray(doneList);


			};
		})
	}


}());