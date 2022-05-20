import React from "react";

const Nav = ({entries}) => {
  return (
    <nav>
      <div>
        <ul>
          {entries.map((entry) => (
            <li>
              <a
                href={entry.link}
                target={entry.newTab ? "_blank" : "_self"}
              >
                {entry.caption}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;