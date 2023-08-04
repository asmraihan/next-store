"use client"

import { Button } from '@/components/ui/button'
import { Color, Size } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import Filter from './filter'
import { Fragment } from "react";
interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false)
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filters <Plus size={20} />
            </Button>
            <Transition show={open} appear as={Fragment}>
                <Dialog open={open} as='div' className="relative z-40 lg:hidden" onClose={onClose}>
                    {/* background */}
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                    {/* dialoge position */}
                    <div className='fixed inset-0 z-40 flex '>
                        <Transition.Child as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                                {/* close button */}
                                <div className='flex items-center justify-end px-4'>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={onClose}
                                    > <X size={15} /> </Button>
                                </div>
                                {/* filters */}
                                <div className='p-4 '>
                                    <Filter
                                        valueKey="sizeId"
                                        name="Sizes"
                                        data={sizes}
                                    />
                                    <Filter
                                        valueKey="colorId"
                                        name="Colors"
                                        data={colors}
                                    />
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default MobileFilters