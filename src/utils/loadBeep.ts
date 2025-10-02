import gratationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gratationalBeep);
  audio.play();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar audio', error));
  };
}
