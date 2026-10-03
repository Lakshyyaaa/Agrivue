// High-performance procedural Web Audio synthesizer for ambient countryside sounds
// No external audio files needed - works instantly and offline!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.windNode = null;
    this.cricketInterval = null;
    this.birdInterval = null;
    this.rainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute(timeOfDay = 'day') {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAll();
    } else {
      this.playAmbience(timeOfDay);
      this.playChime(); // Gentle feedback on enabling
    }
    return !this.isMuted;
  }

  setWeatherTheme(timeOfDay) {
    if (!this.isMuted && this.ctx) {
      this.stopAll();
      this.playAmbience(timeOfDay);
    }
  }

  playAmbience(mode = 'day') {
    if (this.isMuted || !this.ctx) return;

    // Gentle wind noise generator
    this.startWind(mode === 'monsoon' ? 0.08 : 0.035);

    if (mode === 'monsoon') {
      this.startRain();
    } else if (mode === 'night') {
      this.startCrickets();
    } else {
      // Day, dawn, or sunset: periodic cheerful countryside birds
      this.startBirds();
    }
  }

  startWind(volume = 0.04) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to make warm, gentle rural breeze
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(volume, this.ctx.currentTime + 2);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    whiteNoise.start();

    this.windNode = { whiteNoise, gain };
  }

  startRain() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = noiseBuffer;
    rainSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1100;
    filter.Q.value = 0.8;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.07, this.ctx.currentTime + 1.5);

    rainSource.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    rainSource.start();

    this.rainNode = { rainSource, gain };
  }

  startBirds() {
    this.stopBirds();
    const triggerBirdChirp = () => {
      if (this.isMuted || !this.ctx) return;
      this.playBirdChirp();
      const nextDelay = 4000 + Math.random() * 6000;
      this.birdInterval = setTimeout(triggerBirdChirp, nextDelay);
    };
    this.birdInterval = setTimeout(triggerBirdChirp, 1200);
  }

  playBirdChirp() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 1800 + Math.random() * 600;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 700, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 400, now + 0.26);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  startCrickets() {
    this.stopCrickets();
    const triggerCricket = () => {
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(4500 + i * 200, now + i * 0.06);

        gain.gain.setValueAtTime(0.001, now + i * 0.06);
        gain.gain.linearRampToValueAtTime(0.015, now + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.06);
      }
      this.cricketInterval = setTimeout(triggerCricket, 1800 + Math.random() * 2000);
    };
    this.cricketInterval = setTimeout(triggerCricket, 800);
  }

  playTempleBell() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Rich Indian Ghanta / Mandir Bell chime with natural harmonics
    const harmonics = [587.33, 1174.66, 1760.0, 2349.32, 3520.0];
    const gains = [0.12, 0.07, 0.04, 0.02, 0.01];

    harmonics.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gains[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5 - idx * 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 3.8);
    });
  }

  playPixelClick() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.04);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      gain.gain.setValueAtTime(0.05, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.7);
    });
  }

  stopBirds() {
    if (this.birdInterval) {
      clearTimeout(this.birdInterval);
      this.birdInterval = null;
    }
  }

  stopCrickets() {
    if (this.cricketInterval) {
      clearTimeout(this.cricketInterval);
      this.cricketInterval = null;
    }
  }

  stopAll() {
    this.stopBirds();
    this.stopCrickets();
    if (this.windNode) {
      try {
        this.windNode.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => this.windNode?.whiteNoise.stop(), 500);
      } catch (e) {}
      this.windNode = null;
    }
    if (this.rainNode) {
      try {
        this.rainNode.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => this.rainNode?.rainSource.stop(), 500);
      } catch (e) {}
      this.rainNode = null;
    }
  }
}

export const soundEngine = new SoundEngine();
