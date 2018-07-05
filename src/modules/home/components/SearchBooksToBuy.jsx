import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBooksToBuyContainer = () => {
  return (
    <div>
      <Input
        icon={{ name: 'search', circular: true, link: true }}
        placeholder='Search...'
      />
    </div>
  )
}

export const SearchBooksToBuy = SearchBooksToBuyContainer
