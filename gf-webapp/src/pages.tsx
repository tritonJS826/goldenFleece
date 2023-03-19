import {MainPage} from "src/logic/mainPage/MainPage";
import {AboutUsPage} from "src/logic/aboutUsPage/AboutUsPage";
import {RoomsPage} from "src/logic/rooms/roomsPage/RoomsPage";
import {RoomPage} from "src/logic/rooms/roomPage/RoomPage";
import {ContactsPage} from "src/logic/contactsPage/ContactsPage";
import {BookingPage} from "src/logic/bookingPage/BookingPage";

/**
 * Pages meta data
 */
export const pages = {
  main: {
    path: "/",
    element: <MainPage />,
  },
  aboutUs: {
    path: "/about",
    element: <AboutUsPage />,
  },
  rooms: {
    path: "/rooms",
    element: <RoomsPage />,
  },
  room: {
    /**
     * @param {string} id Could be param name (if we want to create new path) OR could be room id.
     * @returns {string} path to react-router OR Specific URl path to specific room
     */
    path: (id: string) => `/rooms/${id}`,
    element: <RoomPage />,
  },
  booking: {
    path: "/booking",
    element: <BookingPage />,
  },
  contacts: {
    path: "/contacts",
    element: <ContactsPage />,
  },
};
