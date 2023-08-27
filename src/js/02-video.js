import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data.seconds));
    };

player.on("timeupdate", throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(LOCAL_KEY));

player.setCurrentTime(currentTime).then(function(seconds){
      }).catch(function(error){
        switch(error.name) {
            case 'RangeError' :
                break;
                default:
                break;
        }
    }); 