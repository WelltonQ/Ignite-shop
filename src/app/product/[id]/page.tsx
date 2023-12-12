"use client"

import { useParams } from 'next/navigation'
import React from 'react'


export default function ProductDetail() {
  const id = useParams()

  return (
    <div>
      product: {JSON.stringify(id)}
    </div>
  )
}
