

function App() {
  return (
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Wiwi</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">About Me</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Project</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        </div>
      </nav>
    </header>

  );
}

export default App;
