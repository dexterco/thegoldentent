"use client"
import { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon,UserIcon } from "@heroicons/react/20/solid";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import { RootState } from "@/redux-toolkit/store";
import { signOut } from "@/services/User Firebase/handleAuth";
import { getAuth} from "firebase/auth";
import { clearUser } from "@/features/User/userSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const user = useAppSelector((state: RootState) => state.user);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      // Check if the click is outside the menu and collapse it
      if (selectedMenu && !e.target.closest(".relative")) {
        setSelectedMenu(null);
        setIsCollapsed(true);
      }
    };

    // Add event listener to the document body
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      // Remove the event listener on component unmount
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [selectedMenu]);
   const auth = getAuth()
 

  const handleSignOut= ()=>{
      signOut()
      dispatch(clearUser())
      router.push('/')
  }

  const handleClick = (menu:any) => {
    if (selectedMenu === menu) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menu);
    }
  };

  const renderSubMenuItems = (countries:any) => (
    <div className="py-1">
      {countries.map((country:any, index:any) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <a
              href="#"
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } block px-4 py-2 text-sm`}
            >
              {country}
            </a>
          )}
        </Menu.Item>
      ))}
    </div>
  );

  const menuItems = [
    {
      label: "Middle East",
      countries: [
        "Egypt",
        "Lebanon",
        "Kuwait",
        "Saudi Arabia",
        "Morocco",
        "Tunisia",
        "Jordan",
        "Syria",
        "United Arab Emirates (UAE)",
        "Qatar",
        "Bahrain",
      ],
    },
    {
      label: "International",
      countries: [
        "France",
        "Cyprus",
        "Greece",
        "Italy",
        "Maldives",
        "Portugal",
        "Spain",
        "Turkey",
      ],
    },
  ];

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="flex items-center z-[100] justify-between flex-wrap bg-[#ac476c] p-6 top-0 w-full">
    <div className="flex  flex-shrink-0 text-white ">
      <a href="/">
          <Image
            src="/assets/logowhite.png" // Replace with the path to your logo image
            alt="Logo"
            width={60}
            height={60}
            style={{marginRight:10}}
          />
          </a>
          {/* <span className="font-semibold text-xl tracking-tight ml-2">
            <a href="/">The Golden Tent</a>
          </span> */}
        </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-300 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        <div className="text-sm lg:flex-grow">
        <a href="/suppliers"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
           All Vendors
          </a>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              <Menu
                as="div"
                className="relative inline-block text-left"
              >
                <div>
                  <Menu.Button
                    className="inline-flex w-full justify-center"
                    onClick={() => handleClick(item.label)}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-white hover:text-gray-300"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  show={selectedMenu === item.label}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-0">
                    {item.countries && renderSubMenuItems(item.countries)}
                  </Menu.Items>
                </Transition>
              </Menu>
            </a>
          ))}
          <a href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
           Saloon & Make-up artist
          </a>
        </div>
        <div>
        {user.uid ? (
  // If user is logged in, show user icon and submenu
  // Omitted code for brevity
  <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className="inline-flex items-center"
        >
                  <UserIcon className="h-6 w-6 text-white mr-2" />
                  
                  <span className="text-white">Hi, {user.name}</span>  
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-white hover:text-gray-300"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-25 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-0">
                <Menu.Item>
          {({ active }) => (
            <a
              href="/Profile"
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } block px-4 py-2 text-sm`}
            >
             My Account
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              onClick={handleSignOut}
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } block px-4 py-2 text-sm`}
            >
             Sign out
            </a>
          )}
        </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
) : (
  // If user is not logged in, show regular menu items
  <a
    href="/login"
    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#ac476c] hover:bg-white mt-4 lg:mt-0"
  >
    Sign In
  </a>
)}
        </div>
      </div>
    </nav>
  );
}
