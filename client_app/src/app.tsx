import React from 'react';
import {getKitten, getRandomKitten} from '@local_package/api';
import { Column } from '@local_package/ui_library';

export const App = () => {
    const [kittenImgURL, setKittenImgURL] = React.useState(undefined);
    const revokeKittenImgURL = (url: string) => URL.revokeObjectURL(url);

    return (
        <Column style={{justifyContent: 'center', alignItems: 'center'}}>
            <h1>Hello from the Client App</h1>
            {!kittenImgURL && (
                <div style={{width: '300px', height: '300px', border: '1px solid black'}}></div>
            )}
            {kittenImgURL && (
                <img src={kittenImgURL} alt="kitten" style={{width: '300px', height: '300px', objectFit: 'contain'}} />
            )}
            <button onClick={async () => {
                const fetchedKittenBlob = await getKitten({height: 200, width: 200})
                const kittenObjectURL = URL.createObjectURL(fetchedKittenBlob);
                if(kittenImgURL) {
                    revokeKittenImgURL(kittenImgURL);
                }
                setKittenImgURL(kittenObjectURL)
            }}>
                Get Square Kitten
            </button>
            <button onClick={async () => {
                const fetchedKittenBlob = await getRandomKitten()
                const kittenObjectURL = URL.createObjectURL(fetchedKittenBlob);
                if(kittenImgURL) {
                    revokeKittenImgURL(kittenImgURL);
                }
                setKittenImgURL(kittenObjectURL)
            }}>
                Get Random Kitten
            </button>
        </Column>
    )
}
