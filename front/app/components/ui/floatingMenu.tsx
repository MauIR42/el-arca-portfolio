"use client"

import { useState, ReactNode, useRef, useEffect } from "react"

export function FloatingMenu({
  trigger,
  children,
}: {
  trigger: ReactNode
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleOutsideClick(event: MouseEvent) {
      const menu = menuRef.current

      if (menu && event.target instanceof Node && !menu.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick, true)
    return () => document.removeEventListener('click', handleOutsideClick, true)
  }, [isOpen])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-label="Toggle user menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(open => !open)}
      >
        {trigger}
      </button>

      {isOpen && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  )
}