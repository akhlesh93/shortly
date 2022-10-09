const mobileTrigger = document.getElementById('mobile-trigger');
mobileTrigger.addEventListener('click', (event) => {
	event.stopPropagation();
	document.body.classList.toggle('mobile-open');
	event.target.classList.toggle('open');
});
