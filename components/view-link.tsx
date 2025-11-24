"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ViewLink({ href, onClick, children, ...rest }: Props) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    
    requestAnimationFrame(() => {
      const navigate = () => router.push(href);
      
      if (typeof document !== "undefined" && "startViewTransition" in document) {
        // @ts-ignore
        document.startViewTransition(navigate);
      } else {
        navigate();
      }
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  );
}