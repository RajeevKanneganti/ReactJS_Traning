export const NavItems = () => {
    const NavProducts = [{
        id: 1,
        name: "Pace Maker",
        URL: "/paceMaker"
    },{
        id: 2,
        name: "Stealth Station",
        URL: "/StealthStation.org"
    },{
        id: 3,
        name: "Oxymeter",
        URL: "/oxy.org"
    },{
        id: 4,
        name: "O-arm",
        URL: "/o-arm.org"
    }]

    const NavContent = () =>{
        return NavProducts.map((item, index) => {
            return (
                <li class="nav-item">
                    <a class="nav-link" key={index} href={item.URL}>{item.name} </a>
                </li>
            )
        })
    }
    return(
        <ul class="navbar-nav me-auto">
            {NavContent()}
        </ul>
    )
}