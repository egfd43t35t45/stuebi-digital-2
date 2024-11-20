import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col text-white">
      <header className="bg-black bg-opacity-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Schülerfirma Logo"
              width={60}
              height={60}
              className="mr-3 rounded-full border-2 border-white"
            />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              SchülerPower
            </h1>
          </div>
          <nav>
            <div className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link
                href="#"
                className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
              >
                Über uns
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Willkommen bei SchülerPower
            </h2>
            <p className="mt-2 text-xl">
              Wir rocken die Geschäftswelt mit frischen Ideen und jugendlicher
              Energie!
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black bg-opacity-20 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Kontakt</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  info@schuelerpower.de
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  +49 123 456789
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Coolstr. 42, 12345 Hipstadt
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="text-2xl font-bold mb-3">Folge uns</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-transform duration-300 ease-in-out hover:scale-120"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-transform duration-300 ease-in-out hover:scale-120"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition-transform duration-300 ease-in-out hover:scale-120"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
