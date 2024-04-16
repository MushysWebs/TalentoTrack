import React, { useEffect, useState } from 'react';
import Layout from "../app/layoutAdmin";
import { getSession } from 'next-auth/react';
import ChangeSalary from '@/app/components/ChangeSalary';
import ChangeRole from '@/app/components/ChangeRole';

const Admin = () => {
  // Define state to hold the user session information
  const [session, setSession] = useState(null);

  // Fetch the user session when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch the user session
    const fetchData = async () => {
      // Call the getSession function to get the user session
      const userSession = await getSession();
      // Set the user session in the component state
      setSession(userSession);
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // If the user session is not available, render a message prompting the user to log in
  if (!session) {
    return (
      // Render the layout component and center the message vertically and horizontally on the screen
      <Layout>
        <div className="flex items-center justify-center h-screen">
        <div className="border-solid bg-gray-300 p-5 rounded-xl text-center shadow-lg'">
            {/* Display the message to prompt the user to log in */}
            <p className="text-lg font-semibold mb-2">You currently don't have access to this page, Please log in to gain access.</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Approved emails that can access the admin page
  const approvedEmails = ["lam.alexander@hotmail.com", "gradyspurrill@gmail.com", "", ""];

  // Check if the user's email is in the list of approved emails
  if (!approvedEmails.includes(session.user.email)) {
    // If not approved, render access denied message
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="border-solid bg-gray-300 p-5 rounded-xl text-center shadow-lg">
            <p className="text-lg font-semibold mb-2 text-red-500 ">You don't have sufficent permission please contact your administrator to acess this page.</p>
          </div>
        </div>
      </Layout>
    );
  }


  // If the user session is available, render the main content of the admin page
  return (
    <Layout>
      <main className="flex flex-col justify-between p-24 min-h-screen">
        <section className="flex-1">
          <h1 className="text-5xl font-bold text-center mb-7">Welcome to Employee Management</h1>
          
          <p className="text-center font-bold">Budget Cuts Are Coming!</p>
          <p className="text-center">We know your just as excited about this as we are.</p>
        </section>

        <img src="user-icon-symbol-sign-vector-4137250163.jpg" width="200x" alt="Movie Hub" className="mx-auto mb-5 rounded-full mt-6" />

        <h1 className='text-xl font-bold text-center' >Welcome {session.user.name}</h1>
        <p className="text-center">Manage Your Employees below</p>

        
        <section className="grid grid-cols-4 gap-4 mt-4">
          
          <div className="p-5 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Lucas Miller</h2>
            <p className='text-xs' id='role'>Legal Counsel</p>
            <img src="pictures/0o1a2787-813_SB_PM-1904783482.jpg" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit stuff */}

              <p>The salary of this employee is $<span id='salary'>40000</span></p>

              <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
              <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
              <ChangeSalary/>
              <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
              <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
              <ChangeRole/>
              <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
              <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
              <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
              </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Ava Garcia</h2>
            <p className='text-xs' id='role'>Procurement Officer</p>
            <img src="pictures/0o1a2787-813_dfxgvbfdvSB_PM-1904783482.jpg" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14 " />
            <div> {/* this is where we put the employee edit stuff */}

            <p>The salary of this employee is $<span id='salary'>27000</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Mason Taylor</h2>
            <p className='text-xs' id='role'>Executive Assistant</p>
            <img src="pictures/iStock_000019535606_Large-1634524114.jpg"  width="180px" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>40000</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Olivia Brown</h2>
            <p className='text-xs' id='role'>Receptionist</p>
            <img src="pictures/0o1a2787-813_SB_PM-19047813482.jpg" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>40000</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-5 rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Noah White</h2>
            <p className='text-xs' id='role'>Office Manager</p>
            <img src="pictures/office-worker-3-3183730954.jpg" width="180px" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>140000</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Sophia Anderson</h2>
            <p className='text-xs'id='role'>Janitor</p>
            <img src="pictures/Professional-Woman-248600703.jpg" width="190px" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>10040000</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Ethan Thompson</h2>
            <p className='text-xs' id='role'>Office Clerk</p>
            <img src="pictures/white-collar-worker-job-office-businessperson-employment-sitting-desk-interior-design-business-learning-1557987-2204488740.jpg" width="180" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>4</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
          <div className="p-4 shadow rounded hover:shadow-2xl">
            <h2 className="text-m font-semibold">Maya Ligma</h2>
            <p className='text-xs' id='role'>Administrative Assistant</p>
            <img src="pictures/business-woman-smiling-front-corporate-team-together-looking-camera-office-company-multiethnic-people-standing-134234838-3819296572.jpg" alt="Movie Hub" className="mx-auto mb-5 rounded-md mt-14" width='170 px' />
            <div> {/* this is where we put the employee edit crap */}

            <p>The salary of this employee is $<span id='salary'>6900</span></p>

            <p className='text-2xl italic text-center mt-4 mb-4'>Head Office Input:</p>
            <p id='companywarning' className='text-center'>Employee's salary is too high!</p>
            <ChangeSalary/>
            <input id="input" type="number" placeholder="Enter New Salary Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="salarychange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Salary</button>
            <ChangeRole/>
            <input id="input1" type="text" placeholder="Enter Compnay Role Here" class="bg-gray-200 focus:bg-white border-2 border-black rounded-md mt-2 ml-12 mb-2"/>
            <button id="rolechange"  class="bg-blue-700 rounded-md hover:bg-blue-800 ml-20 text-white font-medium tracking-tighter transition duration-200 ease-in-out scale-100 md:w-[10rem]">Update Role</button>
            <div className='flex row-auto space-x-2 content-center mt-3 ml-20'>
            </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Admin;
