import NextLink from "next/link";
import { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren & {
  url: string;
}

const Link = (props: LinkProps) => {
  return <NextLink className="transition-all text-center w-32 py-5 text-lg font-semibold py-5 hover:text-xl" href={props.url}>
    {props.children}
  </NextLink>
}

export default Link;