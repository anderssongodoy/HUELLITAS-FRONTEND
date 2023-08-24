import toast from 'react-hot-toast';

export const Ayudar = () => {
    const handleAyudar = () => {
        toast.success("¡Gracias por ayudarnos!");
    };

    return (
        <>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Ayudar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            <i className="fas fa-utensils"></i>
                        </div>
                        <p className="ml-4">Comida</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <i className="fas fa-medkit"></i>
                        </div>
                        <p className="ml-4">Medicina</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-center">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                            <i className="fas fa-tshirt"></i>
                        </div>
                        <p className="ml-4">Ropa</p>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-md mx-96 mt-2 rounded-lg flex items-center col-span-2 md:col-span-1">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                        <i className="fas fa-money-bill"></i>
                    </div>
                    <p className="ml-4">Dinero</p>
                </div>
                <div className='flex items-center justify-center'>
                <button
                    className="mt-4 bg-button text-white hover:bg-white hover:text-button py-2 px-4 rounded"
                    onClick={handleAyudar}
                >
                    Ayudar
                </button>
                </div>
            </div>
        </>
    )
}