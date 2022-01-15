import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilters = (props) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <div>
                        <Disclosure.Button className="relative py-2 flex items-center flex:1 2 1 gap-3 bg-white mb-5 w-4/5">
                        {open ? <BiChevronUp/> : <BiChevronDown/>}
                        <div className={`${open ? "text-red-600" : "text-gray-700"}`}>{props.title}</div>
                        
                        <div className="absolute right-5 text-gray-700 hover:text-red-600"><p className="text-sm">Clear</p></div>
                    </Disclosure.Button>
                    
                    <Disclosure.Panel className="text-gray-500">
                        <div className="flex items-center gap-3 flex-wrap">
                        {
                                props.tags.map((tag) => (
                                    <>
                                        <div className="border-2 border-gray-200 px-2 border-white">
                                            <span className="text-red-600">{tag}</span>
                                        </div>
                                    </>
                            ))
                        }
                        </div>
                    </Disclosure.Panel>
                    </div>
                </>
            )}
            
        </Disclosure>
    );
};

export default PlaysFilters;