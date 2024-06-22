import React from 'react'

const App = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-6 rounded-lg shadow-lg w-80">
        <div class="mb-4">
            <input
                type="text"
                id="display"
                readonly
                class="w-full bg-gray-200 p-3 rounded text-right text-2xl font-digital-7"
            />
        </div>
        <div class="grid grid-cols-4 gap-2">
            <button class="bg-blue-500 text-white p-4 rounded text-xl">7</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">8</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">9</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">/</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">4</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">5</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">6</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">*</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">1</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">2</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">3</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">-</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">0</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">.</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">=</button>
            <button class="bg-blue-500 text-white p-4 rounded text-xl">+</button>
            <button class="bg-red-500 text-white p-4 rounded text-xl col-span-2">C</button>
        </div>
    </div>
  </div>
  )
}

export default App
