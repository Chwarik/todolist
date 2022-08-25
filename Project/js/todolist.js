(function () {
	let btnAdd = document.querySelector('.btn__form');
	let btnRemove = document.querySelectorAll('.btn');
	let check = document.querySelectorAll('check');


	// Обработка кнопок

	// нужно найти родителя кнопки удаления и удалить из Html
	// и Удалить заачу из массива
	btnAdd.addEventListener('click', () => {
		let input = document.querySelector('.input').value;
		console.log(input);
	});

	btnRemove.forEach((btnRemove) => {
		btnRemove.addEventListener('click', () => {
			btnRemove.parentNode.parentElement.remove();
		});
	})


}());