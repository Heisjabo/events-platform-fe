

const LoginForm = () => {

    return (
        <form className="flex flex-col items-center gap-4 py-[15%]">
            <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-slate-400"
            />
            <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-900 focus:outline-none focus:ring focus:border-slate-400">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
