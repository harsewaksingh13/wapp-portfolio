import { Item } from ".."


export interface DropListProps<I extends Item> {
    items: I[]
}

export const DropList = <I extends Item,>(props: DropListProps<I>) => {
    return (


        <div className="relative my-4 min-w-60">
            <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
            <label htmlFor="select-1" className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-primary dark:text-white ring-blue-700 peer-checked:ring">Accounts </label>
            <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-primary dark:text-white transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                {
                    props.items.map((item) => {
                        return (<li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white dark:text-white">
                            {item.title}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}