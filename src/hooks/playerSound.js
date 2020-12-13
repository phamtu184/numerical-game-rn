import {useEffect,useState} from 'react'
import { Audio } from 'expo-av';
import fail from '../../assets/score.wav'

export default function Sound() {
  const [sound, setSound] = useState();
  async function playFailSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/fail.mp3')
    );
    setSound(sound);
    await sound.playAsync(); 
  }
  async function playScoreSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/score.wav')
    );
    setSound(sound);
    await sound.playAsync(); 
  }
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return {playFailSound, playScoreSound};
}