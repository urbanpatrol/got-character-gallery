import characters from "../data/characterData.json";
import Character from "./Character";

function CharacterGallery() {
    return (
        <div data-test="component-char-gallery">
            <h1 data-test="gallery-header">Here are your GOT stars</h1>
            <p>Enjoy these photos</p>
        {characters.map(c => {
            return <Character key={c._id} {...c} />
        })}
        </div>
    )
}

export default CharacterGallery;