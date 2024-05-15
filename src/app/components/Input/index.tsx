import { useFormik } from 'formik';
import { z } from 'zod';

// Define a Zod schema for the form
const searchSchema = z.object({
  searchTerm: z.string().min(1, 'Please enter a search term'),
});

function SearchForm() {
    const formik = useFormik({
        initialValues: {
            searchTerm: '',
        },
        validateOnBlur: true,  // Validate form when an input is blurred
        validationSchema: searchSchema,  // Use the Zod schema for validation
        onSubmit: values => {
            console.log('Searching for:', values.searchTerm);
            // Here you would typically dispatch the search term to an API or state management store
        },
    });

    return (
        <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none mx-2">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full py-4 px-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    {...formik.getFieldProps('searchTerm')}
                />
                {formik.touched.searchTerm && formik.errors.searchTerm ? (
                    <div className="text-red-500 text-xs">{formik.errors.searchTerm}</div>
                ) : null}
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 right-0 mx-2">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
