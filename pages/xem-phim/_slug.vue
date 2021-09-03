<template>
  <section class="container py-10">
   <h2 class="p-3 transform -translate-y-4 text-yellow-600 font-bold text-2xl text-center uppercase">Quyến Tư Lượng (2021) - <span>Tập 16</span></h2>
    <div class="video-player-box"
         :playsinline="playsinline"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ended="onPlayerEnded($event)"
         @loadeddata="onPlayerLoadeddata($event)"
         @waiting="onPlayerWaiting($event)"
         @playing="onPlayerPlaying($event)"
         @timeupdate="onPlayerTimeupdate($event)"
         @canplay="onPlayerCanplay($event)"
         @canplaythrough="onPlayerCanplaythrough($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>
    <div class="text-center pt-5">
          <button v-for="(item,index) in 3" :key="index" :class="[index==0?'bg-red-700 hover:bg-red-800':'bg-green-600 hover:bg-green-700','mr-1 mb-1 inline-block px-4 py-1 text-xs font-medium leading-6 text-center text-gray-200 transition  rounded shadow ripple hover:shadow-lg  focus:outline-none waves-effect']">
            Server {{item}}
          </button>
    </div>
    <div class="pt-8">
      <span class="text-gray-300 font-medium block my-2">
        Tập Phim (Vietsub) : 
      </span>
    
       <span>
          <button v-for="(item,index) in 16" :key="index" :class="[index==15?'bg-yellow-600 hover:bg-yellow-700':'bg-indigo-500 hover:bg-indigo-600','mr-1 mb-1 inline-block px-4 py-1 text-xs font-medium leading-6 text-center text-gray-200 transition  rounded shadow ripple hover:shadow-lg  focus:outline-none waves-effect']">
            Tập {{item}}
          </button>
       </span>
     
    </div>
  </section>
</template>

<script>
  import 'videojs-hotkeys'
  export default {
    data () {
      return {
        // component options
        playsinline: true,
        
        // videojs options
        playerOptions: {
          muted: false,
          height: '500',
          autoplay: true,
          language: 'vi',
          responsive:true,
     
         controlBar: {
            remainingTimeDisplay: true,
          },
          sources: [{
            type: "video/mp4",
            src: "/movie/vucanhky-phan4-tap8.mp4"
          }],
   poster: "/movie/vucanhky-panner.jpeg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.myVideoPlayer)
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        player.hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false,
          fullscreenKey: function(event, player) {
            // override fullscreen to trigger when pressing the F key or Ctrl+Enter
            return ((event.which === 70) || (event.ctrlKey && event.which === 13));
          }
        })
      
      }
    }
  }
</script>

<style>

     .video-player-box {
      min-height: 200px;
    }
    .video-js{
      margin: auto;
    }
    button>.vjs-icon-placeholder:before{
    top: -7px;
    }
    .vjs-button > .vjs-icon-placeholder:before{
      font-size: 1.6rem;
            top:0px;
            line-height: 38px;
    }
    .video-js .vjs-control-bar{
      height: 36px;
    }
    .video-js .vjs-progress-holder{
      height: 0.5rem;
    }
 .video-js .vjs-play-progress {
    background-color: #b31717;
}
.vjs-volume-bar.vjs-slider-horizontal{
  height: 0.5rem;
}

.vjs-slider-horizontal .vjs-volume-level {
    height: 8px;
}
.video-js .vjs-play-progress:before {
    font-size: 1.2em;
    top: -2px;
    }
    .video-js .vjs-progress-control:hover .vjs-play-progress:before{
        top: -6px;
    }
    .video-js .vjs-volume-bar {
    margin: 14px 0.45em;
}
.video-js .vjs-volume-level:before {
 
    font-size: 1.5em;
}
.vjs-slider-horizontal .vjs-volume-level:before {
    top: -3px;
}
.video-js .vjs-big-play-button{
  top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.video-js .vjs-control-bar{
  background-color: #0000001a;
}
.video-js .vjs-time-control{
  line-height: 36px;
}
</style>
