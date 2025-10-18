        // 定義曲目資料陣列（需要加入 MP3 檔案路徑）
        const tracks = [
            { id: 1, title: "Track 01", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track01.mp3"},
            { id: 2, title: "Track 02", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track02.mp3"},
            { id: 3, title: "Track 03", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track03.mp3"},
            { id: 4, title: "Track 04", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track04.mp3"},
            { id: 5, title: "Track 05", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track05.mp3"},
            { id: 6, title: "Track 06", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track06.mp3"},
            { id: 7, title: "Track 07", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track07.mp3"},
            { id: 8, title: "Track 08", duration: "", src: "audioHC5wb/HC2E-WB-Level5-Track08.mp3"}
            
        ];
        //alert("請點選曲目列表中的曲目以播放音訊。");
        // 建立 Audio 物件
        let audio = new Audio();
        let currentTrackIndex = -1;
        
        // 動態產生曲目列表的函數
        function generateTrackList(tracksArray) {
            const trackListContainer = document.getElementById('cd1-tracks');
            // 清空現有內容
            trackListContainer.innerHTML = '';
            // 遍歷陣列並產生每個曲目項目
            tracksArray.forEach((track,index) => {
                const li = document.createElement('li');
                li.className = 'track-item';
                li.dataset.trackId = track.id;
                li.dataset.index = index; // 加入索引
                li.innerHTML = `
                    <div class="track-icon"><i class="fas fa-music"></i></div>
                    <div class="track-title">${track.title}</div>
                    <div class="track-play-btn"><i class="fas fa-play"></i></div>
                `;        
                /* li.innerHTML = `
                    <div class="track-icon"><i class="fas fa-music"></i></div>
                    <div class="track-title">${track.title}</div>
                    <div class="track-duration">${track.duration || "0:00"}</div>
                    <div class="track-play-btn"><i class="fas fa-play"></i></div>
                `; */
                // 點擊曲目時播放
                li.addEventListener('click', () => {
                    playTrack(index);
                });
                trackListContainer.appendChild(li);
            });
        }

        // 播放指定曲目
        function playTrack(index) {
            if (index < 0 || index >= tracks.length) return;
            currentTrackIndex = index;
            const track = tracks[index];
            // 設定音訊來源
            audio.src = track.src;
            audio.load();
            audio.play();
    
            // 更新 UI
            updatePlayingUI(index);
        }

        // 更新播放中的 UI
        function updatePlayingUI(index) {
            const trackItems = document.querySelectorAll('.track-item');
            const playBtn = document.querySelector('.play-btn');
    
            // 移除所有 playing 狀態
            trackItems.forEach(item => {
                item.classList.remove('playing');
                const icon = item.querySelector('.track-play-btn i');
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            });
    
            // 設定當前播放曲目
            if (index >= 0) {
                const currentItem = trackItems[index];
                currentItem.classList.add('playing');
                const icon = currentItem.querySelector('.track-play-btn i');
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            }
    
            // 更新主播放按鈕
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        }

        // 頁面載入後執行
document.addEventListener('DOMContentLoaded', function() {
    generateTrackList(tracks);
    
    const playBtn = document.querySelector('.play-btn');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeSpan = document.querySelector('.current-time');
    const durationSpan = document.querySelector('.duration');
    const speedButtons = document.querySelectorAll('.speed-btn');
    const volumeBtn = document.querySelector('.volume-btn');
    const playbackModes = document.querySelectorAll('input[name="playback-mode"]');
    
    // 主播放/暫停按鈕
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            if (currentTrackIndex === -1) {
                playTrack(0); // 如果沒有選曲目，播放第一首
            } else {
                audio.play();
                playBtn.classList.remove('fa-play');
                playBtn.classList.add('fa-pause');
            }
        } else {
            audio.pause();
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
        }
    });
    
    // 音訊載入完成後更新總時長
    audio.addEventListener('loadedmetadata', () => {
        const duration = formatTime(audio.duration);
        durationSpan.textContent = duration;
        progressBar.max = Math.floor(audio.duration);
    });
    
    // 播放時更新進度條和時間
    audio.addEventListener('timeupdate', () => {
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        progressBar.value = Math.floor(audio.currentTime);
    });
    
    // 進度條拖動
    progressBar.addEventListener('input', (e) => {
        audio.currentTime = e.target.value;
    });
    
    // 音訊播放結束
    audio.addEventListener('ended', () => {
        const singleLoop = document.getElementById('single-loop').checked;
        
        if (singleLoop) {
            // 單曲循環
            audio.currentTime = 0;
            audio.play();
        } else {
            // 全部播放：播放下一首
            if (currentTrackIndex < tracks.length - 1) {
                playTrack(currentTrackIndex + 1);
            } else {
                // 播放完畢，回到第一首
                playTrack(0);
            }
        }
    });
    
    // 播放速度控制
    speedButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            speedButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 設定播放速度：慢速 0.75x, 正常 1x, 快速 1.5x
            const speeds = [0.75, 1, 1.5];
            audio.playbackRate = speeds[index];
        });
    });
    
    // 音量控制（靜音/取消靜音）
    volumeBtn.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            volumeBtn.classList.remove('fa-volume-mute');
            volumeBtn.classList.add('fa-volume-up');
        } else {
            audio.muted = true;
            volumeBtn.classList.remove('fa-volume-up');
            volumeBtn.classList.add('fa-volume-mute');
        }
    });
});

// 時間格式化函數（秒數轉為 MM:SS）
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}