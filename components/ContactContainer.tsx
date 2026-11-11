const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/athalla-arli-baa7b72b7/" },
  { name: "GitHub", url: "https://github.com/athallaarl66" },
  { name: "Instagram", url: "https://www.instagram.com/athallaarl/" },
];

export default function ContactContainer() {
  return (
    <section id="contact" className="contact-surface" aria-labelledby="contact-title">
      <div className="contact-layout">
        <h2 id="contact-title" className="contact-title">
          Let's build<br />something useful.
        </h2>
        <p className="contact-introduction">
          I'm open to software engineering roles, freelance projects, or collaborations.
          Feel free to reach out if you'd like to discuss opportunities.
        </p>
        <a className="contact-email" href="mailto:athallaarli@gmail.com">
          athallaarli@gmail.com
        </a>
        <nav className="contact-socials" aria-label="Social profiles">
          {socials.map(({ name, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
