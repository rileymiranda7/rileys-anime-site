import React from 'react'
import Image from 'next/image'

function AnimeListItem() {
  return (
    <div>
      <h1>AnimeListItem</h1>
      <Image
        src="https://cdn.myanimelist.net/images/anime/1170/124312.jpg"
        width={225}
        height={318}
        alt="Anime title image"
      />
    </div>
  )
}

export default AnimeListItem