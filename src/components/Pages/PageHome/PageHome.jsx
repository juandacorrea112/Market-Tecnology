import React from 'react'
import { PagehomeCen } from '../../Ui/PagehomeCen/PagehomeCen'
import { PagehomeUp } from '../../Ui/PagehomeUp/PagehomeUp'
import { Pagehomebottom } from '../../Ui/PagehomeBottom/Pagehomebottom'
import { PagehomeProducts } from '../../Ui/PagehomeProducts/PagehomeProducts'

export const PageHome = () => {
  return (
    <div>
        <PagehomeUp/>
        <PagehomeCen/>
        <Pagehomebottom/>
        <PagehomeProducts/>
    </div>
  )
}
