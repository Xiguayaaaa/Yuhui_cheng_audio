(() => {
  //make a reference to all of the button
  const playButton = document.querySelectorAll('playButton'),
        pauseButton = document.querySelectorAll('pauseButton'),
        rwButton = document.querySelectorAll('rwButton'),
        audioElement = document.querySelector('audio');

  let globelPaused = false;

  //play thesong associated with the button (its data-trackref attrib)
  function playTrack() {

    if ( globelPaused) {
      console.log('paused');
      playTrack();
      return; }
    //debugger;

    let audioSource = this.dataset.trackref;

    // set the audio audioSource
    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play it
    audioElement.load();
    audioElement.play();
  }

  function resumeTrack() {
    globelPaused = false;
    audioElement.play();
  }

  function pauseTrack() {
    audioElement.pause();
    globelPaused = true;
  }

  function rwTrack() {
    audioElement.rw();
  }


  playButton.forEach(button => button.addEventListener("click", playTrack)),
  pauseButton.forEach(button => button.addEventListener("click", pauseTrack)),
  rwButton.forEach(button => button.addEventListener("click", rwTrack));

})();
