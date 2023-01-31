import React from 'react'

export default function MessagePreview() {
  return (
    <div>
        <h3>
            Subject line bla bla bla bla bla bla
        </h3>
        <p>Emily Ekins</p>
        <p>Jan 31, 2022 at 17:22 PM</p>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
        </div>
    </div>
  )
}

