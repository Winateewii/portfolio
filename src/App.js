

function App() {
  return (
    <div>
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
      <body class="font-poppins bg-black relative">
        <div id="container" class="p-20 w-auto flex px-24 justify-center relative">

          <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
            <div class="mr-10">
              <img
                class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                src="https://ucarecdn.com/bb2f9100-a0a1-4b6d-b51d-9a1f9e0f331b/29_Wisuda_42.jpg"
                alt="image of myself"
              />
            </div>
            <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 class="text-white font-bold text-3xl mt-6 mb-8">
                Hey it's me, Wisuda Dokchompu
              </h1>

              <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                I'm Wi, 🚀 Welcome to my world , where every line of code is a step towards innovation. 
                Let's embark on this journey together and craft some amazing thing! Happy coding! 💻✨
              </p>

              <div id="social" class="flex flex-wrap justify-start items-center gap-4">
                <a rel="noopener" target="_blank" href="https://github.com/Winateewii" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                  <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
                  <span>Visit my Github</span>
                </a>
                <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/wisuda-dokchompu-1a6390193/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                  <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
                  <span>Follow me on Linkedin</span>
                </a>
              </div>



            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
