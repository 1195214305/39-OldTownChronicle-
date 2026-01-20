import React from 'react'

export default function Modal({ isOpen, onClose, title, children, className = '' }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
      <div className={`bg-white max-w-2xl w-full p-8 shadow-2xl relative border-4 border-neutral-800 ${className}`}>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl hover:text-red-700 transition-colors"
          >
            &times;
          </button>
        )}
        {title && (
          <h2 className="text-3xl font-black mb-6 font-serif text-center border-b-2 border-neutral-800 pb-2">
            {title}
          </h2>
        )}
        <div className="font-serif">
          {children}
        </div>
      </div>
    </div>
  )
}
