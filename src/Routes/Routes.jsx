import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Books from '../Pages/Books/Books';
import ErrorHandle from '../Components/ErrorHandle/ErrorHandle';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/books',
                Component: Books
            },
            {
                path: '/details/:id',
                Component: BookDetails,
                loader: () => fetch('/booksData.json')
            }
        ],
        errorElement: <ErrorHandle></ErrorHandle>
    }
]);