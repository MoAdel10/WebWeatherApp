import React from 'react';

function Link({ link, name }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
  );
}

export default function Footer() {
  return (
    <p className="">
      {`<Developed By> `}
      <Link link="https://www.linkedin.com/in/mohamed-adel-9a0600246/" name="Mohamed Adel" />
      {` <All Copy Rights Reserved @ ${new Date().getFullYear()}>`}
    </p>
  );
}
