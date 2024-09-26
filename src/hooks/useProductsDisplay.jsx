import { useState, useMemo } from 'react'

const useProductsDisplay = ({ products, limit }) => {
  const [showAll, setShowAll] = useState(false)

  const visibleProducts = useMemo(() => {
    if (showAll) {
      return products
    } else {
      return products.slice(0, limit)
    }
  }, [showAll, products, limit])

  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
  }

  return {
    showAll,
    setShowAll,
    visibleProducts,
    toggleShowAll,
  }
}

export default useProductsDisplay
