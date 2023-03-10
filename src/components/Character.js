function Character() {
    return (
        <div data-test="component-character">
             <h1 data-test="char-name">{ props.name }</h1>
             <img src={"props.imgUrl"} data-test="char-img"></img>
             <ul data-test="char-list">
                <li data-test="char-birth">Date of Birth: { props.birth }</li>
                <li data-test="char-death">Date of Death: { props.death }</li>
                <li data-test="char-race">Race: { props.race }</li>
                <li data-test="char-realm">Realm: { props.realm }</li>
                <li data-test="char-spouse">Spouse: { props.realm }</li>
             </ul>
        </div >
   
        )
}

export default Character;