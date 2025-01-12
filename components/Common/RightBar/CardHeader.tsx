import React from 'react'

export const CardHeader = ({header}: {header: string}) => {
  return (
    <h1 className="text-xl font-bold text-textGrayLight px-4 py-2">
      {header}
    </h1>  
)
}
