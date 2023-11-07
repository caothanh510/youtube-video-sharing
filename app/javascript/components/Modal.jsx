function Modal() {
  return (
    <>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onclick="document.getElementById('modal').classList.add('active')"
      >
        Open Modal
      </button>

      <div
        id="modal"
        class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 hidden"
      >
        <div class="modal-content bg-white p-6 rounded shadow">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-bold">Modal Title</h2>
            <button
              class="text-gray-700 hover:text-gray-900"
              onclick="document.getElementById('modal').classList.remove('active')"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <p class="text-gray-700">Modal content goes here.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
