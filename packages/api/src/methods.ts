import {PLACE_KITTEN_URL} from './constants';

export async function getKitten(size: {width: number, height: number}) { 
    const kittenImage = await fetch(`${PLACE_KITTEN_URL}${size.width}/${size.height}`).then(res => res.blob());
    return kittenImage;
}

export async function getRandomKitten() {
    const randomHeight = Math.floor(Math.random() * 500) + 1;
    const randomWidth = Math.floor(Math.random() * 500) + 1;
    const kittenImage = await fetch(`${PLACE_KITTEN_URL}${randomWidth}/${randomHeight}`).then(res => res.blob());
    return kittenImage
}