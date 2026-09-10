// 定義 CD1 曲目資料陣列
const trackCD1 = [
    { id: 1,  title: "CD1 Track 01", src: "audioSF9sb/CD1/1.mp3" },
    { id: 2,  title: "CD1 Track 02", src: "audioSF9sb/CD1/2.mp3" },
    { id: 3,  title: "CD1 Track 03", src: "audioSF9sb/CD1/3.mp3" },
    { id: 4,  title: "CD1 Track 04", src: "audioSF9sb/CD1/4.mp3" },
    { id: 5,  title: "CD1 Track 05", src: "audioSF9sb/CD1/5.mp3" },
    { id: 6,  title: "CD1 Track 06", src: "audioSF9sb/CD1/6.mp3" },
    { id: 7,  title: "CD1 Track 07", src: "audioSF9sb/CD1/7.mp3" },
    { id: 8,  title: "CD1 Track 08", src: "audioSF9sb/CD1/8.mp3" },
    { id: 9,  title: "CD1 Track 09", src: "audioSF9sb/CD1/9.mp3" },
    { id: 10, title: "CD1 Track 10", src: "audioSF9sb/CD1/10.mp3" },
    { id: 11, title: "CD1 Track 11", src: "audioSF9sb/CD1/11.mp3" },
    { id: 12, title: "CD1 Track 12", src: "audioSF9sb/CD1/12.mp3" },
    { id: 13, title: "CD1 Track 13", src: "audioSF9sb/CD1/13.mp3" },
    { id: 14, title: "CD1 Track 14", src: "audioSF9sb/CD1/14.mp3" },
    { id: 15, title: "CD1 Track 15", src: "audioSF9sb/CD1/15.mp3" },
    { id: 16, title: "CD1 Track 16", src: "audioSF9sb/CD1/16.mp3" },
    { id: 17, title: "CD1 Track 17", src: "audioSF9sb/CD1/17.mp3" },
    { id: 18, title: "CD1 Track 18", src: "audioSF9sb/CD1/18.mp3" },
    { id: 19, title: "CD1 Track 19", src: "audioSF9sb/CD1/19.mp3" },
    { id: 20, title: "CD1 Track 20", src: "audioSF9sb/CD1/20.mp3" },
    { id: 21, title: "CD1 Track 21", src: "audioSF9sb/CD1/21.mp3" },
    { id: 22, title: "CD1 Track 22", src: "audioSF9sb/CD1/22.mp3" },
    { id: 23, title: "CD1 Track 23", src: "audioSF9sb/CD1/23.mp3" },
    { id: 24, title: "CD1 Track 24", src: "audioSF9sb/CD1/24.mp3" },
    { id: 25, title: "CD1 Track 25", src: "audioSF9sb/CD1/25.mp3" },
    { id: 26, title: "CD1 Track 26", src: "audioSF9sb/CD1/26.mp3" },
    { id: 27, title: "CD1 Track 27", src: "audioSF9sb/CD1/27.mp3" },
    { id: 28, title: "CD1 Track 28", src: "audioSF9sb/CD1/28.mp3" },
    { id: 29, title: "CD1 Track 29", src: "audioSF9sb/CD1/29.mp3" },
    { id: 30, title: "CD1 Track 30", src: "audioSF9sb/CD1/30.mp3" },
    { id: 31, title: "CD1 Track 31", src: "audioSF9sb/CD1/31.mp3" },
    { id: 32, title: "CD1 Track 32", src: "audioSF9sb/CD1/32.mp3" },
    { id: 33, title: "CD1 Track 33", src: "audioSF9sb/CD1/33.mp3" },
    { id: 34, title: "CD1 Track 34", src: "audioSF9sb/CD1/34.mp3" },
    { id: 35, title: "CD1 Track 35", src: "audioSF9sb/CD1/35.mp3" },
    { id: 36, title: "CD1 Track 36", src: "audioSF9sb/CD1/36.mp3" },
    { id: 37, title: "CD1 Track 37", src: "audioSF9sb/CD1/37.mp3" }
];

// 定義 CD2 曲目資料陣列
const trackCD2 = [
    { id: 1,  title: "CD2 Track 01", src: "audioSF9sb/CD2/1.mp3" },
    { id: 2,  title: "CD2 Track 02", src: "audioSF9sb/CD2/2.mp3" },
    { id: 3,  title: "CD2 Track 03", src: "audioSF9sb/CD2/3.mp3" },
    { id: 4,  title: "CD2 Track 04", src: "audioSF9sb/CD2/4.mp3" },
    { id: 5,  title: "CD2 Track 05", src: "audioSF9sb/CD2/5.mp3" },
    { id: 6,  title: "CD2 Track 06", src: "audioSF9sb/CD2/6.mp3" },
    { id: 7,  title: "CD2 Track 07", src: "audioSF9sb/CD2/7.mp3" },
    { id: 8,  title: "CD2 Track 08", src: "audioSF9sb/CD2/8.mp3" },
    { id: 9,  title: "CD2 Track 09", src: "audioSF9sb/CD2/9.mp3" },
    { id: 10, title: "CD2 Track 10", src: "audioSF9sb/CD2/10.mp3" },
    { id: 11, title: "CD2 Track 11", src: "audioSF9sb/CD2/11.mp3" },
    { id: 12, title: "CD2 Track 12", src: "audioSF9sb/CD2/12.mp3" },
    { id: 13, title: "CD2 Track 13", src: "audioSF9sb/CD2/13.mp3" },
    { id: 14, title: "CD2 Track 14", src: "audioSF9sb/CD2/14.mp3" },
    { id: 15, title: "CD2 Track 15", src: "audioSF9sb/CD2/15.mp3" },
    { id: 16, title: "CD2 Track 16", src: "audioSF9sb/CD2/16.mp3" },
    { id: 17, title: "CD2 Track 17", src: "audioSF9sb/CD2/17.mp3" },
    { id: 18, title: "CD2 Track 18", src: "audioSF9sb/CD2/18.mp3" },
    { id: 19, title: "CD2 Track 19", src: "audioSF9sb/CD2/19.mp3" },
    { id: 20, title: "CD2 Track 20", src: "audioSF9sb/CD2/20.mp3" },
    { id: 21, title: "CD2 Track 21", src: "audioSF9sb/CD2/21.mp3" },
    { id: 22, title: "CD2 Track 22", src: "audioSF9sb/CD2/22.mp3" },
    { id: 23, title: "CD2 Track 23", src: "audioSF9sb/CD2/23.mp3" },
    { id: 24, title: "CD2 Track 24", src: "audioSF9sb/CD2/24.mp3" },
    { id: 25, title: "CD2 Track 25", src: "audioSF9sb/CD2/25.mp3" },
    { id: 26, title: "CD2 Track 26", src: "audioSF9sb/CD2/26.mp3" },
    { id: 27, title: "CD2 Track 27", src: "audioSF9sb/CD2/27.mp3" },
    { id: 28, title: "CD2 Track 28", src: "audioSF9sb/CD2/28.mp3" },
    { id: 29, title: "CD2 Track 29", src: "audioSF9sb/CD2/29.mp3" },
    { id: 30, title: "CD2 Track 30", src: "audioSF9sb/CD2/30.mp3" },
    { id: 31, title: "CD2 Track 31", src: "audioSF9sb/CD2/31.mp3" },
    { id: 32, title: "CD2 Track 32", src: "audioSF9sb/CD2/32.mp3" },
    { id: 33, title: "CD2 Track 33", src: "audioSF9sb/CD2/33.mp3" },
    { id: 34, title: "CD2 Track 34", src: "audioSF9sb/CD2/34.mp3" },
    { id: 35, title: "CD2 Track 35", src: "audioSF9sb/CD2/35.mp3" },
    { id: 36, title: "CD2 Track 36", src: "audioSF9sb/CD2/36.mp3" },
    { id: 37, title: "CD2 Track 37", src: "audioSF9sb/CD2/37.mp3" },
    { id: 38, title: "CD2 Track 38", src: "audioSF9sb/CD2/38.mp3" }
];

// 狀態管理
const audio = new Audio();
let currentTrackIndex = -1;
let currentTracks = trackCD1; // 目前使用的曲目陣列

/* exported switchTab */
// 切換 CD 分頁（由 HTML onclick 呼叫）
function switchTab(cd) {
    // 停止播放並重置
    audio.pause();
    audio.src = "";
    currentTrackIndex = -1;

    // 更新目前曲目陣列
    currentTracks = (cd === 1) ? trackCD1 : trackCD2;

    // 更新 Tab 樣式
    document.getElementById("tab-cd1").classList.toggle("active", cd === 1);
    document.getElementById("tab-cd2").classList.toggle("active", cd === 2);

    // 重設播放按鈕
    const playBtn = document.querySelector(".play-btn");
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");

    // 重設時間顯示
    document.querySelector(".current-time").textContent = "0:00";
    document.querySelector(".duration").textContent = "0:00";
    const progressBar = document.querySelector(".progress-bar");
    progressBar.value = 0;
    progressBar.max = 100;

    // 重新產生曲目列表
    generateTrackList(currentTracks);
}

// 動態產生曲目列表
function generateTrackList(tracksArray) {
    const trackListContainer = document.getElementById("track-list");
    trackListContainer.innerHTML = "";

    tracksArray.forEach((track, index) => {
        const li = document.createElement("li");
        li.className = "track-item";
        li.dataset.trackId = track.id;
        li.dataset.index = index;
        li.innerHTML = `
            <div class="track-icon"><i class="fas fa-music"></i></div>
            <div class="track-title">${track.title}</div>
            <div class="track-play-btn"><i class="fas fa-play"></i></div>
        `;
        li.addEventListener("click", () => {
            playTrack(index);
        });
        trackListContainer.appendChild(li);
    });
}

// 播放指定曲目
function playTrack(index) {
    if (index < 0 || index >= currentTracks.length) { return; }
    currentTrackIndex = index;
    const track = currentTracks[index];

    audio.src = track.src;
    audio.load();
    audio.play();

    updatePlayingUI(index);
}

// 更新播放中的 UI
function updatePlayingUI(index) {
    const trackItems = document.querySelectorAll(".track-item");
    const playBtn = document.querySelector(".play-btn");

    // 清除所有 playing 狀態
    trackItems.forEach(item => {
        item.classList.remove("playing");
        const icon = item.querySelector(".track-play-btn i");
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    });

    // 設定目前播放項目
    if (index >= 0 && index < trackItems.length) {
        const currentItem = trackItems[index];
        currentItem.classList.add("playing");
        const icon = currentItem.querySelector(".track-play-btn i");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }

    // 更新主播放按鈕
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

// 頁面載入後執行
document.addEventListener("DOMContentLoaded", function () {
    generateTrackList(currentTracks);

    const playBtn = document.querySelector(".play-btn");
    const progressBar = document.querySelector(".progress-bar");
    const currentTimeSpan = document.querySelector(".current-time");
    const durationSpan = document.querySelector(".duration");
    const speedButtons = document.querySelectorAll(".speed-btn");
    const volumeBtn = document.querySelector(".volume-btn");

    // 主播放 / 暫停按鈕
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            if (currentTrackIndex === -1) {
                playTrack(0);
            } else {
                audio.play();
                playBtn.classList.remove("fa-play");
                playBtn.classList.add("fa-pause");
            }
        } else {
            audio.pause();
            playBtn.classList.remove("fa-pause");
            playBtn.classList.add("fa-play");
        }
    });

    // 載入完成後更新總時長
    audio.addEventListener("loadedmetadata", () => {
        durationSpan.textContent = formatTime(audio.duration);
        progressBar.max = Math.floor(audio.duration);
    });

    // 播放時更新進度
    audio.addEventListener("timeupdate", () => {
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        progressBar.value = Math.floor(audio.currentTime);
    });

    // 進度條拖動
    progressBar.addEventListener("input", (e) => {
        audio.currentTime = e.target.value;
    });

    // 播放結束處理
    audio.addEventListener("ended", () => {
        const singleLoop = document.getElementById("single-loop").checked;

        if (singleLoop) {
            audio.currentTime = 0;
            audio.play();
        } else {
            if (currentTrackIndex < currentTracks.length - 1) {
                playTrack(currentTrackIndex + 1);
            } else {
                playTrack(0);
            }
        }
    });

    // 播放速度控制
    speedButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            speedButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const speeds = [0.75, 1, 1.5];
            audio.playbackRate = speeds[index];
        });
    });

    // 音量靜音切換
    volumeBtn.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            volumeBtn.classList.remove("fa-volume-mute");
            volumeBtn.classList.add("fa-volume-up");
        } else {
            audio.muted = true;
            volumeBtn.classList.remove("fa-volume-up");
            volumeBtn.classList.add("fa-volume-mute");
        }
    });
});

// 時間格式化（秒 → M:SS）
function formatTime(seconds) {
    if (isNaN(seconds)) { return "0:00"; }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}
