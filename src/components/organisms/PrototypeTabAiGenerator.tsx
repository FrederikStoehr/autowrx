// Copyright (c) 2025 Eclipse Foundation.
// 
// This program and the accompanying materials are made available under the
// terms of the MIT License which is available at
// https://opensource.org/licenses/MIT.
//
// SPDX-License-Identifier: MIT

import { FC, useState, useRef, useEffect } from 'react'
import DaAiGenerator from '../molecules/dashboard/DaAiGenerator'
import { cn } from '@/lib/utils'
import { useSystemUI } from '@/hooks/useSystemUI'
import { useParams } from 'react-router-dom'

const PrototypeTabAiGenerator: FC = ({}) => {
  const { showPrototypeDashboardFullScreen } = useSystemUI()
  const { tab } = useParams()
  const componentMounted = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  // Handle visibility of the component
  useEffect(() => {
    // Set visibility based on the current tab
    setIsVisible(tab === 'aiGenerator')
    
    // Mark as mounted on first render
    if (!componentMounted.current) {
      componentMounted.current = true
    }
  }, [tab])

  return (
    <div
      className={cn(
        'w-full h-full relative border bg-white',
        showPrototypeDashboardFullScreen &&
          'fixed top-0 left-0 w-screen h-screen',
      )}
    >
      {/* The DaAiGenerator component will be mounted once and kept in the DOM */}
      <DaAiGenerator isVisible={isVisible} />
    </div>
  )
}

export default PrototypeTabAiGenerator
