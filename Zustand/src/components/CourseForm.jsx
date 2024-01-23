import { useState } from 'react'
import useCourseStore from '../app/courseStore'
import toast, { Toaster } from 'react-hot-toast';



const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse)

    const addPrice = useCourseStore((state) => state.addPrice)

    const [courseTitle, setCourseTitle] = useState("");
    const [price, setPrice] = useState("");

    const handleCourseSubmit = () => {
        if (!courseTitle) {
            toast.error("Please add course title !");
            return;
        }

        if (!price) {
            toast.error("Please add price !");
            return;
        }

        try {
            const courseId = Math.ceil(Math.random() * 1000000);

            const course = {
                id: courseId,
                title: courseTitle,
            };

            addCourse(course);

            // Use the courseId when calling addPrice
            addPrice(courseId, price);

            toast.success("Course added successfully !");
            setCourseTitle("");
            setPrice("");
        } catch (error) {
            toast.error("An error occurred while adding the course: " + error.message);
        }
    };

    return (
        <div className="w-72 gap-6 flex">
            <Toaster position='bottom-center' />
            <div className="relative mt-5 w-full min-w-[200px] h-10">
                <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    value={courseTitle}
                    onChange={(e) => {
                        setCourseTitle(e.target.value)
                    }}
                /><label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Course Name
                </label>
            </div>
            <div className="relative mt-5 w-full min-w-[200px] h-10">
                <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                /><label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Price
                </label>
            </div>
            <div className=''>
                <button onClick={() => { handleCourseSubmit(); }} className='border-solid border-spacing-1 mt-5 bg-blue-700 text-white p-2 rounded-full w-40  border-black'>Add</button>
            </div>
        </div>
    )
}

export default CourseForm