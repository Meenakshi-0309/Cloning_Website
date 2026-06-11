

function Header() {
  return (
    <><header style={{display: "flex",justifyContent:"center",justifyContent:"space-evenly"}}> 
   <img height={30} width={100}  src="https://zerodha.com/static/images/logo.svg" alt="logo" />
   <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
   <a href="">SignUp</a>
   <a href="">About</a>
   <a href="">Pricing</a>
   <a href="">Products</a>
   <a href="">Support</a>
   </nav>
   </header>
    </>

  )
}

export default Header
