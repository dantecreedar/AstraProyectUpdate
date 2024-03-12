import otherData from "../Other/MenuQuery.json"

function MenuOtherQuery() {
    return (
        <div className="flex">
            {
                otherData.map((e)=>
                <div key={e.id}>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="hover:bg-white hover:shadow-md p-3"> {e.items} </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-none w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default MenuOtherQuery
