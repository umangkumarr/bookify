import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white mt-10">
    <nav className="flex justify-between items-center w-[92%]  mx-auto" >
        <div>
           <h1 style={{fontFamily:"'Pacifico','cursive'",
           fontSize: '2.65rem'}}>Bookify</h1>
        </div>
        <div
            className="nav-links  duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5" style={{marginTop:'1rem'}}>
            <ul className="ml-10 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10">
                <li>
                    <a className="hover:text-gray-500" href="#">Books</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Kids</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Women</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Gifts</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Sports</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Electronics</a>
                </li>
            </ul>
        </div>
        <div className="items-center gap-6 mb-3">
            <div className="flex" style={{marginLeft:'80%',marginTop:'0.25rem'}}>
                <svg className="h-8 w-8 text-black -500 ml-30"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
                <svg className="h-8 w-8 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11l2 2l4 -4" /></svg>
            </div>
        <form className="d-flex" style={{marginTop:'0.25rem'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
      </form>
      </div>
        </nav>
</header>


  )
}

export default Navbar