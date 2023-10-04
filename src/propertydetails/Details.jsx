import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import FormInput from '../login/form/FormInput';
import  {Alert} from "@material-tailwind/react"
import { Spinner } from "@material-tailwind/react";


export function CustomSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div role="status" className="flex items-center">
      <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
        <p className="text-white">sending...</p>
      </div>
    </div>
  );
}



function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-[#2ec946]"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.647 9.647a.5.5 0 0 0-.707 0L10 15.293l-2.94-2.94a.5.5 0 1 0-.707.707l3.5 3.5a.5.5 0 0 0 .707 0l7-7a.5.5 0 0 0 0-.707z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}



const Details = () => {
  const { slug } = useParams();
  const propertyDetails = useContext(AppContext);
  const selectedItem = propertyDetails[0].properties.find((item) => item.slug === slug);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [formData, setFormData] = useState({
    property: selectedItem.id,
    date: "",
    time: "",
    full_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    error: null,
    success: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormStatus({ error: null, success: null });
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData)

    try {
      const response = await fetch("https://kulproperties-73b1dd21a039.herokuapp.com/api/book-appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok) {
        setFormStatus({ success: resData.user_email.message, error: null });
      } else {
        if (response.status === 400) {
          setFormStatus({ error: `${resData.error}` });
        }
      }
    } catch (error) {
      console.log("Error submitting form", error);
    } finally {
        setFormData({
        property: selectedItem.id,
        date: "",
        time: "",
        full_name: "",
        phone_number: "",
        email: "",
        message: "",
      });
      setLoading(false);

      // setTimeout(() => {
      //   setFormStatus({ error: null, success: null });
      // }, 2000);
    }
  };
    

  return (
    <div className="w-full h-[265vh] text-primary lg:h-[140vh] flex bg-other text-sm">
    <div className="flex flex-col lg:flex-row lg:max-w-6xl w-full h-[100%] m-auto mt-2 rounded p-2 justify-between items-center">
    <div className="flex flex-col w-full lg:w-[63%] h-full justify-between p-1 ">
       {selectedItem.category =='commercial' ?
        <div className="flex flex-col bg-white rounded w-[95%] mx-auto h-full">
            <section className="flex flex-col p-2 border-b">
            <div className="flex  w-[100%] flex-col lg:flex-row  justify-between text-lg lg:text-3xl font-normal p-1">
            
                    <span className='text-lg' >{selectedItem.title}</span>
            

                <span className='lg:m-0.5 lg:p-2 text-lg'>${selectedItem.price}</span>

            </div>
            <div className="flex w-[100%] items-center p-1">
            <span className='lg:m-0.5 lg:p-2'>Location: {selectedItem.location}</span>
            </div>
            </section>
            <section className='flex flex-col p-2 h-[50%] lg:h-[30%] border-b'>

                <div className="flex lg:hidden flex-col  p-2">
                    <div className="flex ">
                    </div>
                   
                    <div className="flex ">
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.area}sq ft</span>
                        </div>
                        
                       
                </div>
                <div className="hidden lg:flex   p-2">
                    
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.area}sq ft</span>
                     
                        
                       
                </div>

                <div className='flex flex-col p-2 h-[100%] bg-white z-20 overflow-hidden'>
                    <span className='text-lg my-4'>Description</span>
                    <p className='text-sm '>{selectedItem.description}</p>
                </div>

            </section>
            <section className='flex flex-col w-full h-[20%] p-2 border-b'>
                <span className='text-lg m-1 my-2'>Property Details</span>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                <span className='flex'>Property Type: <span className='font-medium mx-1'>{selectedItem.property_type}</span></span>
                <span className='flex'>Property Price: <span className='font-medium mx-1'>$ {selectedItem.price}</span></span>
                <span className='flex'>Property Size: <span className='font-medium mx-1'>{selectedItem.area} Sq ft</span></span>
                <span className='flex'>Property Status: <span className='font-medium mx-1'>{selectedItem.status}</span></span>
                </div>
            </section>
            <section className='flex flex-col w-full h-[20%] p-2 border-b'>
                <span className='text-lg m-1 my-2'>Amenities</span>
                <div className="grid lg:grid-cols-4 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                {selectedItem.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex text-primary/50 items-center text-sm"
                    >
                      <input
                        className="w-5 h-5 mx-2 bg-primary"
                        type="checkbox"
                        checked
                      />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
            </section>
            <section className='flex flex-col w-full h-[20%] p-2'>
                <span className='text-lg m-1 my-2'>Features</span>
                <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                {selectedItem.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex text-primary/50 items-center text-sm"
                    >
                      <input
                        className="w-5 h-5 mx-2"
                        type="checkbox"
                      />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
            </section>

        </div>
        :
        <div className="flex flex-col bg-white rounded w-[95%] mx-auto h-full">
        <section className="flex flex-col p-2 border-b">
        <div className="flex  w-[100%] flex-col lg:flex-row  justify-between text-base lg:text-3xl font-normal p-1">
        
                <span className='text-lg'>{selectedItem.title}</span>
        

            <span className='lg:m-0.5 lg:p-2 text-lg'>KES: {selectedItem.unit.price}</span>

        </div>
        <div className="flex w-[100%] items-center p-1">
        <span className='lg:m-0.5 lg:p-2'>Location: {selectedItem.location}</span>
        </div>
        </section>
        <section className='flex flex-col p-2 h-[50%] lg:h-[30%] border-b'>

            <div className="flex lg:hidden flex-col  p-2">
                <div className="flex ">
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                </div>
               
                <div className="flex ">
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                    </div>
                    
                   
            </div>
            <div className="hidden lg:flex   p-2">
                
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                 
                    
                   
            </div>

            <div className='flex flex-col p-2 h-[100%] bg-white z-20 overflow-hidden'>
                <span className='text-lg my-4'>Description</span>
                <p className='text-sm '>{selectedItem.description}</p>
            </div>

        </section>
        <section className='flex flex-col w-full h-[20%] p-2 border-b'>
            <span className='text-lg m-1 my-2'>Property Details</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            <span className='flex'>Property Type: <span className='font-medium mx-1'>{selectedItem.property_type}</span></span>
            <span className='flex'>Property Price: <span className='font-medium mx-1'>$ {selectedItem.unit.price}</span></span>
            <span className='flex'>Property Size: <span className='font-medium mx-1'>{selectedItem.unit.area} Sq ft</span></span>
            <span className='flex'>No.of Bedrooms: <span className='font-medium mx-1'> {selectedItem.unit.bedrooms}</span></span>
            <span className='flex'>No.of Bathrooms:<span className='font-medium mx-1'>{selectedItem.unit.bathrooms}</span></span>
            <span className='flex'>Property Status: <span className='font-medium mx-1'>{selectedItem.status}</span></span>
            </div>
        </section>
        <section className='flex flex-col w-full h-[20%] p-2 border-b'>
            <span className='text-lg m-1 my-2'>Amenities</span>
            <div className="grid lg:grid-cols-4 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            {selectedItem.amenities.map((item) => (
                <div
                  key={item}
                  className="flex text-primary/50 items-center text-sm"
                >
                  <input
                    className="w-5 h-5 mx-2 bg-primary"
                    type="checkbox"
                    checked
                  />
                  <label htmlFor="">{item}</label>
                </div>
              ))}
            </div>
        </section>
        <section className='flex flex-col w-full h-[20%] p-2'>
            <span className='text-lg m-1 my-2'>Features</span>
            <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            {selectedItem.amenities.map((item) => (
                <div
                  key={item}
                  className="flex text-primary/50 items-center text-sm"
                >
                  <input
                    className="w-5 h-5 mx-2"
                    type="checkbox"
                  />
                  <label htmlFor="">{item}</label>
                </div>
              ))}
            </div>
        </section>

    </div>
    }
    </div>
    <div className="flex flex-col w-full lg:w-[35%] h-full  p-1 ">
        <div className="flex flex-col bg-white rounded w-[95%] h-[55%] md:h-[45%] mx-auto">
            <span className='text-primary text-xl m-2 p-2'>Schedule Appointment</span>
            <div className="text-center mb-4">
          {formStatus.error && (
            <Alert
              icon={<ErrorIcon />}
              className="rounded-none border-l-4 border-red-500 bg-red-100 font-medium text-red-500"
            >
              {formStatus.error}
            </Alert>
          )}
          {formStatus.success && (
            <Alert
              icon={<SuccessIcon />}
              className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
            >
              {formStatus.success}
            </Alert>
          )}
        </div>

        <form className='flex flex-col p-2' onSubmit={handleSubmit}>
            <input className='border p-2 rounded mx-auto w-[95%] my-2' type="date" name="date" onChange={handleChange} value={formData.date} required  />
            <input className='border p-2 rounded mx-auto my-2 w-[95%]' type="time" name="time" id="" placeholder='Time' onChange={handleChange} value={formData.time} />
            <input className='border p-2 rounded m-2' type="text" name="full_name" placeholder='Full Name'  onChange={handleChange} value={formData.full_name}/>
            <input className='border p-2 rounded m-2' type="number" name="phone_number" placeholder='Phone Number' onChange={handleChange} value={formData.phone_number} required />
            <input className='border p-2 rounded m-2' type="email" name="email" id="" placeholder='Email Address' onChange={handleChange} value={formData.email} required/>
            <textarea className='border rounded p-1 text-sm m-2' name="message" id="" cols="30" rows="5" placeholder='Message' onChange={handleChange} value={formData.message}></textarea>
            <button type='submit' className='p-3 bg-primary rounded m-2' disabled={loading}>
            {loading ? <CustomSpinner/> : <span className='text-white'>Submit</span>}
          </button>
        </form>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Details