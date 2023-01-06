import Link, { LinkProps } from "../components/Link";

const TopNav = () => {

  const links: LinkProps[] = [
    { url: "#about", children: "About", },
    { url: "#certificates", children: "Certificates", },
    { url: "#experiences", children: "Experiences", },
    { url: "#projects", children: "Projects", },
    { url: "#others", children: "Others", },
  ]

  return <nav>
    <ul className="flex flex-row items-center justify-center">
      {
        links.map(x => <li key={x.url} className="flex">
          <Link url={x.url}>
            {x.children}
          </Link>
        </li>)
      }
    </ul>
  </nav>
}

export default TopNav;