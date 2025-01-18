export default function Footer() {
    return (
        <>
            <footer className="bg-gray-100 p-10 border-t-2 border-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-gray-800">
                    {/* Address Section */}
                    <div>
                        <h2 className="font-bold text-2xl mb-4">Funiro.</h2>
                        <p className="text-sm">
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Links</h4>
                        <ul className="text-sm space-y-2">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Help</h4>
                        <ul className="text-sm space-y-2">
                            <li>Payment Options</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                className="border border-gray-300 rounded-md p-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white font-bold py-2 px-4 rounded-md"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center border-t pt-4">
                    <p className="text-sm text-gray-500">2023 Funiro. All rights reserved</p>
                </div>
            </footer>
        </>
    );
}