import modes from "../data/modesData"
export default function Home(){
    return (
        <div class="flex flex-row justify-center items-center min-h-screen bg-gray-900">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {modes.map((mode) => {
              return (
                <div class="card card-side bg-gray-800 
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.9)]
 transition-shadow duration-[350ms] 
                  border border-gray-700 rounded-2xl overflow-hidden text-white flex flex-row justify-between"
                >
                  <figure class="w-1/3">
                    <img
                      class="h-full w-full object-cover"
                      src={mode.img}
                      alt="image"
                    />
                  </figure>
      
                  <div class="card-body bg-gray-700 px-6 py-5 w-2/3 flex flex-col justify-between">
                    <div>
                      <h2 class="card-title text-xl font-semibold text-orange-400 mb-2">
                        {mode.title}
                      </h2>
                      <p class="text-gray-300">{mode.desc}</p>
                    </div>
      
                    <div class="card-actions mt-4 flex justify-end">
                      <button class="btn border-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition duration-300 shadow-md">
                        Navigate
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
      
}