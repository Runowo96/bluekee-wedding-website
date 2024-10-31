import React from 'react'
import './PackageInfo.scss'

function PackageInfo({ruby, sapphire, emerald}) {

  return (
    <div>
      {ruby && (
        <p className="packs-info__para">
              Includes: your choice of two (2) items from the “For The Guests”
              category, two (2) items from the “For The Table” category, and one
              (1) item from the “For The Room” category
            </p>

      )}
      {sapphire && (
        <p className="packs-info__para">
              Includes: your choice of one (1) item from the “For The Guests”
              category and one (1) item from the “For The Table” category
            </p>

      )}
      {emerald && (
        <p className="packs-info__para">
              Includes: your choice of three or more (3+) items from the “For
              The Guests” category, three or more (3+) items from the “For The
              Table” category, and two or more (2+) items from the “For The
              Room” category
            </p>

      )}

    </div>
  )
}

export default PackageInfo
