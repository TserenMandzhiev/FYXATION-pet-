window.addEventListener("DOMContentLoaded", function(){
	const videoBtn = document.querySelector(".player-container");

	videoBtn.addEventListener("click", function() {
		if (videoBtn.classList.contains('active')) {
			return;
		} else {

		}

		videoBtn.classList.add('active');

		const src = videoBtn.dataset.src;

		videoBtn.insertAdjacentHTML(
			'afterbegin',
			`
			<iframe src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		`
		);
	});
});