const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white flex flex-col justify-center items-center w-full py-2 text-xs">
            <div className="logo font-semibold text-lg">
                <span className="text-green-500">Ai</span>
                <span>Crop</span>
                <span className="text-green-500">Doctor</span>
            </div>
            <div className="text-center mt-1">
                &copy; {new Date().getFullYear()} All Rights Reserved | Rahul-dev
            </div>
        </footer>
    );
};

export default Footer;