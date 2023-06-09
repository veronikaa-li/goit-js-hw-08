import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = evt => {
    const timePosition = evt.seconds;
    localStorage.setItem(STORAGE_KEY, timePosition)
};

player.on('timeupdate', throttle(onPlay, 1000));

localStorage.removeItem(STORAGE_KEY);

const playedTime = localStorage.getItem(STORAGE_KEY);

if (playedTime !== null) {
    player.setCurrentTime(playedTime);
  }



