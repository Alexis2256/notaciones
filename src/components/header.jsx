import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="group h-28 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  Maestro
                </h3>
              </div>
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] p-4">
                <p className="text-center font-bold">
                  Luis Gilberto Tec Cetz
                </p>
              </div>
            </div>
          </div>

          
          <div className="group h-28 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  Equipo
                </h3>
              </div>
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] p-4">
                <div className="text-center text-sm font-bold">
                    <ul>
                        <li >Alexis Julian Balam Balam
                        </li>
                        <li >Alexis Julian Balam Balam
                        </li>
                        <li>Alexis Julian Balam Balam
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

        
          <div className="group h-28 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  Materia
                </h3>
              </div>
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] p-4">
                <p className="text-center text-sm font-bold">
                  Lenguajes y Autómatas
                </p>
              </div>
            </div>
          </div>

          
          <div className="group h-28 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              <div className="absolute inset-0 h-full w-full rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden]">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  Tarea
                </h3>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-orange-500 to-red-500 backdrop-blur-sm flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] p-4">
                <p className="text-center text-sm font-bold">
                  Unidad 2 - Notaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
