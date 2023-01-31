import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link";

export const NavBar: FC<HTMLAttributes<HTMLElement>> = ({ className }) => (
  <nav className={`${styles.navbar}  ${className}`}>
    <Link href={"/"}>
      <div className="h-full inline-block mr-1">
        <div className="flex items-center h-full">
          <Image
            src="/images/pokeball.png"
            alt="Pokedex icon"
            className={`{${styles.navbar_icon}}`}
            width={35}
            height={35}
            priority
          />
        </div>
      </div>

      <h1
        className={`font-montserrat font-bold text-white inline-block h-full align-top ${styles.navbar_title}`}
      >
        POK&Eacute;DEX
      </h1>
    </Link>
    <Link
      className={`font-montserrat text-blue-400 inline-block h-full align-top underline-offset-1 float-right ${styles.navbar_privacy}`}
      href="/privacy.html"
    >
      Privacy
    </Link>
  </nav>
);
