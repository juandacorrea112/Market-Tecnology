import React from 'react'
import { PagehomeCen } from '../../Ui/PagehomeCen/PagehomeCen'
import { PagehomeUp } from '../../Ui/PagehomeUp/PagehomeUp'
import { Pagehomebottom } from '../../Ui/PagehomeBottom/Pagehomebottom'

export const PageHome = () => {
  return (
    <div>
        <PagehomeUp/>
        <PagehomeCen/>
        <Pagehomebottom/>
    </div>
  )
}
