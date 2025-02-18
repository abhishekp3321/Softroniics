import React from 'react'
export const Inovice = () => {
    return (

        <div className='m-10'>
            {/* Invoice Header */}
            <div className='bg-black  p-3 text-white flex justify-between items-center relative'>
                <div className='absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold'>TAX INVOICE</div>
                <div className='ml-auto flex flex-col text-right'>
                    <div>Invoice No: 1234</div>
                    <div>Date: 12/12/2021</div>
                </div>

            </div>


            <div className='bg-white border border-black border-r-2   border-l-2   text-center'>
                <h1 className='text-4xl font-bold'>BUSINESS NAME</h1>
                <p className='bg-white   text-black text-sm  text-center'>
                    132 Street City,State,PIN
                </p>
                <p className='bg-white   text-black text-sm  text-center'>
                    GSTIN AAA213465</p>
                <p className='bg-white   text-black text-sm  text-center'>
                    Email ID:122@Gmail.com</p>
                <p className='bg-white   text-black text-sm  text-center'>
                    PAN NO:213454521</p>
            </div>
            <div className='bg-white border border-black  border-l-2  border-r-2  grid grid-cols-2 '>
                <div className='flex flex-col border-r-2  border-black text-left'>
                    <h1 className='font-bold'>BILL To:</h1>
                    <p className='text-sm'>PARTY'S NAME:</p>
                    <p className='text-sm'>ADDRESS</p>
                    <p className='text-sm'>132 Street, City, State, PIN</p>
                    <p className='text-sm'>Email ID: 122@gmail.com</p>
                    <p className='text-sm'>GSTIN: AAA213465</p>
                </div>

                <div className='flex flex-col  my-10  text-left'>
                    <p className='text-sm'>Payment Due Date</p>
                    <p className='text-sm'>Paymet Mode</p>

                </div>

            </div>


            <div className="grid grid-cols-2  h-64 ">
                <div className='border border-black border-r-2 border-l-2  '>
                    {/* First Column: Description */}
                    <p className='text-sm font-sm border-b-2 border-black'>Description</p>
                </div>

                {/* Second Column: Amounts in a grid */}
                <div className='border border-black border-l-0 grid grid-cols-4 '>
                    <div className='text-sm border-black border-r-2 font-sm '>
                        <p className='border-black border-b-2'>HSN Code
                        </p>
                    </div>
                    <div className='text-sm border-black border-r-2 flex flex-col justify-between '>
                        <div className='text-sm border-black border-b-2 font-sm '>

                            <p className=''>Qty</p>
                        </div>
                        <p className='border-black border-t-2'>Unit</p>
                    </div>

                    <div className='text-sm border-black border-r-2 flex flex-col justify-between '>
                        <div className='text-sm border-black border-b-2 font-sm '>

                            <p className=''>Qty</p>
                        </div>
                        <div className='border-black border-t-2'>
                            <span className='invisible'>Total</span>
                        </div>

                    </div>
                    <div className='text-sm border-black border-r-2 flex flex-col justify-between '>
                        <div className='text-sm border-black border-b-2 font-sm '>

                            <p className=''>Qty</p>
                        </div>                        <div className='border-black border-t-2'>
                            <span className='invisible'>Total</span>
                        </div>

                    </div>                 
                       </div>
            </div>


            <div className='bg-white border border-black border-x-2 grid grid-cols-2 '>
                <div className=' border-r-2  border-black text-left'>
                    <h1 className='font-bold'>Terms & Conditions</h1>
                    <p className='text-sm'>1</p>
                    <p className='text-sm'>2</p>
                    <p className='text-sm'>3</p>
                    <p className='text-sm'>4</p>
                    <p className='text-sm'>5</p>
                </div>

                <div className=''>
                    <p className='text-sm font-bold'>Add:CGST @ 14%</p>
                    <p className='text-sm font-bold'>Add:SCST @ 14%</p>
                    <p className='text-sm font-bold'>Balance Received</p>
                    <p className='text-sm font-bold'>Balance Due</p>
                    <p className='text-sm bg-black py-2 text-white'>Grand Total</p>


                </div>

            </div>
            <div className=' border border-black border-r-2 border-l-2  '>
                <p className='text-underline py-3'>Total Amount:(In words) </p>
            </div>

            <div className=' border  border-black border-r-2 border-l-2 border-b-2 '>
                <div className='flex-col  justify-between'>
                    <p className='underline py-24'>For:Business Name </p>
                    <p className='underline '>Authorised Signatory </p>
                </div>
            </div>

        </div>
    )
}