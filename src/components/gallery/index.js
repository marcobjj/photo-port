import React from "react";
import PhotoList from '../photolist';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {

    const { name, description } = currentCategory;

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;